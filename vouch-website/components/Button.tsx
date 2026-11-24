import Link from "next/link";

const styles = {
  blue: "bg-vouch-blue text-white shadow-[0_4px_0_var(--color-vouch-navy)]",
  sun: "bg-sun text-ink shadow-[0_4px_0_var(--color-sun-dark)]",
  line: "border-2 border-vouch-blue bg-white text-vouch-blue",
  ghost: "border-2 border-white text-white",
};

export function btnClass(variant: keyof typeof styles = "blue") {
  return `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-extrabold text-[.98rem] transition hover:-translate-y-0.5 hover:motion-safe:animate-[wiggle_.4s_ease] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-sun ${styles[variant]}`;
}

export default function Button({ href, variant = "blue", children, external = false }:
  { href: string; variant?: keyof typeof styles; children: React.ReactNode; external?: boolean }) {
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http"))
    return <a href={href} className={btnClass(variant)} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>{children}</a>;
  return <Link href={href} className={btnClass(variant)}>{children}</Link>;
}
