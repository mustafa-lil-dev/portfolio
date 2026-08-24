import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-sm text-foreground">{profile.name}</p>
            <p className="text-xs text-muted-2 mt-1">{profile.role}</p>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-full"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-full"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-full"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] text-center">
          <p className="text-xs text-muted-2 font-mono">
            © {new Date().getFullYear()} {profile.name}. Built from scratch.
          </p>
        </div>
      </div>
    </footer>
  );
}
