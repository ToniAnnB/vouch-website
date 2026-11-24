"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { btnClass } from "./Button";
import { nav, school } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, "")));

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="bg-vouch-navy text-[.85rem] text-[#D6E2F3]">
        <div className="mx-auto flex max-w-[1140px] flex-wrap justify-between gap-4 px-6 py-2">
          <span className="inline-flex items-center gap-1.5 max-sm:hidden"><Icon name="pin" className="size-[15px]" />{school.address}</span>
          <a href={school.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white"><Icon name="phone" className="size-[15px]" />{school.phone}</a>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-line bg-white">
        <div className="mx-auto flex h-[74px] max-w-[1140px] items-center justify-between px-6">
          <Link href="/" aria-label="VOUCH Group of Schools home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/vamp-logo.png" alt="VOUCH Group of Schools" className="h-[38px] w-auto" />
          </Link>
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[.95rem] font-bold transition-colors ${isActive(n.href) ? "bg-sky text-vouch-blue" : "text-muted hover:text-vouch-blue"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact/" className={`${btnClass("blue")} !px-5 !py-2.5 max-md:hidden`}>Contact us</Link>
          <button className="text-vouch-blue md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} className="size-7" />
          </button>
        </div>
        {open && (
          <nav className="flex flex-col border-t border-line bg-white px-6 pb-4 pt-2 md:hidden motion-safe:animate-pop" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`border-b border-dashed border-line py-3 font-extrabold ${isActive(n.href) ? "text-vouch-blue" : ""}`}>{n.label}</Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
