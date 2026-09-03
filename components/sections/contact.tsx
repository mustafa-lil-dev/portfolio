"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Loader2, Mail, Send, XCircle } from "lucide-react";
import { profile } from "@/lib/data";
import { contactFormSchema } from "@/lib/validations";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const parsed = contactFormSchema.safeParse(data);
    if (!parsed.success) {
      setStatus("error");
      setErrorMsg(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-signal/[0.08] blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-[2rem] p-8 sm:p-14 grid lg:grid-cols-[1fr_1.1fr] gap-12"
        >
          <div>
            <p className="section-eyebrow mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4 leading-tight">
              Have an idea worth building?
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Let&apos;s talk — whether it&apos;s freelance work, a technical
              collaboration, or a question about Myko or CORE.
            </p>

            <div className="space-y-3">
              <Link
                href={`mailto:${profile.email}`}
                className="glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm"
              >
                <Mail className="h-4 w-4 text-signal shrink-0" />
                <span className="min-w-0 truncate">{profile.email}</span>
              </Link>
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm"
              >
                <Github className="h-4 w-4 text-signal shrink-0" />
                <span className="min-w-0 truncate">github.com/mustafa-lil-dev</span>
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm"
              >
                <Linkedin className="h-4 w-4 text-signal shrink-0" />
                <span className="min-w-0 truncate">linkedin.com/in/mustafa-khoso</span>
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field — hidden from real users */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-mono text-muted mb-1.5 block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none placeholder:text-muted-2 focus:border-signal/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono text-muted mb-1.5 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  maxLength={200}
                  className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none placeholder:text-muted-2 focus:border-signal/40"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-xs font-mono text-muted mb-1.5 block">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                minLength={3}
                maxLength={150}
                className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none placeholder:text-muted-2 focus:border-signal/40"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-mono text-muted mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={4}
                className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent outline-none placeholder:text-muted-2 focus:border-signal/40 resize-none"
                placeholder="Tell me a bit about it..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-signal">
                <CheckCircle2 className="h-4 w-4" />
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-amber">
                <XCircle className="h-4 w-4" />
                {errorMsg}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
