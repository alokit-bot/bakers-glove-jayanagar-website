// Baker's Glove — product & content data
// All images are CDN-hosted Unsplash URLs (direct, no placeholders)

export const BUSINESS = {
  name: "Baker's Glove",
  tagline: "Baked with love since day one.",
  phone: "+91 99165 54504",
  phoneTel: "tel:+919916554504",
  whatsapp:
    "https://wa.me/919916554504?text=Hi%20Baker's%20Glove!%20I'd%20like%20to%20order%20a%20cake.",
  address:
    "733/A, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560041",
  addressShort: "4th Block, Jayanagar, Bengaluru",
  hours: "Daily · 10:00 AM – 11:30 PM",
  rating: 4.6,
  reviews: 918,
  mapsEmbed:
    "https://www.google.com/maps?q=12.9247228,77.5850867&z=17&hl=en&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Baker%27s+Glove+Jayanagar+Bengaluru&query_place_id=",
};

export const BESTSELLERS = [
  {
    id: "dark-night",
    name: "The Dark Night",
    tagline: "Our most-loved creation.",
    description:
      "Rich dark chocolate indulgence — layers of ganache, a whisper of sea salt, finished with a mirror glaze.",
    price: "₹220 / slice",
    priceNote: "Custom cakes from ₹1,800",
    image:
      "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=1200&q=80",
    tag: "Signature",
  },
  {
    id: "blueberry",
    name: "Blueberry Heaven Pastry",
    tagline: "Monday-morning ritual for half of Jayanagar.",
    description:
      "Buttery, flaky layers cradling fresh blueberry compote and a vanilla-bean crème.",
    price: "₹110",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1200&q=80",
    tag: "Fresh daily",
  },
  {
    id: "red-velvet",
    name: "Classic Red Velvet Cake",
    tagline: "Velvety, smooth, unmistakable.",
    description:
      "A heirloom recipe — tender crumb with a tangy cream-cheese frosting, crowned with white-chocolate shavings.",
    price: "Custom from ₹1,400",
    image:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1200&q=80",
    tag: "Custom",
  },
  {
    id: "croissant",
    name: "Artisan Croissants",
    tagline: "Golden, shattering layers.",
    description:
      "Laminated with French-style butter and folded 81 times. Baked fresh each morning at 7 AM.",
    price: "₹90",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    tag: "Morning bake",
  },
  {
    id: "brownie",
    name: "Dark Chocolate Truffle Brownie",
    tagline: "For when only the darkest will do.",
    description:
      "Dense, fudgy, intensely chocolatey — 70% Belgian couverture with a molten truffle core.",
    price: "₹95",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    tag: "Fan favourite",
  },
  {
    id: "cheesecake",
    name: "Belgian Chocolate Cheesecake",
    tagline: "New York meets Brussels.",
    description:
      "A New York-style cheesecake swirled with Belgian dark chocolate on a buttery biscuit base.",
    price: "₹175 / slice",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=1200&q=80",
    tag: "Limited",
  },
];

export const CUSTOM_CAKES = [
  {
    id: "birthday",
    title: "Birthday Cakes",
    description:
      "From a surprise ½-kg for a quiet evening to a show-stopping centrepiece.",
    priceFrom: "½ kg from ₹650 · 1 kg from ₹1,100",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wedding",
    title: "Wedding & Anniversary Tiers",
    description:
      "Two, three, four tiers — dressed in buttercream, gold leaf, or fresh florals.",
    priceFrom: "From ₹3,500",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate",
    title: "Corporate Celebration Cakes",
    description:
      "Logo-printed edibles, team launches, milestone toasts — delivered on brand, on time.",
    priceFrom: "From ₹2,000",
    image:
      "https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "baby",
    title: "Baby Shower & Theme Cakes",
    description:
      "Unicorns, jungle safari, space, floral — hand-sculpted fondant or piped buttercream.",
    priceFrom: "From ₹1,400",
    image:
      "https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&w=1200&q=80",
  },
];

export const TRUST_SIGNALS = [
  {
    icon: "star",
    title: "4.6★ on Google",
    description: "918 happy customers and counting — check us on Google Maps.",
  },
  {
    icon: "cake",
    title: "Custom for Every Occasion",
    description:
      "Birthdays, weddings, milestones — we sketch, you approve, we bake.",
  },
  {
    icon: "moon",
    title: "Open Till 11:30 PM",
    description:
      "For anniversaries remembered at 10 PM and midnight surprises.",
  },
  {
    icon: "home",
    title: "Proudly Jayanagar",
    description:
      "Rooted in 4th Block since our very first morning bake.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The Dark Night cake was simply outstanding — perfect balance of rich chocolate. Nothing like it in Bangalore!",
    name: "Ananya R.",
    location: "Jayanagar",
  },
  {
    quote:
      "Got a custom birthday cake and it was more beautiful than I imagined. Everyone at the party was asking where we got it from!",
    name: "Siddharth K.",
    location: "JP Nagar",
  },
  {
    quote:
      "Blueberry pastry is my weekly ritual. Sweet, fluffy, absolutely addictive.",
    name: "Deepa M.",
    location: "HSR Layout",
  },
];

export const MENU = [
  { category: "Pastries & Tarts", range: "₹80 – ₹180" },
  { category: "Brownies & Cookies", range: "₹60 – ₹120" },
  { category: "Cheesecakes (by slice)", range: "₹150 – ₹250" },
  { category: "Cupcakes", range: "₹80 – ₹150" },
  { category: "Custom Birthday Cakes", range: "From ₹650" },
  { category: "Celebration Cakes", range: "From ₹1,400" },
  { category: "Wedding Cakes", range: "Price on request" },
  { category: "Savoury Snacks", range: "₹120 – ₹250" },
];
