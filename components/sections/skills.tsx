"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="section-eyebrow mb-4">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
            Tools I actually reach for.
          </h2>
          <p className="text-muted leading-relaxed">
            The languages, frameworks and tools behind everything above —
            grouped by what they&apos;re for, not stacked into a wall of logos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-signal mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
