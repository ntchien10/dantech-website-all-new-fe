import React from 'react'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiSpringboot,
  SiNodedotjs,
  SiPython,
  SiApachekafka,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiNginx,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { GrOracle } from 'react-icons/gr'

export interface TechItem {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops'
  iconKey: string
  description?: string
}

export function TechIcon({ name, className = "w-7 h-7" }: { name: string; className?: string }) {
  const norm = name.toLowerCase().trim()

  switch (norm) {
    case 'next.js':
    case 'nextjs':
      return <SiNextdotjs className={`${className} text-slate-900 dark:text-white`} />

    case 'react':
      return <SiReact className={`${className} text-[#61DAFB]`} />

    case 'typescript':
      return <SiTypescript className={`${className} text-[#3178C6]`} />

    case 'tailwind css':
    case 'tailwind':
      return <SiTailwindcss className={`${className} text-[#38BDF8]`} />

    case 'three.js':
    case 'threejs':
      return <SiThreedotjs className={`${className} text-slate-900 dark:text-white`} />

    case 'java spring boot':
    case 'spring boot':
    case 'spring':
    case 'java':
      return <SiSpringboot className={`${className} text-[#6DB33F]`} />

    case 'node.js':
    case 'nodejs':
      return <SiNodedotjs className={`${className} text-[#5FA04E]`} />

    case 'python':
      return <SiPython className={`${className} text-[#3776AB]`} />

    case 'apache kafka':
    case 'kafka':
      return <SiApachekafka className={`${className} text-slate-900 dark:text-white`} />

    case 'postgresql':
      return <SiPostgresql className={`${className} text-[#4169E1]`} />

    case 'oracle':
    case 'oracle database':
      return <GrOracle className={`${className} text-[#F80000]`} />

    case 'mysql':
      return <SiMysql className={`${className} text-[#4479A1]`} />

    case 'redis':
      return <SiRedis className={`${className} text-[#FF4438]`} />

    case 'aws':
    case 'amazon web services':
      return <FaAws className={`${className} text-[#FF9900]`} />

    case 'docker':
      return <SiDocker className={`${className} text-[#2496ED]`} />

    case 'kubernetes':
    case 'k8s':
      return <SiKubernetes className={`${className} text-[#326CE5]`} />

    case 'vercel':
      return <SiVercel className={`${className} text-slate-900 dark:text-white`} />

    case 'nginx':
      return <SiNginx className={`${className} text-[#009639]`} />

    default:
      return <span className={`${className} font-bold text-xs text-blue-600`}>{name.slice(0, 2)}</span>
  }
}
