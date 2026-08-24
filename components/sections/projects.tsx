"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, mykoScreenshots, type Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const mykoImages = [mykoScreenshots.terminal, mykoScreenshots.code, mykoScreenshots.aiPanel];

function StatusBadge({ project }: { project: Project }) {
  const variant =
    project.status === "shipped"
      ? "default"
      : project.status === "active"
      ? "default"
      : "amber";
  return <Badge variant={variant as any}>{project.statusLabel}</Badge>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass glass-hover rounded-3xl overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-display font-medium">{project.name}</h3>
              {project.featured && <Badge variant="violet">Featured</Badge>}
            </div>
            <p className="text-sm text-signal font-mono">{project.tagline}</p>
          </div>
          <StatusBadge project={project} />
        </div>

        {project.featured && (
          <div className="grid grid-cols-3 gap-2 mb-6">
            {mykoImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-video rounded-lg overflow-hidden border border-white/[0.06]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 220px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}

        <p className="text-muted leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                link.kind === "live" ? "btn-primary" : "btn-glass",
                "!px-5 !py-2.5 text-sm"
              )}
            >
              {link.kind === "github" ? (
                <Github className="h-4 w-4" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ))}

          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors font-mono"
            aria-expanded={open}
          >
            {open ? "Hide details" : "Full case study"}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.06]"
          >
            <div className="p-6 sm:p-8 bg-white/[0.015] space-y-8">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-signal mb-2">
                  Problem
                </p>
                <p className="text-muted leading-relaxed text-sm">{project.problem}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {project.details.map((d) => (
                  <div key={d.heading}>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-signal mb-2">
                      {d.heading}
                    </p>
                    <p className="text-muted leading-relaxed text-sm">{d.body}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-signal mb-3">
                  Key capabilities
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {project.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="section-eyebrow mb-4">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
            Products, not just repositories.
          </h2>
          <p className="text-muted leading-relaxed">
            A look at what I&apos;ve actually built — from an AI-native developer
            workspace to a native Rust utility. Expand any project for the full
            technical breakdown.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
