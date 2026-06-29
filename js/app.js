/* ============================================================
   app.js — Shared JavaScript for all pages
   ============================================================ */
'use strict';

/* ── SITE-WIDE BACKGROUND (gold particles on black) ─── */
function buildSiteBackground() {
  if (document.getElementById('site-bg')) return;
  const bg = document.createElement('div');
  bg.id = 'site-bg';
  document.body.insertBefore(bg, document.body.firstChild);

  const n = window.innerWidth < 480 ? 16 : 30;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const d = document.createElement('div');
    d.className = 'particle';
    const s = Math.random() * 3 + 1;
    d.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;bottom:${Math.random() * 15}%;animation-duration:${Math.random() * 10 + 7}s;animation-delay:${Math.random() * 7}s`;
    frag.appendChild(d);
  }
  bg.appendChild(frag);
}

/* ── NAVBAR ─────────────────────────────────────── */
function buildNav() {
  const el = document.getElementById('nav-root');
  if (!el) return;

  const cur = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: '../index.html', label: 'Home' },
    { href: 'why.html', label: 'Why Us' },
    { href: 'story.html', label: 'Story' },
    { href: 'products.html', label: 'Products' },
    { href: 'contact.html', label: 'Contact' },
  ];

  /* Fix hrefs for index.html (root level) */
  const isRoot = !location.pathname.includes('/pages/');
  const navLinks = links.map(l => {
    let href = l.href;
    if (isRoot) href = href.replace('../', '').replace('why.html', 'pages/why.html')
      .replace('story.html', 'pages/story.html').replace('products.html', 'pages/products.html')
      .replace('testimonials.html', 'pages/testimonials.html').replace('contact.html', 'pages/contact.html');
    const active = href.endsWith(cur) ? ' active' : '';
    return `<li><a href="${href}" class="${active}">${l.label}</a></li>`;
  }).join('');

  const logoPath = isRoot ? 'assets/back_logo.png' : '../assets/back_logo.png';
  const rootPath = isRoot ? 'index.html' : '../index.html';
  const waNum = typeof SITE !== 'undefined' ? SITE.phone : '9380553589';
  const productsPath = isRoot ? 'pages/products.html' : 'products.html';

  el.innerHTML = `
  <nav id="navbar">
    <div class="wrap nav-inner">
      <a href="${rootPath}" class="nav-logo">
        <img src="${logoPath}" alt="Shivdhenu">
      </a>
      <ul class="nav-links">${navLinks}</ul>
      <div class="nav-actions">
        <button class="hamburger" id="mob-ham" onclick="toggleDrawer()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <div id="mob-drawer" class="mob-drawer" role="dialog" aria-modal="true">
    <button class="mob-close" onclick="closeDrawer()" aria-label="Close menu">✕</button>
    <img src="${logoPath}" alt="Shivdhenu" style="height:108px;width:108px;max-width:108px;object-fit:contain">
    ${links.map(l => {
    let href = l.href;
    if (isRoot) href = href.replace('../', '').replace('why.html', 'pages/why.html')
      .replace('story.html', 'pages/story.html').replace('products.html', 'pages/products.html')
      .replace('testimonials.html', 'pages/testimonials.html').replace('contact.html', 'pages/contact.html');
    return `<a href="${href}" onclick="closeDrawer()">${l.label}</a>`;
  }).join('')}
    <a href="https://wa.me/${waNum}" target="_blank" class="btn btn-wa" style="padding:11px 20px;font-size:15px;color:#ffffff; margin-top:8px"><span class="wa-svg-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/>
        </svg>
        </span> WhatsApp Us</a>
  </div>`;

  /* Scroll effect */
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

function toggleDrawer() {
  const d = document.getElementById('mob-drawer');
  const h = document.getElementById('mob-ham');
  d?.classList.toggle('open');
  h?.classList.toggle('open');
  document.body.style.overflow = d?.classList.contains('open') ? 'hidden' : '';
}
function closeDrawer() {
  document.getElementById('mob-drawer')?.classList.remove('open');
  document.getElementById('mob-ham')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── FOOTER ──────────────────────────────────────── */
function buildFooter() {
  const el = document.getElementById('footer-root');
  if (!el) return;

  const isRoot = !location.pathname.includes('/pages/');
  const logoPath = isRoot ? 'assets/back_logo.png' : '../assets/back_logo.png';
  const pre = isRoot ? 'pages/' : '';
  const root = isRoot ? '' : '../';
  const waNum = typeof SITE !== 'undefined' ? SITE.phone : '9380553589';

  el.innerHTML = `
  <footer>
    <div class="wrap">
      <div class="footer-grid">
        <div class="ft-brand">
          <img src="${logoPath}" alt="Shivdhenu" class="ft-logo">
          <p>Pure natural products rooted in ancient Vedic wisdom. No preservatives. No shortcuts. Just nature's best.</p>
          <p class="ft-spiritual">गौ माता का आशीर्वाद  ·  प्रकृति का प्रसाद</p>
          <a href="https://wa.me/${waNum}" target="_blank" class="ft-wa-btn"><span class="wa-svg-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/>
            </svg>
            </span>
            WhatsApp Us 
            </a>
        </div>

        <div class="ft-links">
          <div class="ft-col">
            <h4>PAGES</h4>
            <ul>
              <li><a href="${root}index.html">Home</a></li>
              <li><a href="${pre}why.html">Why Us</a></li>
              <li><a href="${pre}story.html">Our Story</a></li>
              <li><a href="${pre}products.html">Products</a></li>
              <li><a href="${pre}contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="ft-col">
            <h4>CONTACT</h4>
            <ul>
              <li><a href="https://wa.me/${waNum}" target="_blank"><span class="wa-svg-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/>
                    </svg>
                    </span> WhatsApp</a></li>
              <li><a href="tel:+91${waNum}"><span class="c-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 10.8 19.8 19.8 0 0 1 .08 2.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L6.1 7.91a16 16 0 0 0 6 6l1.45-1.1a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    </span>
                    +91 ${waNum.replace(/(\d{5})(\d{5})/, '$1 $2')}</a></li>
              <li><a href="mailto:${typeof SITE !== 'undefined' ? SITE.email : 'namaste@shivdhenu.com'}"><span class="c-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                    <path d="M3 7l9 6 9-6"/>
                    </svg>
                    </span>
                    Email Us</a></li>
            </ul>
          </div>
        </div>

        <div class="ft-social">
          <h4>FOLLOW US</h4>
          <div class="ft-social-row">
            <a href="${typeof SITE !== 'undefined' ? SITE.instagram : '#'}" target="_blank" class="ft-social-chip" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="18" cy="6" r="1"/>
              </svg>
            </a>
            <a href="${typeof SITE !== 'undefined' ? SITE.facebook : '#'}" target="_blank" class="ft-social-chip" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/>
              </svg>
            </a>
            <a href="${typeof SITE !== 'undefined' ? SITE.youtube : '#'}" target="_blank" class="ft-social-chip" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 5 12 5 12 5h0s-4 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.3v1.4C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s4 0 6.9-.1c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8zM10 15V9l5 3-5 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="ft-bottom">
        <p>© 2024 Shivdhenu. All rights reserved. Made with Love and devotion.</p>
        <p class="ft-gold">2% TO GOU SEVA · ALWAYS</p>
      </div>
    </div>
  </footer>`;
}

/* ── GLOBAL WIDGETS ──────────────────────────────── */
function buildWidgets() {
  const waNum = typeof SITE !== 'undefined' ? SITE.phone : '9380553589';
  document.body.insertAdjacentHTML('beforeend', `
    <div id="spb"></div>
    <a href="https://wa.me/${waNum}" target="_blank" rel="noopener" class="wa-float" title="Chat on WhatsApp" aria-label="WhatsApp"><span class="wa-svg-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/>
        </svg>
        </span></a>
    <button id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top">↑</button>
    <div id="toast" role="alert" aria-live="polite">
      <span class="t-ico">✦</span>
      <div><p class="t-ttl"></p><p class="t-msg"></p></div>
    </div>
    <div id="lightbox" onclick="closeLB()" role="dialog">
      <button id="lb-close" onclick="closeLB()" aria-label="Close">✕</button>
      <img id="lb-img" src="" alt="Full view" onclick="event.stopPropagation()">
    </div>
    <nav class="mob-bottom" aria-label="Mobile navigation">
      <div class="mob-bottom-inner">
        <a href="${location.pathname.includes('/pages/') ? '../' : ''}index.html" class="mob-nav-item ${!location.pathname.includes('/pages/') ? 'act' : ''}">
         <span class="ico"><span class="ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 10.5L12 3l9 7.5"/>
          <path d="M5 9.5V21h14V9.5"/>
          </svg>
          </span></span><span>Home</span>
        </a>
        <a href="${location.pathname.includes('/pages/') ? '' : 'pages/'}products.html" class="mob-nav-item ${location.pathname.includes('products') ? 'act' : ''}">
          <span class="ico"><span class="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 7h12l-1 13H7L6 7Z"/>
            <path d="M9 7a3 3 0 0 1 6 0"/>
            </svg>
            </span></i></span><span>Shop</span>
        </a>
        <a href="https://wa.me/${waNum}" target="_blank" class="mob-nav-item">
          <span class="ico"><span class="ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/>
          </svg>
          </span></i></span><span>Chat</span>
        </a>
        <a href="${location.pathname.includes('/pages/') ? '' : 'pages/'}story.html" class="mob-nav-item ${location.pathname.includes('story') ? 'act' : ''}">
         <span class="ico"><span class="ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 5h11a4 4 0 0 1 4 4v10H8a4 4 0 0 0-4 4Z"/>
          <path d="M8 5v18"/>
          </svg>
          </span></i></span><span>Story</span>
        </a>
        <a href="${location.pathname.includes('/pages/') ? '' : 'pages/'}contact.html" class="mob-nav-item ${location.pathname.includes('contact') ? 'act' : ''}">
          <span class="ico"><span class="ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="M3 7l9 6 9-6"/>
          </svg>
          </span></i></span><span>Contact</span>
        </a>
      </div>
    </nav>
  `);

  /* Scroll progress + back to top */
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const spb = document.getElementById('spb');
    const btt = document.getElementById('btt');
    if (spb && h > 0) spb.style.width = (window.scrollY / h * 100) + '%';
    if (btt) btt.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
}

/* ── REVEAL ON SCROLL ────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── COUNTER ANIMATION ───────────────────────────── */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || e.target._done) return;
      e.target._done = true;
      const target = parseFloat(e.target.dataset.count);
      const isF = target % 1 !== 0;
      const t0 = performance.now(), dur = 1800;
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        const v = target * (1 - Math.pow(1 - p, 4));
        e.target.textContent = isF ? v.toFixed(1) : Math.floor(v).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else e.target.textContent = isF ? target.toFixed(1) : target.toLocaleString();
      };
      requestAnimationFrame(tick);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

/* ── TOAST ───────────────────────────────────────── */
function toast(title, msg, ico = '✦') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.t-ico').textContent = ico;
  t.querySelector('.t-ttl').textContent = title;
  t.querySelector('.t-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 3400);
}

/* ── LIGHTBOX ────────────────────────────────────── */
function openLB(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lb-img');
  if (!lb || !img) return;
  img.src = src; lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLB() {
  document.getElementById('lightbox')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── FAQ TOGGLE ──────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const a = item.querySelector('.faq-a');
      const ico = item.querySelector('.faq-ico');
      const open = a.style.display === 'block';
      a.style.display = open ? 'none' : 'block';
      if (ico) ico.textContent = open ? '+' : '−';
    });
  });
}

/* ── NEWSLETTER ──────────────────────────────────── */
function submitNL() {
  const inp = document.getElementById('nl-email');
  if (!inp) return;
  if (!inp.value || !inp.value.includes('@')) {
    toast('Invalid Email', 'Please enter a valid email address.', '⚠️');
    return;
  }
  inp.value = '';
  toast('Welcome! 🎉', 'You have joined the Shivdhenu community.', '🐄');
}

/* ── STAR HTML ───────────────────────────────────── */
function stars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

/* ── GOU BANNER HTML ─────────────────────────────── */
function buildGouBanner(el) {
  if (!el) return;
  el.innerHTML = `
  <div class="gou-strip">
    <div class="wrap">
      <div class="gou-inner">
        <div class="gou-ico">🐄</div>
        <div class="gou-text">
          <h3>OUR SACRED COMMITMENT — GOU SEVA</h3>
          <p>2% of every sale goes to the welfare, shelter and protection of indigenous Gir cows. Your purchase is an act of dharma.</p>
        </div>
        <div class="gou-badge">2% TO GOU SEVA</div>
      </div>
    </div>
  </div>`;
}

/* ── PRODUCT CARD HTML ───────────────────────────── */
function prodCard(p) {
  const isRoot = !location.pathname.includes('/pages/');
  const waMsg = `Namaste! I am interested in *${p.name}* from Shivdhenu. Please share details.`;
  const waNum = typeof SITE !== 'undefined' ? SITE.phone : '9380553589';
  const weightMatch = (p.highlights || []).find(h => /net weight/i.test(h));
  const weightLabel = weightMatch ? weightMatch.replace(/net weight:?\s*/i, '').trim() : '';
  const imgPath = isRoot
    ? p.img.replace('../', '')
    : p.img;
  return `
  <div class="prod-card reveal" onclick="openProductModal(${p.id})" role="button" tabindex="0" aria-label="View details for ${p.name}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProductModal(${p.id})}">
    <div class="prod-img ${p.status === 'upcoming' ? 'upcoming' : ''}">
     <img src="${imgPath}" alt="${p.name}" loading="lazy">
      ${p.status === 'upcoming' ? `<span class="prod-badge soon">${p.badge}</span>` : ''}
      ${weightLabel ? `<span class="prod-badge-weight">${weightLabel}</span>` : ''}
      <div class="pm-view-hint">VIEW DETAILS</div>
    </div>
    <div class="prod-body">
      <p class="prod-cat">${CATEGORIES.find(c => c.slug === p.category)?.label || p.category}</p>
      <h3 class="prod-name">${p.name}</h3>
      <p class="prod-desc">${p.desc}</p>
      ${p.status === 'available'
      ? `<a href="https://wa.me/${waNum}?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener" class="prod-wa" onclick="event.stopPropagation()"><span class="prod-wa-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/>
            </svg>
            </span>Order on WhatsApp</a>`
      : `<div class="prod-soon-label"><span class="prod-wa-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 7v5l3 3"/>
            </svg>
            </span>Coming Soon</div>`
    }
    </div>
  </div>`;
}

/* ── PRODUCT DETAIL MODAL ─────────────────────────── */
function ensureProductModal() {
  if (document.getElementById('pm-overlay')) return;
  document.body.insertAdjacentHTML('beforeend', `
  <div id="pm-overlay" class="pm-overlay" onclick="if(event.target===this) closeProductModal()">
    <div class="pm-box" role="dialog" aria-modal="true" aria-labelledby="pm-title">
      <button class="pm-close" onclick="closeProductModal()" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <div class="pm-grid">
        <div class="pm-gallery">
          <div class="pm-main-img" id="pm-main-wrap">
            <button class="pm-nav pm-nav-prev" onclick="shiftProductModalImage(-1)" aria-label="Previous image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <img id="pm-main-img" src="" alt="">
            <button class="pm-nav pm-nav-next" onclick="shiftProductModalImage(1)" aria-label="Next image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div class="pm-dots" id="pm-dots"></div>
          </div>
          <div class="pm-thumbs" id="pm-thumbs"></div>
        </div>
        <div class="pm-info">
          <div id="pm-soon-wrap"></div>
          <p class="pm-cat" id="pm-cat"></p>
          <h2 class="pm-title" id="pm-title"></h2>
          <p class="pm-desc" id="pm-desc"></p>
          <div id="pm-highlights-wrap">
            <p class="pm-sec-label">Product Highlights</p>
            <ul class="pm-list highlights" id="pm-highlights"></ul>
          </div>
          <div id="pm-benefits-wrap">
            <p class="pm-sec-label">Why You'll Love It</p>
            <ul class="pm-list benefits" id="pm-benefits"></ul>
          </div>
          <div class="pm-cta" id="pm-cta"></div>
        </div>
      </div>
    </div>
    <button class="pm-back" onclick="closeProductModal()" aria-label="Back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    </button>
  </div>`);

  /* Swipe support on the main image */
  const wrap = document.getElementById('pm-main-wrap');
  let touchStartX = 0, touchDeltaX = 0;
  wrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; touchDeltaX = 0; }, { passive: true });
  wrap.addEventListener('touchmove', e => { touchDeltaX = e.touches[0].clientX - touchStartX; }, { passive: true });
  wrap.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) shiftProductModalImage(touchDeltaX < 0 ? 1 : -1);
  });
}

let _pmImages = [];
let _pmIndex = 0;

function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  ensureProductModal();

  const waNum = typeof SITE !== 'undefined' ? SITE.phone : '9380553589';
  const waMsg = `Namaste! I am interested in *${p.name}* from Shivdhenu. Please share details.`;
  const isRoot = !location.pathname.includes('/pages/');

  _pmImages = [
    isRoot ? p.img.replace('../', '') : p.img
  ];

  _pmIndex = 0;

  document.getElementById('pm-cat').textContent = CATEGORIES.find(c => c.slug === p.category)?.label || p.category;
  document.getElementById('pm-title').textContent = p.name;
  document.getElementById('pm-desc').textContent = p.desc;
  document.getElementById('pm-main-img').alt = p.name;
  renderProductModalImage();

  /* Temporarily hide gallery until more product photos are available */
  document.getElementById('pm-thumbs').innerHTML = '';
  document.getElementById('pm-thumbs').style.display = 'none';

  document.querySelectorAll('.pm-nav').forEach(btn => {
    btn.style.display = 'none';
  });

  document.getElementById('pm-dots').style.display = 'none';
  document.getElementById('pm-dots').innerHTML = '';

  document.getElementById('pm-highlights').innerHTML = (p.highlights || []).map(h => `<li>${h}</li>`).join('');
  document.getElementById('pm-highlights-wrap').style.display = (p.highlights && p.highlights.length) ? 'block' : 'none';

  document.getElementById('pm-benefits').innerHTML = (p.benefits || []).map(b => `<li>${b}</li>`).join('');
  document.getElementById('pm-benefits-wrap').style.display = (p.benefits && p.benefits.length) ? 'block' : 'none';

  document.getElementById('pm-soon-wrap').innerHTML = p.status === 'upcoming'
    ? `<span class="pm-soon-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> ${p.badge}</span>`
    : '';

  document.getElementById('pm-cta').innerHTML = p.status === 'available'
    ? `<a href="https://wa.me/${waNum}?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener" class="pm-cta-wa">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/></svg>
        Order on WhatsApp
       </a>
       <p class="pm-cta-note">Every order is personally confirmed for freshness, pricing and delivery.</p>`
    : `<a href="https://wa.me/${waNum}?text=${encodeURIComponent('Hi! Please notify me when ' + p.name + ' launches.')}" target="_blank" rel="noopener" class="pm-cta-wa">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a8 8 0 0 1-8 8H5l2-4a8 8 0 1 1 14-4Z"/></svg>
        Notify Me on WhatsApp
       </a>`;

  document.getElementById('pm-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderProductModalImage() {
  const img = document.getElementById('pm-main-img');
  img.style.opacity = 0;
  setTimeout(() => { img.src = _pmImages[_pmIndex]; img.style.opacity = 1; }, 120);
  document.querySelectorAll('.pm-thumb').forEach((t, i) => t.classList.toggle('active', i === _pmIndex));
  document.querySelectorAll('.pm-dot').forEach((d, i) => d.classList.toggle('active', i === _pmIndex));
}

function setProductModalImage(index) {
  _pmIndex = index;
  renderProductModalImage();
}

function shiftProductModalImage(dir) {
  if (!_pmImages.length) return;
  _pmIndex = (_pmIndex + dir + _pmImages.length) % _pmImages.length;
  renderProductModalImage();
}

function closeProductModal() {
  document.getElementById('pm-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── TESTIMONIAL CARD HTML ───────────────────────── */
function testiCard(t) {
  return `
  <div class="testi-card reveal">
    <div class="testi-author">
      <div class="testi-av">${t.init}</div>
      <div class="testi-info"><h4>${t.name}</h4><p>${t.loc} · ${t.prod}</p></div>
    </div>
    <div class="testi-stars">${stars(t.stars)}</div>
    <p class="testi-text">"${t.text}"</p>
  </div>`;
}

/* ── PWA INSTALL ─────────────────────────────────── */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('pwa-install');
  if (btn) {
    btn.style.display = 'flex';
    btn.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => { deferredPrompt = null; btn.style.display = 'none'; });
    });
  }
});

/* ── BROCHURE LANGUAGE PICKER ─────────────────────── */
function initBrochurePicker() {
  const picker = document.getElementById('brochure-picker');
  if (!picker) return;
  const toggle = document.getElementById('brochure-toggle');

  function close() {
    picker.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function toggleOpen() {
    const willOpen = !picker.classList.contains('open');
    picker.classList.toggle('open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
  }

  toggle.addEventListener('click', e => { e.stopPropagation(); toggleOpen(); });
  document.addEventListener('click', e => { if (!picker.contains(e.target)) close(); });
  picker.querySelectorAll('.brochure-menu a').forEach(a => {
    a.addEventListener('click', e => {
      if (a.dataset.lang) {
        e.preventDefault();
        fetch(a.href, { method: 'HEAD' }).then(res => {
          if (res.ok) { window.open(a.href, '_blank'); }
          else { toast('Coming Soon', `The ${a.dataset.lang} brochure will be available shortly.`, '📖'); }
        }).catch(() => { toast('Coming Soon', `The ${a.dataset.lang} brochure will be available shortly.`, '📖'); });
      }
      close();
    });
  });
  picker._closeBrochurePicker = close;
}

/* ── KEYBOARD SHORTCUTS ──────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLB(); closeDrawer(); closeProductModal();
    document.getElementById('brochure-picker')?._closeBrochurePicker?.();
  }
  const pmOpen = document.getElementById('pm-overlay')?.classList.contains('open');
  if (pmOpen && e.key === 'ArrowLeft') shiftProductModalImage(-1);
  if (pmOpen && e.key === 'ArrowRight') shiftProductModalImage(1);
});

/* ── SERVICE WORKER REGISTRATION ─────────────────── */
function registerSW() {
  if ('serviceWorker' in navigator) {
    const swPath = location.pathname.includes('/pages/') ? '../sw.js' : 'sw.js';
    navigator.serviceWorker.register(swPath, { scope: location.pathname.includes('/pages/') ? '../' : './' })
      .catch(() => { });
  }
}

/* ── INIT ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildSiteBackground();
  buildNav();
  buildFooter();
  buildWidgets();
  initReveal();
  initCounters();
  initFaq();
  registerSW();

  /* Gou banner if placeholder exists */
  buildGouBanner(document.getElementById('gou-root'));
  initBrochurePicker();
});
