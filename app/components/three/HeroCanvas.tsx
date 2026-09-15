'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Creates a soft radial gradient canvas texture so points render
 * as luminous glowing orbs rather than harsh pixel squares.
 */
function createGlowPointTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.2, 'rgba(147, 197, 253, 0.9)')
    gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.4)')
    gradient.addColorStop(0.8, 'rgba(6, 182, 212, 0.15)')
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 64, 64)
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const width = canvas.clientWidth || window.innerWidth
    const height = canvas.clientHeight || window.innerHeight

    // 1. Renderer Setup
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
    } catch (err) {
      console.warn('WebGL initialization skipped:', err)
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1

    // 2. Scene & Camera Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 7.5)

    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // Position sphere: shift right on desktop to leave breathing room for left hero copy
    const isMobile = window.innerWidth < 768
    mainGroup.position.set(isMobile ? 0 : 1.5, isMobile ? -0.4 : 0, 0)

    // 3. Fibonacci Particle Sphere
    const PARTICLE_COUNT = isMobile ? 1200 : 2000
    const SPHERE_RADIUS = isMobile ? 2.0 : 2.5

    const ptPositions = new Float32Array(PARTICLE_COUNT * 3)
    const ptColors = new Float32Array(PARTICLE_COUNT * 3)
    const ptScales = new Float32Array(PARTICLE_COUNT)

    const basePositions: [number, number, number][] = []
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    // Color palettes: Electric Blue, Neon Cyan, Subtle Violet, Crisp White
    const colorA = new THREE.Color(0x3b82f6) // Electric Blue
    const colorB = new THREE.Color(0x06b6d4) // Cyan
    const colorC = new THREE.Color(0x8b5cf6) // Violet accent
    const tempColor = new THREE.Color()

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const y = 1 - (i / (PARTICLE_COUNT - 1)) * 2 // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = 2 * Math.PI * i / goldenRatio

      // Layered radial depth
      const depthNoise = 0.92 + Math.random() * 0.16
      const r = SPHERE_RADIUS * depthNoise
      const x = Math.cos(theta) * radiusAtY * r
      const posY = y * r
      const z = Math.sin(theta) * radiusAtY * r

      ptPositions[i * 3] = x
      ptPositions[i * 3 + 1] = posY
      ptPositions[i * 3 + 2] = z

      basePositions.push([x, posY, z])

      // Smooth color gradient based on elevation and depth
      const t = (y + 1) / 2
      if (t > 0.5) {
        tempColor.copy(colorA).lerp(colorB, (t - 0.5) * 2)
      } else {
        tempColor.copy(colorC).lerp(colorA, t * 2)
      }

      // Random sparkle highlight on 12% of particles
      if (Math.random() < 0.12) {
        tempColor.setRGB(1.0, 1.0, 1.0)
      }

      ptColors[i * 3] = tempColor.r
      ptColors[i * 3 + 1] = tempColor.g
      ptColors[i * 3 + 2] = tempColor.b

      ptScales[i] = 0.7 + Math.random() * 0.6
    }

    const ptGeometry = new THREE.BufferGeometry()
    ptGeometry.setAttribute('position', new THREE.BufferAttribute(ptPositions, 3))
    ptGeometry.setAttribute('color', new THREE.BufferAttribute(ptColors, 3))

    const glowTexture = createGlowPointTexture()

    const ptMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.075 : 0.09,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    const particlePoints = new THREE.Points(ptGeometry, ptMaterial)
    mainGroup.add(particlePoints)

    // 4. Subtle Constellation Connection Lines
    const MAX_CONNECTIONS = 280
    const CONNECTION_DIST = SPHERE_RADIUS * 0.38
    const lineIndices: number[] = []

    for (let i = 0; i < Math.min(PARTICLE_COUNT, 600); i += 2) {
      if (lineIndices.length >= MAX_CONNECTIONS * 6) break
      for (let j = i + 1; j < Math.min(PARTICLE_COUNT, 600); j += 2) {
        const [x1, y1, z1] = basePositions[i]
        const [x2, y2, z2] = basePositions[j]
        const dx = x1 - x2
        const dy = y1 - y2
        const dz = z1 - z2
        const distSq = dx * dx + dy * dy + dz * dz

        if (distSq < CONNECTION_DIST * CONNECTION_DIST) {
          lineIndices.push(x1, y1, z1, x2, y2, z2)
          if (lineIndices.length >= MAX_CONNECTIONS * 6) break
        }
      }
    }

    let lineGeometry: THREE.BufferGeometry | null = null
    let lineMaterial: THREE.LineBasicMaterial | null = null
    if (lineIndices.length > 0) {
      lineGeometry = new THREE.BufferGeometry()
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(lineIndices), 3))
      lineMaterial = new THREE.LineBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
      mainGroup.add(lines)
    }

    // 5. Outer Orbital Particle Ring (Slow Planetary Glow)
    const RING_COUNT = isMobile ? 250 : 450
    const ringPositions = new Float32Array(RING_COUNT * 3)
    const ringColors = new Float32Array(RING_COUNT * 3)

    for (let i = 0; i < RING_COUNT; i++) {
      const angle = (i / RING_COUNT) * Math.PI * 2
      const radius = SPHERE_RADIUS * (1.3 + Math.random() * 0.4)
      const ringY = (Math.random() - 0.5) * 0.45

      ringPositions[i * 3] = Math.cos(angle) * radius
      ringPositions[i * 3 + 1] = ringY
      ringPositions[i * 3 + 2] = Math.sin(angle) * radius

      // Soft cyan glow
      ringColors[i * 3] = 0.2 + Math.random() * 0.2
      ringColors[i * 3 + 1] = 0.65 + Math.random() * 0.35
      ringColors[i * 3 + 2] = 0.95
    }

    const ringGeometry = new THREE.BufferGeometry()
    ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3))
    ringGeometry.setAttribute('color', new THREE.BufferAttribute(ringColors, 3))

    const ringMaterial = new THREE.PointsMaterial({
      size: 0.055,
      map: glowTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    const orbitalRing = new THREE.Points(ringGeometry, ringMaterial)
    orbitalRing.rotation.x = Math.PI * 0.18
    orbitalRing.rotation.z = -Math.PI * 0.12
    mainGroup.add(orbitalRing)

    // 6. Smooth Mouse Parallax Physics
    const mouse = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      // Normalized coordinates from -1 to 1
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // 7. Responsive Resize Observer
    const onResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (w === 0 || h === 0) return

      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)

      const mobileNow = w < 768
      mainGroup.position.set(mobileNow ? 0 : 1.5, mobileNow ? -0.4 : 0, 0)
    }

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(canvas)

    // 8. Render Animation Loop
    let animId: number
    const timer = new THREE.Timer()

    const animate = (timestamp: number) => {
      animId = requestAnimationFrame(animate)
      timer.update(timestamp)
      const elapsed = timer.getElapsed()

      if (!prefersReducedMotion) {
        // Damped lerping for smooth inertia
        target.x += (mouse.x - target.x) * 0.04
        target.y += (mouse.y - target.y) * 0.04

        // Gentle constant rotation + mouse tilt
        mainGroup.rotation.y = elapsed * 0.05 + target.x * 0.35
        mainGroup.rotation.x = target.y * 0.25

        // Counter-rotate the orbital ring slightly for visual depth
        orbitalRing.rotation.y = -elapsed * 0.08

        // Subtle breathing pulsation on the particle sphere
        const breathe = 1 + Math.sin(elapsed * 0.8) * 0.02
        particlePoints.scale.set(breathe, breathe, breathe)
      }

      renderer.render(scene, camera)
    }

    animId = requestAnimationFrame(animate)

    // 9. Comprehensive Resource Disposal on Unmount
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      resizeObserver.disconnect()

      ptGeometry.dispose()
      ptMaterial.dispose()
      glowTexture.dispose()

      lineGeometry?.dispose()
      lineMaterial?.dispose()

      ringGeometry.dispose()
      ringMaterial.dispose()

      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
