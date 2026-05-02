// Sayfa ilk yüklendiğinde "Uygulamalar" kategorisini göster
document.addEventListener("DOMContentLoaded", function() {
    // İlk butonu ve 'uygulamalar' sınıfını manuel tetikliyoruz
    let defaultButton = document.querySelector('.tab-button.active');
    filterSelection({ currentTarget: defaultButton }, 'uygulamalar');
});

function filterSelection(event, category) {
    let cards = document.getElementsByClassName("filter-item");
    let buttons = document.getElementsByClassName("tab-button");

    // Tıklanan butonun "active" sınıfını ayarla
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");

    // İlgili kategoriye sahip kartları göster, diğerlerini gizle
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("show");
        
        // Eğer kartın sınıfları arasında tıkladığımız kategori varsa göster
        if (cards[i].className.indexOf(category) > -1) {
            cards[i].classList.add("show");
        }
    }
}

