"use client";
import { useEffect, useRef } from "react";

/** Fades/slides children in when they scroll into view. `tilt` keeps a resting rotation (deg). */
export default function Reveal({ children, className = "", tilt = 0, delay = 0, as: Tag = "div", ...rest }:
  { children: React.ReactNode; className?: string; tilt?: number; delay?: number; as?: React.ElementType } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`}
      style={{ "--r": `${tilt}deg`, transitionDelay: `${delay}ms` } as React.CSSProperties} {...rest}>
      {children}
    </Tag>
  );
}
