"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 backdrop-blur-md supports-[backdrop-filter]:bg-background/10 ${scrolled ? "bg-background/20" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <nav className="hidden md:flex items-center justify-center gap-44 text-[17px] tracking-[0.18em] uppercase">
            {SECTIONS.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                className={`py-1 no-underline transition-colors duration-200 ${activeId === id ? "text-cyan-300" : "text-foreground/70 hover:text-foreground"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
              {open ? (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-[12px] tracking-[0.16em] uppercase">
              {SECTIONS.map(({ id, label }) => (
                <Link key={id} onClick={() => setOpen(false)} className={`px-1 py-2 no-underline ${activeId === id ? "text-cyan-300" : "text-foreground/80"}`} href={`#${id}`}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


