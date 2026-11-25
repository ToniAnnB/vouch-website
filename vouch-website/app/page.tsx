import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Doodles from "@/components/Doodles";
import Wave from "@/components/Wave";
import SectionHead from "@/components/SectionHead";
import Button from "@/components/Button";
import PhotoMat from "@/components/PhotoMat";
import Swipe from "@/components/Swipe";
import { marquee, news, programs, school, schools } from "@/lib/data";

const dotColors = ["bg-sun", "bg-coral", "bg-leaf", "bg-[#9EC5FF]"];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pb-4 pt-8 md:pb-8 md:pt-14">
        <Doodles />
        <div className="relative z-10 mx-auto grid max-w-[1140px] items-center gap-8 px-6 md:gap-14 md:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-lemon px-3.5 py-1.5 text-[.82rem] font-extrabold text-[#7A5B00]">
              <Icon name="heart" className="size-4" /> Early childhood education in Kingston
            </span>
            <h1 className="mb-5 text-[clamp(2rem,4.8vw,3.6rem)] max-md:mb-3.5">
              Where every child&apos;s journey is <span className="hl">valued</span> &amp;{" "}
              <span className="hl [--hl:#FFB4A2] [&::after]:[animation-delay:.8s]">celebrated</span>
            </h1>
            <p className="mb-5 max-w-[520px] text-[1.02rem] md:mb-7 md:text-[1.12rem] text-muted">
              VOUCH Group of Schools offers Nursery, Preschool and Basic School classes, plus a Special Education Unit for children with diverse learning needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/admissions/">Admissions &amp; fees</Button>
              <Button href="/about/" variant="line">About us</Button>
            </div>
          </div>

          {/* Collage: main photo is never cropped; small photos float off the bottom corners */}
          <div className="relative mx-[20%] mb-12 mt-0 md:mx-[8%] md:mb-20 md:mt-2 md:mx-[4%] md:ml-[6%]">
            <div aria-hidden="true" className="absolute -inset-y-[6%] -left-[6%] -right-[8%] rounded-[46%_54%_38%_62%/52%_40%_60%_48%] bg-sun motion-safe:animate-morph" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/group-student.jpeg" alt="VOUCH students smiling together" width={1600} height={1192}
              className="relative z-10 block h-auto w-full -rotate-[1.5deg] rounded-[32px] border-8 border-white shadow-[0_22px_46px_rgba(18,63,122,.22)] transition duration-500 hover:rotate-0" />
            <figure className="absolute -bottom-[20%] -left-[9%] z-20 m-0 aspect-square w-[30%] overflow-hidden rounded-[26px] border-[7px] border-white shadow-[0_16px_34px_rgba(18,63,122,.25)] motion-safe:animate-bob">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/karate.jpeg" alt="Karate student" className="size-full object-cover" />
            </figure>
            <span className="absolute -bottom-[26%] -left-[4%] z-30 -rotate-6 rounded-full bg-coral px-4 py-2 font-display font-semibold text-white shadow-lg">Karate</span>
            <figure className="absolute -bottom-[24%] -right-[7%] z-20 m-0 aspect-square w-[30%] overflow-hidden rounded-full border-[7px] border-white shadow-[0_16px_34px_rgba(18,63,122,.25)] motion-safe:animate-bob motion-safe:[animation-delay:1s]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/music.jpeg" alt="Music class" className="size-full object-cover" />
            </figure>
            <span className="absolute -bottom-[30%] -right-[2%] z-30 rotate-6 rounded-full bg-leaf px-4 py-2 font-display font-semibold text-white shadow-lg">Music</span>
          </div>
        </div>
      </section>
      <Wave color="#fff" />

      {/* ---------- MARQUEE ---------- */}
      <div className="relative z-10 overflow-hidden bg-vouch-navy py-4 text-white shadow-[0_10px_24px_rgba(18,63,122,.18)]">
        <div className="flex w-max items-center gap-6 font-display text-xl font-semibold motion-safe:animate-marquee hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-6" aria-hidden={i >= marquee.length}>
              {t}<i className={`inline-block size-3 rounded-full ${dotColors[i % 4]}`} />
            </span>
          ))}
        </div>
      </div>

      {/* ---------- OUR SCHOOLS ---------- */}
      <section className="bg-white py-14 md:py-[84px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <SectionHead kicker="Our schools" title="A place for every stage" />
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
            {schools.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className={`group h-full rounded-[22px] p-4 shadow md:rounded-[28px] md:p-6 md:shadow-[0_6px_0_rgba(0,0,0,.05)] transition duration-300 hover:rotate-0 hover:-translate-y-1.5 ${s.bg} ${s.tilt}`}>
                  <span className={`mb-2.5 grid size-11 place-items-center rounded-[14px] md:mb-4 md:size-[62px] md:rounded-[20px] bg-white shadow-[0_6px_14px_rgba(0,0,0,.06)] ${s.fg}`}>
                    <Icon name={s.icon} className="size-5 md:size-7 transition duration-300 group-hover:-rotate-10 group-hover:scale-115" />
                  </span>
                  <h3 className="mb-1 text-[1.02rem] leading-tight md:text-[1.3rem]">{s.name}</h3>
                  <p className={`text-[.75rem] font-extrabold leading-snug md:text-[.85rem] ${s.fg}`}>{s.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-[.95rem] text-muted">
            For ages 3 – 5, our play-based curriculum builds social-emotional skills, early literacy, numeracy and creativity.{" "}
            <Link href="/admissions/" className="whitespace-nowrap font-extrabold text-vouch-blue hover:underline">See hours &amp; fees →</Link>
          </p>
        </div>
      </section>

      {/* ---------- PROGRAMS ---------- */}
      <Wave color="var(--color-vouch-blue)" className="bg-white" />
      <section className="relative overflow-hidden bg-vouch-blue py-14 md:py-[84px]">
        <Doodles light />
        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <SectionHead light kicker="Beyond the classroom" title="Programs & activities" />
          <Swipe dark grid="md:grid md:grid-cols-3 md:gap-6" item="w-[80%]">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(0,0,0,.18)]">
                  <PhotoMat src={p.img} alt={p.alt} className="max-md:!aspect-[16/10]" />
                  <div className="flex-1 px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
                    <h3 className="mb-1.5 text-[1.3rem]">{p.title}</h3>
                    <p className="text-[.88rem] text-muted md:text-[.95rem]">{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </Swipe>
          <p className="mt-5 text-center text-[.95rem] text-[#D6E2F3] md:mt-6">
            Swimming, football and 4H Club are also offered.{" "}
            <Link href="/admissions/" className="whitespace-nowrap font-extrabold text-sun hover:underline">Activity fees →</Link>
          </p>
        </div>
      </section>
      <Wave color="var(--color-vouch-blue)" flip className="bg-white" />

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className="bg-white pb-14 pt-4 md:pb-[84px] md:pt-10">
        <div className="mx-auto max-w-[1140px] px-6 max-md:flow-root md:grid md:items-center md:gap-14 md:grid-cols-[1.1fr_1fr]">
          <Reveal className="max-md:float-left max-md:mr-4 max-md:mb-2 max-md:w-[38%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/outstanding-students.jpeg" alt="Outstanding VOUCH students" width={1330} height={1235} loading="lazy" className="h-auto w-full rounded-[20px] md:rounded-[36px]" />
          </Reveal>
          <Reveal>
            <span className="mb-2 inline-block text-[.82rem] font-extrabold uppercase tracking-[.08em] text-coral">Highlights</span>
            <h2 className="mb-2 text-[clamp(1.35rem,3.4vw,2.6rem)] leading-tight md:mb-4">Celebrating our overachievers</h2>
            <p className="text-[.92rem] text-muted md:text-base">
              Our students shine through effort, focus and determination. Their success is measured not only by results, but by their willingness to grow, learn and lead by example.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- MAKING HEADLINES ---------- */}
      <section className="bg-[radial-gradient(circle_at_1px_1px,rgba(18,63,122,.08)_1px,transparent_0)] bg-[length:22px_22px] py-14 md:py-[84px]">
        <div className="mx-auto max-w-[1140px] px-6">
          <SectionHead kicker="In the news" title="Making Headlines" text="VOUCH's work with children has been covered by Jamaica's national press." />
          <Swipe grid="md:grid md:grid-cols-3 md:gap-8" item="w-[85%] md:first:col-span-3">
            {news.map((n, i) => (
              <Reveal key={n.title} tilt={[-1, 1.2, -1.4, 1][i]} className="h-full">
                <a href={n.href} target="_blank" rel="noopener"
                  className={`group relative flex h-full flex-col rounded-md border-t-[5px] border-double border-line px-4 pb-4 pt-6 md:px-6 md:pb-6 md:pt-8 shadow-[0_12px_30px_rgba(18,63,122,.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_rgba(18,63,122,.18)] ${n.feature ? "bg-lemon md:px-10 md:pt-9" : "bg-white"}`}>
                  <i className={`absolute -top-2.5 left-1/2 size-5 -translate-x-1/2 rounded-full shadow-[0_3px_6px_rgba(0,0,0,.25),inset_-3px_-3px_0_rgba(0,0,0,.15)] ${n.pin}`} />
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2 md:mb-3 md:gap-2.5">
                    <span className={`rounded-full px-2.5 py-1 text-[.65rem] md:text-[.75rem] font-extrabold uppercase tracking-wide text-white ${n.observer ? "bg-coral" : "bg-vouch-blue"}`}>{n.source}</span>
                    <span className="text-[.78rem] font-bold text-muted md:text-[.85rem]">{n.date}</span>
                  </div>
                  <h3 className={`mb-2.5 font-serif font-bold !text-ink ${n.feature ? "max-w-3xl text-[1.08rem] md:text-[clamp(1.4rem,2.6vw,1.9rem)]" : "text-[1.08rem] md:text-xl"}`} style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{n.title}</h3>
                  <p className={`flex-1 text-[.86rem] text-muted max-md:line-clamp-3 md:text-[.95rem] ${n.feature ? "md:max-w-[820px] md:text-base" : ""}`}>{n.text}</p>
                  <span className="mt-3 text-[.9rem] font-extrabold text-vouch-blue group-hover:underline md:mt-4 md:text-base">Read the story →</span>
                </a>
              </Reveal>
            ))}
          </Swipe>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-[1140px] px-6">
        <Reveal className="relative grid items-center gap-8 overflow-hidden rounded-[28px] bg-vouch-blue p-6 text-white max-md:gap-4 md:rounded-[40px] md:grid-cols-[1fr_auto] md:p-14">
          <span aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-sun/20" />
          <div className="relative">
            <h2 className="mb-1 text-[clamp(1.5rem,3.4vw,2.5rem)] !text-white md:mb-2">Have a question?</h2>
            <p className="text-[.92rem] opacity-90 md:text-base">Our office is open {school.officeHours.replace("Mon – Fri", "Monday to Friday")}.</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Button href="/contact/" variant="sun">Get in touch</Button>
            <Button href={school.phoneHref} variant="ghost">Call {school.phone}</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
