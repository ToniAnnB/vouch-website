import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { school } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact VOUCH Group of Schools at 1 National Heroes Circle, Kingston 4. Call 876-922-5715 or send us a message.",
};

const cards = [
  { icon: "pin", bg: "bg-peach", fg: "text-coral", title: "Visit", body: <>1 National Heroes Circle<br />Kingston 4</> },
  { icon: "phone", bg: "bg-sky", fg: "text-vouch-blue", title: "Call", body: <a href={school.phoneHref} className="hover:text-vouch-blue">{school.phone}</a> },
  { icon: "clock", bg: "bg-lemon", fg: "text-[#B58A00]", title: "Office hours", body: school.officeHours },
  { icon: "mail", bg: "bg-mint", fg: "text-leaf", title: "Email", body: <a href={`mailto:${school.email}`} className="break-all hover:text-vouch-blue">{school.email}</a> },
];

export default function Contact() {
  return (
    <>
      <PageHeader kicker="Contact" title="Get in touch" text="We welcome questions, feedback and inquiries from parents, partners, donors and the wider community." />
      <section className="mx-auto grid max-w-[1140px] items-start gap-7 px-6 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.2fr)]">
        <div className="grid gap-3.5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="flex items-center gap-4 rounded-[22px] border border-line bg-white px-5 py-4.5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(18,63,122,.1)]">
                <span className={`grid size-[46px] shrink-0 place-items-center rounded-[14px] ${c.bg} ${c.fg}`}><Icon name={c.icon} /></span>
                <div><b className="block">{c.title}</b><p className="text-muted">{c.body}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><ContactForm /></Reveal>
      </section>

      <section className="mx-auto mt-14 max-w-[1140px] px-6">
        <Reveal className="overflow-hidden rounded-[32px] border-8 border-white bg-white shadow-[0_20px_50px_rgba(18,63,122,.14)]">
          <iframe title="Map to VOUCH Group of Schools" src={school.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
            className="block h-[300px] w-full border-0 md:h-[420px]" />
          <div className="flex flex-wrap items-center gap-4 px-6 py-5">
            <span className="grid size-[52px] shrink-0 -rotate-6 place-items-center rounded-2xl bg-vouch-blue text-white"><Icon name="pin" /></span>
            <div className="min-w-[200px] flex-1">
              <b>{school.address}</b>
              <p className="text-[.93rem] text-muted">Find us at National Heroes Circle in downtown Kingston.</p>
            </div>
            <Button href={school.mapDirections} variant="sun">Get directions</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
