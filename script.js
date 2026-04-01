const page = document.body.dataset.page || "home";
const langToggles = [...document.querySelectorAll(".lang-toggle")];
const navLinks = [...document.querySelectorAll(".nav a")];
const navCta = document.querySelector(".nav-cta");
const brandLink = document.querySelector(".brand");
const brandSubtitle = document.querySelector(".brand-copy span");
const footerLines = [...document.querySelectorAll(".footer p")];
const metaDescription = document.querySelector('meta[name="description"]');

const state = {
  language: localStorage.getItem("alfareria_lang") || "es",
  processStage: "brief",
  chatbotReply: "gift",
  collection: "andalucia",
  collectionItem: "sur"
};

const commonTranslations = {
  es: {
    htmlLang: "es",
    brandAriaLabel: "Ir al inicio de AlfarerIA",
    brandSubtitle: "Alfarería tradicional, IA, impresión 3D y plataforma digital",
    navAriaLabel: "Principal",
    langSwitchAriaLabel: "Selector de idioma",
    nav: {
      home: "Inicio",
      process: "Proceso",
      platform: "Plataforma",
      collection: "Colección"
    },
    footer: [
      "Piezas hechas a mano, una a una.",
      "Para que el sur, su luz, sus mares y sus montañas te acompañen cada día.",
      "AlfarerIA"
    ]
  },
  en: {
    htmlLang: "en",
    brandAriaLabel: "Go to the AlfarerIA homepage",
    brandSubtitle: "Traditional pottery, AI, 3D printing and digital platform",
    navAriaLabel: "Main navigation",
    langSwitchAriaLabel: "Language selector",
    nav: {
      home: "Home",
      process: "Process",
      platform: "Platform",
      collection: "Collection"
    },
    footer: [
      "Handmade pieces, one by one.",
      "So that the south, its light, its seas and its mountains can stay with you every day.",
      "AlfarerIA"
    ]
  }
};

const pageTranslations = {
  home: {
    es: {
      title: "AlfarerIA | Landing",
      description: "AlfarerIA une alfarería tradicional, inteligencia artificial e impresión 3D en una experiencia digital con páginas separadas para proceso, plataforma y colección.",
      navCta: "Probar la plataforma",
      hero: {
        eyebrow: "Del barro al código",
        title: "Cerámica artesanal con una capa digital pensada para diseñar, producir y aprender mejor.",
        intro: "AlfarerIA presenta una forma más clara de entender el proyecto: una landing limpia y tres páginas específicas donde se exploran el proceso, la plataforma y la colección.",
        primary: "Ver demos",
        secondary: "Descubrir el proceso",
        imageAlt: "Taza cerámica inspirada en La Concha al atardecer",
        highlights: [
          "Diseño participativo con IA",
          "Producción más precisa",
          "Moldes y útiles impresos en 3D",
          "Tutoriales, soporte y comunidad"
        ]
      },
      routes: {
        eyebrow: "Recorrido web",
        title: "La experiencia se divide en páginas claras, cada una con una función distinta.",
        note: "En lugar de apilar toda la información en una sola pantalla, la web separa lo esencial en rutas más lógicas y más fáciles de explorar.",
        cards: [
          {
            tag: "Proceso",
            title: "Cómo pasa una idea de la definición del producto deseado al horno",
            text: "Una página centrada en etapas, decisiones de taller y herramientas que apoyan cada fase."
          },
          {
            tag: "Plataforma",
            title: "Demos sencillas que muestran funcionalidades reales",
            text: "Configurador visual, cálculo de contracción y chatbot conceptual para enseñar el valor digital."
          },
          {
            tag: "Colección",
            title: "La parte emocional y visual del proyecto",
            text: "Una galería por colecciones para ver cómo la propuesta termina convertida en piezas concretas."
          }
        ]
      },
      value: {
        eyebrow: "Qué aporta",
        title: "La mezcla de artesanía y tecnología se entiende mejor cuando cada capa tiene su propio espacio.",
        cards: [
          {
            tag: "Cliente",
            title: "Más claridad antes de encargar una pieza",
            text: "La plataforma ayuda a describir una idea, verla antes y reducir malentendidos en el encargo."
          },
          {
            tag: "Taller",
            title: "Más control técnico durante la producción",
            text: "La IA y la impresión 3D se presentan como herramientas que apoyan decisiones reales de taller."
          },
          {
            tag: "Comunidad",
            title: "Más recorrido después de la venta",
            text: "El proyecto también abre espacio para formación, soporte, inspiración y servicios para otros perfiles."
          }
        ]
      },
      teaser: {
        eyebrow: "Pieza destacada",
        title: "La Concha Sunset Series sigue siendo la puerta de entrada emocional.",
        paragraphs: [
          "La colección resume bien el espíritu de AlfarerIA: paisaje, memoria, objeto cotidiano y una estética que mezcla sensibilidad artesanal con imaginario generado digitalmente.",
          "En la página de colección puedes cambiar entre líneas, imágenes y descripciones para ver cómo se organiza el catálogo de una forma más rica y más limpia."
        ],
        button: "Explorar colección"
      }
    },
    en: {
      title: "AlfarerIA | Landing",
      description: "AlfarerIA brings together traditional pottery, artificial intelligence and 3D printing through a clearer digital experience with separate pages for process, platform and collection.",
      navCta: "Try the platform",
      hero: {
        eyebrow: "From clay to code",
        title: "Handmade ceramics with a digital layer designed to plan, produce and learn more clearly.",
        intro: "AlfarerIA now presents the project in a cleaner way: one landing page and three focused pages for the process, the platform and the collection.",
        primary: "View demos",
        secondary: "Discover the process",
        imageAlt: "Ceramic mug inspired by La Concha at sunset",
        highlights: [
          "Participatory design with AI",
          "More precise production",
          "3D-printed molds and tools",
          "Tutorials, support and community"
        ]
      },
      routes: {
        eyebrow: "Website journey",
        title: "The experience is split into clear pages, each one built for a different job.",
        note: "Instead of stacking everything on one long page, the website separates the essentials into more logical and easier routes.",
        cards: [
          {
            tag: "Process",
            title: "How an idea moves from briefing to kiln",
            text: "A page focused on stages, workshop decisions and the tools that support each phase."
          },
          {
            tag: "Platform",
            title: "Simple demos that show real functionality",
            text: "A visual configurator, shrinkage calculation and a conceptual chatbot to make the digital value visible."
          },
          {
            tag: "Collection",
            title: "The emotional and visual side of the project",
            text: "A collection gallery to show how the concept ends up becoming real pieces."
          }
        ]
      },
      value: {
        eyebrow: "What it adds",
        title: "The blend of craft and technology makes more sense when every layer has its own space.",
        cards: [
          {
            tag: "Customer",
            title: "More clarity before ordering a piece",
            text: "The platform helps describe an idea, see it sooner and reduce misunderstandings before production."
          },
          {
            tag: "Workshop",
            title: "More technical control during production",
            text: "AI and 3D printing are presented as tools that support real workshop decisions."
          },
          {
            tag: "Community",
            title: "More value after the sale",
            text: "The project also opens space for training, support, inspiration and services for other user profiles."
          }
        ]
      },
      teaser: {
        eyebrow: "Featured piece",
        title: "La Concha Sunset Series remains the emotional entry point.",
        paragraphs: [
          "The collection captures the spirit of AlfarerIA: landscape, memory, everyday use and an aesthetic that mixes handmade sensitivity with digitally imagined visuals.",
          "On the collection page you can switch between lines, images and descriptions to see how the catalogue can be presented in a richer and cleaner way."
        ],
        button: "Explore collection"
      }
    }
  },
  process: {
    es: {
      title: "AlfarerIA | Proceso",
      description: "Proceso creativo de AlfarerIA: de la definición del producto deseado al horno con apoyo de inteligencia artificial, impresión 3D y decisiones artesanales.",
      navCta: "Probar la plataforma",
      hero: {
        eyebrow: "Proceso",
        title: "Cada pieza nace de una conversación, pasa por una validación digital y termina en un gesto artesanal.",
        intro: "Esta página explica cómo se reparte el trabajo entre cliente, plataforma, inteligencia artificial, impresión 3D y taller cerámico."
      },
      timeline: {
        eyebrow: "Etapas",
        title: "Seis momentos donde la tecnología acompaña, pero no sustituye, la mano del taller.",
        note: "El objetivo no es automatizarlo todo, sino decidir mejor antes, durante y después de la producción.",
        cards: [
          ["Definición del producto deseado", "El encargo empieza con una necesidad, una imagen o una emoción que se traduce a una definición clara y usable."],
          ["Prototipo visual", "La IA genera una vista previa para que la conversación sea más clara antes de fabricar."],
          ["Decisión técnica", "Se revisan forma, medidas, contracción y viabilidad según la pieza deseada."],
          ["Laboratorio", "Los esmaltes, las pruebas y los acabados se documentan para aprender en cada iteración."],
          ["Apoyo 3D", "Moldes, soportes y prototipos permiten trabajar con más precisión y menos ensayo ciego."],
          ["Producción y entrega", "La pieza final vuelve al cliente con mejor trazabilidad y con un uso más consciente de materiales."]
        ]
      },
      explorer: {
        eyebrow: "Explorador",
        title: "Pulsa una fase para ver qué ocurre realmente en cada tramo del proceso.",
        note: "Este panel resume qué aporta la plataforma y qué sigue dependiendo del criterio artesanal."
      },
      cycle: {
        eyebrow: "Ciclo de trabajo",
        title: "La mejora del proceso también pasa por documentar, reutilizar y aprender del taller.",
        cards: [
          ["Materiales", "Menos desperdicio", "Registrar consumos y sobrantes ayuda a reciclar mejor y a estimar futuras producciones."],
          ["Conocimiento", "Más memoria técnica", "Cada prueba de esmalte y cada resultado quedan mejor documentados para no empezar de cero."],
          ["Escalabilidad", "Más capacidad de repetir con criterio", "La producción sigue siendo artesanal, pero gana estructura para atender más casos sin perder calidad."]
        ]
      },
      cta: {
        eyebrow: "Siguiente paso",
        title: "Después del proceso, la siguiente capa lógica es ver la plataforma en acción.",
        text: "La página de plataforma aterriza la parte digital con demos pequeñas que enseñan cómo se sentiría el producto.",
        button: "Abrir plataforma"
      }
    },
    en: {
      title: "AlfarerIA | Process",
      description: "Creative process at AlfarerIA: from the desired product definition to the kiln with support from artificial intelligence, 3D printing and handmade decisions.",
      navCta: "Try the platform",
      hero: {
        eyebrow: "Process",
        title: "Every piece starts with a conversation, moves through digital validation and ends in a handmade gesture.",
        intro: "This page explains how the work is shared between the customer, the platform, artificial intelligence, 3D printing and the ceramic workshop."
      },
      timeline: {
        eyebrow: "Stages",
        title: "Six moments where technology supports the workshop hand instead of replacing it.",
        note: "The goal is not to automate everything, but to make better decisions before, during and after production.",
        cards: [
          ["Desired product definition", "A request begins with a need, an image or an emotion that is translated into a clear and usable definition."],
          ["Visual prototype", "AI generates a first preview so the conversation becomes clearer before production starts."],
          ["Technical decision", "Form, dimensions, shrinkage and viability are reviewed according to the intended piece."],
          ["Lab work", "Glazes, tests and finishes are documented so every iteration teaches something."],
          ["3D support", "Molds, supports and prototypes help the workshop work with more precision and less blind testing."],
          ["Production and delivery", "The final piece returns to the customer with better traceability and more mindful material use."]
        ]
      },
      explorer: {
        eyebrow: "Explorer",
        title: "Click a phase to see what really happens at each stage of the process.",
        note: "This panel summarizes what the platform contributes and what still depends on handmade judgment."
      },
      cycle: {
        eyebrow: "Workflow loop",
        title: "Improving the process also means documenting, reusing and learning from the workshop.",
        cards: [
          ["Materials", "Less waste", "Tracking use and leftovers helps recycle better and estimate future production."],
          ["Knowledge", "More technical memory", "Every glaze test and every outcome are documented more clearly so the studio does not start from scratch every time."],
          ["Scalability", "More repeatability with judgment", "Production remains handmade, but gains structure to handle more cases without losing quality."]
        ]
      },
      cta: {
        eyebrow: "Next step",
        title: "After the process, the next logical layer is seeing the platform in action.",
        text: "The platform page turns the digital side into small demos that show what the product could feel like.",
        button: "Open platform"
      }
    }
  },
  platform: {
    es: {
      title: "AlfarerIA | Plataforma",
      description: "Plataforma digital de AlfarerIA con demos de configurador visual, cálculo de contracción y chatbot de co-creación.",
      navCta: "Ver colección",
      hero: {
        eyebrow: "Plataforma",
        title: "Aquí la parte digital deja de ser un concepto y empieza a comportarse como producto.",
        intro: "Esta página reúne pequeños prototipos para mostrar cómo podrían sentirse algunas funcionalidades de AlfarerIA."
      },
      section: {
        eyebrow: "Demostraciones",
        title: "Tres ejemplos sencillos para enseñar diseño asistido, apoyo técnico y atención guiada.",
        note: "No son herramientas finales, pero sí ayudan a visualizar el tipo de producto digital que podría acompañar al taller."
      },
      tools: {
        tags: ["Configurador", "Cálculo", "Chatbot"],
        titles: [
          "Genera un concepto de pieza a partir de una idea",
          "Simula la contracción de una pieza antes de fabricarla",
          "Prueba tres preguntas típicas de cliente o comunidad"
        ],
        labels: {
          idea: "Describe la pieza",
          mood: "Ambiente",
          audience: "Perfil",
          diameter: "Diámetro inicial (cm)",
          height: "Altura inicial (cm)",
          shrinkage: "Contracción estimada (%)"
        },
        button: "Generar propuesta",
        configKicker: "Propuesta IA",
        calcKicker: "Resultado estimado",
        chatKicker: "Respuesta guiada",
        calcLabels: ["Diámetro final", "Altura final", "Merma aplicada"],
        calcText: "Este cálculo ilustra cómo la IA puede ayudar a ajustar medidas antes de pasar a producción.",
        promptButtons: {
          gift: "Quiero un regalo",
          glaze: "Necesito ayuda con esmaltes",
          classroom: "Busco una demo para clase"
        }
      },
      features: {
        eyebrow: "Capas del producto",
        title: "La plataforma no sirve solo para vender: también ordena, acompaña y enseña.",
        cards: [
          ["Self-service", "Reduce fricción en los encargos", "El cliente llega con más claridad al taller porque ha podido describir, visualizar y acotar lo que quiere."],
          ["Soporte técnico", "Aporta criterio antes de gastar tiempo y material", "Las herramientas digitales ayudan a decidir medidas, pruebas y recursos antes de entrar en fases costosas."],
          ["Comunidad", "Abre una segunda línea de valor", "Tutoriales, demos y servicios para profesionales amplían el proyecto más allá de la venta de piezas."]
        ]
      },
      cta: {
        eyebrow: "Siguiente paso",
        title: "Después de entender la plataforma, toca volver al objeto y a la colección.",
        text: "La página de colección convierte todo esto en piezas, series y relatos visuales más concretos.",
        button: "Ir a la colección"
      }
    },
    en: {
      title: "AlfarerIA | Platform",
      description: "AlfarerIA's digital platform with demos for a visual configurator, shrinkage calculation and a co-creation chatbot.",
      navCta: "View collection",
      hero: {
        eyebrow: "Platform",
        title: "Here the digital layer stops being a concept and starts behaving like a product.",
        intro: "This page gathers small prototypes to show how some AlfarerIA features could feel in practice."
      },
      section: {
        eyebrow: "Demonstrations",
        title: "Three simple examples to show assisted design, technical support and guided attention.",
        note: "These are not final tools, but they help visualize the kind of digital product that could support the workshop."
      },
      tools: {
        tags: ["Configurator", "Calculation", "Chatbot"],
        titles: [
          "Generate a piece concept from an idea",
          "Simulate the shrinkage of a piece before making it",
          "Try three typical questions from customers or community"
        ],
        labels: {
          idea: "Describe the piece",
          mood: "Mood",
          audience: "Profile",
          diameter: "Initial diameter (cm)",
          height: "Initial height (cm)",
          shrinkage: "Estimated shrinkage (%)"
        },
        button: "Generate proposal",
        configKicker: "AI concept",
        calcKicker: "Estimated result",
        chatKicker: "Guided response",
        calcLabels: ["Final diameter", "Final height", "Applied loss"],
        calcText: "This calculation illustrates how AI could help adjust dimensions before production starts.",
        promptButtons: {
          gift: "I want a gift",
          glaze: "I need help with glazes",
          classroom: "I need a classroom demo"
        }
      },
      features: {
        eyebrow: "Product layers",
        title: "The platform is not only for selling: it also organizes, supports and teaches.",
        cards: [
          ["Self-service", "It reduces friction in commissions", "Customers reach the workshop with more clarity because they have already described, visualized and narrowed what they want."],
          ["Technical support", "It adds judgment before spending time and materials", "Digital tools help decide dimensions, tests and resources before entering costly stages."],
          ["Community", "It opens a second line of value", "Tutorials, demos and services for professionals expand the project beyond physical product sales."]
        ]
      },
      cta: {
        eyebrow: "Next step",
        title: "Once the platform is understood, it makes sense to return to the object and the collection.",
        text: "The collection page turns all of this into pieces, series and more concrete visual stories.",
        button: "Go to collection"
      }
    }
  },
  collection: {
    es: {
      title: "AlfarerIA | Colección",
      description: "Colecciones de AlfarerIA: Andalucía, Mar y La Concha Sunset Series en una galería interactiva con cambio de piezas.",
      navCta: "Ver plataforma",
      hero: {
        eyebrow: "Colección",
        title: "El catálogo muestra cómo la idea digital termina convertida en piezas con carácter propio.",
        intro: "Aquí la web funciona como un pequeño catálogo interactivo, con cambio de colección y de pieza protagonista."
      },
      section: {
        eyebrow: "Colecciones",
        title: "Cambia de línea para ver cómo varían la inspiración, el tono y el resultado visual.",
        note: "Cada colección puede tener su propia narrativa, su propia paleta y su propia forma de presentarse."
      },
      series: {
        eyebrow: "Lectura del catálogo",
        title: "La página también puede ordenar piezas por emoción, paisaje o uso.",
        cards: [
          ["Narrativa", "Cada línea tiene una voz propia", "La colección puede hablar desde el paisaje, el recuerdo, la costa o un imaginario más técnico."],
          ["Catálogo", "Una misma pieza puede mostrarse de varias maneras", "Galería, pieza protagonista y cambio de colección ayudan a presentar mejor el producto."],
          ["Conversión", "Lo visual también ayuda a vender mejor", "Una colección bien explicada transmite intención, calidad y una experiencia más memorable."]
        ]
      },
      cta: {
        eyebrow: "Volver al sistema",
        title: "La colección emociona, pero la plataforma explica cómo se llega hasta ella.",
        text: "Si quieres volver a la parte funcional, la página de plataforma enseña la capa digital que sostiene la experiencia.",
        button: "Abrir plataforma"
      },
      badge: "Colección",
      spotlightKicker: "Pieza protagonista",
      tabs: {
        andalucia: "Andalucía",
        mar: "Mar",
        concha: "La Concha Sunset Series"
      }
    },
    en: {
      title: "AlfarerIA | Collection",
      description: "AlfarerIA collections: Andalusia, Sea and La Concha Sunset Series in an interactive gallery with switchable pieces.",
      navCta: "View platform",
      hero: {
        eyebrow: "Collection",
        title: "The catalogue shows how the digital idea ends up becoming pieces with their own character.",
        intro: "Here the website works like a small interactive catalogue, with collection switching and a changeable spotlight piece."
      },
      section: {
        eyebrow: "Collections",
        title: "Switch lines to see how inspiration, tone and visual outcome change.",
        note: "Each collection can have its own narrative, palette and presentation style."
      },
      series: {
        eyebrow: "Reading the catalogue",
        title: "The page can also organize pieces by emotion, landscape or intended use.",
        cards: [
          ["Narrative", "Each line has its own voice", "A collection can speak through landscape, memory, coastline or a more technical imaginary."],
          ["Catalogue", "The same piece can be presented in several ways", "Gallery views, spotlight pieces and collection switching help present the product more clearly."],
          ["Conversion", "Visual storytelling also helps sell better", "A well-explained collection communicates intention, quality and a more memorable experience."]
        ]
      },
      cta: {
        eyebrow: "Back to the system",
        title: "The collection creates emotion, but the platform explains how you get there.",
        text: "If you want to return to the functional side, the platform page shows the digital layer that supports the whole experience.",
        button: "Open platform"
      },
      badge: "Collection",
      spotlightKicker: "Spotlight piece",
      tabs: {
        andalucia: "Andalusia",
        mar: "Sea",
        concha: "La Concha Sunset Series"
      }
    }
  }
};

const processStageData = {
  es: {
    brief: {
      label: "Definición del producto deseado",
      kicker: "Fase 01",
      title: "Del deseo del cliente a una definición útil",
      text: "Se recogen referencias visuales, uso previsto, tamaño aproximado y tono estético para evitar ambigüedades desde el inicio.",
      points: [
        "La plataforma organiza el encargo",
        "El chatbot puede hacer preguntas guía",
        "El taller valida qué es viable"
      ]
    },
    prototype: {
      label: "Prototipo",
      kicker: "Fase 02",
      title: "La idea se vuelve visible antes de producir",
      text: "Un prototipo visual ayuda a alinear expectativas con el cliente y a detectar problemas de forma temprana.",
      points: [
        "Se comparan variantes rápidamente",
        "Se reduce ida y vuelta innecesaria",
        "La conversación gira sobre algo concreto"
      ]
    },
    shrinkage: {
      label: "Contracción",
      kicker: "Fase 03",
      title: "La capa técnica entra antes del horno",
      text: "La estimación de contracción permite ajustar medidas para que la pieza final se acerque mejor a lo prometido.",
      points: [
        "Se minimizan sorpresas dimensionales",
        "Se decide mejor el espesor",
        "La plataforma aporta criterio cuantitativo"
      ]
    },
    glaze: {
      label: "Esmaltes",
      kicker: "Fase 04",
      title: "El laboratorio aprende en cada iteración",
      text: "Las pruebas de esmalte dejan de ser experiencias aisladas y pasan a formar parte de una memoria técnica reutilizable.",
      points: [
        "Se registran recetas y resultados",
        "Se comparan acabados más fácilmente",
        "Se evita repetir errores ya conocidos"
      ]
    },
    printing: {
      label: "Impresión 3D",
      kicker: "Fase 05",
      title: "La fabricación digital prepara el terreno",
      text: "Moldes, guías y soportes impresos permiten iterar más deprisa y fabricar con más consistencia.",
      points: [
        "Acelera prototipos y útiles",
        "Hace viables series cortas",
        "Apoya sin borrar la mano artesanal"
      ]
    },
    delivery: {
      label: "Entrega",
      kicker: "Fase 06",
      title: "La pieza se entrega con más control y más relato",
      text: "El proyecto cierra el ciclo con mejor trazabilidad, más aprendizaje acumulado y una entrega más coherente con la promesa inicial.",
      points: [
        "Mejor documentación del proceso",
        "Uso más consciente de materiales",
        "Una experiencia más clara para el cliente"
      ]
    }
  },
  en: {
    brief: {
      label: "Desired product definition",
      kicker: "Stage 01",
      title: "From the customer's desire to a useful definition",
      text: "Visual references, intended use, approximate size and aesthetic tone are gathered to avoid ambiguity from the beginning.",
      points: [
        "The platform organizes the commission",
        "The chatbot can ask guiding questions",
        "The workshop validates what is actually viable"
      ]
    },
    prototype: {
      label: "Prototype",
      kicker: "Stage 02",
      title: "The idea becomes visible before production",
      text: "A visual prototype helps align expectations with the customer and detect issues early.",
      points: [
        "Different directions can be compared quickly",
        "Unnecessary back-and-forth is reduced",
        "The conversation focuses on something concrete"
      ]
    },
    shrinkage: {
      label: "Shrinkage",
      kicker: "Stage 03",
      title: "The technical layer enters before the kiln",
      text: "Shrinkage estimation helps adjust measurements so the final piece stays closer to what was promised.",
      points: [
        "Dimensional surprises are reduced",
        "Thickness decisions improve",
        "The platform adds quantitative judgment"
      ]
    },
    glaze: {
      label: "Glazes",
      kicker: "Stage 04",
      title: "The lab learns from every iteration",
      text: "Glaze tests stop being isolated experiences and become part of a reusable technical memory.",
      points: [
        "Recipes and results are documented",
        "Finishes are easier to compare",
        "Known mistakes are less likely to repeat"
      ]
    },
    printing: {
      label: "3D printing",
      kicker: "Stage 05",
      title: "Digital fabrication prepares the ground",
      text: "Printed molds, guides and supports make it easier to iterate faster and produce more consistently.",
      points: [
        "It speeds up prototypes and tools",
        "It makes short runs more viable",
        "It supports the craft without erasing it"
      ]
    },
    delivery: {
      label: "Delivery",
      kicker: "Stage 06",
      title: "The piece is delivered with more control and more story",
      text: "The project closes the loop with better traceability, more accumulated learning and a delivery that better matches the original promise.",
      points: [
        "Better process documentation",
        "More mindful material use",
        "A clearer experience for the customer"
      ]
    }
  }
};

const chatbotReplies = {
  es: {
    gift: {
      user: "Quiero un regalo",
      assistant: "Puedo ayudarte a diseñar una pieza personalizada a partir de una foto, un lugar o una emoción. Empezaríamos por el estilo, la paleta y el uso de la pieza."
    },
    glaze: {
      user: "Necesito ayuda con esmaltes",
      assistant: "Podemos partir de referencias visuales y del acabado que buscas para recomendar una línea de pruebas, registrar resultados y comparar variantes antes de producir."
    },
    classroom: {
      user: "Busco una demo para clase",
      assistant: "La plataforma puede servir para enseñar cómo una idea pasa de la definición del producto deseado al prototipo, cómo se estima la contracción y cómo se documentan las pruebas del taller."
    }
  },
  en: {
    gift: {
      user: "I want a gift",
      assistant: "I can help you design a personalized piece starting from a photo, a place or an emotion. We would begin with style, palette and intended use."
    },
    glaze: {
      user: "I need help with glazes",
      assistant: "We can start from visual references and the finish you want, then suggest a testing path, record results and compare variants before production."
    },
    classroom: {
      user: "I need a classroom demo",
      assistant: "The platform can help teach how an idea moves from the desired product definition to the prototype, how shrinkage is estimated and how workshop tests are documented."
    }
  }
};

const collectionData = {
  es: {
    andalucia: {
      title: "Andalucía",
      description: "Una línea de piezas inspirada en la luz del sur, la cal, el paisaje serrano y el mar como memoria cotidiana.",
      points: [
        "Paleta cálida y mediterránea",
        "Piezas con identidad andaluza",
        "Equilibrio entre cercanía y paisaje"
      ],
      items: {
        sur: {
          image: "./assets/la-concha-artistica.png",
          title: "Pinceladas del Sur",
          text: "Una interpretación pictórica pensada para llevar paisaje y luz a un objeto de uso diario.",
          alt: "Pieza principal de la colección Andalucía"
        },
        bahia: {
          image: "./assets/la-concha-bahia.png",
          title: "Bahía Serena",
          text: "Una lectura más suave y luminosa, centrada en calma, costa y horizonte.",
          alt: "Pieza inspirada en una bahía mediterránea"
        },
        costa: {
          image: "./assets/la-concha-costa.png",
          title: "Costa Blanca",
          text: "Una pieza limpia y clara donde mar, orilla y arquitectura conviven con serenidad.",
          alt: "Pieza con costa tranquila"
        }
      }
    },
    mar: {
      title: "Mar",
      description: "Piezas que se apoyan en espuma, sal, reflejos turquesa y una sensación de costa abierta y luminosa.",
      points: [
        "Turquesas, espuma y arena",
        "Sensación fresca y ligera",
        "Uso cotidiano con una lectura mediterránea"
      ],
      items: {
        mar: {
          image: "./assets/la-concha-mar.png",
          title: "Mar Esmeralda",
          text: "Una pieza pensada para transmitir agua, verano y un brillo mediterráneo muy reconocible.",
          alt: "Taza con mar esmeralda y La Concha"
        },
        costa: {
          image: "./assets/la-concha-costa.png",
          title: "Orilla en Calma",
          text: "La curvatura de la bahía y la luz suave del final del día marcan el tono de esta pieza.",
          alt: "Taza con vista de la costa"
        },
        bahia: {
          image: "./assets/la-concha-bahia.png",
          title: "Bahía Turquesa",
          text: "Una interpretación donde el color del agua y la atmósfera importan tanto como la forma.",
          alt: "Taza inspirada en una bahía"
        }
      }
    },
    concha: {
      title: "La Concha Sunset Series",
      description: "La colección más icónica del proyecto: paisaje de Marbella, montaña, mar y un cielo que se mueve entre azul, rosa y naranja.",
      points: [
        "Inspiración directa en La Concha",
        "Fuerte carga emocional y paisajística",
        "La serie que mejor resume el concepto"
      ],
      items: {
        artistica: {
          image: "./assets/la-concha-artistica.png",
          title: "Pinceladas de Marbella",
          text: "Una lectura libre y emocional, como si el recuerdo estuviera pintado directamente sobre la cerámica.",
          alt: "Pieza artística inspirada en Marbella"
        },
        mar: {
          image: "./assets/la-concha-mar.png",
          title: "La Concha al Mar",
          text: "La montaña y el agua conviven en una composición intensa y muy reconocible.",
          alt: "Taza con mar y montaña de La Concha"
        },
        torno: {
          image: "./assets/la-concha-torno.png",
          title: "La montaña sobre el torno",
          text: "La referencia paisajística aparece ya desde el proceso, uniendo objeto y origen desde el primer gesto.",
          alt: "Taza en torno inspirada en La Concha"
        }
      }
    }
  },
  en: {
    andalucia: {
      title: "Andalusia",
      description: "A line of pieces inspired by southern light, whitewashed surfaces, mountain landscapes and the sea as an everyday memory.",
      points: [
        "Warm Mediterranean palette",
        "Pieces with Andalusian identity",
        "A balance between closeness and landscape"
      ],
      items: {
        sur: {
          image: "./assets/la-concha-artistica.png",
          title: "Brushstrokes of the South",
          text: "A painterly interpretation designed to bring landscape and light into an everyday object.",
          alt: "Main piece from the Andalusia collection"
        },
        bahia: {
          image: "./assets/la-concha-bahia.png",
          title: "Serene Bay",
          text: "A softer and brighter reading centered on calm, shoreline and horizon.",
          alt: "Piece inspired by a Mediterranean bay"
        },
        costa: {
          image: "./assets/la-concha-costa.png",
          title: "White Coast",
          text: "A clean and luminous piece where sea, shoreline and architecture coexist with calm.",
          alt: "Piece with a calm coastline"
        }
      }
    },
    mar: {
      title: "Sea",
      description: "Pieces built around foam, salt, turquoise reflections and the feeling of an open, luminous coast.",
      points: [
        "Turquoise, foam and sand",
        "A fresh and airy feeling",
        "Daily use with a Mediterranean reading"
      ],
      items: {
        mar: {
          image: "./assets/la-concha-mar.png",
          title: "Emerald Sea",
          text: "A piece designed to convey water, summer and a clearly Mediterranean brightness.",
          alt: "Mug with emerald sea and La Concha"
        },
        costa: {
          image: "./assets/la-concha-costa.png",
          title: "Quiet Shore",
          text: "The curve of the bay and the soft light of the end of the day define the mood of this piece.",
          alt: "Mug with a coastline view"
        },
        bahia: {
          image: "./assets/la-concha-bahia.png",
          title: "Turquoise Bay",
          text: "An interpretation where the color of the water and the atmosphere matter as much as the shape itself.",
          alt: "Mug inspired by a bay"
        }
      }
    },
    concha: {
      title: "La Concha Sunset Series",
      description: "The most iconic collection in the project: Marbella's landscape, mountain, sea and a sky moving through blue, pink and orange.",
      points: [
        "Direct inspiration from La Concha",
        "Strong emotional and landscape charge",
        "The series that best summarizes the concept"
      ],
      items: {
        artistica: {
          image: "./assets/la-concha-artistica.png",
          title: "Brushstrokes of Marbella",
          text: "A freer and more emotional reading, as if the memory had been painted directly onto the ceramic.",
          alt: "Artistic piece inspired by Marbella"
        },
        mar: {
          image: "./assets/la-concha-mar.png",
          title: "La Concha by the Sea",
          text: "The mountain and the water coexist in an intense and instantly recognizable composition.",
          alt: "Mug with La Concha and the sea"
        },
        torno: {
          image: "./assets/la-concha-torno.png",
          title: "The mountain on the wheel",
          text: "The landscape reference appears already in process, linking object and origin from the first gesture.",
          alt: "Wheel-thrown mug inspired by La Concha"
        }
      }
    }
  }
};

function el(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const element = el(id);
  if (element) {
    element.textContent = value;
  }
}

function setHTMLLang(language) {
  const common = commonTranslations[language];
  document.documentElement.lang = common.htmlLang;
  document.title = pageTranslations[page][language].title;
  if (metaDescription) {
    metaDescription.setAttribute("content", pageTranslations[page][language].description);
  }
  if (brandLink) {
    brandLink.setAttribute("aria-label", common.brandAriaLabel);
  }
  if (brandSubtitle) {
    brandSubtitle.textContent = common.brandSubtitle;
  }
  document.querySelector(".nav")?.setAttribute("aria-label", common.navAriaLabel);
  document.querySelector(".lang-switch")?.setAttribute("aria-label", common.langSwitchAriaLabel);
  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    if (key && common.nav[key]) {
      link.textContent = common.nav[key];
      link.classList.toggle("active", key === page);
    }
  });
  if (navCta) {
    navCta.textContent = pageTranslations[page][language].navCta;
  }
  footerLines.forEach((line, index) => {
    line.textContent = common.footer[index];
  });
  langToggles.forEach((toggle) => {
    const active = toggle.dataset.lang === language;
    toggle.classList.toggle("active", active);
    toggle.setAttribute("aria-pressed", String(active));
  });
}

function renderHome(language) {
  const t = pageTranslations.home[language];
  setText("hero-eyebrow", t.hero.eyebrow);
  setText("hero-title", t.hero.title);
  setText("hero-intro", t.hero.intro);
  setText("hero-primary", t.hero.primary);
  setText("hero-secondary", t.hero.secondary);
  const heroImage = el("hero-image");
  if (heroImage) {
    heroImage.alt = t.hero.imageAlt;
  }
  t.hero.highlights.forEach((item, index) => setText(`highlight-${index + 1}`, item));
  setText("routes-eyebrow", t.routes.eyebrow);
  setText("routes-title", t.routes.title);
  setText("routes-note", t.routes.note);
  t.routes.cards.forEach((card, index) => {
    setText(`route-tag-${index + 1}`, card.tag);
    setText(`route-title-${index + 1}`, card.title);
    setText(`route-text-${index + 1}`, card.text);
  });
  setText("value-eyebrow", t.value.eyebrow);
  setText("value-title", t.value.title);
  t.value.cards.forEach((card, index) => {
    setText(`value-tag-${index + 1}`, card.tag);
    setText(`value-card-title-${index + 1}`, card.title);
    setText(`value-card-text-${index + 1}`, card.text);
  });
  setText("teaser-eyebrow", t.teaser.eyebrow);
  setText("teaser-title", t.teaser.title);
  setText("teaser-text-1", t.teaser.paragraphs[0]);
  setText("teaser-text-2", t.teaser.paragraphs[1]);
  setText("teaser-button", t.teaser.button);
}

function renderProcess(language) {
  const t = pageTranslations.process[language];
  setText("page-eyebrow", t.hero.eyebrow);
  setText("page-title", t.hero.title);
  setText("page-intro", t.hero.intro);
  setText("timeline-eyebrow", t.timeline.eyebrow);
  setText("timeline-title", t.timeline.title);
  setText("timeline-note", t.timeline.note);
  t.timeline.cards.forEach((card, index) => {
    setText(`process-card-title-${index + 1}`, card[0]);
    setText(`process-card-text-${index + 1}`, card[1]);
  });
  setText("explorer-eyebrow", t.explorer.eyebrow);
  setText("explorer-title", t.explorer.title);
  setText("explorer-note", t.explorer.note);
  setText("cycle-eyebrow", t.cycle.eyebrow);
  setText("cycle-title", t.cycle.title);
  t.cycle.cards.forEach((card, index) => {
    setText(`cycle-tag-${index + 1}`, card[0]);
    setText(`cycle-card-title-${index + 1}`, card[1]);
    setText(`cycle-card-text-${index + 1}`, card[2]);
  });
  setText("cta-eyebrow", t.cta.eyebrow);
  setText("cta-title", t.cta.title);
  setText("cta-text", t.cta.text);
  setText("cta-button", t.cta.button);
  renderProcessStage(language);
}

function renderPlatform(language) {
  const t = pageTranslations.platform[language];
  setText("page-eyebrow", t.hero.eyebrow);
  setText("page-title", t.hero.title);
  setText("page-intro", t.hero.intro);
  setText("platform-eyebrow", t.section.eyebrow);
  setText("platform-title", t.section.title);
  setText("platform-note", t.section.note);
  setText("tool-tag-1", t.tools.tags[0]);
  setText("tool-tag-2", t.tools.tags[1]);
  setText("tool-tag-3", t.tools.tags[2]);
  setText("tool-title-1", t.tools.titles[0]);
  setText("tool-title-2", t.tools.titles[1]);
  setText("tool-title-3", t.tools.titles[2]);
  setText("config-label-idea", t.tools.labels.idea);
  setText("config-label-mood", t.tools.labels.mood);
  setText("config-label-audience", t.tools.labels.audience);
  setText("calc-label-diameter", t.tools.labels.diameter);
  setText("calc-label-height", t.tools.labels.height);
  setText("calc-label-shrinkage", t.tools.labels.shrinkage);
  setText("generate-button", t.tools.button);
  setText("config-kicker", t.tools.configKicker);
  setText("calc-kicker", t.tools.calcKicker);
  setText("chat-kicker", t.tools.chatKicker);
  setText("diameter-result-label", t.tools.calcLabels[0]);
  setText("height-result-label", t.tools.calcLabels[1]);
  setText("loss-result-label", t.tools.calcLabels[2]);
  setText("calc-text", t.tools.calcText);
  setText("feature-eyebrow", t.features.eyebrow);
  setText("feature-title", t.features.title);
  t.features.cards.forEach((card, index) => {
    setText(`feature-tag-${index + 1}`, card[0]);
    setText(`feature-card-title-${index + 1}`, card[1]);
    setText(`feature-card-text-${index + 1}`, card[2]);
  });
  setText("cta-eyebrow", t.cta.eyebrow);
  setText("cta-title", t.cta.title);
  setText("cta-text", t.cta.text);
  setText("cta-button", t.cta.button);

  const moodSelect = el("mood-select");
  const audienceSelect = el("audience-select");
  if (moodSelect) {
    moodSelect.querySelector('option[value="serene"]').textContent = language === "es" ? "Sereno" : "Serene";
    moodSelect.querySelector('option[value="bold"]').textContent = language === "es" ? "Intenso" : "Bold";
    moodSelect.querySelector('option[value="warm"]').textContent = language === "es" ? "Cálido" : "Warm";
  }
  if (audienceSelect) {
    audienceSelect.querySelector('option[value="client"]').textContent = language === "es" ? "Cliente final" : "End customer";
    audienceSelect.querySelector('option[value="pro"]').textContent = language === "es" ? "Ceramista profesional" : "Professional ceramicist";
    audienceSelect.querySelector('option[value="school"]').textContent = language === "es" ? "Escuela o taller" : "School or studio";
  }
  document.querySelectorAll(".prompt-chip").forEach((button) => {
    const key = button.dataset.reply;
    button.textContent = t.tools.promptButtons[key];
  });
  renderConfigurator(language);
  renderCalculator(language);
  renderChat(language);
}

function renderCollection(language) {
  const t = pageTranslations.collection[language];
  setText("page-eyebrow", t.hero.eyebrow);
  setText("page-title", t.hero.title);
  setText("page-intro", t.hero.intro);
  setText("collections-eyebrow", t.section.eyebrow);
  setText("collections-title", t.section.title);
  setText("collections-note", t.section.note);
  setText("series-eyebrow", t.series.eyebrow);
  setText("series-title", t.series.title);
  t.series.cards.forEach((card, index) => {
    setText(`series-tag-${index + 1}`, card[0]);
    setText(`series-card-title-${index + 1}`, card[1]);
    setText(`series-card-text-${index + 1}`, card[2]);
  });
  setText("cta-eyebrow", t.cta.eyebrow);
  setText("cta-title", t.cta.title);
  setText("cta-text", t.cta.text);
  setText("cta-button", t.cta.button);

  document.querySelectorAll(".collection-tab").forEach((button) => {
    const key = button.dataset.collection;
    button.textContent = t.tabs[key];
  });
  setText("collection-badge", t.badge);
  setText("collection-spotlight-kicker", t.spotlightKicker);
  renderCollectionDisplay(language);
}

function renderProcessStage(language) {
  const stage = processStageData[language][state.processStage];
  if (!stage) return;
  document.querySelectorAll(".stage-tab").forEach((button) => {
    const key = button.dataset.stage;
    const label = processStageData[language][key]?.label;
    if (label) button.textContent = label;
    button.classList.toggle("active", key === state.processStage);
  });
  setText("stage-kicker", stage.kicker);
  setText("stage-title", stage.title);
  setText("stage-text", stage.text);
  const list = el("stage-points");
  if (list) {
    list.innerHTML = stage.points.map((point) => `<li>${point}</li>`).join("");
  }
}

function renderConfigurator(language) {
  const idea = el("idea-input")?.value.trim() || "";
  const mood = el("mood-select")?.value || "serene";
  const audience = el("audience-select")?.value || "client";
  const presets = {
    es: {
      serene: {
        title: "Costa Serena",
        text: "Una pieza de líneas suaves, paisaje costero y acabado luminoso pensada para uso diario.",
        palette: ["Turquesa suave", "Arena clara", "Coral tenue"]
      },
      bold: {
        title: "Bahía Intensa",
        text: "Una propuesta con contraste, presencia visual y un paisaje más expresivo, pensada para destacar.",
        palette: ["Azul profundo", "Verde esmeralda", "Naranja encendido"]
      },
      warm: {
        title: "Atardecer Cálido",
        text: "Una pieza con atmósfera dorada, tonos suaves y una lectura más emocional del paisaje mediterráneo.",
        palette: ["Arena tostada", "Rosa salmón", "Ámbar claro"]
      }
    },
    en: {
      serene: {
        title: "Serene Coast",
        text: "A soft-lined piece with coastal scenery and a luminous finish designed for everyday use.",
        palette: ["Soft turquoise", "Light sand", "Muted coral"]
      },
      bold: {
        title: "Bold Bay",
        text: "A concept with contrast, visual presence and a more expressive landscape, designed to stand out.",
        palette: ["Deep blue", "Emerald green", "Glowing orange"]
      },
      warm: {
        title: "Warm Sunset",
        text: "A piece with a golden atmosphere, gentle tones and a more emotional reading of the Mediterranean landscape.",
        palette: ["Toasted sand", "Salmon pink", "Light amber"]
      }
    }
  };
  const audienceText = {
    es: {
      client: "para un cliente final",
      pro: "pensada para un uso más profesional",
      school: "útil en un contexto de taller o escuela"
    },
    en: {
      client: "for an end customer",
      pro: "designed for a more professional use case",
      school: "useful in a school or studio context"
    }
  };
  const selected = presets[language][mood];
  const shortIdea = idea.replace(/\s+/g, " ").slice(0, 90);
  setText("config-title", selected.title);
  setText(
    "config-text",
    language === "es"
      ? `${selected.text} El punto de partida fue: ${shortIdea || "una idea sin describir"} ${audienceText.es[audience]}.`
      : `${selected.text} The starting point was: ${shortIdea || "an undefined idea"} ${audienceText.en[audience]}.`
  );
  const paletteRow = el("palette-row");
  if (paletteRow) {
    paletteRow.innerHTML = selected.palette.map((item) => `<span class="palette-chip">${item}</span>`).join("");
  }
}

function renderCalculator(language) {
  const diameter = Number(el("diameter-input")?.value || 0);
  const height = Number(el("height-input")?.value || 0);
  const shrinkage = Number(el("shrinkage-input")?.value || 0);
  const factor = Math.max(0, 1 - shrinkage / 100);
  const format = (value) => `${value.toFixed(2)} cm`;
  setText("diameter-result", format(diameter * factor));
  setText("height-result", format(height * factor));
  setText("loss-result", `${shrinkage.toFixed(1)}%`);
  if (language === "es") {
    setText("calc-text", "Este cálculo ilustra cómo la IA puede ayudar a ajustar medidas antes de pasar a producción.");
  } else {
    setText("calc-text", "This calculation illustrates how AI could help adjust dimensions before production starts.");
  }
}

function renderChat(language) {
  const reply = chatbotReplies[language][state.chatbotReply];
  if (!reply) return;
  document.querySelectorAll(".prompt-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.reply === state.chatbotReply);
  });
  setText("chat-user", reply.user);
  setText("chat-assistant", reply.assistant);
}

function renderCollectionDisplay(language) {
  const collection = collectionData[language][state.collection];
  if (!collection) return;
  const itemKeys = Object.keys(collection.items);
  if (!collection.items[state.collectionItem]) {
    state.collectionItem = itemKeys[0];
  }
  document.querySelectorAll(".collection-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.collection === state.collection);
  });
  setText("collection-title", collection.title);
  setText("collection-description", collection.description);
  const points = el("collection-points");
  if (points) {
    points.innerHTML = collection.points.map((point) => `<li>${point}</li>`).join("");
  }

  const thumbContainer = document.querySelector(".collection-thumbs");
  if (thumbContainer) {
    thumbContainer.innerHTML = itemKeys
      .map((key) => {
        const item = collection.items[key];
        const activeClass = key === state.collectionItem ? " active" : "";
        return `
          <button class="thumb-button${activeClass}" type="button" data-item="${key}">
            <img src="${item.image}" alt="${item.alt}">
          </button>
        `;
      })
      .join("");
  }

  const activeItem = collection.items[state.collectionItem];
  const spotlightImage = el("collection-spotlight-image");
  if (spotlightImage) {
    spotlightImage.src = activeItem.image;
    spotlightImage.alt = activeItem.alt;
  }
  setText("collection-spotlight-title", activeItem.title);
  setText("collection-spotlight-text", activeItem.text);
}

function applyLanguage(language) {
  const safeLanguage = commonTranslations[language] ? language : "es";
  state.language = safeLanguage;
  localStorage.setItem("alfareria_lang", safeLanguage);
  setHTMLLang(safeLanguage);

  if (page === "home") renderHome(safeLanguage);
  if (page === "process") renderProcess(safeLanguage);
  if (page === "platform") renderPlatform(safeLanguage);
  if (page === "collection") renderCollection(safeLanguage);
}

document.addEventListener("click", (event) => {
  const langToggle = event.target.closest(".lang-toggle");
  if (langToggle) {
    applyLanguage(langToggle.dataset.lang);
    return;
  }

  const stageTab = event.target.closest(".stage-tab");
  if (stageTab) {
    state.processStage = stageTab.dataset.stage;
    renderProcessStage(state.language);
    return;
  }

  const promptChip = event.target.closest(".prompt-chip");
  if (promptChip) {
    state.chatbotReply = promptChip.dataset.reply;
    renderChat(state.language);
    return;
  }

  const collectionTab = event.target.closest(".collection-tab");
  if (collectionTab) {
    state.collection = collectionTab.dataset.collection;
    const defaults = {
      andalucia: "sur",
      mar: "mar",
      concha: "artistica"
    };
    state.collectionItem = defaults[state.collection];
    renderCollectionDisplay(state.language);
    return;
  }

  const thumbButton = event.target.closest(".collection-thumbs .thumb-button");
  if (thumbButton) {
    state.collectionItem = thumbButton.dataset.item;
    renderCollectionDisplay(state.language);
  }
});

el("generate-button")?.addEventListener("click", () => renderConfigurator(state.language));
el("diameter-input")?.addEventListener("input", () => renderCalculator(state.language));
el("height-input")?.addEventListener("input", () => renderCalculator(state.language));
el("shrinkage-input")?.addEventListener("input", () => renderCalculator(state.language));

applyLanguage(state.language);
