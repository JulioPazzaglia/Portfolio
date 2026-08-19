export const categories = [
  { id: "all", label: "Todos" },
  { id: "game-dev", label: "Game Dev" },
  { id: "web-dev", label: "Web Dev" },
];

export const projects = [
  {
    id: "laboratorio-de-videojuegos-demo",
    fileName: "laboratorio-de-videojuegos.exe",
    title: "Laboratorio de Videojuegos – Demo",
    category: "game-dev",
    role: "Game Designer",
    year: "2026",
    description: [
      "Game Designer en el desarrollo de un videojuego educativo enfocado en el aprendizaje de diseño y desarrollo de videojuegos.",
      "Desarrollado en Unreal Engine.",
      "Publicado en Steam.",
    ],
    technologies: ["Unreal Engine", "Game Design"],
    links: {
      steam:
        "https://store.steampowered.com/app/5021570/Laboratorio_de_Videojuegos_Demo/",
    },
    featured: true,
    codeLanguage: "cpp",
    codeDescription: "Concepción y explicación del marco pedagógico.",
    codeSnippet: `El Laboratorio de Videojuegos
  busca enseñar conceptos de diseño 
  de juegos y diseño de niveles brindando 
  una plataforma donde chicos, adolescentes 
  y cualquiera que desee puedan crear, jugar 
  y compartir experiencias con sus amigos 
  en un ambiente seguro y responsable.

  Referencias clave
  Papert (1980) – Mindstorms
  Kafai (1995) – Minds in Play
  Lepper, Greene & Nisbett (1973) – 
  Overjustification Effect
  Deci & Ryan – Self Determination Theory`,
  },
  {
    id: "sigue-tu-miedo",
    fileName: "sigue-tu-miedo.exe",
    title: "Sigue Tu Miedo",
    category: "game-dev",
    role: "Solo Developer",
    year: "2024",
    description: [
      "Desarrollo individual de un videojuego de horror y exploración en Unity, enfocado en atmósfera, tensión e inmersión del jugador.",
      "Implementación de sistemas de juego, puzles, combate básico y sonido integrado.",
      "Publicado en Itch.io.",
    ],
    technologies: ["Unity", "C#", "Level Design", "Sound Design"],
    links: {
      itch: "https://julitopazzagliagmailcom.itch.io/sigue-tu-miedo",
    },
    featured: true,
    codeLanguage: "csharp",
    codeDescription: "Enemy Pathfinding y Navigation.",
    codeSnippet: `if (m_targetLife != null &&
         m_targetLife.m_isAlive)
        {
          m_navAgent.SetDestination(m_target.position);
          m_enemyAnimator.SetWalking(true);
        }
        else if (HasReachedGuardSpot())
        {
            m_enemyAnimator.SetWalking(false);
        }
        else
        {
            m_navAgent.SetDestination(m_guardSpot);
        }
    }`,
  },
  {
    id: "whatsapp-automation-platform",
    fileName: "whatsapp-automation-platform.app",
    title: "WhatsApp Automation Platform",
    category: "web-dev",
    role: "Backend Developer",
    year: "2025",
    description: [
      "Desarrollo de una aplicación backend integrando la API de WhatsApp Business de Meta.",
      "Diseño de modelos de base de datos, servicios backend y flujos de automatización con PHP y MySQL.",
      "Enfocado en mantenibilidad, integración de APIs y arquitectura escalable.",
    ],
    technologies: ["PHP", "MySQL", "Meta WhatsApp Business API"],
    links: { github: "https://github.com/JulioPazzaglia/Delata" },
    featured: true,
    codeLanguage: "php",
    codeDescription:
      "Conexion a la API de WhatsApp Business y verificacion de token.",
    codeSnippet: `if (isset($_GET['hub_mode']) &&
     $_GET['hub_mode'] === 'subscribe') {
    $palabraReto = $_GET['hub_challenge'] ?? '';
    $tokenVerificacion = $_GET['hub_verify_token'] ?? '';

    if ($token === $tokenVerificacion) {
        echo $palabraReto;
        exit;
    } else {
        http_response_code(403);
        echo "Token inválido";
        exit;
    }
}`,
  },
  {
    id: "personal-portfolio",
    fileName: "personal-portfolio.app",
    title: "Personal Portfolio",
    category: "web-dev",
    role: "Full Stack Developer",
    year: "2024",
    description: [
      "Desarrollo de un portfolio responsive con Next.js, TypeScript y Tailwind CSS.",
      "Presenta proyectos de ingeniería de software, desarrollo web y desarrollo de videojuegos.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/JulioPazzaglia/Portfolio",
    },
    featured: false,
    codeLanguage: "javascript",
    codeDescription: "El boton para vista de snippet.",
    codeSnippet: `<Button
    type="button"
    onClick={() => setIsFlipped(false)}
    aria-pressed={isFlipped}
    aria-label={"Volver a la vista 
    general de $ {project.title}"}
    title="Volver"
    className={FLIP_BUTTON_STYLES}
    tabIndex={isFlipped ? 0 : -1}
    variant="secondary"
    >
      {"</>"}
    </Button>`,
  },
];
