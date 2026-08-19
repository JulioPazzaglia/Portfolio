import WindowFrame from "../ui/WindowFrame";
import Button from "../ui/Button";
import CopyEmailButton from "./CopyEmailButton";

const CONTACT_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/2325423315" },
  { label: "GitHub", href: "https://github.com/juliopazzaglia" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/julio-pazzaglia/" },
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1mDgmLC3M2ph9xt02FbhPf1qrAmX3joke/view?usp=drive_link",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
      <WindowFrame title="contacto.sh" titleAs="h2">
        <p className="text-base leading-relaxed text-ink sm:text-lg">
          ¿Tenés un proyecto de juego o de software en mente? Escribime.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {CONTACT_LINKS.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {link.label}
            </Button>
          ))}
          <CopyEmailButton email="julitopazzaglia@gmail.com" />
        </div>
      </WindowFrame>
    </section>
  );
}
