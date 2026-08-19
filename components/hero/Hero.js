import WindowFrame from "../ui/WindowFrame";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-8 sm:pt-40"
    >
      <WindowFrame title="hero.txt" titleAs="h1">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Buenos Aires, Argentina
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
          Julio Pazzaglia
        </h2>
        <p className="mt-4 font-display text-2xl font-medium text-ink sm:text-3xl">
          Game Designer &amp; Developer
        </p>
        <p className="mt-1 font-mono text-sm uppercase tracking-wide text-muted">
          + Web Developer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
          Diseño sistemas de juego y experiencias interactivas, y tengo la
          base técnica de desarrollo full stack para llevarlas de la idea a
          algo jugable y funcional.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#projects" variant="accent">
            Ver proyectos
          </Button>
          <Button href="#contact" variant="secondary">
            Contactarme
          </Button>
        </div>
      </WindowFrame>
    </section>
  );
}
