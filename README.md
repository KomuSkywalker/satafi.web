# Satafi Studio Web Sitesi

Satafi Studio markasının tanıtım sitesi. Tek sayfa, üç dil (TR varsayılan, EN, FR), statik HTML/CSS/JS.

## Nasıl çalışır

GitHub Pages üzerinde yayınlanır. main dalına push edilen her değişiklik 1 ile 2 dakika içinde https://satafistudio.com.tr adresinde canlıya çıkar. Derleme adımı ve bağımlılık yoktur.

## Dosyalar

- index.html: tek sayfa site (hero, manifesto, yaklaşım, iletişim)
- style.css: tasarım sistemi ve animasyonlar
- script.js: dil sözlükleri (TR, EN, FR) ve etkileşim katmanı
- 404.html: özel hata sayfası
- vitrin.html, hakkimizda.html, iletisim.html: eski adresleri yeni bölümlere yönlendiren kabuklar
- sitemap.xml, robots.txt: arama motoru dosyaları
- CNAME: özel alan adı kaydı
- app-ads.txt: AdMob doğrulaması

## İçerik güncelleme

Metinlerin tamamı script.js içindeki I18N sözlüklerinde durur. Bir metni değiştirirken üç dilde de güncellenmeli, ardından HTML dosyalarındaki style.css ve script.js bağlantılarındaki v parametresi bir artırılmalıdır.

## Kurallar

Proje KANUN.md standartlarına bağlıdır: metinlerde uzun çizgi kullanılmaz, kodda yorum satırı yazılmaz, EN ve FR metinlerde Türkçe İ bulunmaz, başlıklar dengeli bölünür.

## Ortam değişkenleri ve mock içerik

Ortam değişkeni yoktur. Mock içerik yoktur, tüm metinler gerçektir.

## Doğrulanması gereken varsayımlar

- gizlilik.html içinde Ezan Saati için "konum cihazda işlenir, sunucuya gönderilmez" ifadesi kullanıldı; uygulamanın gerçek davranışıyla eşleştiği kontrol edilmelidir.
- Ziyaret istatistiği için satafi.goatcounter.com kodu bağlandı; goatcounter.com adresinde bu isimle ücretsiz hesap açılana kadar sayaç veri toplamaz, site etkilenmez.

## Search Console

Alan adı doğrulaması için search.google.com/search-console adresinde satafistudio.com.tr eklenmeli, HTML etiket yöntemi seçilip verilen meta etiketi index.html head bölümüne konmalı, ardından sitemap.xml gönderilmelidir.
