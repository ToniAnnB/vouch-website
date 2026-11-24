import Doodles from "./Doodles";

export default function PageHeader({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <header className="relative mb-10 overflow-hidden rounded-b-[30px] bg-sky px-6 pb-16 pt-18 text-center md:rounded-b-[50%_40px]">
      <Doodles few />
      <div className="relative z-10 mx-auto max-w-3xl">
        <span className="mb-2 inline-block text-[.82rem] font-extrabold uppercase tracking-[.08em] text-coral">{kicker}</span>
        <h1 className="mb-3 text-[clamp(2rem,4.2vw,3rem)]">{title}</h1>
        {text && <p className="text-muted">{text}</p>}
      </div>
    </header>
  );
}
