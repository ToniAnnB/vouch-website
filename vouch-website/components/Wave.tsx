/** Soft wave divider. `color` is the colour of the section BELOW (or above when flipped). */
export default function Wave({ color = "#fff", flip = false, className = "" }: { color?: string; flip?: boolean; className?: string }) {
  return (
    <div className={`leading-[0] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className={`block h-[60px] w-full ${flip ? "rotate-180" : ""}`}>
        <path fill={color} d="M0 40 C240 0 480 60 720 30 S1200 0 1440 30 V60 H0Z" />
      </svg>
    </div>
  );
}
