"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { experience, education, certifications } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <p className="section-eyebrow mb-4">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-10">
              Where the work happens.
            </h2>

            <div className="space-y-6">
              {experience.map((job, i) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="glass glass-hover rounded-2xl p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg font-medium">{job.role}</h3>
                    <span className="font-mono text-xs text-muted-2">{job.period}</span>
                  </div>
                  <p className="text-sm text-signal font-mono mb-4">{job.org}</p>
                  <ul className="space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <p className="section-eyebrow mb-4">Education</p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-10">
              Foundation, briefly.
            </h2>

            <div className="space-y-4 mb-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="glass glass-hover rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="glass flex h-11 w-11 items-center justify-center rounded-xl shrink-0">
                    <GraduationCap className="h-5 w-5 text-signal" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-medium mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-2 mb-3 mt-8">
              Certifications
            </p>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass glass-hover rounded-xl p-4 flex items-center gap-3"
                >
                  <BadgeCheck className="h-4 w-4 text-signal shrink-0" />
                  <div>
                    <p className="text-sm text-foreground leading-snug">{cert.title}</p>
                    <p className="text-xs text-muted-2 mt-0.5">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
