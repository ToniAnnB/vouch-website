"use client";
import { useState } from "react";

/** On phones: hides the extra text behind a "Read more" button. On tablet/desktop: always shown. */
export default function MoreText({ children, label = "Read more" }: { children: React.ReactNode; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={open ? "" : "max-md:hidden"}>{children}</div>
      {!open && (
        <button type="button" onClick={() => setOpen(true)} className="mb-3.5 font-extrabold text-vouch-blue md:hidden">
          {label} ↓
        </button>
      )}
    </>
  );
}
