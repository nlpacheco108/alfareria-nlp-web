/* Static studio: illustrations and calculations stay local; no model or API is called. */
const tr = (es, en) => state.language === "es" ? es : en;
const studioCopy = {
  home: {
    "hero-title": ["El sur, hecho cerámica.", "The south, shaped in clay."],
    "hero-intro": ["Piezas con memoria mediterránea. Unimos el oficio del barro con herramientas digitales para explorar formas, preparar encargos y experimentar con nuevos acabados.", "Pieces with a Mediterranean memory. We bring clay craftsmanship and digital tools together to explore shapes, plan commissions and experiment with finishes."],
    "hero-primary": ["Entrar al estudio", "Enter the studio"],
    "route-title-1": ["Del primer boceto al horno", "From first sketch to kiln"],
    "route-text-1": ["Descubre las decisiones y los cuidados detrás de cada pieza.", "Discover the decisions and care behind every piece."],
    "route-title-2": ["Tu mesa de pruebas digital", "Your digital test bench"],
    "route-text-2": ["Explora acabados por capas, prepara un boceto y calcula las medidas de tu pieza.", "Explore layered finishes, prepare a sketch and calculate your piece's dimensions."],
    "route-title-3": ["Paisajes que puedes sostener", "Landscapes you can hold"],
    "route-text-3": ["Andalucía, Mar y La Concha: tres miradas al Mediterráneo.", "Andalusia, Sea and La Concha: three perspectives on the Mediterranean."],
    "value-title": ["Imagina. Prueba. Da forma.", "Imagine. Test. Shape."],
    "teaser-title": ["Cada taza, un atardecer.", "Every cup, a sunset."],
    "teaser-text-2": ["Explora las interpretaciones de La Concha y encuentra la que más se acerca a tu recuerdo del sur.", "Explore interpretations of La Concha and find the one closest to your memory of the south."]
  },
  process: {"page-title": ["Del barro a tu día a día.", "From clay to your everyday."], "page-intro": ["Diseño, pruebas y oficio. Conoce las seis etapas del proceso que proponemos para convertir tu idea en una pieza.", "Design, testing and craft. Explore the six stages we propose for turning your idea into a piece."]},
  collection: {"page-title": ["Pequeños paisajes cotidianos.", "Little everyday landscapes."], "page-intro": ["Un catálogo conceptual inspirado en el sur. Las imágenes son propuestas visuales, no fotografías de piezas fabricadas.", "A concept catalogue inspired by the south. Images are visual proposals, not photographs of manufactured pieces."]},
  platform: {
    "page-eyebrow": ["Estudio / Autoservicio", "Studio / Self-service"],
    "page-title": ["Antes del horno, explora.", "Before the kiln, explore."],
    "page-intro": ["Un espacio para ensayar ideas, explorar capas de esmalte y calcular medidas. Guarda tu propuesta y llévala a una prueba real en el taller.", "A space to try ideas, explore glaze layers and calculate dimensions. Save your proposal and take it to a real workshop test."],
    "platform-title": ["Tu mesa de trabajo", "Your workbench"],
    "platform-eyebrow": ["Herramientas", "Tools"],
    "platform-note": ["Prototipo interactivo. Los bocetos son ilustrativos; las medidas se calculan con el porcentaje que indiques. No hay un modelo IA conectado.", "Interactive prototype. Sketches are illustrative; dimensions use the percentage you provide. No AI model is connected."],
    "config-kicker": ["Boceto ilustrativo · sin IA", "Illustrative sketch · no AI"],
    "tool-title-1": ["Da forma a una idea", "Give an idea a shape"],
    "generate-button": ["Actualizar boceto", "Update sketch"],
    "tool-title-2": ["Planifica las medidas", "Plan your dimensions"],
    "tool-tag-3": ["Guía de consulta", "Help guide"],
    "tool-title-3": ["Respuestas de ejemplo", "Example answers"],
    "feature-title": ["De la exploración a la prueba real.", "From exploration to a real test."],
    "cta-title": ["Encuentra tu inspiración en el sur.", "Find your inspiration in the south."]
  }
};

function downloadStudio(content, name, type) {
  const url = URL.createObjectURL(new Blob([content], {type}));
  const link = document.createElement("a");
  link.href = url; link.download = name; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// A repeatable decorative drawing, intentionally not a material simulation.
function drawVessel(canvas, colors, seed, bands = 3) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#e9e8df"; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#d6d6ca";
  ctx.beginPath(); ctx.ellipse(w/2, h*.87, w*.26, h*.035, 0, 0, Math.PI*2); ctx.fill();
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(w*.26, h*.23); ctx.lineTo(w*.32, h*.81);
  ctx.quadraticCurveTo(w*.5, h*.88, w*.68, h*.81); ctx.lineTo(w*.74, h*.23); ctx.closePath();
  ctx.clip(); ctx.fillStyle = colors[0]; ctx.fillRect(0, 0, w, h);
  let n = seed || 1;
  const random = () => { n = (n * 1664525 + 1013904223) >>> 0; return n / 4294967296; };
  for (let i = 0; i < 460; i++) {
    ctx.globalAlpha = .18 + random()*.5;
    ctx.fillStyle = colors[1 + (i % (colors.length-1))];
    const x = w*(.24 + random()*.52), y = h*(.24+random()*.59);
    ctx.beginPath(); ctx.ellipse(x, y, 2 + random()*w*.022, 5+random()*h*.03*bands/3, random()*.4, 0, Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha = 1;
  const shine = ctx.createLinearGradient(w*.25, 0, w*.75, 0);
  shine.addColorStop(0, "#00000040"); shine.addColorStop(.32, "#ffffff38"); shine.addColorStop(.7, "#ffffff00"); shine.addColorStop(1, "#00000055");
  ctx.fillStyle = shine; ctx.fillRect(0,0,w,h); ctx.restore();
  ctx.fillStyle = colors[0]; ctx.beginPath(); ctx.ellipse(w/2,h*.23,w*.24,h*.035,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle = "#ddd3b8"; ctx.lineWidth = 5; ctx.stroke();
  ctx.fillStyle = "#243b40"; ctx.font = "14px sans-serif";
  ctx.fillText(tr("ESTUDIO ILUSTRATIVO · NO PREDICCIÓN", "ILLUSTRATIVE STUDY · NOT A PREDICTION"), 20, h-24);
}

function installStudio() {
  if (page !== "platform") return;
  const stack = document.querySelector(".tool-stack");
  const original = [...stack.children];
  original.forEach((panel, i) => { panel.id = ["design-panel", "size-panel", "guide-panel"][i]; });
  const lab = document.createElement("article");
  lab.className = "tool-shell two-column-shell"; lab.id = "glaze-panel";
  lab.innerHTML = `
    <div class="tool-panel">
      <span class="tool-tag" data-es="01 / Laboratorio de esmaltes" data-en="01 / Glaze lab"></span>
      <h3 data-es="Explora una superposición" data-en="Explore a layered finish"></h3>
      <p data-es="De abajo arriba: define el orden de aplicación. Una mano no equivale a un espesor medido." data-en="From bottom to top: define application order. A brush coat is not a measured thickness."></p>
      <div class="layer-row"><span class="layer-number">1</span><label class="control-group"><span data-es="Esmalte base" data-en="Base glaze"></span><select id="base-glaze"><option value="flux">AMACO PC-17 Honey Flux</option><option value="cobalt">AMACO C-20 Cobalt</option></select></label><label class="control-group"><span data-es="Manos" data-en="Coats"></span><select id="base-coats"><option>1</option><option>2</option><option>3</option><option>4</option></select></label></div>
      <button type="button" class="text-button" id="swap-layers" data-es="Invertir el orden de las capas ↕" data-en="Reverse layer order ↕"></button>
      <div class="layer-row"><span class="layer-number">2</span><label class="control-group"><span data-es="Esmalte superior" data-en="Top glaze"></span><select id="top-glaze"><option value="cobalt">AMACO C-20 Cobalt</option><option value="flux">AMACO PC-17 Honey Flux</option></select></label><label class="control-group"><span data-es="Manos" data-en="Coats"></span><select id="top-coats"><option>1</option><option>2</option><option selected>3</option><option>4</option></select></label></div>
      <div class="control-grid">
        <label class="control-group"><span data-es="Cono objetivo" data-en="Target cone"></span><select id="glaze-cone"><option>5</option><option selected>6</option></select></label>
        <label class="control-group"><span data-es="Pasta" data-en="Clay body"></span><select id="glaze-clay"><option value="white" data-es="Gres blanco" data-en="White stoneware"></option><option value="dark" data-es="Gres oscuro" data-en="Dark stoneware"></option></select></label>
      </div>
      <p class="studio-small" data-es="Contexto: aplicación a pincel y cocción en oxidación. Registra la curva y el enfriamiento al hacer la prueba." data-en="Context: brush application and oxidation firing. Record the firing and cooling schedule when testing."></p>
      <button class="button primary" type="button" id="save-glaze" data-es="Descargar ficha de prueba" data-en="Download test record"></button>
    </div>
    <div class="output-card lab-result">
      <span class="output-kicker" data-es="Exploración visual · sin validar" data-en="Visual exploration · unvalidated"></span>
      <canvas id="glaze-canvas" width="560" height="500" role="img"></canvas>
      <div aria-live="polite"><h3 id="glaze-summary"></h3><p id="glaze-evidence"></p></div>
      <p class="lab-caution" data-es="Esta ilustración no predice color, escurrimiento ni compatibilidad. No existe aquí una prueba documentada para estas condiciones exactas. Haz una probeta antes de esmaltar la pieza." data-en="This illustration does not predict color, running or compatibility. No documented test for these exact conditions is available here. Fire a test tile before glazing the piece."></p>
      <details><summary data-es="Referencias y límites" data-en="References and limitations"></summary>
        <p data-es="AMACO describe PC-17 como un esmalte que favorece el movimiento al superponerlo sobre otros. C-20 es un azul cobalto brillante que se acumula en las texturas. Esto no verifica una receta de 1 + 3 manos ni el orden inverso." data-en="AMACO describes PC-17 as promoting movement when layered over other glazes. C-20 is a glossy cobalt blue that pools in texture. This does not validate a 1 + 3 coat recipe or the reverse order."></p>
        <a href="https://shop.amaco.com/pc-17-honey-flux/" target="_blank" rel="noopener">AMACO / PC-17 Honey Flux ↗</a><br>
        <a href="https://shop.amaco.com/c-20-cobalt/" target="_blank" rel="noopener">AMACO / C-20 Cobalt ↗</a>
      </details>
    </div>`;
  stack.prepend(lab);
  const tabs = document.createElement("div"); tabs.className = "studio-tabs";
  tabs.setAttribute("role", "group");
  tabs.innerHTML = [["glaze", "Esmaltes", "Glazes"], ["design", "Diseño", "Design"], ["size", "Medidas", "Dimensions"], ["guide", "Ayuda", "Help"]].map(([key,es,en],i) => `<button type="button" class="studio-tab" data-panel="${key}-panel" aria-controls="${key}-panel" aria-pressed="${i===0}" data-es="${es}" data-en="${en}"></button>`).join("");
  stack.before(tabs);
  original.forEach(p => {p.hidden = true;});
  tabs.addEventListener("click", e => {
    const button = e.target.closest("[data-panel]"); if (!button) return;
    [...stack.children].forEach(p => {p.hidden = p.id !== button.dataset.panel;});
    tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b===button)));
  });
  lab.addEventListener("change", renderGlaze);
  el("swap-layers").addEventListener("click", () => {
    const base = el("base-glaze").value, coats = el("base-coats").value;
    el("base-glaze").value = el("top-glaze").value; el("base-coats").value = el("top-coats").value;
    el("top-glaze").value = base; el("top-coats").value = coats; renderGlaze();
  });
  el("save-glaze").addEventListener("click", () => downloadStudio(JSON.stringify({
    type: "unvalidated-glaze-test-plan", layers: glazeLayers(), cone: el("glaze-cone").value,
    clay: el("glaze-clay").value, atmosphere: "oxidation", application: "brush",
    firingSchedule: null, coolingSchedule: null, measuredThickness: null, actualResult: null,
    note: "Illustration only. Not an AI or physical prediction. Fire and document a test tile.",
    sources: ["https://shop.amaco.com/pc-17-honey-flux/", "https://shop.amaco.com/c-20-cobalt/"]
  }, null, 2), "alfareria-glaze-test.json", "application/json"));
  const mode = document.createElement("label"); mode.className = "control-group";
  mode.innerHTML = `<span data-es="Qué quieres calcular" data-en="What to calculate"></span><select id="size-direction"><option value="forward" data-es="De la pieza húmeda a la cocida" data-en="From wet size to fired size"></option><option value="reverse" data-es="De la medida final a la medida de modelado" data-en="From desired size to forming size"></option></select>`;
  el("size-panel").querySelector(".control-grid").before(mode);
  mode.addEventListener("change", () => renderCalculator(state.language));
  ["diameter-input","height-input","shrinkage-input"].forEach(id => {el(id).required = true;});
  el("size-panel").querySelector(".calc-output").setAttribute("aria-live", "polite");
  const canvas = document.createElement("canvas"); canvas.id = "design-canvas"; canvas.width = 560; canvas.height = 500; canvas.setAttribute("role", "img");
  el("design-panel").querySelector(".output-card").prepend(canvas);
  const save = document.createElement("button"); save.type = "button"; save.className = "button secondary";
  save.dataset.es = "Descargar boceto PNG"; save.dataset.en = "Download PNG sketch";
  save.addEventListener("click", () => canvas.toBlob(blob => { if (blob) downloadStudio(blob,"alfareria-sketch.png","image/png"); }));
  canvas.after(save);
  el("generate-button").addEventListener("click", renderDesignSketch);
  el("idea-input").addEventListener("input", () => {el("idea-input").dataset.edited = "true";});
}

function glazeLayers() {
  const name = value => value === "flux" ? "AMACO PC-17 Honey Flux" : "AMACO C-20 Cobalt";
  return ["base", "top"].map(position => ({product: name(el(`${position}-glaze`).value), coats: Number(el(`${position}-coats`).value)}));
}

function renderGlaze() {
  if (!el("glaze-canvas")) return;
  const layers = glazeLayers();
  setText("glaze-summary", layers.map(l => `${l.coats} × ${l.product.replace("AMACO ", "")}`).join(" → "));
  setText("glaze-evidence", tr("Sin ensayo coincidente. Cono y pasta se guardan en la ficha; no se simula su reacción química.", "No matching test. Cone and clay are recorded in the test plan; their chemical reaction is not simulated."));
  const topFlux = el("top-glaze").value === "flux";
  const same = el("base-glaze").value === el("top-glaze").value;
  const colors = same ? (topFlux ? ["#c8b991", "#ece1c7", "#ad8755"] : ["#193963", "#315a8c", "#112846"]) : (topFlux ? ["#bdbbad", "#234674", "#e5d3a5"] : ["#193963", "#9aafbe", "#dbc493"]);
  drawVessel(el("glaze-canvas"), colors, layers[0].coats*97+layers[1].coats*13+(topFlux?40:0), layers[1].coats);
  el("glaze-canvas").setAttribute("aria-label", tr("Ilustración decorativa de capas, no predicción cerámica", "Decorative layer illustration, not a ceramic prediction"));
}

function renderDesignSketch() {
  if (!el("design-canvas")) return;
  const palette = {serene: ["#487b87", "#bccdca", "#e4d4b8"], bold: ["#203d61", "#438c81", "#cd8c54"], warm: ["#b66f4e", "#ebc798", "#8c6357"]};
  const idea = el("idea-input").value;
  const seed = [...idea].reduce((n,c) => (n*31+c.charCodeAt(0))>>>0, 1);
  drawVessel(el("design-canvas"), palette[el("mood-select").value], seed);
  el("design-canvas").setAttribute("aria-label", tr("Boceto decorativo generado localmente, sin interpretación IA del texto", "Locally generated decorative sketch, without AI interpretation of text"));
  setText("config-kicker", tr("Boceto ilustrativo · sin IA", "Illustrative sketch · no AI"));
  setText("config-title", tr("Estudio de color sobre vaso", "Color study on a tumbler"));
  setText("config-text", tr("La paleta sigue el ambiente elegido; el texto varía el patrón decorativo, pero no se interpreta con IA. Para generar formas e imágenes a partir de tu descripción hace falta conectar un servicio de generación.", "The palette follows your selected mood; text varies the decorative pattern but is not interpreted by AI. Generating shapes and images from your description requires an image-generation service."));
}

function renderStudio() {
  Object.entries(studioCopy[page] || {}).forEach(([id, copy]) => setText(id, tr(...copy)));
  document.querySelectorAll("[data-es][data-en]").forEach(node => {node.textContent = tr(node.dataset.es,node.dataset.en);});
  document.querySelectorAll(".nav a").forEach(link => { if(link.dataset.nav===page) link.setAttribute("aria-current","page"); });
  if (page === "home") document.title = tr("AlfarerIA | Cerámica con alma mediterránea", "AlfarerIA | Ceramics with a Mediterranean soul");
  if (page === "platform") {
    if (!el("idea-input").dataset.edited) el("idea-input").value = tr("Vaso inspirado en La Concha, con tonos marinos y un atardecer tranquilo.", "A tumbler inspired by La Concha, with sea tones and a peaceful sunset.");
    renderGlaze(); renderDesignSketch(); renderCalculator(state.language);
    setText("calc-label-diameter", tr("Diámetro de referencia (cm)", "Reference diameter (cm)"));
    setText("calc-label-height", tr("Altura de referencia (cm)", "Reference height (cm)"));
  }
}

installStudio();
renderStudio();
