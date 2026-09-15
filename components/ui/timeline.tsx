"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  step?: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full relative max-w-7xl mx-auto", className)}
    >
      <div ref={ref} className="relative pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-16 md:gap-10"
          >
            {/* Sticky Step Header on Desktop */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-[#08090C] border border-slate-300/80 dark:border-white/[0.1] flex items-center justify-center shadow-md dark:shadow-lg dark:shadow-black/80">
                <div className="h-3 w-3 rounded-full bg-blue-500 border border-blue-400 p-1 shadow-sm shadow-blue-400" />
              </div>
              <div className="hidden md:block md:pl-20">
                {item.step && (
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-1 block">
                    {item.step}
                  </span>
                )}
                <h3 className="text-xl lg:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-sans">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Content Card */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4">
                {item.step && (
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-1 block">
                    {item.step}
                  </span>
                )}
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-sans">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <div className="rounded-2xl p-6 sm:p-7 bg-white/85 dark:bg-[#0F1117]/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 shadow-xl shadow-slate-200/50 dark:shadow-xl dark:shadow-black/40">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Vertical Scroll Beam */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 dark:via-white/[0.08] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cyan-400 via-blue-500 to-transparent rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};
