import { useEffect, useState } from "react";
import { nav, shop } from "../content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "bg-char-950/90 backdrop-blur-md border-b border-cream-100/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-display text-2xl tracking-wide text-cream-100"
        >
          AUSO<span className="text-flame-500">MIGOS</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream-200/80 transition-colors hover:text-flame-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-cream-100 transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-cream-100 transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-cream-100 transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-char-950/95 backdrop-blur-md transition-[grid-template-rows] duration-400 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 pb-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream-100/10 py-3 font-body text-sm font-semibold uppercase tracking-[0.14em] text-cream-200/80"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
