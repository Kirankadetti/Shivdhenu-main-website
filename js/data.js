/* ============================================================
   data.js — ✏️ EDIT ALL WEBSITE CONTENT HERE
   Products, testimonials, contact info, WhatsApp number etc.
   ============================================================ */

/* ── ✏️ COMPANY INFO — Edit these ─────────────── */
const SITE = {
  name: 'Shivdhenu',
  tagline: 'माँ का आशीर्वाद, प्रकृति का प्रसाद',
  tagline_en: 'Blessings of the Mother, Gift of Nature',
  phone: '9380553589',          /* WhatsApp number - digits only */
  email: 'namaste@shivdhenu.com',
  address: 'Belagavi, Karnataka — 590009, India',
  instagram: 'https://instagram.com/shivdhenu',
  facebook: 'https://facebook.com/shivdhenu',
  youtube: 'https://youtube.com/@shivdhenu',
};

/* WhatsApp link builder */
function waLink(msg) {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(msg || 'Namaste! I am interested in Shivdhenu products.')}`;
}

/* ── ✏️ PRODUCTS — Add / remove / edit here ───── */
/*
  status options:
    'available' → shows WhatsApp order button
    'upcoming'  → shows "Coming Soon" label
  category options (must match a category slug below):
    'spices', 'millets', 'makhana', 'dehydrated', 'kids'

  ✏️ PRODUCT IMAGES: use the studio-shot product photography in /assets
  (the "..._product_photo.png" / "IMG_0xxx.PNG" files) — these are shot on
  the same dark, premium backdrop as the rest of the brand. Avoid swapping
  in light/white-background photography; it breaks the black-and-gold look.

  ✏️ PRODUCT DETAIL MODAL fields (used by the click-to-view product popup):
    images:     array of image paths for the gallery/thumbnails.
                Each product currently repeats its one real photo 3x as a
                placeholder so the gallery (arrows/dots/thumbnails/swipe) is
                visible and testable today. Replace any entry with a real
                additional angle/lifestyle shot whenever one is ready — the
                gallery updates automatically, no other code changes needed.
    highlights: short list of factual product highlights (weight, type, etc.)
    benefits:   short list of consumer-facing benefits
*/
const PRODUCTS = [

  /* ── MASALAS & SPICES ──────────────────────── */
  {
    id: 1,
    name: 'Shivdhenu Amchur Powder',
    category: 'spices',
    badge: 'Pure',
    status: 'available',
    img: '../assets/shivdhenu_amchur_powder_product_photo.jpg',
    images: ['../assets/shivdhenu_amchur_powder_product_photo.jpg', '../assets/shivdhenu_amchur_powder_product_photo.jpg', '../assets/shivdhenu_amchur_powder_product_photo.jpg'],
    desc: 'Premium dry mango powder crafted for authentic Indian flavours and natural tanginess.',
    highlights: ['Net Weight: 50 gm', '100% Natural, Sun-dried Mangoes', 'No Artificial Colour or Preservatives', 'Stone-ground for Fine Texture'],
    benefits: ['Adds authentic tang to chaats, curries & snacks', 'A natural alternative to citric acid or lemon', 'Aids digestion in traditional Ayurvedic use', 'Long shelf life when stored in a cool, dry place'],
  },
  {
    id: 2,
    name: 'Shivdhenu Chilli Powder',
    category: 'spices',
    badge: 'Premium',
    status: 'available',
    img: '../assets/shivdhenu_chilli_powder_product_photo.jpg',
    images: ['../assets/shivdhenu_chilli_powder_product_photo.jpg', '../assets/shivdhenu_chilli_powder_product_photo.jpg', '../assets/shivdhenu_chilli_powder_product_photo.jpg'],
    desc: 'Rich red chilli powder with bold colour, natural aroma and authentic spice heat.',
    highlights: ['Net Weight: 50 gm', 'Sourced from Sun-ripened Red Chillies', 'Stone-ground, Not Machine-blended', 'Vibrant Natural Colour'],
    benefits: ['Authentic heat without artificial colour additives', 'Balanced pungency for everyday Indian cooking', 'Rich in natural capsaicin and antioxidants', 'Consistent batch-to-batch quality'],
  },
  {
    id: 3,
    name: 'Shivdhenu Coriander Powder',
    category: 'spices',
    badge: 'Natural',
    status: 'available',
    img: '../assets/shivdhenu_coriander_powder_product_photo.jpg',
    images: ['../assets/shivdhenu_coriander_powder_product_photo.jpg', '../assets/shivdhenu_coriander_powder_product_photo.jpg', '../assets/shivdhenu_coriander_powder_product_photo.jpg'],
    desc: 'Fresh coriander powder made from carefully selected seeds for pure flavour and aroma.',
    highlights: ['Net Weight: 50 gm', 'Hand-picked Coriander Seeds', 'Slow-roasted for Aroma Retention', 'Finely Ground, Evenly Textured'],
    benefits: ['Mild, earthy flavour base for everyday gravies', 'Naturally aromatic — no flavour enhancers added', 'A traditional digestive spice in Ayurveda', 'Pairs well with every Shivdhenu masala'],
  },
  {
    id: 4,
    name: 'Shivdhenu Turmeric Powder',
    category: 'spices',
    badge: 'Organic',
    status: 'available',
    img: '../assets/shivdhenu_turmeric_powder_product_photo.jpg',
    images: ['../assets/shivdhenu_turmeric_powder_product_photo.jpg', '../assets/shivdhenu_turmeric_powder_product_photo.jpg', '../assets/shivdhenu_turmeric_powder_product_photo.jpg'],
    desc: 'Pure turmeric powder with natural curcumin richness and authentic golden colour.',
    highlights: ['Net Weight: 50 gm', 'High Natural Curcumin Content', 'Sun-dried & Stone-ground', 'Deep Golden Colour, No Additives'],
    benefits: ['A staple of Vedic and Ayurvedic kitchens', 'Naturally anti-inflammatory properties', 'Used in cooking, skincare and sacred rituals alike', 'No synthetic colour — colour comes from curcumin alone'],
  },

  /* ── MILLETS ───────────────────────────────── */
  {
    id: 5,
    name: 'Shivdhenu Ragi Malt',
    category: 'millets',
    badge: 'Healthy',
    status: 'available',
    img: '../assets/shivdhenu_ragi_malt_right.jpg',
    images: ['../assets/shivdhenu_ragi_malt_right.jpg', '../assets/shivdhenu_ragi_malt_right.jpg', '../assets/shivdhenu_ragi_malt_right.jpg'],
    desc: 'Nutritious sprouted ragi malt packed with natural goodness, fibre and traditional nourishment.',
    highlights: ['Net Weight: 200 gm', 'Sprouted Ragi, Horse Gram, Urad & Moong Dal', 'Naturally Sweetened with Elaichi', 'No Added Sugar Unless Desired'],
    benefits: ['Rich in calcium, iron and dietary fibre', 'A gentle, traditional breakfast for all ages', 'Naturally gluten-free grain base', 'Easy to prepare — just mix with warm milk or water'],
  },

  /* ── MAKHANA SNACKS ─────────────────────────── */
  {
    id: 6,
    name: 'Peri Peri Makhana',
    category: 'makhana',
    badge: 'Best Seller',
    status: 'available',
    img: '../assets/Peri_Makhana.PNG',
    images: ['../assets/Peri_Makhana.PNG', '../assets/Peri_Makhana.PNG', '../assets/Peri_Makhana.PNG'],
    desc: 'Fox nuts roasted to a delicate crunch and tossed in bold, tangy peri peri spice.',
    highlights: ['Net Weight: 70 gm', 'Roasted, Never Fried', 'Bold Peri Peri Seasoning', 'Resealable Jar for Freshness'],
    benefits: ['A guilt-free alternative to fried snacks', 'Naturally light, protein-rich fox nuts', 'Great for fasting days and festive snacking', 'No trans fats or hydrogenated oils'],
  },
  {
    id: 7,
    name: 'Pudina Makhana',
    category: 'makhana',
    badge: 'Pure',
    status: 'available',
    img: '../assets/Pudina_Makhana.PNG',
    images: ['../assets/Pudina_Makhana.PNG', '../assets/Pudina_Makhana.PNG', '../assets/Pudina_Makhana.PNG'],
    desc: 'Light, crispy fox nuts finished with fresh mint for a cooling, herby snack.',
    highlights: ['Net Weight: 70 gm', 'Roasted, Never Fried', 'Real Mint (Pudina) Seasoning', 'Resealable Jar for Freshness'],
    benefits: ['A cooling, refreshing snack for any time of day', 'Naturally light, protein-rich fox nuts', 'Great for fasting days and festive snacking', 'No trans fats or hydrogenated oils'],
  },
  {
    id: 8,
    name: 'Barbeque Makhana',
    category: 'makhana',
    badge: 'Premium',
    status: 'available',
    img: '../assets/Barbeque_Makhana.PNG',
    images: ['../assets/Barbeque_Makhana.PNG', '../assets/Barbeque_Makhana.PNG', '../assets/Barbeque_Makhana.PNG'],
    desc: 'Smoky barbeque-spiced fox nuts — roasted, never fried, for a guilt-free crunch.',
    highlights: ['Net Weight: 70 gm', 'Roasted, Never Fried', 'Smoky Barbeque Seasoning', 'Resealable Jar for Freshness'],
    benefits: ['A guilt-free alternative to fried snacks', 'Naturally light, protein-rich fox nuts', 'Great for fasting days and festive snacking', 'No trans fats or hydrogenated oils'],
  },
  {
    id: 9,
    name: 'Cheese Makhana',
    category: 'makhana',
    badge: 'Favourite',
    status: 'available',
    img: '../assets/Cheese_Makhana.PNG',
    images: ['../assets/Cheese_Makhana.PNG', '../assets/Cheese_Makhana.PNG', '../assets/Cheese_Makhana.PNG'],
    desc: 'Crunchy fox nuts coated in rich, savoury cheese seasoning. A family favourite.',
    highlights: ['Net Weight: 70 gm', 'Roasted, Never Fried', 'Rich Cheese Seasoning', 'Resealable Jar for Freshness'],
    benefits: ['A family-friendly favourite for all ages', 'Naturally light, protein-rich fox nuts', 'Great for fasting days and festive snacking', 'No trans fats or hydrogenated oils'],
  },
  {
    id: 10,
    name: 'Salt & Pepper Makhana',
    category: 'makhana',
    badge: 'Classic',
    status: 'available',
    img: '../assets/Salt_Makhana.PNG',
    images: ['../assets/Salt_Makhana.PNG', '../assets/Salt_Makhana.PNG', '../assets/Salt_Makhana.PNG'],
    desc: 'The timeless classic — roasted fox nuts with just sea salt and cracked pepper.',
    highlights: ['Net Weight: 70 gm', 'Roasted, Never Fried', 'Sea Salt & Cracked Pepper Only', 'Resealable Jar for Freshness'],
    benefits: ['The purest, simplest way to enjoy makhana', 'Naturally light, protein-rich fox nuts', 'Great for fasting days and festive snacking', 'No trans fats or hydrogenated oils'],
  },
  {
    id: 11,
    name: 'Tangy Tomato Makhana',
    category: 'makhana',
    badge: 'Classic',
    status: 'available',
    img: '../assets/Tango_makhana.PNG',
    images: ['../assets/Tangomakhana.PNG', '../assets/Tango_makhana.PNG', '../assets/Tango_makhana.PNG'],
    desc: 'A tangy twist on the classic — roasted fox nuts with a zesty tomato seasoning.',
    highlights: ['Net Weight: 70 gm', 'Roasted, Never Fried', 'Tangy Tomato Seasoning', 'Resealable Jar for Freshness'],
    benefits: ['A delicious alternative to traditional snacks', 'Naturally light, protein-rich fox nuts', 'Great for fasting days and festive snacking', 'No trans fats or hydrogenated oils'],
  },

  /* ── DEHYDRATED FRUITS (Coming Soon) ───────── */
  {
    id: 12,
    name: 'Dehydrated Fruits Range',
    category: 'dehydrated',
    badge: 'Coming Soon',
    status: 'upcoming',
    img: '../assets/DihydratedFruits.jpeg',
    images: ['../assets/DihydratedFruits.jpeg', '../assets/DihydratedFruits.jpeg', '../assets/DihydratedFruits.jpeg'],
    desc: 'A full range of premium dehydrated fruits — cranberries, guava, pineapple, papaya, mango and more — currently in the works.',
    highlights: ['Launching Soon', 'Cranberries, Guava, Pineapple, Papaya, Mango & More', 'No Added Sugar', 'Naturally Preserved'],
    benefits: ['A wholesome alternative to processed snacks', 'Retains natural fruit nutrients and flavour', 'Perfect for lunchboxes, travel and fasting days'],
  },

  /* ── KIDS PRODUCTS (Coming Soon) ───────────── */
  {
    id: 14,
    name: 'Shivdhenu Kids Range',
    category: 'kids',
    badge: 'Coming Soon',
    status: 'upcoming',
    img: '../assets/Kids.PNG',
    images: ['../assets/Kids.PNG', '../assets/Kids.PNG', '../assets/Kids.PNG'],
    desc: 'Wholesome, naturally nourishing snacks and foods made especially for growing children — launching soon.',
    highlights: ['Launching Soon', 'Designed for Growing Children', 'No Refined Sugar', 'No Artificial Colours or Flavours'],
    benefits: ['Nourishment parents can trust', 'Naturally sourced, child-friendly ingredients', 'A wholesome alternative to packaged snacks'],
  },

];

/* ── ✏️ PRODUCT CATEGORIES ─────────────────────── */
const CATEGORIES = [
  { slug: 'all', label: 'All Products', icon: '🛍️' },
  { slug: 'spices', label: 'Masalas & Spices', icon: '🌶️' },
  { slug: 'millets', label: 'Millets', icon: '🌾' },
  { slug: 'makhana', label: 'Makhana Snacks', icon: '🪷' },
  { slug: 'dehydrated', label: 'Dehydrated Fruits', icon: '🥭' },
  { slug: 'kids', label: 'Kids Products', icon: '👶' },
];

/* ── ✏️ TESTIMONIALS ────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    loc: 'Bengaluru',
    prod: 'Peri Peri Makhana',
    init: 'P',
    stars: 5,
    text: 'The Peri Peri Makhana is dangerously addictive — light, crunchy and packed with real flavour. My entire family has switched to this as our evening snack, no regrets at all.',
  },
  {
    name: 'Rajiv Nair',
    loc: 'Pune',
    prod: 'Chilli Powder',
    init: 'R',
    stars: 5,
    text: 'The masalas from Shivdhenu are on another level. You can actually smell and taste the difference between real spices and market blends. We haven\'t gone back to supermarket brands since.',
  },
  {
    name: 'Ananya Krishnamurthy',
    loc: 'Chennai',
    prod: 'Turmeric Powder',
    init: 'A',
    stars: 5,
    text: 'The turmeric colour and aroma is so vibrant — nothing like the pale powder you get elsewhere. My mother uses it for cooking as well as home remedies. Completely pure and authentic.',
  },
  {
    name: 'Dr. Suresh Patel',
    loc: 'Ahmedabad',
    prod: 'Ragi Malt',
    init: 'S',
    stars: 5,
    text: 'I recommend Shivdhenu\'s ragi malt to all my patients who need a clean, nutritious alternative to refined breakfast cereals. The quality is outstanding and the sourcing is transparent.',
  },
  {
    name: 'Meena Iyer',
    loc: 'Coimbatore',
    prod: 'Cheese Makhana',
    init: 'M',
    stars: 5,
    text: 'The Cheese Makhana is incredible — savoury, crunchy and absolutely zero preservatives. My kids ask for it as a healthy after-school snack. Brilliant product from a brilliant brand.',
  },
  {
    name: 'Kiran Desai',
    loc: 'Mumbai',
    prod: 'Amchur Powder',
    init: 'K',
    stars: 5,
    text: 'I have used Shivdhenu\'s amchur powder for months now and the tang it brings to my cooking is unmatched. The quality is consistent and delivery is always quick. I recommend it to every home cook I know.',
  },
];

/* ── ✏️ FAQ ──────────────────────────────────────── */
const FAQS = [
  {
    q: 'How do I order Shivdhenu products?',
    a: 'Simply WhatsApp us or call us directly. We will confirm your order, share pricing and delivery details, and dispatch it to your doorstep. We are a startup and currently handle all orders personally to ensure quality.'
  },
  {
    q: 'Are your products free from preservatives?',
    a: 'Absolutely. All Shivdhenu products are made with zero artificial preservatives, colours or additives. We believe food should be as close to its natural state as possible.'
  },
  {
    q: 'Are your makhana (fox nuts) roasted or fried?',
    a: 'All our makhana snacks are roasted, never fried. They are naturally light, low in fat and seasoned with real spices — Peri Peri, Pudina, Barbeque, Cheese and Salt & Pepper.'
  },
  {
    q: 'Do you deliver across India?',
    a: 'Yes! We deliver pan-India. Contact us on WhatsApp with your location and we will confirm delivery availability and timing for your area.'
  },
  {
    q: 'What does "Gou Seva" mean and why does it matter?',
    a: 'Gou Seva means "service to the sacred cow." We dedicate 2% of all revenue to the shelter, care and protection of indigenous Gir cows. Every purchase you make contributes directly to this mission.'
  },
  {
    q: 'When will the upcoming products be available?',
    a: 'Our Dehydrated Fruits range and Kids Products, marked "Coming Soon", are currently in development. WhatsApp us to be notified the moment they launch — our community members get early access.'
  },
];
