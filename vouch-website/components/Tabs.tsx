"use client";
import { useState } from "react";

/** On phones: shows one panel at a time with pill tabs. On tablet/desktop: all panels show (use `wrap` for the desktop layout). */
export default function Tabs({ labels, children, wrap = "" }: { labels: string[]; children: React.ReactNode[]; wrap?: string }) {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div role="tablist" className="mb-5 flex justify-center gap-1.5 rounded-full bg-cream p-1.5 md:hidden">
        {labels.map((l, i) => (
          <button key={l} role="tab" aria-selected={tab === i} type="button" onClick={() => setTab(i)}
            className={`flex-1 rounded-full px-2 py-2 text-[.82rem] font-extrabold leading-tight transition ${tab === i ? "bg-vouch-blue text-white shadow" : "text-muted"}`}>
            {l}
          </button>
        ))}
      </div>
      <div className={wrap}>
        {children.map((c, i) => <div key={i} role="tabpanel" className={tab === i ? "" : "max-md:hidden"}>{c}</div>)}
      </div>
    </>
  );
}
