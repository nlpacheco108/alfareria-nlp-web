const thumbButtons = [...document.querySelectorAll(".thumb-button")];
const langToggles = [...document.querySelectorAll(".lang-toggle")];

const ui = {
  html: document.documentElement,
  pageTitle: document.querySelector("title"),
  metaDescription: document.querySelector('meta[name="description"]'),
  brandLink: document.querySelector(".brand"),
  brandSubtitle: document.querySelector(".brand-copy span"),
  nav: document.querySelector(".nav"),
  navLinks: [...document.querySelectorAll(".nav a")],
  langSwitch: document.querySelector(".lang-switch"),
  navCta: document.querySelector(".nav-cta"),
  heroEyebrow: document.querySelector(".hero .eyebrow"),
  heroTitle: document.querySelector(".hero h1"),
  heroIntro: document.querySelector(".hero-intro"),
  heroActionButtons: [...document.querySelectorAll(".hero-actions a")],
  heroHighlights: [...document.querySelectorAll(".hero-highlights li")],
  heroFrameImage: document.querySelector(".hero-frame img"),
  heroNotes: [...document.querySelectorAll(".hero-note")],
  storyEyebrow: document.querySelector("#proyecto .eyebrow"),
  storyTitle: document.querySelector("#proyecto h2"),
  storyParagraphs: [...document.querySelectorAll(".story-copy p")],
  quoteCopy: document.querySelector(".quote-copy"),
  quoteSignoff: document.querySelector(".quote-signoff"),
  canvasEyebrow: document.querySelector("#modelo .eyebrow"),
  canvasTitle: document.querySelector("#modelo h2"),
  canvasNote: document.querySelector("#modelo .section-note"),
  canvasCards: [...document.querySelectorAll(".canvas-card")],
  collectionsEyebrow: document.querySelector("#colecciones .eyebrow"),
  collectionsTitle: document.querySelector("#colecciones .section-heading h2"),
  collectionCards: [...document.querySelectorAll(".collections-grid > .collection-card")],
  gallerySection: document.querySelector(".gallery-thumbs"),
  galleryEyebrow: document.querySelector("#galeria .eyebrow"),
  galleryTitle: document.querySelector("#galeria .section-heading h2"),
  galleryNote: document.querySelector("#galeria .section-note"),
  spotlightImage: document.getElementById("spotlight-image"),
  spotlightKicker: document.getElementById("spotlight-kicker"),
  spotlightTitle: document.getElementById("spotlight-title"),
  spotlightText: document.getElementById("spotlight-text"),
  processEyebrow: document.querySelector("#proceso .eyebrow"),
  processTitle: document.querySelector("#proceso h2"),
  processNote: document.querySelector("#proceso .section-note"),
  processCards: [...document.querySelectorAll(".process-card")],
  platformEyebrow: document.querySelector("#plataforma .eyebrow"),
  platformTitle: document.querySelector("#plataforma h2"),
  platformNote: document.querySelector("#plataforma .section-note"),
  featureCards: [...document.querySelectorAll(".feature-card")],
  useCasesEyebrow: document.querySelector("#casos .eyebrow"),
  useCasesTitle: document.querySelector("#casos h2"),
  useCasesNote: document.querySelector("#casos .section-note"),
  useCaseCards: [...document.querySelectorAll(".use-case-card")],
  ctaEyebrow: document.querySelector(".cta-card .eyebrow"),
  ctaTitle: document.querySelector(".cta-card h2"),
  ctaText: document.querySelector(".cta-card p:not(.eyebrow)"),
  ctaButton: document.querySelector(".cta-card .button"),
  footerLines: [...document.querySelectorAll(".footer p")]
};

const galleryItems = {
  bahia: {
    image: "./assets/la-concha-bahia.png",
    es: {
      kicker: "La Concha Sunset Series",
      title: "Atardecer en la bahía",
      text: "Una taza que recoge la calma del Mediterráneo y la convierte en un pequeño ritual diario.",
      alt: "Vista de Atardecer en la bahía"
    },
    en: {
      kicker: "La Concha Sunset Series",
      title: "Sunset in the Bay",
      text: "A mug that gathers the calm of the Mediterranean and turns it into a small daily ritual.",
      alt: "View of Sunset in the Bay"
    }
  },
  torno: {
    image: "./assets/la-concha-torno.png",
    es: {
      kicker: "Pieza en proceso",
      title: "La montaña sobre el torno",
      text: "El paisaje mediterráneo se funde con el gesto artesanal y recuerda de dónde viene cada forma.",
      alt: "Taza en torno inspirada en La Concha"
    },
    en: {
      kicker: "Work in progress",
      title: "The mountain on the wheel",
      text: "The Mediterranean landscape merges with the handmade gesture and reminds you where every form comes from.",
      alt: "Wheel-thrown mug inspired by La Concha"
    }
  },
  mar: {
    image: "./assets/la-concha-mar.png",
    es: {
      kicker: "Serie destacada",
      title: "Mar esmeralda",
      text: "Turquesas luminosos, aire salino y la sensación de tener la costa a un sorbo de distancia.",
      alt: "Taza con mar esmeralda y La Concha"
    },
    en: {
      kicker: "Featured series",
      title: "Emerald Sea",
      text: "Luminous turquoise tones, salty air and the feeling of having the coast just one sip away.",
      alt: "Mug with emerald sea and La Concha"
    }
  },
  costa: {
    image: "./assets/la-concha-costa.png",
    es: {
      kicker: "Lectura serena",
      title: "Costa en calma",
      text: "Una versión limpia y suave que deja respirar la orilla, la curva de la bahía y la luz del final del día.",
      alt: "Taza con vista de la costa de Marbella"
    },
    en: {
      kicker: "Quiet interpretation",
      title: "Calm Coast",
      text: "A clean and gentle version that lets the shoreline, the curve of the bay and the last light of the day breathe.",
      alt: "Mug with a view of Marbella's coastline"
    }
  },
  artistica: {
    image: "./assets/la-concha-artistica.png",
    es: {
      kicker: "Interpretación pictórica",
      title: "Pinceladas de Marbella",
      text: "Una pieza más libre, con textura de recuerdo pintado y una mirada casi ilustrada sobre la costa.",
      alt: "Pieza artística inspirada en Marbella"
    },
    en: {
      kicker: "Painterly interpretation",
      title: "Brushstrokes of Marbella",
      text: "A freer piece, with the texture of a painted memory and an almost illustrated view of the coastline.",
      alt: "Artistic piece inspired by Marbella"
    }
  }
};

const translations = {
  es: {
    htmlLang: "es",
    pageTitle: "AlfarerIA | Alfarería, IA e impresión 3D",
    metaDescription: "AlfarerIA combina alfarería tradicional, inteligencia artificial, impresión 3D y una plataforma digital para personalizar piezas y optimizar la producción cerámica.",
    brandAriaLabel: "Ir al inicio de AlfarerIA",
    brandSubtitle: "Alfarería tradicional, IA, impresión 3D y plataforma digital",
    navAriaLabel: "Principal",
    langSwitchAriaLabel: "Selector de idioma",
    navLinks: ["Propuesta", "Proceso", "Plataforma", "Colección"],
    navCta: "Ver funcionalidades",
    hero: {
      eyebrow: "Del barro al código",
      title: "Artesanía, IA e impresión 3D para una cerámica más precisa, personalizable y sostenible.",
      intro: "AlfarerIA combina alfarería tradicional con inteligencia artificial, impresión 3D y una plataforma digital para reducir errores en producción, personalizar piezas y escalar el negocio más allá de la venta física.",
      actions: ["Explorar funcionalidades", "Ver proceso"],
      highlights: [
        "Predicción de contracción en horno",
        "Optimización de esmaltes y materiales",
        "Moldes y herramientas impresas en 3D",
        "Web automatizada y chatbot para clientes"
      ],
      frameAlt: "Taza cerámica inspirada en La Concha al atardecer",
      notes: [
        { label: "Modelo híbrido", title: "Producto + servicio + plataforma", text: "Diseño asistido por IA, producción artesanal y herramientas digitales para escalar." },
        { label: "Clientes", text: "Aficionados, ceramistas profesionales y clientes finales con encargos personalizados." }
      ]
    },
    story: {
      eyebrow: "El proyecto",
      title: "Un taller cerámico que también funciona como servicio digital.",
      paragraphs: [
        "La propuesta evolucionó desde la venta de piezas físicas hacia un modelo más escalable: además de producir cerámica, AlfarerIA puede ofrecer herramientas basadas en IA para otros ceramistas, automatizar la atención al cliente y abrir una capa de diseño participativo para pedidos personalizados.",
        "La impresión 3D acelera moldes, útiles y prototipos. La IA predice contracción, sugiere mezclas, optimiza el uso de materiales y ayuda a generar diseños únicos. Juntas, ambas tecnologías mejoran productividad, sostenibilidad y personalización sin perder el valor artesanal."
      ],
      quote: "El cliente participa en el diseño. AlfarerIA se encarga de convertirlo en pieza real.",
      signoff: "Visión del modelo"
    },
    canvas: {
      eyebrow: "La propuesta",
      title: "Una marca artesanal que también opera como plataforma creativa y técnica.",
      note: "AlfarerIA no se limita a vender piezas: conecta diseño participativo, producción inteligente, formación y herramientas digitales en una experiencia más escalable.",
      cards: [
        {
          tag: "Experiencia",
          title: "El cliente participa desde el primer boceto",
          text: "La web permite describir una idea, subir imágenes de referencia o conversar con un asistente para transformar inspiración en una propuesta visual clara."
        },
        {
          tag: "Producción",
          title: "Tecnología para decidir mejor antes de fabricar",
          text: "La IA ayuda a anticipar contracción, documentar esmaltes y optimizar materiales, mientras la impresión 3D acelera moldes, útiles y prototipos."
        },
        {
          tag: "Servicios",
          title: "Herramientas que también pueden ayudar a otros ceramistas",
          text: "Más allá de la venta final, el proyecto abre la puerta a asistentes técnicos, recursos de laboratorio y soluciones digitales para talleres, escuelas y profesionales."
        },
        {
          tag: "Comunidad",
          title: "Contenido, soporte y aprendizaje continuo",
          text: "La parte digital también acompaña después de la compra o del encargo, con tutoriales, comunidad, automatizaciones y una relación más cercana con cada perfil de usuario."
        }
      ]
    },
    collections: {
      eyebrow: "Líneas de producto",
      title: "La colección física sigue siendo el escaparate tangible del modelo.",
      cards: [
        {
          icon: "Andalucía",
          title: "Andalucía",
          description: "Piezas inspiradas en la identidad andaluza: luz cálida, cal, patios, sierra y mar, convertidos en objetos cotidianos con alma.",
          points: [
            "Paleta luminosa y mediterránea",
            "Referencias al sur, su paisaje y su memoria",
            "Carácter cercano, artesanal y sereno"
          ]
        },
        {
          icon: "Mar",
          title: "Mar",
          description: "Una línea inspirada en espuma, sal, reflejos turquesa y horizontes en calma. Ideal para piezas limpias, frescas y muy luminosas.",
          points: [
            "Paleta turquesa, arena y espuma",
            "Texturas de orilla y agua en movimiento",
            "Estética serena para uso diario"
          ]
        }
      ],
      featured: {
        badge: "Colección destacada",
        title: "La Concha Sunset Series",
        slogan: "Cada taza, un atardecer.",
        intro: "La serie nace de un prompt visual muy concreto: una taza hecha en torno y esmaltada con un paisaje inspirado en La Concha, el mar color esmeralda y un cielo que se mueve entre azul, rosa y naranja.",
        pieces: [
          {
            title: "La Concha Clásica",
            text: "La silueta más icónica de Marbella, capturada cuando el sol besa la cima y lo cambia todo.",
            quote: "Hay lugares que no se explican, se sienten."
          },
          {
            title: "Atardecer en la Bahía",
            text: "Una versión más tranquila, con mar en calma, cielo degradado y una presencia suave de la montaña al fondo.",
            quote: "No todos los días son intensos. Algunos son solo bonitos."
          },
          {
            title: "Mar Esmeralda",
            text: "Verde-azul intenso, brillo mediterráneo y una sensación muy clara de verano que se resiste a terminar.",
            quote: "Un pedacito de verano que no se acaba."
          },
          {
            title: "Pinceladas de Marbella",
            text: "Una lectura más artística y emocional, como si el recuerdo estuviera pintado directamente sobre la cerámica.",
            quote: "Marbella, pero sentida."
          }
        ]
      }
    },
    gallery: {
      ariaLabel: "Selector de piezas",
      eyebrow: "Colección física",
      title: "Un ejemplo de cómo el sistema digital termina convertido en pieza real.",
      note: "Pulsa en cada miniatura para cambiar la pieza protagonista y ver diferentes acabados, referencias y niveles de detalle."
    },
    process: {
      eyebrow: "Proceso creativo",
      title: "Del briefing al horno, con IA y fabricación digital acompañando cada fase.",
      note: "Cada etapa combina una decisión artesanal con una capa tecnológica concreta para reducir errores, acelerar iteraciones y mantener la pieza final bajo control.",
      cards: [
        {
          title: "Brief del cliente",
          text: "El usuario sube una imagen, describe lo que quiere o conversa con el chatbot para definir forma, estilo y uso de la pieza."
        },
        {
          title: "Prototipo visual con IA",
          text: "Un generador visual crea propuestas del resultado final para que el cliente participe activamente en el diseño."
        },
        {
          title: "Predicción de contracción",
          text: "La IA estima cómo se comportará la pieza en secado y cocción para reducir fallos y ajustar medidas antes de fabricar."
        },
        {
          title: "Laboratorio de esmaltes",
          text: "Se prueban recetas, acabados y compatibilidades con ayuda de modelos que optimizan color, textura y resultado esperado."
        },
        {
          title: "Moldes y útiles impresos en 3D",
          text: "La impresión 3D permite producir moldes, soportes y herramientas con rapidez para series cortas y personalización a mayor escala."
        },
        {
          title: "Producción, reciclaje y entrega",
          text: "Se optimiza el uso de pastas y esmaltes, se reduce el desperdicio y la pieza terminada vuelve al cliente con trazabilidad digital."
        }
      ]
    },
    platform: {
      eyebrow: "Plataforma digital",
      title: "Funcionalidades ejemplo para convertir la idea en producto, servicio y plataforma.",
      note: "Estas piezas de interfaz ayudan a imaginar cómo AlfarerIA podría atender a clientes finales, profesionales y comunidad desde un mismo entorno digital.",
      cards: [
        {
          tag: "Self-service",
          title: "Configurador visual con IA",
          text: "Un espacio para subir una imagen, describir una pieza o mezclar referencias y recibir propuestas visuales antes de pasar al taller.",
          points: [
            "Entrada por imagen, texto o estilo",
            "Versiones alternativas en segundos",
            "Validación visual antes de producir"
          ]
        },
        {
          tag: "Asistencia",
          title: "Chatbot de co-creación y soporte",
          text: "El usuario puede conversar con un asistente para aterrizar una idea, resolver dudas de compra o recibir orientación técnica según su perfil.",
          points: [
            "Brief guiado paso a paso",
            "Soporte para aficionados y profesionales",
            "Atención automatizada y continua"
          ]
        },
        {
          tag: "IA aplicada",
          title: "Predictor de contracción",
          text: "Una herramienta técnica para estimar deformaciones y ajustar medidas según pasta, espesor y curva de cocción antes de fabricar.",
          points: [
            "Menos errores en horno",
            "Mejor ajuste dimensional",
            "Valor útil también como servicio"
          ]
        },
        {
          tag: "I+D cerámico",
          title: "Biblioteca viva de esmaltes",
          text: "Un sistema para registrar pruebas, comparar resultados y sugerir ajustes en color, textura o compatibilidad entre materiales.",
          points: [
            "Historial de recetas y resultados",
            "Aprendizaje acumulado del taller",
            "Menos ensayo ciego y menos desperdicio"
          ]
        },
        {
          tag: "Fabricación digital",
          title: "Centro 3D para moldes y útiles",
          text: "Zona pensada para generar moldes, soportes y prototipos con rapidez, facilitando producción bajo demanda y personalización repetible.",
          points: [
            "Series cortas más viables",
            "Herramientas precisas para el taller",
            "Puente entre artesanía y fabricación digital"
          ]
        },
        {
          tag: "Comunidad",
          title: "Aula, comunidad y servicios pro",
          text: "Una capa educativa con tutoriales, soporte, recursos para escuelas y servicios avanzados para ceramistas que necesitan más acompañamiento.",
          points: [
            "Formación para perfiles distintos",
            "Comunidad digital alrededor del proyecto",
            "Servicios premium y relación a largo plazo"
          ]
        }
      ]
    },
    useCases: {
      eyebrow: "Escenarios de uso",
      title: "Tres maneras de vivir AlfarerIA según quién entra en la plataforma.",
      note: "La misma infraestructura puede servir para un encargo emocional, una necesidad técnica o una experiencia educativa más completa.",
      cards: [
        {
          tag: "Cliente final",
          title: "Quiero una pieza única para mí o para regalar",
          text: "Subo una imagen, explico el ambiente que busco y veo un prototipo visual antes de aprobar la producción artesanal.",
          points: [
            "Diseño participativo sin conocimientos técnicos",
            "Seguimiento más claro del encargo",
            "Resultado personalizado y emocional"
          ]
        },
        {
          tag: "Profesional",
          title: "Necesito herramientas para producir con más control",
          text: "Utilizo predicción, documentación de esmaltes y recursos 3D para reducir pruebas fallidas y repetir series con mayor consistencia.",
          points: [
            "Datos útiles para decisiones de taller",
            "Más productividad en series cortas",
            "Servicios digitales con enfoque técnico"
          ]
        },
        {
          tag: "Escuela o taller",
          title: "Quiero enseñar y experimentar con una capa digital",
          text: "La plataforma acompaña clases, ejercicios y demostraciones con chatbot, tutoriales y ejemplos que acercan la innovación al aula.",
          points: [
            "Formación más visual e interactiva",
            "Recursos para comunidad y aprendizaje",
            "Puente entre tradición y nuevas tecnologías"
          ]
        }
      ]
    },
    cta: {
      eyebrow: "AlfarerIA",
      title: "Una propuesta que une objeto, servicio digital y conocimiento compartido.",
      text: "La colección física sigue siendo importante, pero ahora forma parte de un sistema más amplio: co-diseño con clientes, herramientas para ceramistas, formación, automatización y una producción más consciente.",
      button: "Explorar el concepto completo"
    },
    footer: [
      "Piezas hechas a mano, una a una.",
      "Para que el sur, su luz, sus mares y sus montañas te acompañen cada día.",
      "AlfarerIA"
    ]
  },
  en: {
    htmlLang: "en",
    pageTitle: "AlfarerIA | Pottery, AI and 3D printing",
    metaDescription: "AlfarerIA combines traditional pottery, artificial intelligence, 3D printing and a digital platform to personalize pieces and optimize ceramic production.",
    brandAriaLabel: "Go to the AlfarerIA homepage",
    brandSubtitle: "Traditional pottery, AI, 3D printing and digital platform",
    navAriaLabel: "Main navigation",
    langSwitchAriaLabel: "Language selector",
    navLinks: ["Concept", "Process", "Platform", "Collection"],
    navCta: "View features",
    hero: {
      eyebrow: "From clay to code",
      title: "Craft, AI and 3D printing for ceramics that are more precise, customizable and sustainable.",
      intro: "AlfarerIA combines traditional pottery with artificial intelligence, 3D printing and a digital platform to reduce production errors, personalize pieces and scale beyond physical product sales.",
      actions: ["Explore features", "View process"],
      highlights: [
        "Kiln shrinkage prediction",
        "Glaze and material optimization",
        "3D-printed molds and tools",
        "Automated website and customer chatbot"
      ],
      frameAlt: "Ceramic mug inspired by La Concha at sunset",
      notes: [
        { label: "Hybrid model", title: "Product + service + platform", text: "AI-assisted design, handmade production and digital tools built to scale." },
        { label: "Customers", text: "Hobbyists, professional ceramicists and end customers looking for custom pieces." }
      ]
    },
    story: {
      eyebrow: "The project",
      title: "A ceramic studio that also works as a digital service.",
      paragraphs: [
        "The proposal evolved from selling physical pieces into a more scalable model: beyond producing ceramics, AlfarerIA can offer AI-based tools for other ceramicists, automate customer interaction and open a participatory design layer for custom orders.",
        "3D printing speeds up molds, tools and prototypes. AI predicts shrinkage, suggests mixtures, optimizes material usage and helps generate unique designs. Together, both technologies improve productivity, sustainability and personalization without losing handmade value."
      ],
      quote: "The customer takes part in the design. AlfarerIA turns it into a real object.",
      signoff: "Business vision"
    },
    canvas: {
      eyebrow: "The concept",
      title: "A handmade brand that also operates as a creative and technical platform.",
      note: "AlfarerIA is not limited to selling pieces: it connects participatory design, smart production, training and digital tools in a more scalable experience.",
      cards: [
        {
          tag: "Experience",
          title: "The customer takes part from the very first sketch",
          text: "The website lets people describe an idea, upload references or talk to an assistant to turn inspiration into a clear visual proposal."
        },
        {
          tag: "Production",
          title: "Technology helps make better decisions before making",
          text: "AI helps anticipate shrinkage, document glazes and optimize materials, while 3D printing speeds up molds, tools and prototypes."
        },
        {
          tag: "Services",
          title: "Tools that can also support other ceramicists",
          text: "Beyond final sales, the project can evolve into technical assistants, lab resources and digital solutions for studios, schools and professionals."
        },
        {
          tag: "Community",
          title: "Content, support and continuous learning",
          text: "The digital layer continues after the purchase or commission through tutorials, community, automations and a closer relationship with each user profile."
        }
      ]
    },
    collections: {
      eyebrow: "Product lines",
      title: "The physical collection remains the tangible showcase of the model.",
      cards: [
        {
          icon: "Andalusia",
          title: "Andalusia",
          description: "Pieces inspired by Andalusian identity: warm light, whitewashed walls, courtyards, mountains and sea, transformed into everyday objects with soul.",
          points: [
            "A bright Mediterranean palette",
            "References to the south, its landscape and its memory",
            "A close, handmade and serene character"
          ]
        },
        {
          icon: "Sea",
          title: "Sea",
          description: "A line inspired by foam, salt, turquoise reflections and calm horizons. Ideal for clean, fresh and luminous pieces.",
          points: [
            "Turquoise, sand and sea-foam palette",
            "Shoreline and moving-water textures",
            "A serene aesthetic for daily use"
          ]
        }
      ],
      featured: {
        badge: "Featured collection",
        title: "La Concha Sunset Series",
        slogan: "Every mug, a sunset.",
        intro: "This series comes from a very specific visual prompt: a wheel-thrown mug glazed with a landscape inspired by La Concha, emerald sea and a sky moving through blue, pink and orange.",
        pieces: [
          {
            title: "La Concha Classic",
            text: "The most iconic silhouette of Marbella, captured at the exact moment when the sun kisses the peak and changes everything.",
            quote: "Some places are not explained. They are felt."
          },
          {
            title: "Sunset in the Bay",
            text: "A gentler version, with calm sea, gradient skies and a soft presence of the mountain in the distance.",
            quote: "Not every day is intense. Some are simply beautiful."
          },
          {
            title: "Emerald Sea",
            text: "Deep blue-green color, Mediterranean brilliance and the clear feeling of a summer that refuses to end.",
            quote: "A little piece of summer that never quite leaves."
          },
          {
            title: "Brushstrokes of Marbella",
            text: "A more artistic and emotional reading, as if the memory had been painted directly onto the ceramic.",
            quote: "Marbella, but felt."
          }
        ]
      }
    },
    gallery: {
      ariaLabel: "Piece selector",
      eyebrow: "Physical collection",
      title: "An example of how the digital system ends up becoming a real ceramic piece.",
      note: "Click each thumbnail to switch the main piece and see different finishes, references and levels of detail."
    },
    process: {
      eyebrow: "Creative process",
      title: "From briefing to kiln, with AI and digital fabrication supporting every stage.",
      note: "Each step combines a handmade decision with a specific technological layer to reduce errors, speed up iteration and keep the final piece under control.",
      cards: [
        {
          title: "Client brief",
          text: "The user uploads an image, describes what they want or talks to the chatbot to define shape, style and intended use."
        },
        {
          title: "AI visual prototype",
          text: "A visual generator creates proposals of the final result so the customer can actively take part in the design."
        },
        {
          title: "Shrinkage prediction",
          text: "AI estimates how the piece will behave during drying and firing to reduce errors and adjust dimensions before production."
        },
        {
          title: "Glaze lab",
          text: "Recipes, finishes and compatibilities are tested with models that optimize color, texture and the expected outcome."
        },
        {
          title: "3D-printed molds and tools",
          text: "3D printing makes it possible to produce molds, supports and tools quickly for short runs and higher-scale customization."
        },
        {
          title: "Production, recycling and delivery",
          text: "Clay and glaze usage is optimized, waste is reduced and the finished piece returns to the customer with digital traceability."
        }
      ]
    },
    platform: {
      eyebrow: "Digital platform",
      title: "Feature examples that turn the idea into product, service and platform.",
      note: "These interface blocks help imagine how AlfarerIA could serve end customers, professionals and community from a shared digital environment.",
      cards: [
        {
          tag: "Self-service",
          title: "AI visual configurator",
          text: "A space to upload an image, describe a piece or combine references and receive visual proposals before moving into production.",
          points: [
            "Image, text or style-based input",
            "Alternative versions in seconds",
            "Visual approval before making"
          ]
        },
        {
          tag: "Assistance",
          title: "Co-creation and support chatbot",
          text: "Users can talk to an assistant to shape an idea, solve buying questions or get technical guidance based on their profile.",
          points: [
            "Guided briefing step by step",
            "Support for hobbyists and professionals",
            "Continuous automated assistance"
          ]
        },
        {
          tag: "Applied AI",
          title: "Shrinkage predictor",
          text: "A technical tool to estimate deformation and adjust dimensions according to clay body, thickness and firing curve before production.",
          points: [
            "Fewer kiln errors",
            "Better dimensional control",
            "Value as a service as well"
          ]
        },
        {
          tag: "Ceramic R&D",
          title: "Living glaze library",
          text: "A system to record tests, compare outcomes and suggest adjustments in color, texture or material compatibility.",
          points: [
            "Recipe and results history",
            "Accumulated workshop learning",
            "Less blind testing and less waste"
          ]
        },
        {
          tag: "Digital fabrication",
          title: "3D molds and tools hub",
          text: "An area built to generate molds, supports and prototypes quickly, enabling on-demand production and repeatable customization.",
          points: [
            "Short runs become more viable",
            "Precise tools for the workshop",
            "A bridge between craft and digital fabrication"
          ]
        },
        {
          tag: "Community",
          title: "Academy, community and pro services",
          text: "An educational layer with tutorials, support, resources for schools and advanced services for ceramicists who need deeper guidance.",
          points: [
            "Training for different profiles",
            "A digital community around the project",
            "Premium services and long-term relationships"
          ]
        }
      ]
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Three different ways to experience AlfarerIA depending on who enters the platform.",
      note: "The same infrastructure can support an emotional commission, a technical need or a fuller educational experience.",
      cards: [
        {
          tag: "End customer",
          title: "I want a unique piece for myself or as a gift",
          text: "I upload an image, explain the atmosphere I want and see a visual prototype before approving handmade production.",
          points: [
            "Participatory design without technical knowledge",
            "A clearer view of the commission",
            "A personalized and emotional outcome"
          ]
        },
        {
          tag: "Professional",
          title: "I need tools to produce with more control",
          text: "I use prediction, glaze documentation and 3D resources to reduce failed tests and repeat short runs more consistently.",
          points: [
            "Useful data for workshop decisions",
            "Higher productivity in short runs",
            "Digital services with a technical focus"
          ]
        },
        {
          tag: "School or studio",
          title: "I want to teach and experiment with a digital layer",
          text: "The platform supports classes, exercises and demonstrations with chatbot help, tutorials and examples that bring innovation into the classroom.",
          points: [
            "More visual and interactive learning",
            "Resources for community and education",
            "A bridge between tradition and new technologies"
          ]
        }
      ]
    },
    cta: {
      eyebrow: "AlfarerIA",
      title: "A proposal that brings together object, digital service and shared knowledge.",
      text: "The physical collection still matters, but it now belongs to a wider system: co-design with customers, tools for ceramicists, training, automation and more mindful production.",
      button: "Explore the full concept"
    },
    footer: [
      "Handmade pieces, one by one.",
      "So that the south, its light, its seas and its mountains can stay with you every day.",
      "AlfarerIA"
    ]
  }
};

let currentLanguage = localStorage.getItem("alfareria_lang") || "es";
let currentSpotlightKey = document.querySelector(".thumb-button.active")?.dataset.key || "artistica";

function renderSpotlight(key = currentSpotlightKey) {
  const item = galleryItems[key];
  if (!item || !ui.spotlightImage || !ui.spotlightKicker || !ui.spotlightTitle || !ui.spotlightText) {
    return;
  }

  currentSpotlightKey = key;

  ui.spotlightImage.src = item.image;
  ui.spotlightImage.alt = item[currentLanguage].alt;
  ui.spotlightKicker.textContent = item[currentLanguage].kicker;
  ui.spotlightTitle.textContent = item[currentLanguage].title;
  ui.spotlightText.textContent = item[currentLanguage].text;

  thumbButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.key === key);
    const thumbImage = button.querySelector("img");
    if (thumbImage) {
      thumbImage.alt = galleryItems[button.dataset.key][currentLanguage].alt;
    }
  });
}

function applyLanguage(lang) {
  const language = translations[lang] ? lang : "es";
  const t = translations[language];

  currentLanguage = language;
  localStorage.setItem("alfareria_lang", language);

  ui.html.lang = t.htmlLang;
  document.title = t.pageTitle;
  if (ui.metaDescription) {
    ui.metaDescription.setAttribute("content", t.metaDescription);
  }

  ui.brandLink?.setAttribute("aria-label", t.brandAriaLabel);
  if (ui.brandSubtitle) ui.brandSubtitle.textContent = t.brandSubtitle;
  ui.nav?.setAttribute("aria-label", t.navAriaLabel);
  ui.langSwitch?.setAttribute("aria-label", t.langSwitchAriaLabel);

  ui.navLinks.forEach((link, index) => {
    link.textContent = t.navLinks[index];
  });
  if (ui.navCta) ui.navCta.textContent = t.navCta;

  if (ui.heroEyebrow) ui.heroEyebrow.textContent = t.hero.eyebrow;
  if (ui.heroTitle) ui.heroTitle.textContent = t.hero.title;
  if (ui.heroIntro) ui.heroIntro.textContent = t.hero.intro;
  ui.heroActionButtons.forEach((button, index) => {
    button.textContent = t.hero.actions[index];
  });
  ui.heroHighlights.forEach((item, index) => {
    item.textContent = t.hero.highlights[index];
  });
  if (ui.heroFrameImage) ui.heroFrameImage.alt = t.hero.frameAlt;

  const topNote = ui.heroNotes[0];
  const bottomNote = ui.heroNotes[1];
  if (topNote) {
    topNote.querySelector(".note-label").textContent = t.hero.notes[0].label;
    topNote.querySelector("strong").textContent = t.hero.notes[0].title;
    topNote.querySelector("p").textContent = t.hero.notes[0].text;
  }
  if (bottomNote) {
    bottomNote.querySelector(".note-label").textContent = t.hero.notes[1].label;
    bottomNote.querySelector("p").textContent = t.hero.notes[1].text;
  }

  if (ui.storyEyebrow) ui.storyEyebrow.textContent = t.story.eyebrow;
  if (ui.storyTitle) ui.storyTitle.textContent = t.story.title;
  ui.storyParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = t.story.paragraphs[index];
  });
  if (ui.quoteCopy) ui.quoteCopy.textContent = t.story.quote;
  if (ui.quoteSignoff) ui.quoteSignoff.textContent = t.story.signoff;

  if (ui.canvasEyebrow) ui.canvasEyebrow.textContent = t.canvas.eyebrow;
  if (ui.canvasTitle) ui.canvasTitle.textContent = t.canvas.title;
  if (ui.canvasNote) ui.canvasNote.textContent = t.canvas.note;
  ui.canvasCards.forEach((card, index) => {
    const content = t.canvas.cards[index];
    if (!content) return;
    card.querySelector(".canvas-tag").textContent = content.tag;
    card.querySelector("h3").textContent = content.title;
    card.querySelector("p").textContent = content.text;
  });

  if (ui.collectionsEyebrow) ui.collectionsEyebrow.textContent = t.collections.eyebrow;
  if (ui.collectionsTitle) ui.collectionsTitle.textContent = t.collections.title;

  const andaluciaCard = ui.collectionCards[0];
  const marCard = ui.collectionCards[1];
  const featuredCard = ui.collectionCards[2];

  [andaluciaCard, marCard].forEach((card, index) => {
    if (!card) return;
    const content = t.collections.cards[index];
    card.querySelector(".collection-icon").textContent = content.icon;
    card.querySelector("h3").textContent = content.title;
    card.querySelector("p").textContent = content.description;
    [...card.querySelectorAll(".collection-points li")].forEach((item, pointIndex) => {
      item.textContent = content.points[pointIndex];
    });
  });

  if (featuredCard) {
    featuredCard.querySelector(".collection-badge").textContent = t.collections.featured.badge;
    featuredCard.querySelector("h3").textContent = t.collections.featured.title;
    featuredCard.querySelector(".featured-slogan").textContent = t.collections.featured.slogan;
    featuredCard.querySelector(".featured-slogan + p").textContent = t.collections.featured.intro;
    [...featuredCard.querySelectorAll(".series-piece")].forEach((piece, index) => {
      piece.querySelector("h4").textContent = t.collections.featured.pieces[index].title;
      piece.querySelector("p").textContent = t.collections.featured.pieces[index].text;
      piece.querySelector("blockquote").textContent = t.collections.featured.pieces[index].quote;
    });
  }

  ui.gallerySection?.setAttribute("aria-label", t.gallery.ariaLabel);
  if (ui.galleryEyebrow) ui.galleryEyebrow.textContent = t.gallery.eyebrow;
  if (ui.galleryTitle) ui.galleryTitle.textContent = t.gallery.title;
  if (ui.galleryNote) ui.galleryNote.textContent = t.gallery.note;

  if (ui.processEyebrow) ui.processEyebrow.textContent = t.process.eyebrow;
  if (ui.processTitle) ui.processTitle.textContent = t.process.title;
  if (ui.processNote) ui.processNote.textContent = t.process.note;
  ui.processCards.forEach((card, index) => {
    card.querySelector("h3").textContent = t.process.cards[index].title;
    card.querySelector("p").textContent = t.process.cards[index].text;
  });

  if (ui.platformEyebrow) ui.platformEyebrow.textContent = t.platform.eyebrow;
  if (ui.platformTitle) ui.platformTitle.textContent = t.platform.title;
  if (ui.platformNote) ui.platformNote.textContent = t.platform.note;
  ui.featureCards.forEach((card, index) => {
    const content = t.platform.cards[index];
    if (!content) return;
    card.querySelector(".feature-tag").textContent = content.tag;
    card.querySelector("h3").textContent = content.title;
    card.querySelector("p").textContent = content.text;
    [...card.querySelectorAll(".feature-points li")].forEach((item, pointIndex) => {
      item.textContent = content.points[pointIndex];
    });
  });

  if (ui.useCasesEyebrow) ui.useCasesEyebrow.textContent = t.useCases.eyebrow;
  if (ui.useCasesTitle) ui.useCasesTitle.textContent = t.useCases.title;
  if (ui.useCasesNote) ui.useCasesNote.textContent = t.useCases.note;
  ui.useCaseCards.forEach((card, index) => {
    const content = t.useCases.cards[index];
    if (!content) return;
    card.querySelector(".use-case-tag").textContent = content.tag;
    card.querySelector("h3").textContent = content.title;
    card.querySelector("p").textContent = content.text;
    [...card.querySelectorAll(".use-case-points li")].forEach((item, pointIndex) => {
      item.textContent = content.points[pointIndex];
    });
  });

  if (ui.ctaEyebrow) ui.ctaEyebrow.textContent = t.cta.eyebrow;
  if (ui.ctaTitle) ui.ctaTitle.textContent = t.cta.title;
  if (ui.ctaText) ui.ctaText.textContent = t.cta.text;
  if (ui.ctaButton) ui.ctaButton.textContent = t.cta.button;

  ui.footerLines.forEach((line, index) => {
    line.textContent = t.footer[index];
  });

  langToggles.forEach((toggle) => {
    const isActive = toggle.dataset.lang === language;
    toggle.classList.toggle("active", isActive);
    toggle.setAttribute("aria-pressed", String(isActive));
  });

  renderSpotlight(currentSpotlightKey);
}

thumbButtons.forEach((button) => {
  button.addEventListener("click", () => renderSpotlight(button.dataset.key));
});

langToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => applyLanguage(toggle.dataset.lang));
});

applyLanguage(currentLanguage);
