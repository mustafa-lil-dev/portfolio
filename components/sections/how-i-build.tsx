"use client";

import { motion } from "framer-motion";
import { howIBuild } from "@/lib/data";

export function HowIBuild() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="section-eyebrow mb-4">Process</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">
            How I build.
          </h2>
          <p className="text-muted leading-relaxed">
            A five-step loop I run on every project, from a small utility to
            something as ambitious as CORE.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {howIBuild.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6 relative"
            >
              <span className="font-mono text-3xl text-white/10 font-display absolute top-4 right-5">
                {item.step}
              </span>
              <h3 className="font-display text-lg font-medium mb-2 relative">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed relative">
                {item.description}
              </p>
              {i < howIBuild.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-4 h-px w-4 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
