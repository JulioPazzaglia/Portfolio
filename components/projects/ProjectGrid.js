"use client";

import { useState } from "react";
import { categories, projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Proyectos
        </h2>
        <div
          className="flex gap-2"
          role="group"
          aria-label="Filtrar proyectos por categoría"
        >
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`border-3 border-line px-3 py-1.5 font-mono text-xs uppercase tracking-wide sm:text-sm ${
                  isActive
                    ? "bg-ink text-paper shadow-window-sm"
                    : "bg-panel text-ink"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
