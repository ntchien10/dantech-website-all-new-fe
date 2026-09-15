"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardSpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const CardSpotlight = ({
  children,
  className,
  spotlightColor = "rgba(59, 130, 246, 0.16)",
}: CardSpotlightProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden",
        "bg-white dark:bg-[#0F1117] border border-slate-200/80 dark:border-white/10",
        "shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/15",
        "transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-500/50",
        className
      )}
    >
      {/* ── Spotlight Radial Glow Following Pointer ── */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              360px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* ── Subtle Border Shimmer Trace ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          boxShadow: useMotionTemplate`
            inset 0 0 0 1px rgba(59, 130, 246, ${isHovered ? 0.35 : 0})
          `,
        }}
      />

      {/* Card Content with relative z-10 */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
};
