"use client";

import { motion } from "framer-motion";
import {
  FileCode2,
  Folder,
  FolderOpen,
  GitBranch,
  Network,
  ShieldAlert,
  Terminal as TerminalIcon,
} from "lucide-react";
import { core } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

function CorePreview() {
  const files = [
    { name: "src", isFolder: true, open: true },
    { name: "auth.rs", isFolder: false, indent: 1 },
    { name: "handlers.rs", isFolder: false, indent: 1, active: true },
    { name: "db", isFolder: true, indent: 1 },
    { name: "schema.sql", isFolder: false, indent: 2 },
    { name: "package.json", isFolder: false },
  ];

  return (
    <div className="glass rounded-2xl overflow-hidden shadow-glass-lg">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-xs font-mono text-muted">
          CORE — Product Preview
        </span>
      </div>

      <div className="grid grid-cols-12 sm:h-[380px] text-xs font-mono">
        {/* file tree */}
        <div className="col-span-3 border-r border-white/[0.06] p-3 hidden sm:block">
          <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-2 px-1">
            Explorer
          </p>
          <div className="space-y-1">
            {files.map((f) => (
              <div
                key={f.name}
                className={
                  "flex items-center gap-1.5 px-1.5 py-1 rounded " +
                  (f.active ? "bg-signal/10 text-signal" : "text-muted")
                }
                style={{ paddingLeft: `${(f.indent ?? 0) * 12 + 6}px` }}
              >
                {f.isFolder ? (
                  f.open ? (
                    <FolderOpen className="h-3.5 w-3.5 shrink-0" />
                  ) : (
                    <Folder className="h-3.5 w-3.5 shrink-0" />
                  )
                ) : (
                  <FileCode2 className="h-3.5 w-3.5 shrink-0" />
                )}
                <span className="truncate">{f.name}</span>
              </div>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-wider text-muted-2 mt-5 mb-2 px-1">
            Project graph
          </p>
          <div className="flex items-center gap-1.5 px-1.5 text-muted">
            <Network className="h-3.5 w-3.5" />
            <span>14 modules linked</span>
          </div>
        </div>

        {/* editor */}
        <div className="col-span-12 sm:col-span-5 border-r border-white/[0.06] p-4 pb-5 sm:overflow-hidden relative">
          <div className="text-muted-2 space-y-1.5 leading-relaxed overflow-x-auto">
            <p className="whitespace-nowrap">
              <span className="text-violet">fn</span>{" "}
              <span className="text-signal">handle_request</span>(req: Request){" "}
              {"{"}
            </p>
            <p className="pl-4 whitespace-nowrap">let user = auth::verify(&amp;req)?;</p>
            <p className="relative pl-4 rounded bg-amber/10 -mx-1 px-1 whitespace-nowrap">
              db::query(user.
              <span className="text-amber underline decoration-wavy decoration-amber/70">
                id
              </span>
              )
              <span className="absolute -right-1 top-0 h-full w-0.5 bg-amber/60" />
            </p>
            <p className="pl-4 text-muted-2 whitespace-nowrap">.await?;</p>
            <p>{"}"}</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-3 sm:left-4 sm:right-4 glass rounded-lg px-3 py-2 flex items-start gap-2">
            <ShieldAlert className="h-3.5 w-3.5 text-amber shrink-0 mt-0.5" />
            <p className="text-muted-2 leading-snug">
              <span className="text-amber">Cross-file reference:</span>{" "}
              `user.id` type changed in{" "}
              <span className="text-foreground">schema.sql</span> — 3 call sites
              may break.
            </p>
          </div>
        </div>

        {/* AI agent panel */}
        <div className="col-span-12 sm:col-span-4 p-4 hidden md:flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-wider text-muted-2 px-0.5">
            Agents
          </p>
          {[
            { label: "Architecture Agent", state: "scanning repo\u2026" },
            { label: "Dependency Agent", state: "3 issues found" },
            { label: "Review Agent", state: "idle" },
          ].map((a) => (
            <div key={a.label} className="glass rounded-lg px-3 py-2">
              <p className="text-foreground">{a.label}</p>
              <p className="text-muted-2 mt-0.5">{a.state}</p>
            </div>
          ))}
          <div className="mt-auto glass rounded-lg px-3 py-2 flex items-center gap-2 text-muted-2">
            <GitBranch className="h-3.5 w-3.5" />
            <span>main · 2 pending reviews</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/[0.06] bg-white/[0.02] text-[11px] font-mono text-muted-2">
        <TerminalIcon className="h-3.5 w-3.5 shrink-0" />
        <span className="min-w-0 truncate">Indexing repository — 214 files analyzed</span>
      </div>
    </div>
  );
}

export function Core() {
  return (
    <section id="core" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-amber/[0.06] blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Badge variant="amber">{core.status}</Badge>
          </div>
          <p className="section-eyebrow mb-4 justify-center">
            Currently Building
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-5">
            {core.name}
          </h2>
          <p className="text-lg text-muted leading-relaxed">{core.tagline}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <CorePreview />
        </motion.div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted leading-relaxed">{core.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-20">
          {core.pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-medium mb-2.5">
                {p.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Roadmap */}
        <div>
          <p className="section-eyebrow mb-4">Roadmap</p>
          <h3 className="text-2xl sm:text-3xl font-display font-medium mb-10">
            Product vision, phased honestly.
          </h3>

          <div className="grid sm:grid-cols-3 gap-5">
            {core.roadmap.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-signal">
                    {phase.phase}
                  </span>
                </div>
                <h4 className="font-display text-lg font-medium mb-4">
                  {phase.title}
                </h4>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-white/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-2 mt-12 max-w-xl mx-auto leading-relaxed"></p>
      </div>
    </section>
  );
}
