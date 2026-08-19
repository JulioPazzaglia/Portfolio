export default function WindowFrame({
  title,
  children,
  className = "",
  contentClassName = "",
  as: Tag = "div",
  titleAs: TitleTag = "div",
}) {
  return (
    <Tag
      className={`flex flex-col border-3 border-line bg-panel shadow-window ${className}`}
    >
      <TitleTag className="flex items-center justify-between gap-3 border-b-3 border-line bg-ink px-4 py-2">
        <span className="truncate font-mono text-xs text-paper sm:text-sm">
          {title}
        </span>
        <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-paper" />
          <span className="h-2.5 w-2.5 rounded-full border border-paper" />
          <span className="h-2.5 w-2.5 rounded-full border border-accent" />
        </span>
      </TitleTag>
      <div
        className={`flex min-h-0 flex-1 flex-col p-5 sm:p-7 ${contentClassName}`}
      >
        {children}
      </div>
    </Tag>
  );
}
