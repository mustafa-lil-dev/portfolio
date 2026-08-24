"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { profile, navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 h-14 rounded-full transition-all duration-500",
          scrolled
            ? "glass shadow-glass mx-4 sm:mx-auto"
            : "bg-transparent border border-transparent"
        )}
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5 font-display text-sm tracking-wide text-foreground shrink-0"
        >
          <span className="relative h-7 w-7 rounded-lg overflow-hidden border border-white/10">
            <Image src={profile.logo} alt="" fill className="object-cover" sizes="28px" />
          </span>
          <span className="hidden sm:inline">Mustafa Khoso</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm rounded-full transition-colors",
                active === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              )}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="#contact" className="btn-glass !px-5 !py-2 text-sm font-mono">
            Say hello
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass mx-4 mt-2 rounded-2xl px-6 py-5 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors py-2.5 border-b border-white/[0.05] last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-center rounded-full bg-foreground text-ink py-2.5 text-sm font-medium"
            >
              Say hello
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
