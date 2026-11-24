/** Shows a whole photo (never cropped) inside a fixed-ratio frame, filling the gaps with a soft blur of itself. */
export default function PhotoMat({ src, alt, ratio = "4/3", className = "" }: { src: string; alt: string; ratio?: string; className?: string }) {
  return (
    <div className={`photo-mat relative overflow-hidden bg-sky ${className}`} style={{ aspectRatio: ratio, "--bg": `url(${src})` } as React.CSSProperties}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="relative size-full object-contain transition duration-500 group-hover:scale-[1.03]" />
    </div>
  );
}
