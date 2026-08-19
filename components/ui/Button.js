const baseStyles =
  "inline-flex items-center justify-center gap-2 border-3 border-line font-mono text-sm font-medium uppercase tracking-wide transition-transform duration-150 ease-out active:translate-x-[3px] active:translate-y-[3px] active:shadow-window-pressed";

const variants = {
  primary: "bg-ink text-paper shadow-window-sm hover:-translate-y-0.5",
  secondary: "bg-panel text-ink shadow-window-sm hover:-translate-y-0.5",
  accent: "bg-accent text-paper shadow-window-sm hover:-translate-y-0.5",
};

export default function Button({
  as,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const styles = `${baseStyles} ${variants[variant]} px-5 py-2.5 ${className}`;

  if (href || as === "a") {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
