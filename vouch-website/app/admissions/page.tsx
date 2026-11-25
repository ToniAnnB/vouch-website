import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { activityFees, extraFees, hours, requirements, tuition } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admissions & FAQ",
  description: "How to apply to VOUCH Group of Schools: requirements, deadline, tuition, fees, activities and school hours.",
};

function Rows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <>
      {rows.map((r) => (
        <div key={r.label} className="flex justify-between gap-4 border-b border-dashed border-line py-3 last:border-0">
          <span className="text-muted">{r.label}</span>
          <b className="whitespace-nowrap text-ink">{r.value}</b>
        </div>
      ))}
    </>
  );
}

function Q({ q, open = false, children }: { q: string; open?: boolean; children: React.ReactNode }) {
  return (
    <details open={open} className="group mb-2.5 overflow-hidden rounded-[20px] border border-line bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5.5 py-4.5 font-extrabold transition-colors hover:text-vouch-blue">
        {q}
        <span className="font-display text-2xl leading-none text-vouch-blue transition-transform duration-300 group-open:rotate-45">+</span>
      </summary>
      <div className="px-5.5 pb-4.5 text-muted motion-safe:animate-pop">{children}</div>
    </details>
  );
}

function Group({ icon, bg, fg, title, children }: { icon: string; bg: string; fg: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal className="mb-7 md:mb-9">
      <h2 className="mb-3.5 flex items-center gap-3 text-2xl">
        <span className={`grid size-[46px] shrink-0 place-items-center rounded-[14px] ${bg} ${fg}`}><Icon name={icon} /></span>{title}
      </h2>
      {children}
    </Reveal>
  );
}

export default function Admissions() {
  return (
    <>
      <PageHeader kicker="Admissions & FAQ" title="Everything you need to enrol" text="Admissions, fees, hours and activities, all in one place." />
      <section className="mx-auto max-w-[820px] px-6">
        <Group icon="doc" bg="bg-lemon" fg="text-[#B58A00]" title="Admissions & enrolment">
          <Q q="How do I apply?" open>
            <p className="mb-2">Bring the following to the school office:</p>
            <ul className="space-y-1.5">
              {requirements.map((r) => (
                <li key={r.title} className="flex gap-2.5"><span className="mt-2.5 size-2 shrink-0 rounded-full bg-sun" />
                  <span><b className="text-ink">{r.title}</b>{r.note && <> — {r.note}</>}</span></li>
              ))}
            </ul>
          </Q>
          <Q q="What is the application deadline?">The end of March or April, depending on the Easter break.</Q>
          <Q q="Is there an entrance exam or interview?">No. The admin team does an observation process.</Q>
          <Q q="Is there a waiting list?">Yes, first come, first served.</Q>
        </Group>

        <Group icon="cash" bg="bg-sky" fg="text-vouch-blue" title="Tuition & fees">
          <Q q="What is the tuition cost?" open><Rows rows={tuition} /></Q>
          <Q q="Are there additional fees?">
            <Rows rows={extraFees} />
            <p className="mb-1 mt-4 font-extrabold text-ink">Optional activities</p>
            <Rows rows={activityFees} />
          </Q>
          <Q q="How can I pay?">At the school office or by bank transfer. Contact the office for banking details.</Q>
        </Group>

        <Group icon="clock" bg="bg-mint" fg="text-leaf" title="School hours">
          <Q q="What time does school start and end?" open><Rows rows={hours} /></Q>
          <Q q="Is there aftercare?">Yes, from 2:30pm – 5:00pm.</Q>
        </Group>

        <Reveal className="mt-5 grid items-center gap-6 overflow-hidden rounded-[32px] bg-vouch-blue p-7 text-white md:rounded-[40px] md:p-9 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="mb-1 text-3xl !text-white">Still have a question?</h2>
            <p className="opacity-90">Our office is happy to help.</p>
          </div>
          <Button href="/contact/" variant="sun">Contact us</Button>
        </Reveal>
      </section>
    </>
  );
}
