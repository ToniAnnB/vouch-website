import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Swipe from "@/components/Swipe";
import Tabs from "@/components/Tabs";
import MoreText from "@/components/MoreText";
import { beliefs, board, mission, principalLetter, teachers, vision } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet VOUCH Group of Schools: our Principal's welcome, mission, vision, boards and teachers.",
};

const tapes = ["bg-sun", "bg-coral", "bg-leaf", "bg-[#9EC5FF]"];
const tilts = [-3, 2, -1.5, 3, -2, 1.5];

export default function About() {
  let k = 0;
  return (
    <>
      {/* ---------- BANNER (original wave design) ---------- */}
      <header className="relative flex items-center overflow-hidden pt-10 md:h-[clamp(300px,34vw,420px)] md:pt-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/about-accent-img.jpeg" alt="" className="absolute inset-0 size-full object-cover object-[center_42%] motion-safe:animate-kenburns" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(18,63,122,.9),rgba(28,85,161,.68)_55%,rgba(28,85,161,.3))]" />
        <div className="relative z-10 mx-auto w-full max-w-[1140px] px-6 pb-[96px] max-md:text-center md:pb-[60px]">
          <span className="mb-2 inline-block text-[.82rem] font-extrabold uppercase tracking-[.08em] text-sun">About us</span>
          <h1 className="max-w-[620px] text-[clamp(1.6rem,4vw,3rem)] !text-white max-md:mx-auto">
            Cultivating curious minds, compassionate hearts &amp; resilient spirits
          </h1>
        </div>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 -bottom-px z-10 h-[clamp(60px,8vw,120px)] w-full">
          <path fill="var(--color-cream)" d="M0 70 C200 130 400 120 600 60 C750 15 900 10 1050 60 C1200 100 1320 95 1440 70 V120 H0Z" />
        </svg>
      </header>

      {/* ---------- PRINCIPAL'S WELCOME ---------- */}
      <section className="pb-14 md:pb-[84px]">
        <div className="mx-auto grid max-w-[1140px] items-start gap-2.5 px-6 md:grid-cols-[1fr_360px] md:gap-14">
          <Reveal className="pt-2.5 md:pt-8">
            <span className="mb-2 inline-block text-[.82rem] font-extrabold uppercase tracking-[.08em] text-coral">Principal&apos;s welcome</span>
            <p className="mb-3.5 font-bold">Dear Parents, Guardians, and Friends,</p>
            <p className="mb-3.5 text-muted">{principalLetter[0]}</p>
            <MoreText label="Read the full letter">
              {principalLetter.slice(1).map((p) => <p key={p.slice(0, 20)} className="mb-3.5 text-muted">{p}</p>)}
              <p className="font-extrabold">— The Principal</p>
            </MoreText>
          </Reveal>
          <Reveal className="relative z-20 mx-auto max-w-[240px] max-md:-order-1 max-md:-mt-20 max-md:max-w-[160px] md:mt-[-210px] md:max-w-none">
            <div className="group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/staff/principal.jpeg" alt="VOUCH Principal"
                className="aspect-[4/5] w-full rotate-2 rounded-[28px] border-8 border-white object-cover object-top shadow-[0_24px_50px_rgba(18,63,122,.25)] transition duration-400 group-hover:rotate-0" />
              <span className="absolute -left-3.5 bottom-7 -rotate-6 rounded-full bg-sun px-4 py-2 font-display font-semibold shadow-lg">Our Principal</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PHILOSOPHY, MISSION, VISION ---------- */}
      <section className="bg-white py-14 md:py-[84px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <SectionHead kicker="What we believe" title="Our philosophy" />
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
            {beliefs.map((b, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="h-full rounded-[18px] border border-line bg-white p-3.5 transition md:rounded-3xl md:p-6 duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(18,63,122,.1)]">
                  <span className={`mb-2 grid size-8 place-items-center rounded-[12px] md:mb-3.5 md:size-[46px] md:rounded-[14px] ${b.bg} ${b.fg}`}><Icon name={b.icon} className="size-5 md:size-6" /></span>
                  <p className="text-[.8rem] font-bold leading-snug md:text-[.97rem]">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 md:mt-5">
            <Tabs labels={["Our mission", "Our vision"]} wrap="md:grid md:grid-cols-2 md:gap-5 md:[&>*]:h-full">
              {[{ t: "Our mission", d: mission }, { t: "Our vision", d: vision }].map((x) => (
                <Reveal key={x.t} className="h-full">
                  <div className="h-full rounded-[28px] border border-line bg-white p-6 md:rounded-[32px] md:p-8">
                    <h3 className="mb-3 text-2xl max-md:hidden">{x.t}</h3>
                    <p className="text-muted">{x.d}</p>
                  </div>
                </Reveal>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* ---------- BOARDS ---------- */}
      <section className="py-14 md:py-[84px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <SectionHead kicker="Leadership" title="Our boards" />
          <div className="mb-4 grid gap-3 md:mb-5 md:gap-5 md:grid-cols-3">
            {board.leads.map((l, i) => (
              <Reveal key={l.name} delay={i * 70}>
                <div className={`h-full rounded-[20px] px-4 py-3.5 text-center transition md:rounded-3xl md:p-6 duration-300 hover:-translate-y-1.5 ${l.bg}`}>
                  <span className="mb-1.5 block text-[.8rem] font-extrabold uppercase tracking-[.06em] text-coral">{l.role}</span>
                  <b className="font-display text-[1.08rem] font-semibold text-vouch-navy md:text-xl">{l.name}</b>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="rounded-[24px] border border-line bg-white p-5 md:rounded-[32px] md:p-8">
              <h3 className="mb-3 text-xl">School Board members</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 md:gap-x-6 md:gap-y-2.5">
                {board.members.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-[.86rem] font-bold leading-snug md:items-center md:gap-2.5 md:text-base"><span className="mt-1.5 size-2 shrink-0 rounded-full bg-sun md:mt-0" />{m}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TEACHERS ---------- */}
      <section className="bg-white py-14 md:py-[84px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <SectionHead kicker="Meet the team" title="Our teachers" />
          <Tabs labels={teachers.map((g) => g.school.replace(" Basic School", "").replace(" Preschool", "").replace(" Unit", ""))}>
          {teachers.map((g) => (
            <Reveal key={g.school} className="mb-7 rounded-[28px] border border-line bg-cream px-3 pb-6 pt-5 md:rounded-[32px] md:px-7 md:pb-9 md:pt-7">
              <h3 className={`mb-5 flex items-center justify-center gap-3 text-xl md:mb-7 md:text-2xl ${g.color}`}>
                <span className={`size-7 rounded-[10px] ${g.chip}`} />{g.school}
              </h3>
              <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-5 md:gap-x-6 md:gap-y-8">
                {g.people.map((p) => {
                  const i = k++;
                  return (
                    <figure key={p.name} style={{ "--t": `${tilts[i % 6]}deg` } as React.CSSProperties}
                      className="relative w-[calc(33.333%-7px)] rotate-[var(--t)] rounded-md bg-white px-1.5 pb-2 pt-1.5 md:rounded-lg md:px-3 md:pb-3.5 md:pt-3 shadow-[0_10px_26px_rgba(18,63,122,.12)] transition duration-300 ease-[cubic-bezier(.3,1.6,.5,1)] hover:z-10 hover:rotate-0 hover:scale-[1.06] hover:shadow-[0_18px_36px_rgba(18,63,122,.2)] md:w-[168px]">
                      <i className={`absolute -top-2 left-1/2 h-4 w-11 md:-top-2.5 md:h-[22px] md:w-[70px] -translate-x-1/2 -rotate-[4deg] rounded-sm opacity-85 ${tapes[i % 4]}`} />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/images/staff/${p.photo}.jpeg`} alt={p.name} loading="lazy" className="aspect-square w-full rounded object-cover object-top" />
                      <figcaption className="pt-1.5 text-center md:pt-2.5">
                        <b className="block font-display text-[.78rem] font-semibold leading-tight text-vouch-navy md:text-[1.05rem]">{p.name}</b>
                        <span className="text-[.68rem] font-extrabold leading-tight text-coral md:text-[.82rem]">{p.cls}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </Reveal>
          ))}
          </Tabs>

          <SectionHead kicker="Our school community" title="The whole VOUCH family" />
          <Swipe grid="md:grid md:grid-cols-2 md:gap-10 md:p-2.5" item="w-[70%] max-md:pt-2">
            {[{ src: "/images/staff/academic.jpeg", t: "Academic staff", s: "Our teachers", tilt: -2, tape: "bg-sun", w: 1600, h: 1200 },
              { src: "/images/staff/auxillary.jpeg", t: "Auxiliary staff", s: "Keeping VOUCH running", tilt: 2, tape: "bg-coral", w: 1600, h: 1301 }].map((g) => (
              <Reveal key={g.t} tilt={g.tilt}>
                <figure className="relative rounded-[10px] bg-white px-3.5 pb-4.5 pt-3.5 shadow-[0_14px_34px_rgba(18,63,122,.14)] transition duration-400 hover:scale-[1.02] hover:shadow-[0_22px_44px_rgba(18,63,122,.2)]">
                  <i className={`absolute -top-3 left-1/2 h-[26px] w-[90px] -translate-x-1/2 -rotate-[4deg] rounded-sm opacity-85 ${g.tape}`} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={g.t} width={g.w} height={g.h} loading="lazy" className="h-auto w-full rounded-md" />
                  <figcaption className="pt-2.5 text-center font-display text-base md:pt-3.5 md:text-xl font-semibold text-vouch-navy">
                    {g.t}<span className="block font-sans text-[.85rem] font-extrabold text-coral">{g.s}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </Swipe>
        </div>
      </section>
    </>
  );
}
