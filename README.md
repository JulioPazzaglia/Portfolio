# Julio Pazzaglia — Portfolio

Portfolio rediseñado con identidad primaria de **Game Designer & Developer**
y secundaria de **Full Stack Web Developer**, con un lenguaje visual de
interfaz retro de computadora (ventanas con barra de título, bordes gruesos,
paleta blanco/negro/gris con un acento).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Para producción

```bash
npm run build
npm run start
```

Listo también para deployar directo en Vercel (`vercel deploy`).

## Estructura

```
app/
  layout.js       Metadata, SEO, fuentes (Space Grotesk, Inter, JetBrains Mono)
  page.js         Ensambla todas las secciones
  globals.css     Reset, grilla de fondo, accesibilidad (focus, reduced-motion)
components/
  ui/             WindowFrame, Button, Badge — el sistema de diseño reutilizable
  navigation/     Navbar (con menú mobile accesible)
  hero/           Hero
  projects/       ProjectGrid (con filtro por categoría) + ProjectCard
  about/          AboutSection + SkillsSection
  contact/        ContactSection + CopyEmailButton
data/
  projects.js     Toda la info de proyectos vive acá — para agregar uno nuevo,
                  sumá un objeto a este array, no toques los componentes.
```

## Pendiente / a tu criterio

- No incluí `favicon.ico` ni imágenes de proyectos (no las tenía disponibles) —
  las tarjetas de proyecto son 100% texto/tipografía por ahora. Se puede sumar
  un campo `image` a `data/projects.js` y renderizarlo en `ProjectCard` si querés.
- Los proyectos "Bamba" y "Ship Math" del portfolio anterior no están incluidos.
- No pude correr `npm install` / `npm run build` en este entorno (sin acceso a
  red), así que probalo localmente antes de pushear a producción.
