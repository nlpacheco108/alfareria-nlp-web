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
  processCards: [...document.querySelectorAll(".process-card")],
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
    pageTitle: "AlfarerIA NLP | Cerámica inspirada en Marbella",
    metaDescription: "AlfarerIA NLP une cerámica artesanal e inteligencia artificial para crear piezas inspiradas en Marbella, el mar y La Concha.",
    brandAriaLabel: "Ir al inicio de AlfarerIA NLP",
    brandSubtitle: "Cerámica mediterránea, barro e inteligencia artificial",
    navAriaLabel: "Principal",
    langSwitchAriaLabel: "Selector de idioma",
    navLinks: ["Proyecto", "Colecciones", "Galería", "Proceso"],
    navCta: "Ver serie destacada",
    hero: {
      eyebrow: "Del barro al código",
      title: "Marbella en las manos, siempre contigo.",
      intro: "AlfarerIA NLP nace de unir la alfarería con la IA para crear piezas cerámicas con memoria de costa, cielos suaves y orgullo por la tierra. Cada taza parte del barro real, se apoya en bocetos generados con inteligencia artificial y vuelve al taller para tomar forma propia.",
      actions: ["Explorar colecciones", "Ver piezas"],
      highlights: [
        "Hecho a mano desde el torno",
        "Diseño apoyado por IA",
        "Inspiración mediterránea",
        "Series con alma de recuerdo"
      ],
      frameAlt: "Taza cerámica inspirada en La Concha al atardecer",
      notes: [
        { label: "Pieza insignia", title: "La Concha Sunset Series", text: "Atardeceres suaves, mar esmeralda y la silueta más icónica de Marbella." },
        { label: "La idea", text: "Del boceto al esmalte: cerámica artesanal para quienes llevan la costa dentro." }
      ]
    },
    story: {
      eyebrow: "El proyecto",
      title: "Alfarería, IA y un lenguaje propio.",
      paragraphs: [
        "La marca parte de un hobby muy real: trabajar el barro, practicar torno y dar forma a objetos cotidianos con valor emocional. La IA entra como compañera de taller para reinterpretar bocetos, probar variaciones visuales y ayudarte a imaginar nuevos esmaltes o patrones antes de tocar la pieza final.",
        "El resultado no quiere parecer industrial. Quiere sentirse cercano, sereno y honesto: piezas que recuerdan al mar, a la orilla y a ese momento exacto en el que La Concha se enciende con la última luz del día."
      ],
      quote: "Donde el mar toca la montaña... y tu café.",
      signoff: "Slogan de colección"
    },
    collections: {
      eyebrow: "Colecciones",
      title: "Tres universos para una misma forma de contar recuerdos.",
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
      eyebrow: "Galería",
      title: "Piezas nacidas entre referencia real, imaginación visual y torno.",
      note: "Pulsa en cada miniatura para cambiar la pieza protagonista y descubrir un matiz distinto de la serie."
    },
    process: {
      eyebrow: "Proceso creativo",
      title: "Del barro al esmalte, con una capa digital que ayuda a imaginar mejor.",
      cards: [
        {
          title: "Idea inicial",
          text: "Un recuerdo, una vista de Marbella o una emoción concreta sirven de punto de partida."
        },
        {
          title: "Boceto con IA",
          text: "La inteligencia artificial ayuda a probar encuadres, colores, texturas y variaciones visuales."
        },
        {
          title: "Torno y pieza real",
          text: "La forma se construye en el taller, con ritmo manual, tacto y pequeñas decisiones artesanas."
        },
        {
          title: "Esmalte con memoria",
          text: "El acabado final busca que la pieza no solo sea bonita, sino que evoque lugar y pertenencia."
        }
      ]
    },
    cta: {
      eyebrow: "AlfarerIA NLP",
      title: "Cerámica hecha para quienes no quieren olvidar de dónde vienen.",
      text: "Una marca para colecciones pequeñas, piezas con historia y objetos que mezclan oficio, tecnología y mirada mediterránea.",
      button: "Entrar en La Concha Sunset Series"
    },
    footer: [
      "Piezas hechas a mano, una a una.",
      "Para que el sur, su luz, sus mares y sus montañas te acompañen cada día.",
      "AlfarerIA NLP"
    ]
  },
  en: {
    htmlLang: "en",
    pageTitle: "AlfarerIA NLP | Ceramics inspired by Marbella",
    metaDescription: "AlfarerIA NLP brings together handmade ceramics and artificial intelligence to create pieces inspired by Marbella, the sea and La Concha.",
    brandAriaLabel: "Go to the AlfarerIA NLP homepage",
    brandSubtitle: "Mediterranean ceramics, clay and artificial intelligence",
    navAriaLabel: "Main navigation",
    langSwitchAriaLabel: "Language selector",
    navLinks: ["Project", "Collections", "Gallery", "Process"],
    navCta: "View featured series",
    hero: {
      eyebrow: "From clay to code",
      title: "Marbella in your hands, always with you.",
      intro: "AlfarerIA NLP was born from joining pottery and AI to create ceramic pieces filled with coastal memory, soft skies and pride in home. Every mug begins with real clay, grows through AI-assisted sketches and returns to the studio to take on its final shape.",
      actions: ["Explore collections", "View pieces"],
      highlights: [
        "Wheel-thrown by hand",
        "Design supported by AI",
        "Mediterranean inspiration",
        "Collections shaped by memory"
      ],
      frameAlt: "Ceramic mug inspired by La Concha at sunset",
      notes: [
        { label: "Signature piece", title: "La Concha Sunset Series", text: "Soft sunsets, emerald sea and the most iconic silhouette of Marbella." },
        { label: "The idea", text: "From sketch to glaze: handmade ceramics for people who carry the coast within them." }
      ]
    },
    story: {
      eyebrow: "The project",
      title: "Pottery, AI and a language of its own.",
      paragraphs: [
        "The brand grows out of a very real hobby: working with clay, practicing on the wheel and shaping everyday objects with emotional value. AI becomes a studio companion that helps reinterpret sketches, explore visual variations and imagine new glazes or patterns before touching the final piece.",
        "The result does not want to feel industrial. It aims to feel close, calm and honest: pieces that evoke the sea, the shoreline and that exact moment when La Concha lights up with the last glow of the day."
      ],
      quote: "Where the sea touches the mountain... and your coffee.",
      signoff: "Collection slogan"
    },
    collections: {
      eyebrow: "Collections",
      title: "Three universes for one shared way of telling memories.",
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
      eyebrow: "Gallery",
      title: "Pieces born between real references, visual imagination and the wheel.",
      note: "Click each thumbnail to change the main piece and discover a different nuance of the series."
    },
    process: {
      eyebrow: "Creative process",
      title: "From clay to glaze, with a digital layer that helps imagine more clearly.",
      cards: [
        {
          title: "Starting idea",
          text: "A memory, a view of Marbella or a precise emotion becomes the starting point."
        },
        {
          title: "AI sketching",
          text: "Artificial intelligence helps test framing, color, textures and visual variations."
        },
        {
          title: "Wheel and real piece",
          text: "The form is built in the studio through manual rhythm, touch and small handcrafted decisions."
        },
        {
          title: "Glaze with memory",
          text: "The final finish seeks not only beauty, but also a sense of place and belonging."
        }
      ]
    },
    cta: {
      eyebrow: "AlfarerIA NLP",
      title: "Ceramics made for people who do not want to forget where they come from.",
      text: "A brand for small collections, story-filled pieces and objects that bring together craft, technology and a Mediterranean gaze.",
      button: "Enter La Concha Sunset Series"
    },
    footer: [
      "Handmade pieces, one by one.",
      "So that the south, its light, its seas and its mountains can stay with you every day.",
      "AlfarerIA NLP"
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
  ui.processCards.forEach((card, index) => {
    card.querySelector("h3").textContent = t.process.cards[index].title;
    card.querySelector("p").textContent = t.process.cards[index].text;
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
