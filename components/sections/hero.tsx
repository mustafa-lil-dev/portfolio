"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-signal/10 blur-[140px]" />
        <div className="absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-violet/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="section-eyebrow mb-6 glass inline-flex rounded-full px-4 py-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Available for select freelance &amp; product work
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium leading-[1.05] mb-5"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="font-mono text-sm sm:text-base text-signal mb-6 tracking-tight"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-10"
            >
              {profile.positioning} I build native applications, web tools, and
              AI-integrated developer workflows — with Rust, React and Python at
              the core.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="btn-glass">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full"
              >
                <Github className="h-[18px] w-[18px]" />
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </Link>
            </motion.div>
          </div>

          {/* Right: glass portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-signal/15 via-transparent to-violet/15 blur-2xl animate-float" />
            <div className="glass relative rounded-[1.75rem] p-3 shadow-glass-lg">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem]">
                <Image
                  src={profile.heroPhoto}
                  alt={`${profile.name} portrait`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted font-mono">Currently building</p>
                  <p className="text-sm font-medium">CORE</p>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-amber">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                  In dev
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
