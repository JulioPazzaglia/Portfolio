"use client";

import { useState } from "react";
import WindowFrame from "../ui/WindowFrame";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const LINK_LABELS = {
  live: "Ver sitio",
  github: "Github",
  steam: "Steam",
  itch: "Itch.io",
};

const FLIP_BUTTON_STYLES =
  "hidden h-8 w-8 shrink-0 items-center justify-center border-2 border-line bg-panel font-mono text-xs text-ink transition-colors duration-150 hover:bg-ink hover:text-paper sm:inline-flex";

export default function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const hasCodeSnippet = Boolean(project.codeSnippet);
  const linkEntries = Object.entries(project.links || {});

  return (
    <div className="flip-scene h-full">
      <div className={`flip-card h-full ${isFlipped ? "is-flipped" : ""}`}>
        {/* FRONT — tarjeta original, sin cambios de contenido */}
        <div className="flip-face h-full" aria-hidden={isFlipped}>
          <WindowFrame
            title={project.fileName}
            as="article"
            className="h-full"
            contentClassName="flex flex-1 flex-col h-[90%] justify-between"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge>
                {project.category === "game-dev" ? "Game Dev" : "Web Dev"}
              </Badge>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted">
                  {project.year}
                </span>
              </div>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-ink">
              {project.title}
            </h3>

            {project.role && (
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                {project.role}
              </p>
            )}

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
              {project.description.map((line) => (
                <li key={line} className="flex gap-2">
                  <span aria-hidden="true">–</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div
              className={`flex flex-wrap gap-2 ${
                linkEntries.length === 0 ? "mt-auto" : "mt-5"
              }`}
            >
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              {linkEntries.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {linkEntries.map(([key, url]) => (
                    <Button
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="text-xs"
                      tabIndex={isFlipped ? -1 : 0}
                    >
                      {LINK_LABELS[key] || "Ver más"}
                    </Button>
                  ))}
                </div>
              )}
              {hasCodeSnippet && (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    aria-pressed={isFlipped}
                    aria-label={`Ver el código de ${project.title}`}
                    title="Ver código"
                    className={FLIP_BUTTON_STYLES}
                    tabIndex={isFlipped ? -1 : 0}
                    variant="secondary"
                  >
                    {"</>"}
                  </Button>
                </div>
              )}
            </div>
          </WindowFrame>
        </div>

        {/* BACK — ficha técnica con snippet de código, solo si el proyecto lo define */}
        {hasCodeSnippet && (
          <div
            className="flip-face flip-face-back h-full"
            aria-hidden={!isFlipped}
          >
            <WindowFrame
              title={project.fileName}
              className="h-full"
              contentClassName="flex flex-1 flex-col h-[90%] justify-between"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge>SOURCE</Badge>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-ink">
                {project.title}
              </h3>

              {project.codeDescription && (
                <p className="mt-0 text-sm leading-relaxed text-muted">
                  {project.codeDescription}
                </p>
              )}

              <pre className="mt-4 flex-1 overflow-auto border-2 border-line bg-ink p-3 text-xs leading-relaxed text-paper">
                <code className="font-mono">{project.codeSnippet}</code>
              </pre>
              {project.technologies?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <Button
                  type="button"
                  onClick={() => setIsFlipped(false)}
                  aria-pressed={isFlipped}
                  aria-label={`Volver a la vista general de ${project.title}`}
                  title="Volver"
                  className={FLIP_BUTTON_STYLES}
                  tabIndex={isFlipped ? 0 : -1}
                  variant="secondary"
                >
                  {"</>"}
                </Button>
              </div>
            </WindowFrame>
          </div>
        )}
      </div>
    </div>
  );
}
