/* ===== CONTENIDOS (edita aquí; el resto no necesita tocarse) ===== */
const FIREBASE = { projectId: "", apiKey: "" }; // vacío = comentarios solo en este navegador (modo prueba)
const IMGS = ["01-ceviche", "02-ajiaco", "03-arepa", "04-sancocho", "05-manzana", "06-racion"];
const P = (nombre, sabor, textura, origen, licencia, desc) => ({ nombre, sabor, textura, origen, licencia, desc });
const PRODUCTOS = [
  P("Digital ceviche peruano", "Ácido y marino", "Suave", "Archivo Perú, diseño con chefs europeos", "1 consumo, requiere paquete Gold", "Uno de nuestros primeros platos. La suavidad del pescado y el contraste ácido, sin pescado ni mar."),
  P("Ajiaco santafereño, edición memoria", "Cremoso y herbal", "Espeso", "Archivo Cundinamarca", "1 consumo", "El sabor de una tarde fría en Bogotá, renderizado en tu dispositivo doméstico."),
  P("Arepa de choclo con queso", "Dulce y salado", "Tierna", "Archivo Boyacá", "3 consumos", "Calentita, como la recordaba tu abuela. O como la recordamos nosotros por ti."),
  P("Sancocho de gallina", "Caldoso e intenso", "Líquida con trozos", "Archivo Valle del Cauca", "1 consumo", "Para los domingos que ya no existen."),
  P("Manzana roja, edición nostalgia", "Dulce y levemente ácido", "Crujiente", "Archivo Análogo", "1 consumo", "La fruta que alguna vez creció de un árbol. Hoy crece en tu sistema."),
  P("Ración básica de energía", "Neutro", "Ninguna", "Planta de datos PhagoSynth", "Ilimitada", "Todo lo que necesitas para seguir trabajando. Nada más.")
].map((p, i) => ({ id: "PLATO_" + String(i + 1).padStart(3, "0"), img: "img/platos/" + IMGS[i] + ".svg", ...p }));
const PLANES = [
  { nombre: "Premium", texto: "Alimentos de mayor valor nutricional y una calidad inigualable." },
  { nombre: "Meta", texto: "Textura, sabor, color y olor. La favorita de los nómadas digitales." },
  { nombre: "Familiar", texto: "10 comidas semanales para repartir libremente entre quienes comparten tu cápsula." },
  { nombre: "Gold", texto: "Sin acidez, reflujo ni malestares. No vas a sentir nada." }
];
const ARTICULOS = [
  { titulo: "¿Es PhagoSynth la alternativa a todos nuestros problemas alimenticios?", medio: "The New Era Times", fecha: "20 de julio de 2048", texto: [
    "Si echamos un ojo atrás a no más de 2 años, podemos encontrar un factor clave que ha mejorado la calidad de vida de las personas. Una idea tan novedosa como controversial que ha transformado nuestra realidad. PhagoSynth llegó a nuestras vidas con una premisa simple: la comida análoga es un asunto del pasado. Tomando en cuenta la crisis que estamos viviendo en estos momentos, dónde comer comida cultivada es un lujo únicamente imaginado por los más ricos y la población se está empezando a cansar de la comida sintética, ¿por qué no abrazar el alimento digital?",
    "Si todas nuestras vidas transcurren en el entorno digital, ¿por qué nos seguimos alimentando de manera análoga? Estas son las virales palabras pronunciadas por la directora de operaciones de PhagoSynth este pasado viernes en una rueda de prensa después de anunciar sus nuevas suscripciones que te permiten desbloquear olor, sabor y hasta te pueden evitar acidez estomacal y enfermedades relacionadas.",
    "El nuevo sistema funciona así: La suscripción Premium desbloquea alimentos con mayor valor nutricional y una calidad inigualable. La suscripción Meta, la más apetecida por los nómadas digitales, brinda textura, sabor, color y olor a los alimentos. Es una experiencia singular y una de esas cosas en las que vale la pena gastar tu dinero. La suscripción familiar, perfecta para quienes conviven con más personas en su cápsula, da 10 comidas semanales que se pueden distribuir libremente entre todos los integrantes. La suscripción Gold le da fin a esos malestares que eran tan comunes en la era análoga. Acidez, reflujo o hasta diarrea. ¡No vas a sentir nada!",
    "En una coyuntura cultural tan importante como la estamos viviendo en este momento, es hora de renovarnos. Comer digitalmente le ahorra tiempo a los trabajadores. La descarga del programa dura menos de 30 segundos y se puede realizar desde cualquier dispositivo. Chips, gafas, relojes. Desde tu cerebro das la instrucción de comer y en medio minuto te empiezas a sentir satisfecho. Si se piensa en todo el espacio público que ocupaban los restaurantes y que ahora se puede ocupar en datacenters, solo hay una solución lógica. El progreso es el avance en tecnologías. ¡No te quedes atrás!"] },
  { titulo: "Entrevista CEO PhagoSynth", medio: "AquíTeLoCuento.com", fecha: "Por: Anónimo", texto: [
    "Rodrigo Vexler Roa puede llegar a ser en estos momentos uno de los hombres más poderosos del mundo. Su patrimonio supera el trillón de dólares y está a la cabeza de una de las empresas más influyentes y revolucionarias de la actualidad: PhagoSynth.",
    "A pesar de toda esta fama, él es un hombre sencillo que huye de los reflectores. Por eso, AquíTeLoCuento.com cuenta hoy con una primicia. Vexler aceptó ser entrevistado por primera vez desde que su empresa fue posicionada como la más cotizada en la bolsa de valores de Nueva York (NYSE).",
    "Entrevistadora: “Señor Vexler, cuéntanos cómo se siente estar al mando de una de las empresas más grandes del mundo. ¿Cómo se siente el ver su nombre en la portada de cada una de las revistas más relevantes?”",
    "Rodrigo Vexler: “No he dejado que la fama se me suba a la cabeza. Yo no soy ningún salvador. Ofrezco soluciones a un problema que la humanidad lleva años padeciendo. Es simplemente un servicio comunitario. La humildad es lo más importante.”",
    "Entrevistadora: “Una pregunta para los escépticos. Sabemos que desde hace más de 3 años su dieta está 100% basada en comida digital. ¿Cómo ha mejorado su salud en este tiempo?”",
    "Rodrigo Vexler: “Míreme solo por un momento y admire lo delgada que es mi figura. Desbancar el equivocado mito que nos dejó mal alimentados por tantos años que refiere a una “alimentación balanceada” y a una “producción de músculo” nos dejó bastantes beneficios. Uno de estos es poder apreciar todos los días cuerpos más bellos, más delgados. Si le confieso algo, cada vez que veo a una persona a la que no se le notan los huesos me dan ganas de vomitar. PhagoSynth no solo vino a mejorar la industria alimentaria, también a la industria de la belleza.”",
    "Entrevistadora: “Usted no sabe lo mucho que las mujeres le agradecemos eso!”",
    "Rodrigo Vexler: “No es por nada. Solo siento que mi misión en la vida es ayudar a las personas, sabe? Ver a tantos niños necesitados de alimento descargando su primera comida es algo que me llena el alma.”",
    "Entrevistadora: “Definitivamente se nota cuando hay personas que le ponen el alma. Cuéntenos, cuál es su comida preferida?”",
    "Rodrigo Vexler: “Me encanta el ceviche peruano. Fue uno de los primeros platillos que diseñamos, trabajando con chefs europeos de primer nivel. La suavidad del pescado y su contraste ácido son de ensueño. Eso sí, es esencial comprar el paquete Gold que desbloquea el sabor, textura y olor de los alimentos.”",
    "Entrevistadora: “Y ya para terminar, ¿qué le diría a esas periodistas que hablan falacias de usted en internet?”",
    "Rodrigo Vexler: “Soy muy creyente del karma. Confío que tarde o temprano va a llegar a ella. Todos sus videos están compuestos por datos sacados de contexto, cifras inventadas y pura especulación para asustar a los consumidores. Tengo una responsabilidad con ustedes, y esa es decirles siempre lo que es mejor para ustedes. Hay una verdad absoluta: la comida digital es avanzar hacia el futuro.”",
    "Entrevistadora: “Señor Vexler, le agradezco profundamente concederme esta entrevista y agradezco en boca de toda la humanidad la labor que está realizando. Usted es uno de los mayores genios de nuestra generación y la esperanza a un futuro mejor, a un futuro más digital.”"] }
];
const VIDEOS = [{ titulo: "Video 1", reel: "DgDRyQrsnWI" }, { titulo: "Video 2", reel: "DgEH5d8MNZG" }];
const PODCASTS = [
  { titulo: "Tus influencers favoritos disfrutan de PhagoSynth", src: "audio/podcast-1-facho.mp3" },
  { titulo: "Conoce nuestras suscripciones", src: "audio/podcast-2-patrocinado.mp3" },
  { titulo: "¿Ya probaste nuestra comida virtual?", src: "audio/podcast-3-influencer.mp3" },
  { titulo: "Aprende a optimizar tu tiempo", src: "audio/podcast-4-miedo.mp3" }
];
/* Frases de la mascota: BORRADOR para aprobación */
const DIALOGOS = {
  inicio: ["¡Bienvenido a PhagoSynth! Tu apetito ya fue registrado.", "Quédate. Todo lo que necesitas está aquí. Todo."],
  nosotros: ["Somos una familia. Una muy grande. Y creciendo."],
  "como-funciona": ["Es facilísimo. Tú no haces nada. Nosotros sí."],
  productos: ["¡Elige sin miedo! Solo vas a consumir una vez... por licencia.", "¿Ese te gusta? Ya lo sabíamos."],
  prensa: ["Solo noticias verificadas. Por nosotros."],
  medios: ["Dale play. Y no cambies de pestaña."],
  comunidad: ["¡Tu opinión nos importa! Mientras sea la correcta."],
  borrado: ["Ese comentario... nunca existió.", "Uy. Qué raro. Ya no está."]
};

/* ===== Utilidades ===== */
const $ = (s, r = document) => r.querySelector(s);
const el = (t, props = {}, kids = []) => { const e = Object.assign(document.createElement(t), props); kids.forEach(k => e.append(k)); return e; };
const safe = (fn, d) => { try { return fn(); } catch { return d; } };
const hash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
document.querySelectorAll(".ph").forEach(p => p.setAttribute("data-ph", p.dataset.ph));

/* ===== Mascota ===== */
let muted = safe(() => localStorage.getItem("ps_mute") === "1", false), lastKey = "inicio", n = 0, timer;
const bub = $("#bub");
function say(key, force) {
  if (muted && !force) return;
  const l = DIALOGOS[key] || DIALOGOS.inicio; lastKey = key;
  bub.textContent = l[n++ % l.length]; bub.hidden = false;
  clearTimeout(timer); timer = setTimeout(() => bub.hidden = true, 6000);
}
$("#masbtn").onclick = () => say(lastKey, true);
const mb = $("#masmute");
function paintMute() { mb.textContent = muted ? "Activar" : "Silenciar"; mb.setAttribute("aria-pressed", muted); if (muted) bub.hidden = true; }
mb.onclick = () => { muted = !muted; safe(() => localStorage.setItem("ps_mute", muted ? "1" : "0")); paintMute(); };
paintMute();

/* ===== Navegación ===== */
const views = [...document.querySelectorAll("[data-view]")], links = [...document.querySelectorAll("nav a")];
$("#tiles").append(...links.slice(1).map(a => el("a", { href: a.getAttribute("href"), textContent: a.textContent })));
function route() {
  let v = location.hash.slice(1); if (!views.some(s => s.dataset.view === v)) v = "inicio";
  views.forEach(s => s.hidden = s.dataset.view !== v);
  links.forEach(a => a.getAttribute("href") === "#" + v ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  $("#nav").classList.remove("open"); $("#burger").setAttribute("aria-expanded", "false");
  scrollTo(0, 0); n = 0; say(v);
  if (v === "comunidad") loadComments();
}
addEventListener("hashchange", route);
$("#burger").onclick = e => { const o = $("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };

/* ===== Diálogo (producto / artículo) ===== */
const dlg = $("#dlg");
$("#dclose").onclick = () => dlg.close();
const openDlg = nodes => { $("#dbody").replaceChildren(...nodes); dlg.showModal(); };

/* ===== Productos, planes, artículos, medios ===== */
$("#productos").append(...PRODUCTOS.map(p => {
  const b = el("button", { className: "card" }, [el("img", { className: "pimg", src: p.img, alt: p.nombre, loading: "lazy" }), el("div", { className: "body" }, [el("b", { textContent: p.id }), p.nombre])]);
  b.onclick = () => { const d = el("dl"); [["Sabor", p.sabor], ["Textura", p.textura], ["Origen", p.origen], ["Licencia", p.licencia]].forEach(([k, v]) => d.append(el("dt", { textContent: k }), el("dd", { textContent: v }))); openDlg([el("img", { className: "pimg", src: p.img, alt: p.nombre }), el("p", { textContent: p.id }), el("h2", { textContent: p.nombre }), el("p", { textContent: p.desc }), d]); };
  b.onmouseenter = () => { if (Math.random() < .3) say("productos"); };
  return b;
}));
$("#planes").append(...PLANES.map(p => el("div", { className: "row" }, [el("b", { textContent: p.nombre }), el("p", { textContent: p.texto })])));
$("#articulos").append(...ARTICULOS.map(a => {
  const b = el("button", { className: "card" }, [el("div", { className: "body" }, [el("b", { textContent: a.medio + (a.fecha ? " · " + a.fecha : "") }), a.titulo])]);
  b.onclick = () => openDlg([el("h2", { textContent: a.titulo }), el("p", { textContent: a.medio + (a.fecha ? " · " + a.fecha : "") }), ...a.texto.map(t => el("p", { textContent: t }))]);
  return b;
}));
$("#videos").append(...VIDEOS.map(v => el("div", {}, [el("b", { textContent: v.titulo }), el("iframe", { src: `https://www.instagram.com/reel/${v.reel}/embed`, title: v.titulo, loading: "lazy", allowFullscreen: true })])));
$("#podcasts").append(...PODCASTS.map(p => el("div", { className: "row" }, [el("b", { textContent: p.titulo }), el("audio", { controls: true, preload: "none", src: p.src })])));

/* ===== Comentarios (Firebase Firestore por REST, o localStorage como respaldo) ===== */
const base = `https://firestore.googleapis.com/v1/projects/${FIREBASE.projectId}/databases/(default)/documents/comments`;
const remote = !!(FIREBASE.projectId && FIREBASE.apiKey);
const Store = {
  async list() {
    if (!remote) return safe(() => JSON.parse(localStorage.getItem("ps_c") || "[]"), []);
    const r = await fetch(`${base}?orderBy=t%20desc&pageSize=50&key=${FIREBASE.apiKey}`); const j = await r.json();
    return (j.documents || []).map(d => ({ id: d.name.split("/").pop(), n: d.fields.n.stringValue, m: d.fields.m.stringValue, t: +d.fields.t.integerValue }));
  },
  async add(c) {
    if (!remote) { const a = await this.list(); a.unshift(c); safe(() => localStorage.setItem("ps_c", JSON.stringify(a.slice(0, 50)))); return; }
    await fetch(`${base}?key=${FIREBASE.apiKey}`, { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields: { n: { stringValue: c.n }, m: { stringValue: c.m }, t: { integerValue: String(c.t) } } }) });
  }
};
const gone = c => hash(c.id) % 4 === 0; // 1 de cada 4 comentarios es "borrado"
const GONE_TXT = "Este comentario fue borrado.";
function item(c, hidden) {
  const li = el("li", { className: hidden ? "gone" : "" });
  if (c) li.dataset.id = c.id;
  if (hidden) li.textContent = GONE_TXT;
  else li.append(el("small", { textContent: `${c.n || "Anónimo"} · ${new Date(c.t).toLocaleString("es-CO")}` }), el("span", { textContent: c.m }));
  return li;
}
let fresh = null; // id del comentario recién publicado: se muestra unos segundos antes de "borrarse"
function paint(list) {
  const ul = $("#comentarios"); ul.replaceChildren();
  list.forEach((c, i) => { ul.append(item(c, gone(c) && c.id !== fresh)); if (i === 1 || i === 4) ul.append(item(null, true)); });
  if (list.length < 2) ul.append(item(null, true));
}
async function loadComments() {
  const s = $("#cstate");
  try { paint(await Store.list()); s.textContent = ""; } catch { s.textContent = "No se pudieron cargar los comentarios."; }
}
$("#cform").onsubmit = async e => {
  e.preventDefault(); const f = e.target, s = $("#cstate");
  const c = { id: "l" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), n: f.n.value.trim().slice(0, 40), m: f.m.value.trim().slice(0, 400), t: Date.now() };
  if (!c.m) return;
  try { await Store.add(c); } catch { s.textContent = "No se pudo publicar. Inténtalo de nuevo."; return; }
  f.reset(); s.textContent = "Comentario publicado.";
  fresh = gone(c) ? c.id : null;
  await loadComments();
  const mine = fresh && $(`#comentarios li[data-id="${c.id}"]`);
  if (mine) setTimeout(() => { mine.replaceChildren(GONE_TXT); mine.className = "gone"; fresh = null; say("borrado", true); }, 5000 + Math.random() * 4000);
};

route();
