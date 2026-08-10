/* =========================================================
   SATAFI STUDIO — etkileşim katmanı
   ========================================================= */

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Ortak footer (tek kaynak) ---------- */
(function injectFooter() {
    const mount = document.querySelector("[data-footer]");
    if (!mount) return;

    const year = new Date().getFullYear();
    mount.innerHTML = `
        <div class="footer-inner" data-reveal>
            <div class="footer-brand">
                <a href="index.html" class="brand-text"><b>Satafi</b> Studio</a>
                <p>Bağımsız bir yazılım ve tasarım stüdyosu. Az sayıda iş, en yüksek özen.</p>
            </div>
            <nav class="footer-nav" aria-label="Alt menü">
                <div class="footer-col">
                    <h4>Keşfet</h4>
                    <a href="vitrin.html">Üretimler</a>
                    <a href="hakkimizda.html">Stüdyo</a>
                    <a href="iletisim.html">İletişim</a>
                </div>
                <div class="footer-col">
                    <h4>Bağlan</h4>
                    <a href="mailto:satafi.software@gmail.com">E-posta</a>
                    <a href="https://instagram.com/satafi.studio" target="_blank" rel="noopener">Instagram</a>
                </div>
            </nav>
        </div>
        <div class="footer-base" data-reveal style="--reveal-delay: 0.1s;">
            <span>© ${year} Satafi Studio. Tüm hakları saklıdır.</span>
            <span>Sessizce, beklediğiniz gibi çalışır.</span>
        </div>
    `;
})();

/* ---------- Navbar: kaydırınca kenarlık ---------- */
(function navbarScroll() {
    const nav = document.querySelector("[data-navbar]");
    if (!nav) return;

    const onScroll = () => {
        nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- Mobil menü ---------- */
(function mobileMenu() {
    const toggle = document.querySelector("[data-nav-toggle]");
    if (!toggle) return;

    const close = () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const open = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(open));
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", close);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
    });
})();

/* ---------- Scroll reveal ---------- */
(function scrollReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach((el) => el.classList.add("in-view"));
        return;
    }

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => io.observe(el));
})();

/* ---------- Kaydırma ilerleme çubuğu ---------- */
(function scrollProgress() {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        bar.style.transform = `scaleX(${ratio})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
})();

/* ---------- Ana sayfa: imleci takip eden spot ışığı ---------- */
(function heroSpotlight() {
    if (REDUCED_MOTION) return;
    const wrap = document.querySelector(".home-hero-wrap");
    if (!wrap) return;

    let x = 0, y = 0, raf = 0;
    window.addEventListener("mousemove", (e) => {
        x = e.clientX;
        y = e.clientY;
        if (raf) return;
        raf = requestAnimationFrame(() => {
            raf = 0;
            const r = wrap.getBoundingClientRect();
            wrap.style.setProperty("--mx", (x - r.left) + "px");
            wrap.style.setProperty("--my", (y - r.top) + "px");
        });
    }, { passive: true });
})();

/* ---------- Üretim satırları & CTA: imleci takip eden ışık ---------- */
(function rowGlow() {
    if (REDUCED_MOTION) return;

    document.querySelectorAll(".work-row, .cta-band").forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty("--px", (e.clientX - r.left) + "px");
            el.style.setProperty("--py", (e.clientY - r.top) + "px");
        }, { passive: true });
    });
})();

/* ---------- Sayfa geçişleri: yumuşak çıkış ---------- */
(function pageTransitions() {
    if (REDUCED_MOTION) return;

    document.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href") || "";
        if (!href.endsWith(".html") || link.target === "_blank") return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

        e.preventDefault();
        document.body.classList.add("page-exit");
        setTimeout(() => { window.location.href = href; }, 300);
    });

    /* bfcache'ten dönüşte sayfayı görünür kıl */
    window.addEventListener("pageshow", () => {
        document.body.classList.remove("page-exit");
    });
})();
