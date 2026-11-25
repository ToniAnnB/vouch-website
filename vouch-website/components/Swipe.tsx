"use client";
import { Children, useRef, useState } from "react";

/** On phones: a sideways swipe row with dots. On tablet/desktop: just a normal grid (pass grid classes in `grid`). */
export default function Swipe({ children, grid = "", item = "w-[82%]", dark = false }:
  { children: React.ReactNode; grid?: string; item?: string; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [swiped, setSwiped] = useState(false);
  const kids = Children.toArray(children);
  function onScroll() {
    const el = ref.current; if (!el) return;
    if (el.scrollLeft > 20) setSwiped(true);
    const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth || 1;
    setActive(Math.min(kids.length - 1, Math.round(el.scrollLeft / (w + 16))));
  }
  function go(i: number) {
    const el = ref.current; const c = el?.children[i] as HTMLElement | undefined;
    if (el && c) el.scrollTo({ left: c.offsetLeft - 24, behavior: "smooth" });
  }
  return (
    <>
      <p aria-hidden="true" className={`mb-1 flex items-center justify-end gap-1.5 text-[.8rem] font-extrabold transition-opacity duration-500 md:hidden ${dark ? "text-sun" : "text-coral"} ${swiped ? "opacity-0" : ""}`}>
        Swipe to see more <span className="inline-block motion-safe:animate-nudge">→</span>
      </p>
      <div ref={ref} onScroll={onScroll}
        className={`max-md:-mx-6 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-4 max-md:overflow-x-auto max-md:scroll-px-6 max-md:px-6 max-md:py-4 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden ${grid}`}>
        {kids.map((c, i) => <div key={i} className={`max-md:shrink-0 max-md:snap-start ${item}`}>{c}</div>)}
      </div>
      <div className="mt-2 flex justify-center gap-2 md:hidden" aria-hidden="true">
        {kids.map((_, i) => (
          <button key={i} type="button" tabIndex={-1} onClick={() => go(i)}
            className={`h-2 rounded-full transition-all ${i === active ? `w-6 ${dark ? "bg-sun" : "bg-vouch-blue"}` : `w-2 ${dark ? "bg-white/40" : "bg-line"}`}`} />
        ))}
      </div>
    </>
  );
}
