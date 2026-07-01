/* =========================================================
   SATAFI STUDIO — etkileşim katmanı
   ========================================================= */

/* ---------- Ortak footer (tek kaynak) ---------- */
(function injectFooter() {
    const mount = document.querySelector("[data-footer]");
    if (!mount) return;

    const year = new Date().getFullYear();
    mount.innerHTML = `
        <div class="footer-inner">
            <div class="footer-brand">
                <a href="index.html" class="brand-text"><b>Satafi</b> Studio</a>
                <p>Sade Tasarım Fikirleri. Yazılım ve tasarımın kesiştiği ince çizgide, sadelikle inşa ediyoruz.</p>
            </div>
            <nav class="footer-nav" aria-label="Alt menü">
                <div class="footer-col">
                    <h4>Keşfet</h4>
                    <a href="vitrin.html">Vitrin</a>
                    <a href="hakkimizda.html">Hakkımızda</a>
                    <a href="iletisim.html">İletişim</a>
                </div>
                <div class="footer-col">
                    <h4>Bağlan</h4>
                    <a href="mailto:satafi.software@gmail.com">E-posta</a>
                    <a href="https://instagram.com/satafi.studio" target="_blank" rel="noopener">Instagram</a>
                </div>
            </nav>
        </div>
        <div class="footer-base">
            <span>© ${year} Satafi Studio. Tüm hakları saklıdır.</span>
            <span>SAde · TAsarım · Fİkirleri</span>
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

/* ---------- Vitrin filtreleme ---------- */
function filterSelection(event, category) {
    const cards = document.getElementsByClassName("filter-item");
    const buttons = document.getElementsByClassName("tab-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("show");
        if (cards[i].className.indexOf(category) > -1) {
            cards[i].classList.add("show");
        }
    }
}

/* Vitrin ilk yükte "Uygulamalar" kategorisini göster */
document.addEventListener("DOMContentLoaded", function () {
    const defaultButton = document.querySelector(".tab-button.active");
    if (defaultButton) {
        filterSelection({ currentTarget: defaultButton }, "uygulamalar");
    }
});
