export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block border-2 border-line bg-paper px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink ${className}`}
    >
      {children}
    </span>
  );
}
