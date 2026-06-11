document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  // Search toggle
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => searchBar.classList.toggle('open'));
  }

  // Featured products (homepage)
  const featuredEl = document.getElementById('featuredProducts');
  if (featuredEl) {
    const featured = products.slice(0, 4);
    featuredEl.innerHTML = featured.map(p => productCard(p)).join('');
  }

  // Shop page
  const shopEl = document.getElementById('shopProducts');
  if (shopEl) renderShop();

  // Cart page
  const cartEl = document.getElementById('cartItems');
  if (cartEl) renderCart();
});

function productCard(p) {
  return `
    <div class="product-card" onclick="location.href='${getDetailUrl(p.id)}'">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge ${p.badgeColor === 'red' ? 'red' : ''}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <i class="fa fa-star"></i> ${p.rating} (${p.reviews})
        </div>
        <div class="product-footer">
          <div>
            <span class="product-price">$${p.price}</span>
            ${p.oldPrice ? `<span class="product-old-price">$${p.oldPrice}</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${p.id})">
            <i class="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function getDetailUrl(id) {
  const isRoot = !location.pathname.includes('/pages/');
  return isRoot ? `pages/mahsulot.html?id=${id}` : `mahsulot.html?id=${id}`;
}

function searchProducts() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) return;
  const isRoot = !location.pathname.includes('/pages/');
  location.href = (isRoot ? 'pages/dokon.html' : 'dokon.html') + `?q=${encodeURIComponent(q)}`;
}

function renderShop() {
  const params = new URLSearchParams(location.search);
  const cat = params.get('category') || '';
  const q = params.get('q') || '';
  const sort = document.getElementById('sortSelect')?.value || 'default';

  let filtered = [...products];
  if (cat) filtered = filtered.filter(p => p.category === cat);
  if (q) filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
  );

  // Filters from checkboxes
  const checked = [...document.querySelectorAll('.filter-option input:checked')].map(i => i.value);
  if (checked.length) filtered = filtered.filter(p => checked.includes(p.category));

  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const el = document.getElementById('shopProducts');
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = `${filtered.length} ta mahsulot`;
  if (el) {
    el.innerHTML = filtered.length
      ? filtered.map(p => productCard(p)).join('')
      : '<p style="color:#999;padding:40px 0;">Mahsulot topilmadi.</p>';
  }

  // Mark active category filter
  document.querySelectorAll('.filter-option input').forEach(inp => {
    if (inp.value === cat) inp.checked = true;
  });
}

function renderCart() {
  const cart = getCart();
  const el = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const subtotalEl = document.getElementById('cartSubtotal');

  if (!cart.length) {
    el.innerHTML = `<div class="empty-cart">
      <i class="fa fa-shopping-cart"></i>
      <h3>Savatchingiz bo'sh</h3>
      <p>Mahsulotlarni ko'rish uchun do'konga o'ting</p>
      <a href="dokon.html" class="btn-primary" style="margin-top:20px;display:inline-flex">Do'konga o'tish</a>
    </div>`;
    if (totalEl) totalEl.textContent = '$0';
    return;
  }

  let subtotal = 0;
  el.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    subtotal += p.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" />
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <p>${p.brand} · $${p.price} / dona</p>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
          </div>
        </div>
        <div style="text-align:right">
          <strong>$${(p.price * item.qty).toLocaleString()}</strong>
          <br/>
          <button class="remove-btn" onclick="removeItem(${p.id})"><i class="fa fa-trash"></i></button>
        </div>
      </div>`;
  }).join('');

  const shipping = subtotal >= 50 ? 0 : 10;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;
  if (totalEl) totalEl.textContent = `$${subtotal + shipping}`;
  const shipEl = document.getElementById('cartShipping');
  if (shipEl) shipEl.textContent = shipping === 0 ? 'Bepul' : `$${shipping}`;
}

function changeQty(id, delta) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart(cart);
  renderCart();
}
function removeItem(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
}

function subscribeNewsletter(e) {
  e.preventDefault();
  document.getElementById('newsletterSuccess').style.display = 'block';
  e.target.reset();
}
// ===== NASIYA KALKULYATOR =====
const nasiyaFoizlar = {
  3: 5,
  6: 10,
  9: 15,
  12: 20
};

function nasiyaHisобла(narx, oy) {
  const foiz = nasiyaFoizlar[oy];
  const umumiy = narx * (1 + foiz / 100);
  const oylik = umumiy / oy;
  return {
    oylik: Math.round(oylik),
    umumiy: Math.round(umumiy),
    foiz: foiz
  };
}

function nasiyaOyTanlash(oy, narx) {
  // Barcha tugmalardan active klassini olib tashlash
  document.querySelectorAll('.nasiya-oy-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  // Tanlangan tugmaga active klassi berish
  document.querySelector(`.nasiya-oy-btn[data-oy="${oy}"]`).classList.add('active');

  const natija = nasiyaHisобла(narx, oy);

  document.getElementById('nasiyaOylik').textContent =
    '$' + natija.oylik.toLocaleString();
  document.getElementById('nasiyaUmumiy').textContent =
    '$' + natija.umumiy.toLocaleString();
  document.getElementById('nasiyaFoiz').textContent =
    natija.foiz + '% ustama';
  document.getElementById('nasiyaMuddat').textContent =
    oy + ' oy';
}

function nasiyaBuyurtma(narx) {
  const activeBtn = document.querySelector('.nasiya-oy-btn.active');
  const oy = parseInt(activeBtn.dataset.oy);
  const natija = nasiyaHisобла(narx, oy);
  showToast(`Nasiya buyurtma: ${oy} oy, oyiga $${natija.oylik.toLocaleString()}`);
}
