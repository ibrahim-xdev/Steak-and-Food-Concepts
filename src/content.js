// ─────────────────────────────────────────────────────────────
// EVERYTHING ON THE SITE LIVES IN THIS ONE FILE.
// Edit text, prices, images, and links here — no other file
// needs to change for a normal content update.
//
// NOTE: menu items and prices below are placeholder copy built
// around the dishes your own reviews mention (beef burger, pasta,
// panini, loaded fries). Swap in your real menu and real prices
// before you publish. Gallery/menu photos are stock placeholders —
// replace the `image` links with real photos of your food.
// ─────────────────────────────────────────────────────────────

export const shop = {
  name: "Stack and Food Concepts",
  tagline: "Cha chaan teng (Hong Kong-style cafe)",
  city: "Perth",
  neighborhood: "Bull Creek",
  address: "9/110 Parry Ave, Bull Creek WA 6149, Australia",
  mapsUrl:
    "https://www.google.com/maps/place/Steak+and+Food+Concepts/@-32.0604962,115.8608905,1133m/data=!3m1!1e3!4m6!3m5!1s0x2a32bd3758aad2af:0x4aa5353ecab6dc34!8m2!3d-32.056856!4d115.8637563!16s%2Fg%2F11b7fwcqsq?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D",
  phoneDisplay: "+61893327779",
  // WhatsApp deep link — digits only, country code first, no leading +
  whatsappNumber: "923125126016",
  whatsappDefaultMessage:
    "Hi Steak and Food Concepts, I'd like to place an order.",
  rating: 4.4,
  reviewCount: 417,
  priceRange: "$20 – $40 per person",
  hours: [
    { day: "Monday", time: "closed" },
    { day: "Tuesday", time: "11:30 AM - 2:30 PM & 5:30 PM - 9:00 PM" },
    { day: "Wednesday", time: "11:30 AM - 2:30 PM – 5:30 PM - 9:00 PM" },
    { day: "Thursday", time: "11:30 AM - 2:30 PM – 5:30 PM - 9:00 PM" },
    { day: "Friday", time: "11:30 AM - 2:30 PM – 5:30 PM - 9:00 PM" },
    { day: "Saturday", time: "11:30 AM - 2:30 PM – 5:30 PM - 9:00 PM" },
    { day: "Sunday", time: "closed" },
  ],
  services: ["Dine-in", "Takeout", "Onsite services"],
};

// Words that spin through the hero's animated background strip.
export const heroWords = [
  "Lunch",
  "Dinner",
  "Counter service",
  "Dessert",
  "Seating",
  "Table service",
];

export const about = {
  eyebrow: "About us",
  heading: "Late-night food, made fresh, no shortcuts.",
  paragraphs: [
    "Steak and Food Concepts is an authentic Hong Kong-style café (Cha Chaan Teng) located in Bull Creek, Western Australia, serving comforting, generous classics like sizzling steaks, top-tier fried rice, crispy cutlets, and hot milk tea. Renowned for its friendly, efficient service and vibrant casual atmosphere, it offers an authentic soul-warming dining experience for local food lovers.",
  ],
  stats: [
    { value: "2PM–3AM", label: "Open every day, late-night menu" },
    {
      value: shop.rating.toFixed(1),
      label: `★ average across ${shop.reviewCount} reviews`,
    },
    { value: "3", label: "Ways to order — dine-in, Takeout, Onsite services" },
  ],
};

export const menu = {
  eyebrow: "The menu",
  heading: "Built around what people actually order",
  subheading: "Prices in AUD. Ask about combo deals for groups.",
  categories: [
    {
      name: "Popular Specialities",
      items: [
        {
          name: "Sizzling Steak",
          note: "Tender, juicy cut of beef served hot and sizzling on a classic cast-iron plate",
          price: "$32.50",
          tag: "Best seller",
          image:
            "https://images.unsplash.com/photo-1720701247887-cab418baa6d6?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Beef Fried Ho Fun",
          note: "Wok-tossed wide rice noodles with tender beef, bean sprouts, and rich soy sauce.",
          price: "$25.00",
          tag: "Chef's pick",
          image:
            "https://images.unsplash.com/photo-1673258551460-268b47871a32?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Beef Brisket Noodles",
          note: "Slow-braised, melt-in-your-mouth beef brisket served over delicate egg noodles in rich broth",
          price: "$20.50",
          tag: "star anise, ginger, and cinnamon",
          image:
            "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Peanut Butter French Toast",
          note: "Golden, fluffy thick-cut toast stuffed with creamy peanut butter and topped with butter and syrup",
          price: "$20.00",
          tag: "Sweet, creamy",
          image:
            "https://images.unsplash.com/photo-1745211212207-54b6eadd26c1?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Cream of Mushroom Soup",
          note: "Smooth, savory house-made mushroom soup packed with comforting earthy flavor",
          price: "$2.00",
          tag: "Rich and creamy",
          image:
            "https://images.unsplash.com/photo-1785961259199-0436f0f877ac?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
    {
      name: "Mains & Set Meals",
      items: [
        {
          name: "Classic Combo with Rice",
          note: "A generous Hong Kong-style meal set pairing your choice of protein with steamed rice",
          price: "$18.00",
          tag: "Best seller",
          image:
            "https://images.unsplash.com/photo-1679279726946-a158b8bcaa23?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Chicken Cutlet with Curry",
          note: "Golden fried chicken cutlet paired with aromatic, flavorful Hong Kong-style curry",
          price: "$20.00",
          tag: "savory, crispy",
          image:
            "https://images.unsplash.com/photo-1768179669433-bd9d52949c20?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Chicken Cutlet with Egg and Chips",
          note: "Juicy fried chicken served alongside a fried egg and crispy thick-cut fries",
          price: "$30.00",
          tag: "savory, salty, and rich with a delicious mix of crispy and tender textures",
          image:
            "https://images.unsplash.com/photo-1580217593608-61931cefc821?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Baked Seafood in Cream Sauce",
          note: "Fresh mixed seafood baked to golden perfection under a smooth, velvety cream sauce",
          price: "$20.00",
          tag: "rich, savory, and velvety",
          image:
            "https://images.unsplash.com/photo-1599206614622-d7dae04bb031?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Baked Garlic Mussels",
          note: "Plump ocean mussels baked with aromatic garlic butter and melted cheese",
          price: "$7.75",
          tag: "buttery, savory, and rich",
          image:
            "https://images.unsplash.com/photo-1618055301293-494ab4c71f9f?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Black Pepper Shredded Beef Crispy Noodles",
          note: "Tender strips of beef in spicy black pepper sauce over a bed of crunchy fried noodles",
          price: "$21.75",
          tag: "savory, crunchy, and peppery",
          image:
            "https://images.unsplash.com/photo-1520689656391-66b6dd7f0ec6?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
    {
      name: "Drinks & Beverages",
      items: [
        {
          name: "Hot / Iced Milk Tea",
          note: "Smooth, intensely brewed traditional Hong Kong black tea blended with rich condensed milk.",
          price: "$8.00",
          tag: "Popular",
          image:
            "https://images.unsplash.com/photo-1620360289473-bfafadc16c57?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Smoky BBQ Pasta",
          note: "Beef chunks, smoked BBQ sauce, bell peppers",
          price: "Rs 1,150",
          tag: "New",
          image:
            "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Honey Lemon Tea",
          note: "Refreshing black tea steeped with fresh lemon slices and a touch of sweet honey",
          price: "$4.00",
          tag: "Popular",
          image:
            "https://images.unsplash.com/photo-1592099759599-24b131b8e824?auto=format&fit=crop&w=900&q=80",
        },
      ],
    },
  ],
};

// Placeholder gallery slots — swap `image` for real photos of the
// shop, the grill, and plated food.
export const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    caption: "Fresh off the grill",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
    caption: "Loaded, not just topped",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    caption: "Late-night regulars",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
    caption: "Smash, don\u2019t press",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?auto=format&fit=crop&w=900&q=80",
    caption: "Drive-through ready",
  },
  {
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
    caption: "Packed for delivery",
  },
];

// Real reviews as given from the Google Business listing.
export const reviews = [
  {
    name: "A1455HHJK3 Asdrftgyjuj",
    meta: "5 months ago",
    rating: 5,
    text: "You can tell a lot about a cafe by their fried rice, and this is clearly top-tier. Every grain looks perfectly coated, and that side of borscht/stew is the ultimate soul-warming pairing. A classic Hong Kong-style cafe vibe done exactly right..",
  },
  {
    name: "Venus Chui",
    meta: "8 months ago",
    rating: 4,
    text: "Staff are friendly, the environment is clean, and the menu has a wide variety of food and drink options. Dish portions are a good size and delicious. While the hot beverages are served in smaller cups, this is characteristic of Hong Kong teahouses we've ordered milk tea, coffee with tea and Horlicks.",
    breakdown: { Food: 4, Service: 4, Atmosphere: 3 },
  },
];

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];
