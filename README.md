# SHIVDHENU — Website Guide

## 📁 File Structure
```
shivdhenu_v3/
├── index.html              ← Homepage
├── pages/
│   ├── products.html       ← Products page (with category filters)
│   ├── story.html          ← Our Story page
│   ├── why.html            ← Why Shivdhenu page
│   ├── testimonials.html   ← Testimonials page
│   └── contact.html        ← Contact Us page
├── css/
│   └── style.css           ← All styles (colors, fonts, layout)
├── js/
│   ├── data.js             ← ✏️ ALL CONTENT (products, testimonials, contact info)
│   └── app.js              ← All logic (nav, footer, WhatsApp, animations)
├── assets/
│   ├── logo.png            ← Your logo
│   └── manifest.json       ← PWA manifest
└── sw.js                   ← Service worker (offline support)
```

---

## ✏️ HOW TO UPDATE CONTENT

### 1. Change Phone Number / Email / Address
Open `js/data.js` → Edit the `SITE` object at the top:
```js
const SITE = {
  phone: '9380553589',        // WhatsApp number — digits only
  email: 'namaste@shivdhenu.com',
  address: 'Gir Somnath, Gujarat',
  instagram: 'https://instagram.com/shivdhenu',
  ...
};
```

---

### 2. Add / Edit a Product
Open `js/data.js` → Find the `PRODUCTS` array → Copy any existing product block and edit:
```js
{
  id: 17,                          // Unique number
  name: 'My New Product',          // Product name
  category: 'spices',             // Must match a category slug (see CATEGORIES array)
  badge: 'New',                    // Badge text (e.g. Pure, Organic, Natural)
  status: 'available',             // 'available' = show WhatsApp button | 'upcoming' = Coming Soon
  img: 'https://your-image-url',   // Product image URL
  desc: 'Short product description here.',
},
```

**Category slugs:** `spices` | `dehydrated` | `millets` | `kids` | `juices` | `dairy`

---

### 3. Add a New Category
Open `js/data.js` → Find the `CATEGORIES` array → Add:
```js
{ slug:'honey', label:'Honey & Jaggery', icon:'🍯' },
```
Then add products with `category: 'honey'`

---

### 4. Add a Testimonial
Open `js/data.js` → Find the `TESTIMONIALS` array → Add:
```js
{
  name: 'Customer Name',
  loc:  'City',
  prod: 'Product they used',
  init: 'C',          // First letter of name (shown in avatar)
  stars: 5,
  text: 'Their review text here.',
},
```

---

### 5. Change Colors
Open `css/style.css` → Edit the `:root` block at the top:
```css
:root {
  --gold: #C9A84C;    /* Main gold color */
  --bg:   #0C0A08;    /* Background */
  ...
}
```

---

### 6. Change Logo
Replace `assets/logo.png` with your new logo file (keep the same filename).
Or change the filename in: `js/app.js` (search for `logo.png`)

---

### 7. Update FAQ
Open `js/data.js` → Find the `FAQS` array → Add/edit questions and answers.

---

## 📱 PWA — Add to Home Screen
This site works as a Progressive Web App. When users visit on mobile, they can add it to their home screen. It will also work offline after first visit.

## 💬 WhatsApp Integration
Every product has a "Order on WhatsApp" button. When tapped, it opens WhatsApp with a pre-filled message. Update the phone number in `js/data.js` → `SITE.phone`.

## 🚀 How to Go Live
Upload the entire `shivdhenu_v3/` folder to any web host:
- **Free:** GitHub Pages, Netlify, Vercel
- **Paid:** Hostinger, GoDaddy, Bluehost

---
Made with 🙏 for Shivdhenu
