import { useState, useMemo } from 'react';
import {
  ShoppingCart, X, Plus, Minus, Trash2, Package, Plane,
  Weight, Gift, ChevronDown, ChevronUp, Check, ArrowLeft,
  Star, MapPin, ExternalLink, MessageCircle
} from 'lucide-react';

const VND_TO_USD = 25000;
const fmtVND = (v) => v.toLocaleString('vi-VN') + ' VND';
const fmtUSD = (v) => '$' + (v / VND_TO_USD).toFixed(2);

const PRODUCTS = [
  {
    id: 'coffee',
    emoji: '\u2615',
    name: 'Buon Ma Thuot Coffee',
    nameVi: 'C\u00e0 Ph\u00ea Bu\u00f4n Ma Thu\u1ed9t',
    origin: '\u0110\u1eafk L\u1eafk Province',
    desc: 'Premium robusta & arabica beans from the coffee capital of Vietnam. Rich, bold flavor with chocolate undertones.',
    badge: 'Carry-on Safe',
    video: '/media/coffee-hero.mp4',
    poster: '/media/coffee-feature.jpg',
    variants: [
      { label: 'Ground Robusta - Dark Roast', tag: 'ground-robusta' },
      { label: 'Ground Arabica - Dark Roast', tag: 'ground-arabica' },
      { label: 'Whole Bean - Robusta', tag: 'whole-robusta' },
      { label: 'Whole Bean - Arabica', tag: 'whole-arabica' },
    ],
    weights: [
      { g: 500, price: 200000 },
    ],
  },
  {
    id: 'cashew',
    emoji: '\ud83e\udd5c',
    name: 'Binh Phuoc Cashews',
    nameVi: 'H\u1ea1t \u0110i\u1ec1u B\u00ecnh Ph\u01b0\u1edbc',
    origin: 'B\u00ecnh Ph\u01b0\u1edbc Province',
    desc: "Creamy, crunchy cashews from Vietnam's top cashew-producing region. Hand-selected and perfectly roasted.",
    badge: 'Carry-on Safe',
    video: '/media/cashew.mp4',
    variants: [
      { label: 'Roasted', tag: 'roasted' },
    ],
    weights: [
      { g: 500, price: 220000 },
    ],
  },
  {
    id: 'macca',
    emoji: '\ud83c\udf30',
    name: 'Lam Dong Macadamia',
    nameVi: 'M\u1eafc Ca L\u00e2m \u0110\u1ed3ng',
    origin: 'L\u00e2m \u0110\u1ed3ng Province',
    desc: 'Buttery, rich macadamia nuts grown in the cool highlands of Da Lat. A luxurious Vietnamese specialty.',
    badge: 'Carry-on Safe',
    video: '/media/macca.mp4',
    variants: [
      { label: 'Shell-on Cracked', tag: 'shell-on' },
    ],
    weights: [
      { g: 500, price: 160000 },
    ],
  },
];

const GIFT_SETS = [
  {
    id: 'combo3',
    name: 'Combo 3 M\u00f3n - Vietnamese Essentials',
    desc: 'One of each: Coffee + Cashews + Macadamia. Perfect gift set!',
    discount: 0.15,
    items: ['coffee', 'cashew', 'macca'],
    weight: 250,
    emoji: '\ud83c\udf81',
  },
  {
    id: 'combo-coffee',
    name: 'Coffee Lover Set',
    desc: 'Two premium coffees: Medium Roast + Arabica Whole Bean.',
    discount: 0.10,
    items: ['coffee', 'coffee'],
    weight: 500,
    emoji: '\u2615\u2615',
  },
];

const REVIEWS = [
  { name: 'Raeshalyne Abon', country: '\ud83c\uddf5\ud83c\udded', text: 'The coffee I bought from you was really good so I\'d like to buy again! Coming back to Vietnam first week of December.', stars: 5, product: 'Buon Ma Thuot Coffee', image: '/media/coffee-1.jpg' },
  { name: 'Saka Eslem', country: '\ud83c\uddf9\ud83c\uddf7', text: 'It was so good! Thank you \ud83d\ude4f', stars: 5, product: 'Buon Ma Thuot Coffee', image: '/media/coffee-2.jpg' },
  { name: 'Melody Lancaster', country: '\ud83c\udde8\ud83c\udde6', text: 'One of my friends want to buy some coffee from you so I need to remember to order it so I can bring it back with me :)', stars: 5, product: 'Buon Ma Thuot Coffee', image: '/media/coffee-3.jpg' },
];

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/iUZbnomcgT3EGjRA6';
const STORE_LOCATION = {
  name: 'N\u00f3n Coffee - by Kindness Vietnam',
  address: '55 Hu\u1ef3nh \u0110\u00ecnh Hai, Ward 14, B\u00ecnh Th\u1ea1nh District, Ho Chi Minh City, Vietnam',
  tagline: 'Taste before you buy \u2615 Experience authentic Vietnamese coffee & explore curated souvenirs in person.',
  rating: 5.0,
  reviews: 9,
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [selectedWeights, setSelectedWeights] = useState({});
  const [giftOpen, setGiftOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderNote, setOrderNote] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [baggageLimit, setBaggageLimit] = useState(7);

  const getVariant = (pid) => selectedVariants[pid] || PRODUCTS.find(p => p.id === pid).variants[0].tag;
  const getWeight = (pid) => selectedWeights[pid] || PRODUCTS.find(p => p.id === pid).weights[0].g;

  const addToCart = (productId, variant, weightG, qty = 1) => {
    const product = PRODUCTS.find(p => p.id === productId);
    const w = product.weights.find(w => w.g === weightG);
    const key = `${productId}-${variant}-${weightG}`;
    setCart(prev => {
      const existing = prev.find(i => i.key === key);
      if (existing) {
        return prev.map(i => i.key === key ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, {
        key, productId, variant, weightG, price: w.price, qty,
        name: product.name,
        variantLabel: product.variants.find(v => v.tag === variant).label,
        emoji: product.emoji,
      }];
    });
    setCartOpen(true);
  };

  const addGiftSet = (set) => {
    const key = `gift-${set.id}-${Date.now()}`;
    const totalPrice = set.items.reduce((sum, pid) => {
      const product = PRODUCTS.find(p => p.id === pid);
      const w = product.weights.find(w => w.g === set.weight);
      return sum + (w ? w.price : product.weights[0].price);
    }, 0);
    const discountedPrice = Math.round(totalPrice * (1 - set.discount));
    setCart(prev => [...prev, {
      key, productId: set.id, isGiftSet: true, qty: 1,
      name: set.name, emoji: set.emoji,
      price: discountedPrice,
      originalPrice: totalPrice,
      discount: set.discount,
      weightG: set.weight * set.items.length,
      variantLabel: `${set.items.length} items \u00d7 ${set.weight}g`,
    }]);
    setCartOpen(true);
  };

  const updateQty = (key, delta) => {
    setCart(prev => prev.map(i => {
      if (i.key !== key) return i;
      const newQty = i.qty + delta;
      return newQty > 0 ? { ...i, qty: newQty } : i;
    }).filter(i => i.qty > 0));
  };

  const removeItem = (key) => setCart(prev => prev.filter(i => i.key !== key));

  const cartTotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);
  const cartWeight = useMemo(() => cart.reduce((s, i) => s + i.weightG * i.qty, 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-vn-cream flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <img src="/kindness-vietnam-logo.svg" alt="Kindness Vietnam" className="w-16 h-16 rounded-xl mx-auto mb-4" />
          <Check className="mx-auto text-vn-green mb-4" size={64} strokeWidth={3} />
          <h2 className="text-2xl font-bold text-vn-brown mb-2">Order Confirmed!</h2>
          <p className="text-vn-brown-light mb-4 text-lg">{'C\u1ea3m \u01a1n b\u1ea1n! Thank you for your order!'}</p>
          <div className="bg-vn-mint rounded-xl p-4 mb-4 text-left">
            <p className="text-sm text-vn-brown-light mb-1">Order Total</p>
            <p className="text-xl font-bold text-vn-brown">{fmtVND(cartTotal)}</p>
            <p className="text-vn-green font-semibold">{fmtUSD(cartTotal)}</p>
            {orderNote && (
              <div className="mt-3 pt-3 border-t border-vn-mint-dark">
                <p className="text-sm text-vn-brown-light">Note: {orderNote}</p>
              </div>
            )}
          </div>
          <p className="text-sm text-vn-brown-light mb-6">
            {'Ch\u00fac b\u1ea1n c\u00f3 chuy\u1ebfn \u0111i t\u1ed1t l\u00e0nh! Have a wonderful trip! \u2708\ufe0f'}
          </p>
          <button
            onClick={() => { setOrderPlaced(false); setCart([]); setCheckoutOpen(false); setOrderNote(''); setCustomerName(''); setShipTo(''); setCustomerPhone(''); }}
            className="bg-vn-green hover:bg-vn-green-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Shop Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vn-cream">
      {/* Header */}
      <header className="bg-vn-green text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/kindness-vietnam-logo.svg" alt="Kindness Vietnam" className="w-10 h-10 rounded-lg shadow-md" />
            <div>
              <h1 className="text-xl font-bold tracking-wide">Kindness Vietnam</h1>
              <p className="text-xs text-vn-mint opacity-90">Authentic Local Gifts & Souvenirs</p>
            </div>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 transition-colors backdrop-blur-sm"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-vn-red text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <video
          src="/media/coffee-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-vn-green-deep/75" />
        <div className="relative text-white py-14 px-4 text-center">
          <img src="/kindness-vietnam-logo.svg" alt="" className="w-20 h-20 rounded-2xl mx-auto mb-4 shadow-lg border-2 border-white/20" />
          <p className="text-vn-mint text-sm font-semibold tracking-widest uppercase mb-2">
            {'\u2708\ufe0f'} Airport & Hotel Delivery Available
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Bring Vietnam Home
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Hand-picked, authentic Vietnamese gifts perfect for your loved ones. All products are carry-on and customs friendly.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-vn-gold fill-vn-gold" />)}
            <span className="text-sm text-vn-mint ml-2">{STORE_LOCATION.rating} ({STORE_LOCATION.reviews} reviews)</span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Gift Sets */}
        <section className="mb-10">
          <button
            onClick={() => setGiftOpen(!giftOpen)}
            className="w-full flex items-center justify-between bg-linear-to-r from-vn-green to-vn-green-dark text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="flex items-center gap-2">
              <Gift size={24} />
              {'Gift Sets \u2014 Save up to 15%'}
            </span>
            {giftOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          {giftOpen && (
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {GIFT_SETS.map(set => (
                <div key={set.id} className="bg-white rounded-xl shadow-md p-5 border-2 border-vn-green/20">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-2xl mr-2">{set.emoji}</span>
                      <span className="font-bold text-vn-brown text-lg">{set.name}</span>
                    </div>
                    <span className="bg-vn-red text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      -{Math.round(set.discount * 100)}%
                    </span>
                  </div>
                  <p className="text-sm text-vn-brown-light mb-3">{set.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-vn-brown-light">
                      {set.items.length} items &times; {set.weight}g each
                    </span>
                    <button
                      onClick={() => addGiftSet(set)}
                      className="bg-vn-green hover:bg-vn-green-dark text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    >
                      Add Gift Set
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Product Catalog */}
        <h3 className="text-2xl font-bold text-vn-brown mb-6 flex items-center gap-2">
          <Package size={24} /> Our Products
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(product => {
            const variant = getVariant(product.id);
            const weightG = getWeight(product.id);
            const weightObj = product.weights.find(w => w.g === weightG);
            return (
              <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-vn-cream-dark hover:shadow-xl transition-shadow">
                {/* Product media area */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  {product.id === 'coffee' ? (
                    <img
                      src="/media/coffee-feature.jpg"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={product.video}
                      poster={product.poster || ''}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 right-3 bg-vn-green-deep/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Plane size={12} /> {product.badge}
                  </span>
                  <span className="absolute bottom-3 left-3 text-3xl drop-shadow-lg">{product.emoji}</span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h4 className="font-bold text-vn-brown text-lg">{product.name}</h4>
                  <p className="text-sm text-vn-green font-semibold">{product.nameVi}</p>
                  <p className="text-xs text-vn-green-dark font-semibold mt-1 flex items-center gap-1">
                    {'\ud83d\udccd'} {product.origin}
                  </p>
                  <p className="text-sm text-vn-brown-light mt-2 leading-relaxed">{product.desc}</p>

                  {/* Variant selector - chips */}
                  <div className="mt-3">
                    <label className="text-xs font-semibold text-vn-brown block mb-2">Variety</label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map(v => (
                        <button
                          key={v.tag}
                          onClick={() => setSelectedVariants(p => ({ ...p, [product.id]: v.tag }))}
                          className={`text-xs px-3 py-2 rounded-full font-semibold transition-all border-2 ${
                            variant === v.tag
                              ? 'bg-vn-green text-white border-vn-green shadow-md scale-105'
                              : 'bg-white text-vn-brown border-vn-cream-dark hover:border-vn-green hover:text-vn-green'
                          }`}
                        >
                          {variant === v.tag && <Check size={12} className="inline mr-1 -mt-0.5" />}
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Weight badge */}
                  <div className="mt-3">
                    <label className="text-xs font-semibold text-vn-brown block mb-2">Weight</label>
                    <div className="flex flex-wrap gap-2">
                      {product.weights.map(w => (
                        <button
                          key={w.g}
                          onClick={() => setSelectedWeights(p => ({ ...p, [product.id]: w.g }))}
                          className={`text-xs px-3 py-2 rounded-full font-semibold transition-all border-2 ${
                            weightG === w.g
                              ? 'bg-vn-green text-white border-vn-green shadow-md scale-105'
                              : 'bg-white text-vn-brown border-vn-cream-dark hover:border-vn-green hover:text-vn-green'
                          }`}
                        >
                          {weightG === w.g && <Check size={12} className="inline mr-1 -mt-0.5" />}
                          {w.g >= 1000 ? `${w.g / 1000}kg` : `${w.g}g`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Add */}
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-xl font-bold text-vn-brown">{fmtVND(weightObj.price)}</p>
                      <p className="text-sm text-vn-green font-semibold">{fmtUSD(weightObj.price)}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product.id, variant, weightG)}
                      className="bg-vn-green hover:bg-vn-green-dark text-white px-4 py-2 rounded-xl font-bold flex items-center gap-1 transition-colors"
                    >
                      <Plus size={18} /> Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Vietnam Origin Map */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-vn-brown mb-2 text-center flex items-center gap-2 justify-center">
            <MapPin size={24} className="text-vn-green" /> Product Origins
          </h3>
          <p className="text-sm text-vn-brown-light text-center mb-8">Our products come from the finest provinces in Vietnam</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Legend cards - left */}
            <div className="flex flex-col gap-3 w-full max-w-xs order-2 md:order-1">
              <div className="flex items-center gap-3 bg-[#FAF0E6] rounded-xl p-3 border border-[#6F4E37]/20 shadow-sm">
                <div className="w-10 h-10 bg-[#6F4E37] rounded-full flex items-center justify-center text-lg shrink-0">&#9749;</div>
                <div>
                  <p className="font-bold text-vn-brown text-sm">Buon Ma Thuot Coffee</p>
                  <p className="text-xs text-vn-brown-light">Dak Lak Province &middot; Central Highlands</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#FFF8E1] rounded-xl p-3 border border-[#D4A017]/20 shadow-sm">
                <div className="w-10 h-10 bg-[#D4A017] rounded-full flex items-center justify-center text-lg shrink-0">&#129372;</div>
                <div>
                  <p className="font-bold text-vn-brown text-sm">Binh Phuoc Cashews</p>
                  <p className="text-xs text-vn-brown-light">Binh Phuoc Province &middot; Southeast Region</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-vn-mint rounded-xl p-3 border border-vn-green/20 shadow-sm">
                <div className="w-10 h-10 bg-[#2D5A34] rounded-full flex items-center justify-center text-lg shrink-0">&#127792;</div>
                <div>
                  <p className="font-bold text-vn-brown text-sm">Lam Dong Macadamia</p>
                  <p className="text-xs text-vn-brown-light">Da Lat, Lam Dong &middot; Central Highlands</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-red-50 rounded-xl p-3 border border-vn-red/20 shadow-sm">
                <div className="w-10 h-10 bg-vn-red rounded-full flex items-center justify-center text-white text-lg shrink-0">&#9733;</div>
                <div>
                  <p className="font-bold text-vn-brown text-sm">Non Coffee (Our Store)</p>
                  <p className="text-xs text-vn-brown-light">Ho Chi Minh City &middot; Pick up or ship</p>
                </div>
              </div>
            </div>

            {/* Map - center */}
            <div className="relative w-full max-w-[260px] md:max-w-[300px] shrink-0 order-1 md:order-2">
              <img
                src="/media/vietnam-map.svg"
                alt="Map of Vietnam showing product origins"
                className="w-full h-auto"
              />
              {/* Dak Lak marker */}
              <div className="absolute" style={{ left: '76%', top: '70%' }}>
                <div className="w-5 h-5 bg-[#6F4E37] rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px]" title="Dak Lak - Coffee">&#9749;</div>
              </div>
              {/* Lam Dong marker */}
              <div className="absolute" style={{ left: '80%', top: '77%' }}>
                <div className="w-5 h-5 bg-[#2D5A34] rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px]" title="Lam Dong - Macadamia">&#127792;</div>
              </div>
              {/* Binh Phuoc marker */}
              <div className="absolute" style={{ left: '64%', top: '79%' }}>
                <div className="w-5 h-5 bg-[#D4A017] rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px]" title="Binh Phuoc - Cashews">&#129372;</div>
              </div>
              {/* HCMC store marker */}
              <div className="absolute" style={{ left: '61%', top: '86%' }}>
                <div className="w-6 h-6 bg-vn-red rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-[12px] animate-pulse" title="Non Coffee - Our Store">&#9733;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-vn-mint py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-vn-brown mb-2 flex items-center gap-2 justify-center">
            <MessageCircle size={24} className="text-vn-green" /> Customer Reviews
          </h3>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-vn-gold fill-vn-gold" />)}
            <span className="text-sm text-vn-brown-light ml-2">{STORE_LOCATION.rating}/5 from {STORE_LOCATION.reviews} travelers</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REVIEWS.map((r, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-vn-mint-dark">
                {r.image && (
                  <div className="relative">
                    <img src={r.image} alt={`Review by ${r.name}`} className="w-full h-56 object-cover" />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-0.5">
                      {Array.from({ length: r.stars }, (_, i) => (
                        <Star key={i} size={12} className="text-vn-gold fill-vn-gold" />
                      ))}
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm text-vn-brown leading-relaxed mb-3">"{r.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-vn-brown">{r.country} {r.name}</p>
                      <p className="text-xs text-vn-green font-semibold">{r.product}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps / Location Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-vn-mint rounded-2xl overflow-hidden border border-vn-mint-dark shadow-md">
            {/* Embedded map */}
            <div className="w-full h-72">
              <iframe
                title="Non Coffee location"
                src="https://maps.google.com/maps?q=55+Huynh+Dinh+Hai,+Ward+14,+Binh+Thanh,+Ho+Chi+Minh+City,+Vietnam&output=embed&hl=vi"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-vn-brown mb-1">{STORE_LOCATION.name}</h3>
              <p className="text-sm text-vn-brown-light mb-1">{STORE_LOCATION.address}</p>
              <p className="text-sm text-vn-brown-light mb-3 italic">{STORE_LOCATION.tagline}</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-vn-gold fill-vn-gold" />)}
                <span className="text-sm text-vn-brown-light ml-1">{STORE_LOCATION.rating}</span>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-vn-green hover:bg-vn-green-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md"
              >
                <ExternalLink size={18} /> Open in Google Maps
              </a>
              <p className="text-xs text-vn-brown-light mt-3">Come by, relax with a cup of coffee, and discover something worth taking home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vn-green-deep text-white py-6 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/kindness-vietnam-logo.svg" alt="" className="w-8 h-8 rounded-md" />
          <span className="font-bold">Kindness Vietnam</span>
        </div>
        <p className="text-sm opacity-80">
          &copy; 2026 &mdash; Authentic Vietnamese Gifts for Travelers
        </p>
      </footer>

      {/* Cart Drawer Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
          <div className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col overflow-hidden">
            {/* Cart Header */}
            <div className="bg-vn-green text-white px-5 py-4 flex items-center justify-between shrink-0">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <ShoppingCart size={20} /> Your Cart ({cartCount})
              </h3>
              <button onClick={() => setCartOpen(false)} className="hover:text-vn-mint transition-colors">
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex items-center justify-center text-vn-brown-light">
                <div className="text-center">
                  <ShoppingCart size={48} className="mx-auto mb-3 opacity-30" />
                  <p>Your cart is empty</p>
                  <p className="text-sm mt-1">Add some Vietnamese gifts!</p>
                </div>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                  {cart.map(item => (
                    <div key={item.key} className="bg-vn-mint rounded-xl p-3 flex items-start gap-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-vn-brown text-sm truncate">{item.name}</p>
                        <p className="text-xs text-vn-brown-light">{item.variantLabel}</p>
                        {item.isGiftSet && (
                          <p className="text-xs text-vn-red font-semibold">
                            Gift Set -{Math.round(item.discount * 100)}%
                          </p>
                        )}
                        <p className="text-sm font-bold text-vn-brown mt-1">
                          {fmtVND(item.price)}
                          {item.isGiftSet && (
                            <span className="text-xs text-vn-brown-light line-through ml-2">
                              {fmtVND(item.originalPrice)}
                            </span>
                          )}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQty(item.key, -1)}
                            className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-vn-brown hover:bg-vn-mint-dark transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold text-vn-brown w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.key, 1)}
                            className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-vn-brown hover:bg-vn-mint-dark transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.key)}
                            className="ml-auto text-vn-red hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Weight Estimator */}
                <div className="px-5 py-3 bg-vn-mint border-t border-vn-mint-dark shrink-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-vn-brown flex items-center gap-1">
                      <Weight size={16} /> Luggage Weight
                    </span>
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-vn-brown-light">Limit:</label>
                      <select
                        value={baggageLimit}
                        onChange={e => setBaggageLimit(Number(e.target.value))}
                        className="text-xs border border-vn-cream-dark rounded px-2 py-1 bg-white text-vn-brown"
                      >
                        <option value={7}>7 kg (carry-on)</option>
                        <option value={10}>10 kg (carry-on+)</option>
                        <option value={20}>20 kg (checked)</option>
                        <option value={23}>23 kg (checked)</option>
                        <option value={30}>30 kg (checked+)</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        cartWeight / 1000 > baggageLimit ? 'bg-vn-red' : cartWeight / 1000 > baggageLimit * 0.8 ? 'bg-vn-gold' : 'bg-vn-green'
                      }`}
                      style={{ width: `${Math.min(100, (cartWeight / 1000 / baggageLimit) * 100)}%` }}
                    />
                  </div>
                  <p className={`text-xs mt-1 font-semibold ${cartWeight / 1000 > baggageLimit ? 'text-vn-red' : 'text-vn-brown-light'}`}>
                    {(cartWeight / 1000).toFixed(1)} kg / {baggageLimit} kg
                    {cartWeight / 1000 > baggageLimit && ' \u26a0\ufe0f Over limit!'}
                  </p>
                </div>

                {/* Cart Summary */}
                <div className="px-5 py-4 border-t border-vn-cream-dark bg-white shrink-0">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-vn-brown-light">Subtotal</span>
                    <div className="text-right">
                      <p className="font-bold text-vn-brown text-lg">{fmtVND(cartTotal)}</p>
                      <p className="text-sm text-vn-green font-semibold">{fmtUSD(cartTotal)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}
                    className="w-full bg-vn-green hover:bg-vn-green-dark text-white py-3 rounded-xl font-bold text-lg transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setCheckoutOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-vn-green text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="font-bold text-lg">Checkout Summary</h3>
              <button onClick={() => setCheckoutOpen(false)} className="hover:text-vn-mint transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-2 mb-4">
                {cart.map(item => (
                  <div key={item.key} className="flex justify-between items-center text-sm">
                    <span className="text-vn-brown">
                      {item.emoji} {item.name} &times; {item.qty}
                    </span>
                    <span className="font-semibold text-vn-brown">{fmtVND(item.price * item.qty)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-vn-cream-dark pt-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-vn-brown text-lg">Total</span>
                  <div className="text-right">
                    <p className="font-bold text-vn-brown text-xl">{fmtVND(cartTotal)}</p>
                    <p className="text-vn-green font-semibold">{fmtUSD(cartTotal)}</p>
                  </div>
                </div>
                <p className="text-xs text-vn-brown-light mt-1">
                  Total weight: {(cartWeight / 1000).toFixed(1)} kg
                </p>
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold text-vn-brown block mb-1">
                  Your Name <span className="text-vn-red">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder="e.g. John Smith"
                  className="w-full border border-vn-cream-dark rounded-xl px-4 py-2 text-sm text-vn-brown bg-vn-cream focus:outline-none focus:ring-2 focus:ring-vn-green"
                />
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold text-vn-brown block mb-1">
                  Ship To (Hotel / Address) <span className="text-vn-red">*</span>
                </label>
                <input
                  type="text"
                  value={shipTo}
                  onChange={e => setShipTo(e.target.value)}
                  placeholder="e.g. Marriott Hotel, District 1, HCMC"
                  className="w-full border border-vn-cream-dark rounded-xl px-4 py-2 text-sm text-vn-brown bg-vn-cream focus:outline-none focus:ring-2 focus:ring-vn-green"
                />
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold text-vn-brown block mb-1">
                  Phone Number <span className="text-vn-red">*</span>
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  placeholder="e.g. +1 234 567 8900"
                  className="w-full border border-vn-cream-dark rounded-xl px-4 py-2 text-sm text-vn-brown bg-vn-cream focus:outline-none focus:ring-2 focus:ring-vn-green"
                />
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold text-vn-brown block mb-1">
                  Order Note (optional)
                </label>
                <textarea
                  value={orderNote}
                  onChange={e => setOrderNote(e.target.value)}
                  placeholder='e.g. "For my family in Japan"'
                  className="w-full border border-vn-cream-dark rounded-xl px-4 py-2 text-sm text-vn-brown bg-vn-cream focus:outline-none focus:ring-2 focus:ring-vn-green resize-none"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setCheckoutOpen(false)}
                  className="flex-1 bg-vn-cream hover:bg-vn-cream-dark text-vn-brown py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button
                  onClick={() => {
                    if (!customerName.trim() || !shipTo.trim() || !customerPhone.trim()) {
                      alert('Please fill in your Name, Ship To, and Phone Number.');
                      return;
                    }
                    const items = cart.map(i => `${i.emoji} ${i.name} (${i.variantLabel}) x${i.qty} = ${fmtVND(i.price * i.qty)}`).join('%0A');
                    const msg = `*NEW ORDER - Kindness Vietnam*%0A%0A*Customer:* ${encodeURIComponent(customerName)}%0A*Phone:* ${encodeURIComponent(customerPhone)}%0A*Ship To:* ${encodeURIComponent(shipTo)}%0A%0A*Items:*%0A${items}%0A%0A*Total:* ${fmtVND(cartTotal)} (${fmtUSD(cartTotal)})%0A*Weight:* ${(cartWeight / 1000).toFixed(1)}kg${orderNote ? '%0A*Note:* ' + encodeURIComponent(orderNote) : ''}`;
                    window.open(`https://wa.me/84978270038?text=${msg}`, '_blank');
                    setOrderPlaced(true);
                  }}
                  className="flex-1 bg-vn-green hover:bg-vn-green-dark text-white py-3 rounded-xl font-bold text-lg transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
