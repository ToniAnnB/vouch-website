import Link from "next/link";
import { nav, school } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-[84px] bg-vouch-navy pb-6 pt-13 text-[#C9D6E8]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-8 px-6 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div className="max-md:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/vamp-logo.png" alt="VOUCH Group of Schools"
            className="mb-4 h-12 w-auto -rotate-2 transition hover:rotate-0 hover:scale-105 [filter:drop-shadow(1.5px_0_0_#fff)_drop-shadow(-1.5px_0_0_#fff)_drop-shadow(0_1.5px_0_#fff)_drop-shadow(0_-1.5px_0_#fff)_drop-shadow(0_6px_10px_rgba(0,0,0,.25))]" />
          <p className="text-[.93rem]">{school.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 text-lg !text-white">Explore</h4>
          {nav.slice(1).map((n) => <Link key={n.href} href={n.href} className="mb-2 block text-[.93rem] hover:text-white">{n.label}</Link>)}
        </div>
        <div>
          <h4 className="mb-3 text-lg !text-white">Follow us</h4>
          <a href={school.facebook} target="_blank" rel="noopener" className="mb-2 block text-[.93rem] hover:text-white">Facebook</a>
          <a href={school.instagram} target="_blank" rel="noopener" className="mb-2 block text-[.93rem] hover:text-white">Instagram</a>
          <a href={school.parentOrg} target="_blank" rel="noopener" className="mb-2 block text-[.93rem] hover:text-white">Parent organisation</a>
        </div>
        <div className="max-md:col-span-2">
          <h4 className="mb-3 text-lg !text-white">Contact</h4>
          <p className="mb-2 text-[.93rem]">{school.address}</p>
          <a href={school.phoneHref} className="mb-2 block text-[.93rem] hover:text-white">{school.phone}</a>
          <a href={`mailto:${school.email}`} className="mb-2 block break-all text-[.93rem] hover:text-white">{school.email}</a>
        </div>
      </div>
      <p className="mt-10 text-center text-[.83rem] opacity-70">© {new Date().getFullYear()} {school.name}</p>
    </footer>
  );
}
