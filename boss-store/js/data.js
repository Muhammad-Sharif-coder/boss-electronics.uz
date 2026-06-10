const products = [
  {
    id: 1,
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    category: "smartfonlar",
    price: 1199,
    oldPrice: 1399,
    badge: "ENG KO'P SOTILGAN",
    badgeColor: "green",
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80",
    ],
    description: "Samsung Galaxy S24 Ultra — eng kuchli Android smartfon. 200MP kamera, S Pen va titan korpus bilan jihozlangan.",
    specs: { Ekran: "6.8\" QHD+ 120Hz", Protsessor: "Snapdragon 8 Gen 3", RAM: "12 GB", Xotira: "256 GB", Batareya: "5000 mAh", OS: "Android 14" }
  },
  {
    id: 2,
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    category: "smartfonlar",
    price: 1099,
    oldPrice: 1299,
    badge: "OMMABOP",
    badgeColor: "green",
    rating: 4.9,
    reviews: 518,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    ],
    description: "iPhone 15 Pro Max — Apple'ning eng premium flagman smartfoni. Titan dizayn, A17 Pro chip va 48MP kamera tizimi.",
    specs: { Ekran: "6.7\" Super Retina XDR", Protsessor: "Apple A17 Pro", RAM: "8 GB", Xotira: "256 GB", Batareya: "4422 mAh", OS: "iOS 17" }
  },
  {
    id: 3,
    brand: "Google",
    name: "Pixel 8 Pro",
    category: "smartfonlar",
    price: 849,
    oldPrice: 999,
    badge: "-15%",
    badgeColor: "red",
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80",
    ],
    description: "Google Pixel 8 Pro — eng yaxshi AI kameralari va sof Android tajribasi uchun.",
    specs: { Ekran: "6.7\" LTPO OLED 120Hz", Protsessor: "Google Tensor G3", RAM: "12 GB", Xotira: "128 GB", Batareya: "5050 mAh", OS: "Android 14" }
  },
  {
    id: 4,
    brand: "Apple",
    name: "AirPods Pro 2",
    category: "aksessuarlar",
    price: 199,
    oldPrice: 249,
    badge: "CHEGIRMA",
    badgeColor: "green",
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80",
    ],
    description: "AirPods Pro 2 — aktiv shovqin o'chirish va Adaptive Transparency bilan yangi avlod quloqchinlar.",
    specs: { Ulanish: "Bluetooth 5.3", Batareya: "6 soat (30 soat keysda)", Shovqin: "ANC & Transparency", Chipset: "Apple H2", Suv: "IPX4", Rangi: "Oq" }
  },
  {
    id: 5,
    brand: "Xiaomi",
    name: "14 Ultra",
    category: "smartfonlar",
    price: 999,
    oldPrice: 1199,
    badge: "YANGI",
    badgeColor: "green",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80",
    ],
    description: "Xiaomi 14 Ultra — Leica kamera bilan jihozlangan, professional fotografiya uchun yaratilgan.",
    specs: { Ekran: "6.73\" AMOLED 120Hz", Protsessor: "Snapdragon 8 Gen 3", RAM: "16 GB", Xotira: "512 GB", Batareya: "5000 mAh", OS: "Android 14" }
  },
  {
    id: 6,
    brand: "Samsung",
    name: "Galaxy Watch 6",
    category: "gadjetlar",
    price: 299,
    oldPrice: 349,
    badge: "OMMABOP",
    badgeColor: "green",
    rating: 4.5,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    ],
    description: "Samsung Galaxy Watch 6 — sog'liq monitoringi va sport rejimlar bilan to'ldirilgan aqlli soat.",
    specs: { Ekran: "1.5\" Super AMOLED", Batareya: "40 soat", GPS: "Ha", Suv: "5ATM", Chipset: "Exynos W930", OS: "Wear OS 4" }
  },
  {
    id: 7,
    brand: "Apple",
    name: "iPad Pro 12.9\"",
    category: "gadjetlar",
    price: 1099,
    oldPrice: 1299,
    badge: "-15%",
    badgeColor: "red",
    rating: 4.8,
    reviews: 634,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    ],
    description: "iPad Pro 12.9\" — M2 chip va Liquid Retina XDR displej bilan professional darajadagi planshet.",
    specs: { Ekran: "12.9\" Liquid Retina XDR", Protsessor: "Apple M2", RAM: "8 GB", Xotira: "256 GB", Batareya: "10 soat", Kamera: "12MP" }
  },
  {
    id: 8,
    brand: "Sony",
    name: "WH-1000XM5",
    category: "aksessuarlar",
    price: 349,
    oldPrice: 399,
    badge: "ENG YAXSHI",
    badgeColor: "green",
    rating: 4.9,
    reviews: 1203,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    ],
    description: "Sony WH-1000XM5 — dunyodagi eng yaxshi ANC quloqchin. 30 soat batareya va Hi-Res Audio.",
    specs: { Ulanish: "Bluetooth 5.2", Batareya: "30 soat", Shovqin: "Dual Processor ANC", Drayver: "30mm", Vazn: "250g", Rangi: "Qora / Kumush" }
  }
];

function getCart() {
  return JSON.parse(localStorage.getItem('bossCart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('bossCart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}
function addToCart(id) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx > -1) cart[idx].qty++;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  showToast("Savatga qo'shildi!");
}
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
