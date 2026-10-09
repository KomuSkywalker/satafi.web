const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const I18N = {
    tr: {
        "meta.description": "Estetiğe önem veren bağımsız yazılım ve tasarım stüdyosu. Süreci baştan sona yönetir, sade ama sıradan olmayan ürünler yaparız.",
        "nav.approach": "Yaklaşım",
        "nav.contact": "İletişim",
        "hero.eyebrow": "Bağımsız yazılım ve tasarım stüdyosu",
        "hero.w1": "Sade.",
        "hero.w2": "Ama",
        "hero.w3": "sıradan değil.",
        "hero.lead": "Gürültüyü atar, işin özünü bırakırız. Fikirden yayına her adımı biz yönetir, gerektiğinde kuralları yeniden yazarız.",
        "hero.cta1": "Bize yazın",
        "hero.cta2": "Nasıl çalışırız",
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
        "footer.rights": "© {year} Satafi Studio. Tüm hakları saklıdır.",
        "e404.eyebrow": "Hata 404",
        "e404.w1": "Burada",
        "e404.w2": "bir şey yok.",
        "e404.lead": "Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.",
        "e404.cta": "Ana sayfaya dönün"
    },
    en: {
        "meta.description": "An independent software and design studio that cares about aesthetics. We run the whole process and build products that are simple, never ordinary.",
        "nav.approach": "Approach",
        "nav.contact": "Contact",
        "hero.eyebrow": "Independent software & design studio",
        "hero.w1": "Simple.",
        "hero.w2": "Never",
        "hero.w3": "ordinary.",
        "hero.lead": "We strip away the noise and keep what matters. We run every step from idea to launch and rewrite the rules when they get in the way.",
        "hero.cta1": "Get in touch",
        "hero.cta2": "How we work",
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
        "footer.rights": "© {year} Satafi Studio. All rights reserved.",
        "e404.eyebrow": "Error 404",
        "e404.w1": "Nothing",
        "e404.w2": "to see here.",
        "e404.lead": "The page you are looking for may have moved or never existed.",
        "e404.cta": "Back to home"
    },
    fr: {
        "meta.description": "Studio indépendant de logiciel et de design attaché à l'esthétique. Nous menons tout le processus et créons des produits simples, jamais ordinaires.",
        "nav.approach": "Approche",
        "nav.contact": "Contact",
        "hero.eyebrow": "Studio indépendant de logiciel et de design",
        "hero.w1": "Simple.",
        "hero.w2": "Jamais",
        "hero.w3": "ordinaire.",
        "hero.lead": "Nous retirons le bruit et gardons l'essentiel. Nous menons chaque étape, de l'idée au lancement, et réécrivons les règles quand elles gênent.",
        "hero.cta1": "Écrivez-nous",
        "hero.cta2": "Notre méthode",
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
    const horizon = document.querySelector(".hero-horizon");
    if (!horizon) return;
    const heroInner = document.querySelector(".hero-inner");
    let raf = 0;

    function update() {
        raf = 0;
        const y = window.scrollY;
        horizon.style.setProperty("--par", y * 0.12 + "px");
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
