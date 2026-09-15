"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden bg-background w-full z-0 transition-colors duration-300",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-110 items-center justify-center isolate z-0">
        {/* Left Lamp Beam */}
        <motion.div
          initial={{ opacity: 0.4, width: "14rem" }}
          whileInView={{ opacity: 0.9, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position, from 70deg at center top), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-600/40 dark:from-cyan-500/70 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] transition-colors duration-300" />
        </motion.div>

        {/* Right Lamp Beam */}
        <motion.div
          initial={{ opacity: 0.4, width: "14rem" }}
          whileInView={{ opacity: 0.9, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position, from 290deg at center top), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-600/40 dark:to-cyan-500/70 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] transition-colors duration-300" />
          <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] transition-colors duration-300" />
        </motion.div>

        {/* Ambient Dark Blurs & Glowing Core */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl pointer-events-none transition-colors duration-300" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md pointer-events-none" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-3xl pointer-events-none" />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-500/20 dark:bg-cyan-400/30 blur-2xl pointer-events-none"
        />

        {/* Crisp Laser Horizon Line */}
        <motion.div
          initial={{ width: "14rem" }}
          whileInView={{ width: "32rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[32rem] -translate-y-[7rem] bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.9)] pointer-events-none"
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background pointer-events-none transition-colors duration-300" />
      </div>

      <div className="relative z-50 flex -translate-y-40 sm:-translate-y-36 flex-col items-center px-4 w-full max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
};
