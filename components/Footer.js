export default function Footer() {
  return (
    <footer className="border-t-3 border-line bg-ink px-4 py-6 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-wide text-paper">
        © {new Date().getFullYear()} Julio Pazzaglia
      </p>
    </footer>
  );
}
