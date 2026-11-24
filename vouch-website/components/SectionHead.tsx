import Reveal from "./Reveal";

export default function SectionHead({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-11 max-w-2xl text-center">
      <span className={`mb-2 inline-block text-[.82rem] font-extrabold uppercase tracking-[.08em] ${light ? "text-sun" : "text-coral"}`}>{kicker}</span>
      <h2 className={`mb-3 text-[clamp(1.9rem,3.4vw,2.6rem)] ${light ? "!text-white" : ""}`}>{title}</h2>
      {text && <p className={light ? "text-[#D6E2F3]" : "text-muted"}>{text}</p>}
    </Reveal>
  );
}
