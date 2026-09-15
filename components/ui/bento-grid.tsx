"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 auto-rows-[280px] max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  action,
  spotlightColor = "rgba(59, 130, 246, 0.18)",
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
  action?: React.ReactNode;
  spotlightColor?: string;
}) => {
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
        "group/bento relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden",
        "bg-white/85 dark:bg-[#0F1117]/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.12] shadow-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10",
        "transition-all duration-300 hover:border-blue-500/50",
        className
      )}
    >
      {/* ── Spotlight Radial Glow Following Pointer ── */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* ── Subtle Border Shimmer Trace ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 z-0"
        style={{
          boxShadow: useMotionTemplate`
            inset 0 0 0 1px rgba(59, 130, 246, ${isHovered ? 0.35 : 0})
          `,
        }}
      />

      {/* Top section: Icon & Badge */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-blue-50/80 dark:bg-white/[0.04] border border-blue-100 dark:border-white/[0.08] flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/bento:scale-110 group-hover/bento:border-blue-500/30 group-hover/bento:text-blue-500 dark:group-hover/bento:text-blue-300 transition-all duration-300 shadow-sm">
            {icon}
          </div>
        )}
        {badge && (
          <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/25 text-blue-600 dark:text-blue-300 shadow-xs">
            {badge}
          </span>
        )}
      </div>

      {/* Center header / custom visual */}
      {header && <div className="relative z-10 my-auto">{header}</div>}

      {/* Bottom copy */}
      <div className="relative z-10 mt-auto">
        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2 tracking-tight group-hover/bento:text-blue-600 dark:group-hover/bento:text-blue-200 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 group-hover/bento:text-slate-900 dark:group-hover/bento:text-white transition-colors duration-200">
          {description}
        </p>
        {action && <div className="mt-4">{action}</div>}
      </div>
    </div>
  );
};
