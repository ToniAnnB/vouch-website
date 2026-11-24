/** Decorative shapes that float/spin gently behind section content. */
export default function Doodles({ light = false, few = false }: { light?: boolean; few?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 24 24" className="absolute left-[4%] top-[14%] w-11 animate-spin-slow max-md:hidden">
        <path fill="#FFD93D" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" />
      </svg>
      <svg viewBox="0 0 40 40" className="absolute right-[6%] top-[10%] w-11 animate-spin-slow [animation-direction:reverse]">
        <circle cx="20" cy="20" r="14" fill="none" stroke="#3BAF82" strokeWidth="5" strokeDasharray="6 7" />
      </svg>
      {!few && (
        <>
          <svg viewBox="0 0 80 30" className="absolute bottom-[16%] left-[40%] w-24 animate-float max-md:hidden">
            <path d="M3 15 Q13 2 23 15 T43 15 T63 15 T78 15" stroke={light ? "#FFD93D" : "#F27A5E"} strokeWidth="5" fill="none" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 24 24" className="absolute bottom-[12%] right-[44%] w-9 animate-float [animation-delay:1s] max-md:hidden">
            <path fill={light ? "#fff" : "#1C55A1"} opacity=".85" d="M2 12l20-9-7 19-3-8z" />
          </svg>
        </>
      )}
    </div>
  );
}
