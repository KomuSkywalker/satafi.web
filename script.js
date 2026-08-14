const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const I18N = {
    tr: {
        "meta.description": "Bağımsız yazılım ve tasarım stüdyosu. Az sayıda iş, en yüksek özen.",
        "nav.approach": "Yaklaşım",
        "nav.contact": "İletişim",
        "hero.eyebrow": "Bağımsız yazılım ve tasarım stüdyosu",
        "hero.w1": "Tasarla.",
        "hero.w2": "Yaz.",
        "hero.w3": "Yaşat.",
        "hero.lead": "Az sayıda iş alır, her birini yıllarca yaşayacak bir ürün olarak büyütürüz.",
        "hero.cta1": "İletişime geçin",
        "hero.cta2": "Yaklaşımımız",
        "manifesto": "İyi yazılım sessizdir. Gösterişle değil, güvenle konuşur. Biz o sessizliği tasarlıyoruz.",
        "approach.eyebrow": "Yaklaşım",
        "approach.title": "Nasıl çalışıyoruz?",
        "approach.c1t": "Eksilterek inşa",
        "approach.c1p": "Bir üründe kalan son şey, gerekli olandır. Emin olamadığımız her ögeyi çıkarır, kalanı kusursuzlaştırırız.",
        "approach.c2t": "Uçtan uca sahiplik",
        "approach.c2p": "Fikirden yayına kadar strateji, tasarım ve yazılım tek çatı altında ilerler. Hiçbir şey arada kaybolmaz.",
        "approach.c3t": "Uzun soluk",
        "approach.c3p": "Yayınladığımız her ürünün arkasında dururuz. Sürüm sürüm inceltir, yıllarca yaşatırız.",
        "contact.eyebrow": "İletişim",
        "contact.title": "Konuşalım.",
        "contact.lead": "Aklınızda bir ürün, bir soru ya da yalnızca bir merhaba varsa kapımız açık.",
        "contact.email": "E-posta",
        "contact.note": "Her iletiye en geç bir iş günü içinde dönüş yaparız.",
        "footer.rights": "© {year} Satafi Studio. Tüm hakları saklıdır.",
        "e404.eyebrow": "Hata 404",
        "e404.w1": "Burada",
        "e404.w2": "bir şey yok.",
        "e404.lead": "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.",
        "e404.cta": "Ana sayfaya dönün"
    },
    en: {
        "meta.description": "Independent software and design studio. Few projects, the highest care.",
        "nav.approach": "Approach",
        "nav.contact": "Contact",
        "hero.eyebrow": "Independent software and design studio",
        "hero.w1": "Design.",
        "hero.w2": "Build.",
        "hero.w3": "Last.",
        "hero.lead": "We take on few projects and grow each one into a product built to last for years.",
        "hero.cta1": "Get in touch",
        "hero.cta2": "Our approach",
        "manifesto": "Good software is quiet. It speaks through trust, not noise. We design that quiet.",
        "approach.eyebrow": "Approach",
        "approach.title": "How we work",
        "approach.c1t": "Build by subtraction",
        "approach.c1p": "What remains in a product is what it truly needs. We remove everything we cannot defend and refine the rest.",
        "approach.c2t": "End to end ownership",
        "approach.c2p": "From idea to launch, strategy, design and engineering move under one roof. Nothing gets lost in between.",
        "approach.c3t": "The long run",
        "approach.c3p": "We stand behind everything we ship. Release by release, we refine it and keep it alive for years.",
        "contact.eyebrow": "Contact",
        "contact.title": "Let's talk.",
        "contact.lead": "A product idea, a question or just a hello, our door is open.",
        "contact.email": "Email",
        "contact.note": "We reply to every message within one business day.",
        "footer.rights": "© {year} Satafi Studio. All rights reserved.",
        "e404.eyebrow": "Error 404",
        "e404.w1": "Nothing",
        "e404.w2": "to see here.",
        "e404.lead": "The page you are looking for may have moved or never existed.",
        "e404.cta": "Back to home"
    },
    fr: {
        "meta.description": "Studio indépendant de logiciel et de design. Peu de projets, le plus grand soin.",
        "nav.approach": "Approche",
        "nav.contact": "Contact",
        "hero.eyebrow": "Studio indépendant de logiciel et de design",
        "hero.w1": "Concevoir.",
        "hero.w2": "Créer.",
        "hero.w3": "Durer.",
        "hero.lead": "Nous prenons peu de projets et faisons grandir chacun comme un produit fait pour durer.",
        "hero.cta1": "Nous contacter",
        "hero.cta2": "Notre approche",
        "manifesto": "Un bon logiciel est silencieux. Il parle par la confiance, pas par le bruit. Nous dessinons ce silence.",
        "approach.eyebrow": "Approche",
        "approach.title": "Notre façon de travailler",
        "approach.c1t": "Construire par soustraction",
        "approach.c1p": "Ce qui reste dans un produit est ce dont il a vraiment besoin. Nous retirons tout ce que nous ne pouvons pas défendre.",
        "approach.c2t": "Maîtrise de bout en bout",
        "approach.c2p": "De l'idée au lancement, stratégie, design et code avancent sous un même toit. Rien ne se perd en chemin.",
        "approach.c3t": "Le temps long",
        "approach.c3p": "Nous restons derrière tout ce que nous publions. Version après version, nous l'affinons pendant des années.",
        "contact.eyebrow": "Contact",
        "contact.title": "Parlons-en.",
        "contact.lead": "Une idée de produit, une question ou un simple bonjour, notre porte est ouverte.",
        "contact.email": "Email",
        "contact.note": "Nous répondons à chaque message sous un jour ouvré.",
        "footer.rights": "© {year} Satafi Studio. Tous droits réservés.",
        "e404.eyebrow": "Erreur 404",
        "e404.w1": "Rien",
        "e404.w2": "à voir ici.",
        "e404.lead": "La page que vous cherchez a peut-être été déplacée ou n'a jamais existé.",
        "e404.cta": "Retour à l'accueil"
    }
};

let currentLang = "tr";

function readStoredLang() {
    try {
        const stored = localStorage.getItem("satafi-lang");
        return I18N[stored] ? stored : "tr";
    } catch {
        return "tr";
    }
}

function storeLang(lang) {
    try {
        localStorage.setItem("satafi-lang", lang);
    } catch {}
}

const manifesto = (function () {
    const section = document.querySelector("[data-manifesto]");
    const holder = document.querySelector("[data-manifesto-text]");
    let spans = [];

    function rebuild(lang) {
        if (!holder) return;
        holder.textContent = "";
        spans = I18N[lang]["manifesto"].split(" ").map(function (word) {
            const span = document.createElement("span");
            span.textContent = word;
            holder.appendChild(span);
            holder.appendChild(document.createTextNode(" "));
            return span;
        });
        update();
    }

    function update() {
        if (!section || !spans.length) return;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.min(Math.max((vh * 0.9 - rect.top) / (rect.height * 0.9), 0), 1);
        const litCount = Math.round(progress * spans.length);
        spans.forEach(function (span, i) {
            span.classList.toggle("lit", i < litCount);
            span.classList.toggle("edge", i === litCount - 1 && litCount < spans.length);
        });
    }

    return { rebuild, update };
})();

const LANG_LABELS = { tr: "TR", en: "EN", fr: "FR" };

function applyLang(lang) {
    const dict = I18N[lang];
    const year = new Date().getFullYear();
    document.documentElement.lang = lang;
    const current = document.querySelector("[data-lang-current]");
    if (current) current.textContent = LANG_LABELS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const value = dict[el.dataset.i18n];
        if (value) el.textContent = value.replace("{year}", year);
    });
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict["meta.description"]);
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    manifesto.rebuild(lang);
    currentLang = lang;
    storeLang(lang);
}

function switchLang(lang) {
    if (lang === currentLang || !I18N[lang]) return;
    if (REDUCED_MOTION) {
        applyLang(lang);
        return;
    }
    document.body.classList.add("lang-switching");
    setTimeout(function () {
        applyLang(lang);
        requestAnimationFrame(function () {
            document.body.classList.remove("lang-switching");
        });
    }, 220);
}

(function initLang() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            switchLang(btn.dataset.lang);
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

(function initTopbar() {
    const bar = document.querySelector("[data-navbar]");
    if (!bar) return;
    const onScroll = function () {
        bar.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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

(function initProgressBar() {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    const update = function () {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        bar.style.transform = "scaleX(" + ratio + ")";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
})();

(function initManifestoScroll() {
    let raf = 0;
    const schedule = function () {
        if (raf) return;
        raf = requestAnimationFrame(function () {
            raf = 0;
            manifesto.update();
        });
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
})();

(function initHeroSpotlight() {
    if (REDUCED_MOTION) return;
    const hero = document.querySelector(".hero");
    if (!hero) return;
    let x = 0;
    let y = 0;
    let raf = 0;
    window.addEventListener("mousemove", function (e) {
        x = e.clientX;
        y = e.clientY;
        if (raf) return;
        raf = requestAnimationFrame(function () {
            raf = 0;
            const rect = hero.getBoundingClientRect();
            hero.style.setProperty("--mx", (x - rect.left) + "px");
            hero.style.setProperty("--my", (y - rect.top) + "px");
        });
    }, { passive: true });
})();

(function initTilt() {
    if (REDUCED_MOTION) return;
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
        card.addEventListener("mousemove", function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--px", x + "px");
            card.style.setProperty("--py", y + "px");
            const rx = (y / rect.height - 0.5) * -4;
            const ry = (x / rect.width - 0.5) * 4;
            card.style.transform = "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
        }, { passive: true });
        card.addEventListener("mouseleave", function () {
            card.style.transform = "";
        });
    });
})();

(function initEmbers() {
    if (REDUCED_MOTION) return;
    const canvas = document.querySelector("[data-embers]");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let particles = [];
    let running = false;
    let raf = 0;

    function spawn(anywhere) {
        return {
            x: Math.random() * width,
            y: anywhere ? Math.random() * height : height + 12,
            r: 0.6 + Math.random() * 1.6,
            v: 0.12 + Math.random() * 0.3,
            drift: 3 + Math.random() * 8,
            phase: Math.random() * Math.PI * 2,
            a: 0.12 + Math.random() * 0.45
        };
    }

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = rect.width;
        height = rect.height;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.round(Math.min(width / 26, 52));
        particles = Array.from({ length: count }, function () {
            return spawn(true);
        });
    }

    function tick(t) {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(function (p, i) {
            p.y -= p.v;
            if (p.y < -14) particles[i] = spawn(false);
            const x = p.x + Math.sin(t / 1900 + p.phase) * p.drift;
            const glow = p.a * (0.7 + 0.3 * Math.sin(t / 700 + p.phase));
            ctx.beginPath();
            ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(226, 168, 107, " + glow.toFixed(3) + ")";
            ctx.fill();
        });
        raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !running) {
                running = true;
                raf = requestAnimationFrame(tick);
            } else if (!entry.isIntersecting && running) {
                running = false;
                cancelAnimationFrame(raf);
            }
        });
    });
    io.observe(canvas);
})();

(function initParallax() {
    if (REDUCED_MOTION) return;
    const wordmark = document.querySelector(".hero-wordmark");
    if (!wordmark) return;
    const heroInner = document.querySelector(".hero-inner");
    let raf = 0;

    function update() {
        raf = 0;
        const y = window.scrollY;
        wordmark.style.setProperty("--par", y * 0.16 + "px");
        if (heroInner) {
            heroInner.style.opacity = Math.max(1 - y / 700, 0);
            heroInner.style.transform = "translateY(" + y * 0.08 + "px)";
        }
    }

    window.addEventListener("scroll", function () {
        if (!raf) raf = requestAnimationFrame(update);
    }, { passive: true });
})();

(function initMagnetic() {
    if (REDUCED_MOTION) return;
    document.querySelectorAll("[data-magnetic]").forEach(function (el) {
        el.addEventListener("mousemove", function (e) {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = "translate(" + x * 0.18 + "px, " + y * 0.22 + "px)";
        }, { passive: true });
        el.addEventListener("mouseleave", function () {
            el.style.transform = "";
        });
    });
})();
