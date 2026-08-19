import WindowFrame from "../ui/WindowFrame";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <WindowFrame title="sobre-mi.md" titleAs="h2">
        <p className="text-base leading-relaxed text-ink sm:text-lg">
          Soy Julio Pazzaglia, de Argentina. Diseño y desarrollo videojuegos
          —sistemas de juego, niveles, prototipos— y estoy completando una
          carrera técnica en desarrollo de videojuegos.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
          Esa misma lógica de resolver problemas la aplico al desarrollo de
          software: trabajo con React, Next.js, Node.js, PHP y bases de datos
          SQL para construir productos completos, de punta a punta.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
          Me interesa lo que pasa en el cruce entre diseño de juegos e
          ingeniería de software: llevar una idea desde el concepto hasta algo
          que se pueda jugar o usar.
        </p>
      </WindowFrame>
    </section>
  );
}
