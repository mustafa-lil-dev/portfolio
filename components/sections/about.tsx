"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, aboutCopy } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto lg:mx-0 w-full max-w-xs"
          >
            <div className="glass rounded-[1.5rem] p-3 shadow-glass">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem]">
                <Image
                  src={profile.aboutPhoto}
                  alt={`${profile.name} — a quiet walkway`}
                  fill
                  sizes="(max-width: 1024px) 60vw, 340px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow mb-4"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl font-display font-medium mb-8"
            >
              I build things end to end.
            </motion.h2>

            <div className="space-y-5">
              {aboutCopy.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="text-muted leading-relaxed text-[15px] sm:text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 grid sm:grid-cols-3 gap-4"
            >
              {aboutCopy.highlights.map((h) => (
                <div key={h.label} className="glass rounded-xl p-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-muted mb-1.5">
                    {h.label}
                  </p>
                  <p className="text-sm text-foreground leading-snug">{h.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
