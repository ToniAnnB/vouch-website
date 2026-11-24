"use client";
import { useState } from "react";
import Icon from "./Icon";
import { school } from "@/lib/data";

/*
  Sends messages to the school's inbox through Web3Forms (free, 250 messages/month).
  1. Go to https://web3forms.com, enter the school's email, and copy the access key they email you.
  2. Put it in a file called .env.local:  NEXT_PUBLIC_WEB3FORMS_KEY=your-key
     (or add it as an environment variable on Cloudflare Pages / Netlify), then rebuild.
  Without a key the form runs in "preview mode" and clearly says nothing was sent.
*/
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const topics = ["Admissions", "Fees", "Activities", "Something else"];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const inputCls =
  "peer w-full rounded-2xl border-2 border-line bg-cream px-4 pb-2.5 pt-6 text-base transition focus:border-vouch-blue focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky";
const labelCls =
  "pointer-events-none absolute left-[18px] top-[17px] font-bold text-muted transition-all peer-focus:top-[7px] peer-focus:text-[.74rem] peer-focus:font-extrabold peer-focus:text-vouch-blue peer-[:not(:placeholder-shown)]:top-[7px] peer-[:not(:placeholder-shown)]:text-[.74rem] peer-[:not(:placeholder-shown)]:font-extrabold peer-[:not(:placeholder-shown)]:text-vouch-blue";
const badCls = "!border-[#E57368] !bg-[#FFF5F3] motion-safe:animate-shake";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", message: "", topic: topics[0], botcheck: false });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [preview, setPreview] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value });
    setErrors({ ...errors, [k]: undefined });
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Errors = {};
    if (!values.name.trim()) errs.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errs.email = "Please enter a valid email";
    if (values.message.trim().length < 5) errs.message = "Please write a short message";
    setErrors(errs);
    if (Object.keys(errs).length || values.botcheck) return;

    setStatus("sending");
    if (!ACCESS_KEY) {
      await new Promise((r) => setTimeout(r, 900));
      setPreview(true);
      setStatus("sent");
      return;
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `VOUCH website: ${values.topic} enquiry from ${values.name.trim()}`,
          from_name: "VOUCH Website",
          replyto: values.email.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim() || "Not given",
          topic: values.topic,
          message: values.message.trim(),
          botcheck: false,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setPreview(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues({ name: "", phone: "", email: "", message: "", topic: topics[0], botcheck: false });
    setStatus("idle");
  }

  const firstName = values.name.trim().split(" ")[0];

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_20px_50px_rgba(18,63,122,.12)] md:p-9">
      <span aria-hidden="true" className="absolute -right-[70px] -top-[70px] size-[180px] rounded-full bg-lemon" />
      <span aria-hidden="true" className="absolute -bottom-[50px] -left-[50px] size-[120px] rotate-[20deg] rounded-[40px] bg-mint" />

      {status === "sent" ? (
        <div className="relative z-10 px-2 py-8 text-center motion-safe:animate-pop" aria-live="polite">
          <svg viewBox="0 0 52 52" className="mx-auto mb-4 size-[90px]" aria-hidden="true">
            <circle cx="26" cy="26" r="24" className="fill-mint stroke-leaf [stroke-dasharray:160] [stroke-dashoffset:160] motion-safe:animate-draw motion-reduce:[stroke-dashoffset:0]" strokeWidth="3" />
            <path d="M15 27l7 7 15-16" fill="none" className="stroke-leaf [stroke-dasharray:40] [stroke-dashoffset:40] motion-safe:animate-draw motion-safe:[animation-delay:.5s] motion-reduce:[stroke-dashoffset:0]" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="mb-2 text-3xl">Message sent!</h3>
          <p className="mb-5 text-muted">Thank you, {firstName}. The VOUCH office will reply to {values.email.trim()} soon.</p>
          {preview && (
            <p className="mb-5 rounded-xl bg-lemon px-4 py-2.5 text-sm font-bold text-[#7A5B00]">
              Preview mode: no email was actually sent. Add the Web3Forms access key to switch it on.
            </p>
          )}
          <button type="button" onClick={reset} className="rounded-full border-2 border-vouch-blue px-6 py-3 font-extrabold text-vouch-blue transition hover:-translate-y-0.5">
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="grid size-[52px] shrink-0 -rotate-6 place-items-center rounded-2xl bg-vouch-blue text-white"><Icon name="mail" /></span>
            <div>
              <h3 className="text-[1.6rem]">Send us a message</h3>
              <p className="text-[.95rem] text-muted">We&apos;ll reply to your email as soon as we can.</p>
            </div>
          </div>

          {/* honeypot for spam bots */}
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px]" checked={values.botcheck} onChange={set("botcheck")} />

          <fieldset className="mb-5">
            <legend className="mb-2.5 font-extrabold">What&apos;s it about?</legend>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <label key={t} className="cursor-pointer">
                  <input type="radio" name="topic" value={t} checked={values.topic === t} onChange={() => setValues({ ...values, topic: t })} className="peer sr-only" />
                  <span className="inline-block rounded-full border-2 border-line bg-white px-[18px] py-2 text-[.92rem] font-extrabold text-muted transition hover:border-vouch-blue hover:text-vouch-blue peer-checked:scale-[1.04] peer-checked:border-vouch-blue peer-checked:bg-vouch-blue peer-checked:text-white peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sun">{t}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-x-3.5 md:grid-cols-2">
            <Field id="name" label="Your name" error={errors.name}>
              <input id="name" autoComplete="name" placeholder=" " value={values.name} onChange={set("name")} className={`${inputCls} ${errors.name ? badCls : ""}`} aria-invalid={!!errors.name} />
            </Field>
            <Field id="phone" label="Phone (optional)">
              <input id="phone" type="tel" autoComplete="tel" placeholder=" " value={values.phone} onChange={set("phone")} className={inputCls} />
            </Field>
          </div>
          <Field id="email" label="Email address" error={errors.email}>
            <input id="email" type="email" autoComplete="email" placeholder=" " value={values.email} onChange={set("email")} className={`${inputCls} ${errors.email ? badCls : ""}`} aria-invalid={!!errors.email} />
          </Field>
          <Field id="message" label="How can we help?" error={errors.message}
            extra={<span className="absolute bottom-3 right-3.5 text-xs font-bold text-muted">{values.message.length} / 1000</span>}>
            <textarea id="message" rows={5} maxLength={1000} placeholder=" " value={values.message} onChange={set("message")} className={`${inputCls} resize-y pb-7 ${errors.message ? badCls : ""}`} aria-invalid={!!errors.message} />
          </Field>

          <button type="submit" disabled={status === "sending"}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-vouch-blue py-4 text-[1.05rem] font-extrabold text-white shadow-[0_4px_0_var(--color-vouch-navy)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-85">
            {status === "sending" ? (
              <><span className="size-5 animate-spin rounded-full border-3 border-white/40 border-t-white" /> Sending…</>
            ) : (
              <>Send message <Icon name="send" className="size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-6" /></>
            )}
          </button>

          {status === "error" && (
            <p role="alert" className="mt-3 text-[.93rem] font-bold text-[#C0392B]">
              Sorry, your message could not be sent. Please call <a className="underline" href={school.phoneHref}>{school.phone}</a> or email{" "}
              <a className="underline" href={`mailto:${school.email}`}>{school.email}</a>.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

function Field({ id, label, error, extra, children }: { id: string; label: string; error?: string; extra?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative mb-4">
      {children}
      <label htmlFor={id} className={labelCls}>{label}</label>
      {extra}
      {error && <small className="mt-1 block text-[.82rem] font-bold text-[#C0392B]">{error}</small>}
    </div>
  );
}
