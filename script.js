const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const I18N = {
    tr: {
        "meta.description": "Estetiğe önem veren bağımsız yazılım ve tasarım stüdyosu. Süreci baştan sona yönetir, sade ama sıradan olmayan ürünler yaparız.",
        "nav.menu": "Menü",
        "clock.place": "İstanbul'da saat",
        "manifesto.label": "Manifesto",
        "nav.studio": "Stüdyo",
        "nav.approach": "Yaklaşım",
        "nav.contact": "İletişim",
        "hero.eyebrow": "Bağımsız yazılım ve tasarım stüdyosu",
        "hero.w1": "Sade.",
        "hero.w2": "Ama",
        "hero.w3": "sıradan değil.",
        "hero.lead": "Gürültüyü atar, işin özünü bırakırız. Fikirden yayına her adımı biz yönetir, gerektiğinde kuralları yeniden yazarız.",
        "hero.cta1": "Bize yazın",
        "hero.cta2": "Nasıl çalışırız",
        "hero.scroll": "Keşfetmek için kaydırın",
        "manifesto": "İyi yazılım sessizdir. Gösterişle değil, güvenle konuşur. Biz o sessizliği tasarlıyoruz.",
        "approach.eyebrow": "Yaklaşım",
        "approach.title": "Önce kural. Sonra kendi yolumuz.",
        "approach.c1t": "Disiplin",
        "approach.c1p": "Fikirden yayına tüm süreci tek elden yönetiriz. Kargaşaya yer yok: her adım planlı, her detay yerinde, her iş hakkıyla.",
        "approach.c2t": "Kural dışı",
        "approach.c2p": "Herkes aynı yoldan gidiyorsa biz bir kez daha düşünürüz. Bir kural ürünü daha iyi yapmıyorsa, onu yıkmaktan çekinmeyiz.",
        "approach.c3t": "Ruhu olan sadelik",
        "approach.c3p": "Japon sadeliğinden ilham alırız ama boşluğa teslim olmayız. Fazlalığı atar, geriye karakteri olan bir tasarım bırakırız.",
        "contact.eyebrow": "İletişim",
        "contact.title": "Dağınık bir fikir mi? Getirin.",
        "contact.lead": "Henüz net olması gerekmiyor. Kargaşayı toparlamak bizim işimiz. Bir ürün, bir soru ya da sadece merhaba, yazın.",
        "contact.email": "E-posta",
        "contact.note": "Her mesaja en geç bir iş günü içinde dönüyoruz.",
        "footer.privacy": "Gizlilik",
        "footer.tagline": "Sade. Ama sıradan değil.",
        "footer.nav": "Gezinti",
        "footer.follow": "Takip edin",
        "footer.top": "Başa dön ↑",
        "footer.rights": "© {year} Satafi Studio. Tüm hakları saklıdır.",
        "e404.eyebrow": "Hata 404",
        "e404.w1": "Burada",
        "e404.w2": "bir şey yok.",
        "e404.lead": "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.",
        "e404.cta": "Ana sayfaya dönün"
    },
    en: {
        "meta.description": "An independent software and design studio that cares about aesthetics. We run the whole process and build products that are simple, never ordinary.",
        "nav.menu": "Menu",
        "clock.place": "Time in Istanbul",
        "manifesto.label": "Manifesto",
        "nav.studio": "Studio",
        "nav.approach": "Approach",
        "nav.contact": "Contact",
        "hero.eyebrow": "Independent software & design studio",
        "hero.w1": "Simple.",
        "hero.w2": "Never",
        "hero.w3": "ordinary.",
        "hero.lead": "We strip away the noise and keep what matters. We run every step from idea to launch and rewrite the rules when they get in the way.",
        "hero.cta1": "Get in touch",
        "hero.cta2": "How we work",
        "hero.scroll": "Scroll to discover",
        "manifesto": "Good software is quiet. It speaks through trust, not noise. We design that quiet.",
        "approach.eyebrow": "Approach",
        "approach.title": "First the rules. Then our own way.",
        "approach.c1t": "Discipline",
        "approach.c1p": "We run the whole process, from idea to launch, under one roof. No chaos: every step planned, every detail in place, every job done right.",
        "approach.c2t": "Off-script",
        "approach.c2p": "When everyone takes the same road, we think twice. If a rule doesn't make the product better, we're not afraid to break it.",
        "approach.c3t": "Simplicity with soul",
        "approach.c3p": "We draw on Japanese simplicity without surrendering to emptiness. We cut the excess and leave a design with character.",
        "contact.eyebrow": "Contact",
        "contact.title": "Got a messy idea? Bring it.",
        "contact.lead": "It doesn't have to be clear yet. Sorting out the chaos is our job. A product, a question or just hello, write to us.",
        "contact.email": "Email",
        "contact.note": "We reply to every message within one business day.",
        "footer.privacy": "Privacy",
        "footer.tagline": "Simple. Never ordinary.",
        "footer.nav": "Navigate",
        "footer.follow": "Follow along",
        "footer.top": "Back to top ↑",
        "footer.rights": "© {year} Satafi Studio. All rights reserved.",
        "e404.eyebrow": "Error 404",
        "e404.w1": "Nothing",
        "e404.w2": "to see here.",
        "e404.lead": "The page you are looking for may have moved or never existed.",
        "e404.cta": "Back to home"
    },
    fr: {
        "meta.description": "Studio indépendant de logiciel et de design attaché à l'esthétique. Nous menons tout le processus et créons des produits simples, jamais ordinaires.",
        "nav.menu": "Menu",
        "clock.place": "Heure à Istanbul",
        "manifesto.label": "Manifeste",
        "nav.studio": "Studio",
        "nav.approach": "Approche",
        "nav.contact": "Contact",
        "hero.eyebrow": "Studio indépendant de logiciel et de design",
        "hero.w1": "Simple.",
        "hero.w2": "Jamais",
        "hero.w3": "ordinaire.",
        "hero.lead": "Nous retirons le bruit et gardons l'essentiel. Nous menons chaque étape, de l'idée au lancement, et réécrivons les règles quand elles gênent.",
        "hero.cta1": "Écrivez-nous",
        "hero.cta2": "Notre méthode",
        "hero.scroll": "Défilez pour découvrir",
        "manifesto": "Un bon logiciel est silencieux. Il parle par la confiance, pas par le bruit. Nous dessinons ce silence.",
        "approach.eyebrow": "Approche",
        "approach.title": "D'abord les règles. Puis notre voie.",
        "approach.c1t": "Discipline",
        "approach.c1p": "Nous menons tout le processus, de l'idée au lancement. Pas de chaos : chaque étape planifiée, chaque détail à sa place, chaque travail bien fait.",
        "approach.c2t": "Hors des règles",
        "approach.c2p": "Quand tout le monde prend le même chemin, nous réfléchissons à deux fois. Si une règle n'améliore pas le produit, nous n'hésitons pas à la briser.",
        "approach.c3t": "Une simplicité qui a de l'âme",
        "approach.c3p": "Nous puisons dans la sobriété japonaise sans céder au vide. Nous retirons le superflu et laissons un design qui a du caractère.",
        "contact.eyebrow": "Contact",
        "contact.title": "Une idée en désordre ? Apportez-la.",
        "contact.lead": "Elle n'a pas besoin d'être claire. Mettre de l'ordre, c'est notre métier. Un produit, une question ou un simple bonjour, écrivez-nous.",
        "contact.email": "E-mail",
        "contact.note": "Nous répondons à chaque message sous un jour ouvré.",
        "footer.privacy": "Confidentialité",
        "footer.tagline": "Simple. Jamais ordinaire.",
        "footer.nav": "Navigation",
        "footer.follow": "Suivez-nous",
        "footer.top": "Haut de page ↑",
        "footer.rights": "© {year} Satafi Studio. Tous droits réservés.",
        "e404.eyebrow": "Erreur 404",
        "e404.w1": "Rien",
        "e404.w2": "à voir ici.",
        "e404.lead": "La page que vous cherchez a peut-être été déplacée ou n'a jamais existé.",
        "e404.cta": "Retour à l'accueil"
    }
};

function makeNoise(seed) {
    let s = seed || 1;
    const rand = function () {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
    const perm = new Uint8Array(512);
    const grad = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
        perm[i] = i;
        grad[i] = rand();
    }
    for (let i = 255; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        const t = perm[i];
        perm[i] = perm[j];
        perm[j] = t;
    }
    for (let i = 0; i < 256; i++) perm[i + 256] = perm[i];
    const fade = function (t) {
        return t * t * (3 - 2 * t);
    };
    const value = function (x, y) {
        const xi = Math.floor(x);
        const yi = Math.floor(y);
        const xf = x - xi;
        const yf = y - yi;
        const a = grad[perm[(xi & 255) + perm[yi & 255]]];
        const b = grad[perm[((xi + 1) & 255) + perm[yi & 255]]];
        const c = grad[perm[(xi & 255) + perm[(yi + 1) & 255]]];
        const d = grad[perm[((xi + 1) & 255) + perm[(yi + 1) & 255]]];
        const u = fade(xf);
        const v = fade(yf);
        return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
    };
    return function fbm(x, y, octaves) {
        let total = 0;
        let amp = 0.5;
        let freq = 1;
        let norm = 0;
        for (let o = 0; o < (octaves || 5); o++) {
            total += value(x * freq, y * freq) * amp;
            norm += amp;
            amp *= 0.5;
            freq *= 2;
        }
        return total / norm;
    };
}

function clamp01(v) {
    return Math.min(Math.max(v, 0), 1);
}

function whenVisible(el, onChange) {
    if (!("IntersectionObserver" in window)) {
        onChange(true);
        return;
    }
    new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            onChange(entry.isIntersecting);
        });
    }, { rootMargin: "120px 0px" }).observe(el);
}

function makeButterfly() {
    const bfly = document.createElement("span");
    bfly.className = "bfly";
    ["wing wing-l", "wing wing-r"].forEach(function (cls) {
        const wing = document.createElement("span");
        wing.className = cls;
        bfly.appendChild(wing);
    });
    return bfly;
}

let currentLang = "tr";

function readStoredLang() {
    try {
        const stored = localStorage.getItem("satafi-lang");
        if (I18N[stored]) return stored;
    } catch {}
    const preferred = (navigator.languages || [navigator.language || "tr"])
        .map(function (code) {
            return String(code).slice(0, 2).toLowerCase();
        })
        .find(function (code) {
            return I18N[code];
        });
    return preferred || "tr";
}

function storeLang(lang) {
    try {
        localStorage.setItem("satafi-lang", lang);
    } catch {}
}

const inkWords = (function () {
    let items = [];

    function rebuild() {
        items = Array.from(document.querySelectorAll("[data-ink-words]")).map(function (el) {
            const words = el.textContent.trim().split(/\s+/);
            el.textContent = "";
            const spans = words.map(function (word, i) {
                const span = document.createElement("span");
                span.className = "w";
                span.textContent = word;
                el.appendChild(span);
                if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
                return span;
            });
            return { el, spans };
        });
        update();
    }

    function update() {
        const vh = window.innerHeight;
        items.forEach(function (item) {
            const rect = item.el.getBoundingClientRect();
            const progress = REDUCED_MOTION ? 1 : clamp01((vh * 0.86 - rect.top) / (rect.height + vh * 0.25));
            const lit = Math.round(progress * item.spans.length);
            item.spans.forEach(function (span, i) {
                span.classList.toggle("on", i < lit);
            });
        });
    }

    return { rebuild, update };
})();

const clock = (function () {
    const timeEl = document.querySelector("[data-clock-time]");
    if (!timeEl) return { render: function () {} };

    function render() {
        let text;
        try {
            text = new Intl.DateTimeFormat("tr-TR", { timeZone: "Europe/Istanbul", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
        } catch (e) {
            const now = new Date();
            text = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
        }
        timeEl.textContent = text;
    }

    render();
    setInterval(render, 20000);
    return { render };
})();

const LANG_LABELS = { tr: "TR", en: "EN", fr: "FR" };

function applyLang(lang) {
    const dict = I18N[lang];
    const year = new Date().getFullYear();
    currentLang = lang;
    document.documentElement.lang = lang;
    const current = document.querySelector("[data-lang-current]");
    if (current) current.textContent = LANG_LABELS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const value = dict[el.dataset.i18n];
        if (value) el.textContent = value.replace("{year}", year);
    });
    document.querySelectorAll("[data-split]").forEach(function (el) {
        const lines = el.textContent.trim().split(/(?<=[.?!])\s+/);
        el.textContent = "";
        lines.forEach(function (text) {
            const line = document.createElement("span");
            line.className = "line";
            line.textContent = text;
            el.appendChild(line);
        });
    });
    const desc = document.querySelector('meta[name="description"][data-i18n-meta]');
    if (desc) desc.setAttribute("content", dict["meta.description"]);
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    inkWords.rebuild();
    clock.render();
    storeLang(lang);
}

(function initLang() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (btn.dataset.lang !== currentLang) applyLang(btn.dataset.lang);
        });
    });
    applyLang(readStoredLang());
})();

(function initLangMenu() {
    const menu = document.querySelector("[data-lang-menu]");
    const toggle = document.querySelector("[data-lang-toggle]");
    if (!menu || !toggle) return;

    function close() {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const open = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target)) close();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
    });

    menu.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.addEventListener("click", close);
    });
})();

(function initMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const panel = document.querySelector("[data-menu]");
    if (!toggle || !panel) return;

    function set(open) {
        document.body.classList.toggle("menu-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        panel.setAttribute("aria-hidden", String(!open));
    }

    toggle.addEventListener("click", function () {
        set(!document.body.classList.contains("menu-open"));
    });

    panel.querySelectorAll("[data-menu-link]").forEach(function (link) {
        link.addEventListener("click", function () {
            set(false);
        });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") set(false);
    });
})();

const topbarTheme = (function () {
    const bar = document.querySelector("[data-topbar]");
    if (!bar) return { update: function () {} };

    function update() {
        bar.classList.toggle("scrolled", window.scrollY > 10);
        const y = 34;
        let theme = "dark";
        document.querySelectorAll("[data-theme]").forEach(function (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= y && rect.bottom > y) theme = el.dataset.theme;
        });
        bar.classList.toggle("on-light", theme === "light");
    }

    return { update };
})();

(function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
        items.forEach(function (el) {
            el.classList.add("in-view");
        });
        return;
    }
    const io = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) {
        io.observe(el);
    });
})();


(function initSmoke() {
    const smoke = document.querySelector("[data-smoke]");
    if (!smoke) return;

    function texture(seed, scale, stretch) {
        const w = 160;
        const h = 100;
        const fbm = makeNoise(seed);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        const img = ctx.createImageData(w, h);
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const nx = (x / w) * scale;
                const ny = (y / h) * scale * stretch;
                const warp = fbm(nx * 0.7 + 3.1, ny * 0.7 + 1.7, 2) * 2.2;
                let v = fbm(nx + warp, ny + warp * 0.6, 4);
                v = Math.pow(clamp01((v - 0.36) / 0.4), 1.8);
                const edge = Math.sin((x / w) * Math.PI) * Math.sin((y / h) * Math.PI);
                const i = (y * w + x) * 4;
                img.data[i] = 235;
                img.data[i + 1] = 233;
                img.data[i + 2] = 228;
                img.data[i + 3] = Math.round(v * edge * 255);
            }
        }
        ctx.putImageData(img, 0, 0);
        return "url(" + canvas.toDataURL() + ")";
    }

    const later = window.requestIdleCallback || function (fn) {
        return setTimeout(fn, 200);
    };
    later(function () {
        smoke.style.setProperty("--smoke-a", texture(7, 3.2, 0.7));
        later(function () {
            smoke.style.setProperty("--smoke-b", texture(23, 4.4, 0.5));
        });
    });
})();




requestAnimationFrame(function () {
    requestAnimationFrame(function () {
        document.body.classList.add("ready");
    });
});

function chapterProgress(section) {
    const rect = section.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    return span > 0 ? clamp01(-rect.top / span) : 0;
}

function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function sizeCanvas(canvas, ctx) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(Math.round(rect.width * dpr), 1);
    canvas.height = Math.max(Math.round(rect.height * dpr), 1);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { width: rect.width, height: rect.height };
}

const scenes = [];

(function initGrid() {
    const section = document.querySelector('[data-chapter="one"]');
    if (!section) return;
    const canvas = section.querySelector("[data-grid-canvas]");
    const ctx = canvas.getContext("2d");
    let dots = [];
    let size = { width: 0, height: 0 };
    let last = -1;

    function setup() {
        size = sizeCanvas(canvas, ctx);
        const narrow = size.width < 520;
        const cols = narrow ? 9 : 13;
        const rows = narrow ? 8 : 9;
        const gx = size.width * 0.86 / (cols - 1);
        const gy = size.height * 0.84 / (rows - 1);
        const ox = (size.width - gx * (cols - 1)) / 2;
        const oy = (size.height - gy * (rows - 1)) / 2;
        dots = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dots.push({
                    tx: ox + c * gx,
                    ty: oy + r * gy,
                    sx: Math.random() * size.width,
                    sy: Math.random() * size.height,
                    delay: Math.random() * 0.3,
                    red: r === Math.floor(rows / 2) && c === Math.floor(cols / 2)
                });
            }
        }
        last = -1;
    }

    function draw(p) {
        ctx.clearRect(0, 0, size.width, size.height);
        ctx.fillStyle = "#0b0b0c";
        dots.forEach(function (d) {
            if (d.red) return;
            const k = ease(clamp01((p - 0.04 - d.delay * 0.6) / 0.5));
            ctx.globalAlpha = 0.25 + k * 0.6;
            ctx.beginPath();
            ctx.arc(d.sx + (d.tx - d.sx) * k, d.sy + (d.ty - d.sy) * k, 2 + k * 1.2, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;
        const red = dots.find(function (d) { return d.red; });
        if (red) {
            const k = ease(clamp01((p - 0.04) / 0.55));
            ctx.fillStyle = "#d4261c";
            ctx.beginPath();
            ctx.arc(red.sx + (red.tx - red.sx) * k, red.sy + (red.ty - red.sy) * k, 4 + k * 6, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    let ready = false;
    window.addEventListener("resize", function () {
        if (ready) setup();
    });

    scenes.push(function () {
        if (!ready) {
            ready = true;
            setup();
        }
        const p = chapterProgress(section);
        section.style.setProperty("--text-o", clamp01((p + 0.05) / 0.2).toFixed(3));
        if (Math.abs(p - last) > 0.001) {
            last = p;
            draw(p);
        }
    });
})();

(function initBurn() {
    const section = document.querySelector('[data-chapter="two"]');
    if (!section) return;
    const canvas = section.querySelector("[data-burn]");
    const ctx = canvas.getContext("2d");
    const fbm = makeNoise(41);
    let field = null;
    let img = null;
    let w = 0;
    let h = 0;
    let last = -1;

    function setup() {
        const rect = canvas.getBoundingClientRect();
        const scale = 5;
        w = Math.max(Math.ceil(rect.width / scale), 2);
        h = Math.max(Math.ceil(rect.height / scale), 2);
        canvas.width = w;
        canvas.height = h;
        img = ctx.createImageData(w, h);
        field = new Float32Array(w * h);
        const aspect = rect.width / Math.max(rect.height, 1);
        let min = Infinity;
        let max = -Infinity;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const nx = x / w;
                const ny = y / h;
                const dx = (nx - 0.5) * aspect;
                const dy = ny - 0.5;
                const v = fbm(nx * 4 * aspect, ny * 4, 4) * 0.6 + Math.sqrt(dx * dx + dy * dy) * 0.55;
                field[y * w + x] = v;
                if (v < min) min = v;
                if (v > max) max = v;
            }
        }
        for (let i = 0; i < field.length; i++) field[i] = (field[i] - min) / (max - min);
        last = -1;
    }

    function draw(b) {
        const data = img.data;
        const band = 0.04;
        for (let i = 0; i < field.length; i++) {
            const d = field[i] - b;
            const j = i * 4;
            if (d < 0) {
                data[j + 3] = 0;
            } else if (d < band) {
                const k = d / band;
                data[j] = 255;
                data[j + 1] = Math.round(225 - k * 190);
                data[j + 2] = Math.round(150 - k * 140);
                data[j + 3] = 255;
            } else {
                const char = clamp01((band * 4 - d) / (band * 3));
                data[j] = Math.round(238 - 168 * char);
                data[j + 1] = Math.round(236 - 196 * char);
                data[j + 2] = Math.round(230 - 206 * char);
                data[j + 3] = 255;
            }
        }
        ctx.putImageData(img, 0, 0);
    }

    let ready = false;
    window.addEventListener("resize", function () {
        if (ready) setup();
    });

    scenes.push(function () {
        const rect = section.getBoundingClientRect();
        if (rect.top > window.innerHeight * 2.5 || rect.bottom < -window.innerHeight) return;
        if (!ready) {
            ready = true;
            setup();
        }
        const p = chapterProgress(section);
        const b = ease(clamp01((p - 0.08) / 0.7)) * 1.06 - 0.03;
        section.style.setProperty("--text-o", clamp01((p + 0.05) / 0.2).toFixed(3));
        if (Math.abs(b - last) > 0.003) {
            last = b;
            draw(b);
        }
    });
})();

(function initVortex() {
    const section = document.querySelector('[data-chapter="three"]');
    if (!section) return;
    const canvas = section.querySelector("[data-vortex]");
    const flock = section.querySelector("[data-flock]");
    const ctx = canvas.getContext("2d");
    let size = { width: 0, height: 0 };
    let particles = [];
    let progress = 0;
    let running = false;
    let raf = 0;

    const birds = Array.from({ length: 7 }, function (_, i) {
        const el = document.createElement("span");
        el.className = "flyer";
        const s = 18 + Math.random() * 22;
        el.style.setProperty("--size", s.toFixed(1) + "px");
        el.style.setProperty("--speed", (0.28 + Math.random() * 0.16).toFixed(2) + "s");
        el.appendChild(makeButterfly());
        flock.appendChild(el);
        return {
            el,
            size: s,
            delay: 0.08 + i * 0.06,
            tx: (Math.random() - 0.5) * 1.2,
            ty: 0.05 + Math.random() * 0.3,
            ph: Math.random() * Math.PI * 2
        };
    });

    function setup() {
        size = sizeCanvas(canvas, ctx);
        const count = size.width < 520 ? 500 : 1000;
        particles = Array.from({ length: count }, function () {
            return {
                a: Math.random() * Math.PI * 2,
                y: Math.random(),
                jitter: (Math.random() - 0.5) * 0.12,
                v: 0.0007 + Math.random() * 0.0014,
                s: 1 + Math.random() * 1.3
            };
        });
    }

    function frame(t) {
        const width = size.width;
        const height = size.height;
        ctx.clearRect(0, 0, width, height);
        const cx = width * 0.5;
        const spread = 1 + ease(progress) * 0.9;
        const fade = 1 - ease(clamp01((progress - 0.6) / 0.4)) * 0.6;
        const maxR = Math.min(width, height * 1.2) * 0.5;
        ctx.fillStyle = "#eeece6";
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.y -= p.v;
            if (p.y < 0) {
                p.y = 1;
                p.a = Math.random() * Math.PI * 2;
            }
            const radius = (0.06 + Math.pow(1 - p.y, 1.7) * 0.9 + p.jitter * (1 - p.y)) * maxR * spread;
            const ang = p.a + t * 0.0003 / (0.15 + radius / 400);
            const z = Math.sin(ang);
            ctx.globalAlpha = (0.2 + (z + 1) * 0.3) * fade;
            ctx.fillRect(cx + Math.cos(ang) * radius, height * 0.04 + p.y * height * 0.94 + z * radius * 0.08, p.s, p.s);
        }
        ctx.globalAlpha = 1;

        const s = t / 1000;
        birds.forEach(function (b) {
            const k = ease(clamp01((progress - b.delay) / 0.5));
            const x = cx + b.tx * width * 0.45 * k + Math.sin(s * 1.6 + b.ph) * 18 * k;
            const y = height * 0.82 + (height * b.ty - height * 0.82) * k + Math.cos(s * 2.1 + b.ph) * 12 * k;
            b.el.style.opacity = (k <= 0 ? 0 : Math.min(k * 4, 1)).toFixed(3);
            b.el.style.transform = "translate3d(" + (x - b.size / 2).toFixed(1) + "px," + (y - b.size / 2).toFixed(1) + "px,0) rotate(" + (b.tx * 24 * k).toFixed(1) + "deg) rotateX(40deg) scale(" + (0.6 + k * 0.6).toFixed(3) + ")";
        });
    }

    function tick(t) {
        frame(t);
        raf = requestAnimationFrame(tick);
    }

    let ready = false;
    window.addEventListener("resize", function () {
        if (ready) setup();
    });

    scenes.push(function () {
        if (!ready) {
            ready = true;
            setup();
        }
        progress = chapterProgress(section);
        section.style.setProperty("--text-o", clamp01((progress + 0.05) / 0.2).toFixed(3));
        if (REDUCED_MOTION) frame(0);
    });

    if (REDUCED_MOTION) return;
    whenVisible(section.querySelector(".chapter-sticky"), function (visible) {
        if (visible && !running) {
            running = true;
            raf = requestAnimationFrame(tick);
        } else if (!visible && running) {
            running = false;
            cancelAnimationFrame(raf);
        }
    });
})();

(function initInkPool() {
    const canvas = document.querySelector("[data-ink-pool]");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const fbm = makeNoise(77);
    let lastW = 0;

    function draw() {
        const rect = canvas.getBoundingClientRect();
        if (Math.abs(rect.width - lastW) < 2) return;
        lastW = rect.width;
        const scale = 4;
        const w = Math.ceil(rect.width / scale);
        const h = Math.ceil(rect.height / scale);
        canvas.width = w;
        canvas.height = h;
        const img = ctx.createImageData(w, h);
        const edge = 170 / scale;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const n = fbm(x / w * 6 + 2, y / h * 3, 4);
                const rise = clamp01((y - edge * 0.2) / (edge * 1.3));
                const v = rise * 1.25 + (n - 0.5) * 0.9;
                if (v > 0.62) {
                    const i = (y * w + x) * 4;
                    img.data[i] = 12;
                    img.data[i + 1] = 12;
                    img.data[i + 2] = 13;
                    img.data[i + 3] = Math.round(clamp01((v - 0.62) * 14) * 255);
                }
            }
        }
        ctx.putImageData(img, 0, 0);
        ctx.fillStyle = "#0c0c0d";
        const drops = Math.round(rect.width / 14);
        for (let i = 0; i < drops; i++) {
            const r = Math.random() < 0.85 ? 0.25 + Math.random() * 0.5 : 0.8 + Math.random() * 1.4;
            ctx.beginPath();
            ctx.arc(Math.random() * w, (8 + Math.pow(Math.random(), 0.7) * 170) / scale, r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const run = function () {
        draw();
    };
    if ("requestIdleCallback" in window) requestIdleCallback(run, { timeout: 1500 });
    else setTimeout(run, 300);
    let timer = 0;
    window.addEventListener("resize", function () {
        clearTimeout(timer);
        timer = setTimeout(draw, 250);
    });
})();

(function initScroll() {
    let raf = 0;

    function update() {
        raf = 0;
        inkWords.update();
        scenes.forEach(function (fn) {
            fn();
        });
        topbarTheme.update();
    }

    function start() {
        update();
        window.addEventListener("scroll", function () {
            if (!raf) raf = requestAnimationFrame(update);
        }, { passive: true });
        window.addEventListener("resize", update);
    }

    if (document.readyState === "complete") setTimeout(start, 60);
    else window.addEventListener("load", function () {
        setTimeout(start, 60);
    });
})();
