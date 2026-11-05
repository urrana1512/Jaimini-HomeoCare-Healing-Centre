import { CrystalProduct, CrystalCategory, ChakraType, IntentionType, ZodiacType } from "@/types/crystal-ecommerce";

export const crystalCategories: { id: CrystalCategory; name: string; description: string; icon: string; count: number }[] = [
  {
    id: "bracelets",
    name: "Healing Bracelets",
    description: "Reiki-attuned natural gemstone bead bracelets for 24/7 personal auric shielding.",
    icon: "Sparkles",
    count: 6
  },
  {
    id: "raw-stones",
    name: "Raw Crystals & Minerals",
    description: "Uncut, unpolished earth crystals carrying pure, unfiltered vibrational energy.",
    icon: "Mountain",
    count: 3
  },
  {
    id: "towers-wands",
    name: "Towers & Generators",
    description: "Precision-cut gemstone obelisks designed to direct and amplify energy grids.",
    icon: "Zap",
    count: 3
  },
  {
    id: "healing-sets",
    name: "Curated Healing Sets",
    description: "Complete chakra alignment and mindfulness kits cleansed under full-moon cycles.",
    icon: "Package",
    count: 2
  },
  {
    id: "clusters-geodes",
    name: "Clusters & Geodes",
    description: "Multi-point crystal formations ideal for home cleansing and space protection.",
    icon: "Sun",
    count: 2
  }
];

export const allChakras: ChakraType[] = [
  "Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown", "All Chakras"
];

export const allIntentions: IntentionType[] = [
  "Wealth & Abundance",
  "Calm & Stress Relief",
  "Protection & Shielding",
  "Love & Emotional Healing",
  "Focus & Mental Clarity",
  "Spiritual Awakening"
];

export const allZodiacs: ZodiacType[] = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "All Signs"
];

export const crystalProducts: CrystalProduct[] = [
  {
    id: "prod-1",
    name: "Natural Citrine Abundance Bracelet",
    slug: "natural-citrine-abundance-bracelet",
    category: "bracelets",
    categoryName: "Healing Bracelets",
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewCount: 48,
    inStock: true,
    stockCount: 15,
    isBestseller: true,
    isFeatured: true,
    discountPercentage: 24,
    images: [
      "/images/services/crystal_bracelets.png",
      "https://images.unsplash.com/photo-1611591475152-473523dd66c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    ],
    thumbnail: "/images/services/crystal_bracelets.png",
    shortDesc: "Known as the Merchant's Stone, natural Citrine attracts abundance, success, and joyful creative vitality.",
    description: "Hand-threaded with Grade-A natural Brazilian Citrine beads (8mm). Cleansed under full moon cycles and individually activated by Dr. Niyati Rana with Usui Reiki Master wealth and solar plexus attunement symbols.",
    healingBenefits: [
      "Activates the Solar Plexus & Sacral Chakras to inspire confidence",
      "Attracts professional clarity, financial flow, and prosperous opportunities",
      "Dissolves stagnant lethargy and revitalizes mental stamina",
      "Natural stone that does not hold negative energetic charges"
    ],
    chakra: ["Solar Plexus", "Sacral"],
    intention: ["Wealth & Abundance", "Focus & Mental Clarity"],
    zodiac: ["Leo", "Gemini", "Aries", "Libra"],
    beadSize: "8mm",
    weight: "28g",
    dimensions: "Standard Elastic Stretch (fits 6.5 - 7.5 inch wrists)",
    origin: "Minas Gerais, Brazil",
    reikiAttuned: true,
    cleansingMethod: "Moonlight or Selenite recharging. Safe with indirect sunlight for 10 minutes.",
    affirmation: "I am open to unlimited abundance, prosperity, and radiant joy.",
    reviews: [
      {
        id: "rev-1",
        author: "Rohit Verma",
        rating: 5,
        date: "May 14, 2026",
        title: "Remarkable shift in daily focus and confidence!",
        comment: "Received the Citrine bracelet along with Dr. Niyati's personalized energization note. The bead quality is top-notch and genuine natural stone.",
        verified: true,
        location: "Mumbai, India"
      },
      {
        id: "rev-2",
        author: "Sneha Patel",
        rating: 5,
        date: "June 02, 2026",
        title: "Beautiful shine and calming energy",
        comment: "I wear this every day to work. The finish is smooth, comfortable on the wrist, and doesn't pinch skin.",
        verified: true,
        location: "Ahmedabad, India"
      }
    ]
  },
  {
    id: "prod-2",
    name: "Deep Purple Amethyst Peace Bracelet",
    slug: "deep-purple-amethyst-peace-bracelet",
    category: "bracelets",
    categoryName: "Healing Bracelets",
    price: 1199,
    originalPrice: 1499,
    rating: 4.9,
    reviewCount: 62,
    inStock: true,
    stockCount: 22,
    isBestseller: true,
    isFeatured: true,
    discountPercentage: 20,
    images: [
      "/images/services/crystal_bracelets.png",
      "https://images.unsplash.com/photo-1611591475152-473523dd66c8?auto=format&fit=crop&w=800&q=80"
    ],
    thumbnail: "/images/services/crystal_bracelets.png",
    shortDesc: "The master stone of tranquil sleep, emotional balance, and intuitive Third-Eye awakening.",
    description: "Deep violet Uruguayan Amethyst polished beads designed to calm hyperactive mental thoughts and soothe nervous system tension. Programmed with Lama Fera and Reiki peace frequencies.",
    healingBenefits: [
      "Calms racing thoughts and promotes deep, uninterrupted sleep",
      "Shields your aura from electromagnetic stress and heavy workplace environments",
      "Stimulates Third Eye intuitive clarity and meditative absorption",
      "Eases headaches and tension stemming from emotional overload"
    ],
    chakra: ["Third Eye", "Crown"],
    intention: ["Calm & Stress Relief", "Spiritual Awakening"],
    zodiac: ["Pisces", "Aquarius", "Virgo", "Sagittarius"],
    beadSize: "8mm",
    weight: "26g",
    dimensions: "Standard Stretch (fits 6.5 - 7.5 inch wrists)",
    origin: "Artigas, Uruguay",
    reikiAttuned: true,
    cleansingMethod: "Overnight Selenite slab or full moonlight. Avoid prolonged direct harsh sunlight.",
    affirmation: "My mind is peaceful, calm, and grounded in serene clarity.",
    reviews: [
      {
        id: "rev-3",
        author: "Meera Nair",
        rating: 5,
        date: "April 28, 2026",
        title: "Sleep has improved dramatically",
        comment: "I used to wake up anxious in the middle of the night. Wearing this has brought a steady sense of calm.",
        verified: true,
        location: "Bengaluru, India"
      }
    ]
  },
  {
    id: "prod-3",
    name: "Raw Black Tourmaline Auric Shield",
    slug: "raw-black-tourmaline-auric-shield",
    category: "raw-stones",
    categoryName: "Raw Crystals & Minerals",
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviewCount: 34,
    inStock: true,
    stockCount: 18,
    isBestseller: true,
    discountPercentage: 25,
    images: [
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
      "/images/services/crystal_bracelets.png"
    ],
    thumbnail: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The premier psychic protection mineral, transmuting negative frequencies and grounding the root chakra.",
    description: "Natural unpolished Black Tourmaline chunk with rich striated texture. Essential for placing near home doorways, office work desks, or bedside tables to deflect dense psychic interference and Wi-Fi EMF smog.",
    healingBenefits: [
      "Grounds scattered bodily energy into the earth's baseline frequency",
      "Creates an impenetrable auric shield against envy and negative projections",
      "Absorbs electromagnetic frequencies from laptops and cell towers",
      "Anchors emotional steadiness during times of high family or work stress"
    ],
    chakra: ["Root"],
    intention: ["Protection & Shielding", "Calm & Stress Relief"],
    zodiac: ["Capricorn", "Scorpio", "Libra"],
    weight: "150g - 200g (Approx)",
    dimensions: "6cm x 4cm x 4cm",
    origin: "Madagascar",
    reikiAttuned: true,
    cleansingMethod: "Dry sea-salt bowl or sage smoke clearing once every 2 weeks.",
    affirmation: "I am safely protected, deeply rooted, and secure in my own power."
  },
  {
    id: "prod-4",
    name: "Selenite Cleansing & Harmonizing Tower",
    slug: "selenite-cleansing-harmonizing-tower",
    category: "towers-wands",
    categoryName: "Towers & Generators",
    price: 1499,
    originalPrice: 1899,
    rating: 5.0,
    reviewCount: 29,
    inStock: true,
    stockCount: 10,
    isFeatured: true,
    discountPercentage: 21,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      "/images/services/crystal_bracelets.png"
    ],
    thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    shortDesc: "High-vibration gypsum tower that constantly purifies room atmospheres and recharges your other crystals.",
    description: "Hand-carved skyscraper Selenite tower exhibiting ethereal moon-like luminescence. Selenite never needs cleansing and acts as a self-purifying beacon for home altars, meditation corners, and clinical spaces.",
    healingBenefits: [
      "Clears blocked stagnant air and heavy emotional residual grids in rooms",
      "Acts as a universal wireless charger for your crystal jewelry and stones",
      "Opens the Crown and Soul Star chakras for elevated spiritual connection",
      "Instills deep quietude during morning prayer and mindfulness sessions"
    ],
    chakra: ["Crown", "All Chakras"],
    intention: ["Spiritual Awakening", "Protection & Shielding", "Calm & Stress Relief"],
    zodiac: ["Cancer", "Taurus", "All Signs"],
    weight: "350g",
    dimensions: "Height: 15cm (6 inches)",
    origin: "Morocco",
    reikiAttuned: true,
    cleansingMethod: "Self-cleansing mineral. IMPORTANT: Do NOT expose to water as it dissolves.",
    affirmation: "Pure divine light flows through this space, transmuting all discord into harmony."
  },
  {
    id: "prod-5",
    name: "Madagascar Rose Quartz Love & Harmony Bracelet",
    slug: "madagascar-rose-quartz-love-bracelet",
    category: "bracelets",
    categoryName: "Healing Bracelets",
    price: 1099,
    originalPrice: 1399,
    rating: 4.9,
    reviewCount: 51,
    inStock: true,
    stockCount: 25,
    isBestseller: true,
    discountPercentage: 21,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
      "/images/services/crystal_bracelets.png"
    ],
    thumbnail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The quintessential heart healer, fostering self-worth, emotional compassion, and gentle relationship harmony.",
    description: "Translucent pink Madagascar Rose Quartz beads (8mm) attuned to the Anahata (Heart) chakra. Ideal for clearing past emotional grief and opening one's emotional field to unconditional kindness.",
    healingBenefits: [
      "Soothes heartbreak, relationship friction, and feelings of inadequacy",
      "Re-establishes loving self-compassion and gentle emotional resilience",
      "Encourages forgiveness, patient communication, and inner peace",
      "Promotes radiant feminine/maternal softness and nervous system ease"
    ],
    chakra: ["Heart"],
    intention: ["Love & Emotional Healing", "Calm & Stress Relief"],
    zodiac: ["Taurus", "Libra", "Cancer"],
    beadSize: "8mm",
    weight: "25g",
    dimensions: "Elastic Stretch (fits 6.5 - 7.5 inch wrists)",
    origin: "Madagascar",
    reikiAttuned: true,
    cleansingMethod: "Full moon exposure or running under cool natural spring water for 30 seconds.",
    affirmation: "My heart is open to giving and receiving pure, unconditional love."
  },
  {
    id: "prod-6",
    name: "7-Chakra Alignment Master Healing Box",
    slug: "7-chakra-alignment-master-healing-box",
    category: "healing-sets",
    categoryName: "Curated Healing Sets",
    price: 2499,
    originalPrice: 3299,
    rating: 5.0,
    reviewCount: 38,
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isBestseller: true,
    discountPercentage: 24,
    images: [
      "/images/services/chakra_healing_system.png",
      "/images/services/crystal_bracelets.png",
      "https://images.unsplash.com/photo-1611591475152-473523dd66c8?auto=format&fit=crop&w=800&q=80"
    ],
    thumbnail: "/images/services/chakra_healing_system.png",
    shortDesc: "Complete 7-gemstone body grid set with Selenite clearing wand and velvet ritual sacred pouch.",
    description: "Includes 7 hand-selected raw and polished minerals (Red Jasper, Carnelian, Tiger's Eye, Green Aventurine, Sodalite, Amethyst, Clear Quartz) individually tuned to the 7 bodily vortexes, packaged in a handcrafted wooden sacred geometry box.",
    healingBenefits: [
      "Provides full spectrum diagnostic and balancing therapy for all 7 chakras",
      "Includes step-by-step layout guide by Dr. Niyati Rana for home meditation",
      "Rebalances hormonal, nervous, and subtle auric layers simultaneously",
      "Makes a profound, life-changing wellness gift for loved ones"
    ],
    chakra: ["All Chakras"],
    intention: ["Spiritual Awakening", "Calm & Stress Relief", "Focus & Mental Clarity"],
    zodiac: ["All Signs"],
    weight: "650g",
    dimensions: "Box: 18cm x 12cm x 6cm",
    origin: "India & Brazil",
    reikiAttuned: true,
    cleansingMethod: "Use the included Selenite charging wand to clear all 7 stones weekly.",
    affirmation: "All seven energy centers in my body are balanced, aligned, and radiant with health."
  },
  {
    id: "prod-7",
    name: "Raw Golden Pyrite Manifestation Cluster",
    slug: "raw-golden-pyrite-manifestation-cluster",
    category: "clusters-geodes",
    categoryName: "Clusters & Geodes",
    price: 1399,
    originalPrice: 1799,
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    stockCount: 12,
    discountPercentage: 22,
    images: [
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
      "/images/services/crystal_bracelets.png"
    ],
    thumbnail: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Known as Fool's Gold, Pyrite is a potent catalyst for ambitious willpower, protection, and business prosperity.",
    description: "Crystalline cubic Peruvian Pyrite cluster with dazzling metallic golden facets. Placed in cash boxes, office desks, or study corners to fuel proactive motivation and shield against energy vampires.",
    healingBenefits: [
      "Stimulates the intellect and strengthens memory and cognitive recall",
      "Protects against environmental pollutants and parasitic emotional interactions",
      "Activates bold leadership and financial discipline",
      "Bolsters physical vitality and overcomes feelings of fatigue"
    ],
    chakra: ["Solar Plexus"],
    intention: ["Wealth & Abundance", "Protection & Shielding", "Focus & Mental Clarity"],
    zodiac: ["Leo", "Capricorn", "Aries"],
    weight: "220g - 280g",
    dimensions: "7cm x 5cm x 4cm",
    origin: "Huanzala Mine, Peru",
    reikiAttuned: true,
    cleansingMethod: "Selenite or incense smoke. Keep strictly away from water to avoid oxidation.",
    affirmation: "I possess the power, drive, and resilience to manifest my highest goals."
  },
  {
    id: "prod-8",
    name: "Tiger's Eye Courage & Decision Bracelet",
    slug: "tigers-eye-courage-decision-bracelet",
    category: "bracelets",
    categoryName: "Healing Bracelets",
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviewCount: 39,
    inStock: true,
    stockCount: 20,
    discountPercentage: 23,
    images: [
      "/images/services/crystal_bracelets.png",
      "https://images.unsplash.com/photo-1611591475152-473523dd66c8?auto=format&fit=crop&w=800&q=80"
    ],
    thumbnail: "/images/services/crystal_bracelets.png",
    shortDesc: "Chatoyant golden-brown beads imparting fearless courage, emotional balance, and pragmatic decision-making.",
    description: "High-grade African Golden Tiger's Eye beads displaying silky chatoyancy. Helps ground emotions while sharpening strategic perspective during high-stakes business and life transitions.",
    healingBenefits: [
      "Harmonizes the Root, Sacral, and Solar Plexus chakras",
      "Disperses indecision, self-doubt, and procrastination",
      "Serves as a reliable travel talisman for physical security",
      "Stabilizes wild mood swings and impulsive reactions"
    ],
    chakra: ["Root", "Solar Plexus"],
    intention: ["Focus & Mental Clarity", "Protection & Shielding", "Wealth & Abundance"],
    zodiac: ["Capricorn", "Leo", "Gemini"],
    beadSize: "8mm",
    weight: "27g",
    dimensions: "Elastic Stretch (fits 6.5 - 7.5 inch wrists)",
    origin: "South Africa",
    reikiAttuned: true,
    cleansingMethod: "Earth burial for 2 hours, or Selenite plate overnight.",
    affirmation: "I walk forward with courage, clarity, and unshakeable confidence."
  },
  {
    id: "prod-9",
    name: "Natural Green Aventurine Growth Obelisk",
    slug: "green-aventurine-growth-obelisk",
    category: "towers-wands",
    categoryName: "Towers & Generators",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviewCount: 19,
    inStock: true,
    stockCount: 14,
    discountPercentage: 19,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      "/images/services/crystal_bracelets.png"
    ],
    thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The Stone of Opportunity, directing positive growth frequencies and luck directly to heart-centered projects.",
    description: "6-sided polished Green Aventurine crystal generator point. Its emerald-green mica inclusions attract favorable circumstances in business investments and personal endeavors.",
    healingBenefits: [
      "Stimulates optimism, enthusiasm for life, and joyful perseverance",
      "Heals old emotional wounds trapped in the heart meridian",
      "Enhances creativity and pragmatic problem-solving",
      "Aligns with natural plant growth and vitality"
    ],
    chakra: ["Heart"],
    intention: ["Wealth & Abundance", "Love & Emotional Healing"],
    zodiac: ["Virgo", "Taurus"],
    weight: "180g",
    dimensions: "Height: 10cm x 3cm",
    origin: "India",
    reikiAttuned: true,
    cleansingMethod: "Moonlight or sage smoke cleansing.",
    affirmation: "I welcome new opportunities, growth, and abundant blessings."
  },
  {
    id: "prod-10",
    name: "Lapis Lazuli Wisdom & Truth Bracelet",
    slug: "lapis-lazuli-wisdom-truth-bracelet",
    category: "bracelets",
    categoryName: "Healing Bracelets",
    price: 1399,
    originalPrice: 1799,
    rating: 4.9,
    reviewCount: 44,
    inStock: true,
    stockCount: 16,
    isFeatured: true,
    discountPercentage: 22,
    images: [
      "/images/services/crystal_bracelets.png",
      "https://images.unsplash.com/photo-1611591475152-473523dd66c8?auto=format&fit=crop&w=800&q=80"
    ],
    thumbnail: "/images/services/crystal_bracelets.png",
    shortDesc: "Ancient royal stone of truth, authentic voice expression, and higher intellectual clarity.",
    description: "Deep celestial blue Afghan Lapis Lazuli with shimmering golden pyrite specks. Helps public speakers, teachers, therapists, and leaders speak their truth with calm authority.",
    healingBenefits: [
      "Unblocks the Throat chakra for clear, confident articulation",
      "Inspires deep philosophical insights and truth-seeking",
      "Dispels repressed anger, social anxiety, and communication blocks",
      "Fosters profound inner self-awareness and integrity"
    ],
    chakra: ["Throat", "Third Eye"],
    intention: ["Focus & Mental Clarity", "Spiritual Awakening"],
    zodiac: ["Sagittarius", "Libra", "Pisces"],
    beadSize: "8mm",
    weight: "26g",
    dimensions: "Elastic Stretch (fits 6.5 - 7.5 inch wrists)",
    origin: "Badakhshan, Afghanistan",
    reikiAttuned: true,
    cleansingMethod: "Selenite plate or soft moonlight. Avoid chemical cleaners.",
    affirmation: "I speak my truth with calm confidence and authentic grace."
  },
  {
    id: "prod-11",
    name: "Raw Clear Quartz Master Energy Geode",
    slug: "raw-clear-quartz-master-energy-geode",
    category: "clusters-geodes",
    categoryName: "Clusters & Geodes",
    price: 1899,
    originalPrice: 2499,
    rating: 5.0,
    reviewCount: 17,
    inStock: true,
    stockCount: 6,
    isBestseller: true,
    discountPercentage: 24,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      "/images/services/crystal_bracelets.png"
    ],
    thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    shortDesc: "The Master Healer of the mineral kingdom, amplifying any intention and purifying all chakra layers.",
    description: "Spectacular sparkling raw Clear Quartz cluster. Can be programmed with any specific healing intention, prayer, or home affirmation to beam positive energy continuously.",
    healingBenefits: [
      "Amplifies the energy of all surrounding crystals by up to 10x",
      "Balances and revitalizes the physical, mental, and emotional planes",
      "Stimulates the immune system and brings the entire body into homeostasis",
      "Filters out negative distractions for deep laser-focused meditation"
    ],
    chakra: ["All Chakras", "Crown"],
    intention: ["Spiritual Awakening", "Focus & Mental Clarity", "Protection & Shielding"],
    zodiac: ["All Signs"],
    weight: "380g",
    dimensions: "10cm x 8cm x 5cm",
    origin: "Himalayas, India",
    reikiAttuned: true,
    cleansingMethod: "Any natural method: running water, salt, smoke, moonlight, or sunlight.",
    affirmation: "I am filled with clear, pure, divine light and infinite potential."
  },
  {
    id: "prod-12",
    name: "Black Obsidian Protection Wand",
    slug: "black-obsidian-protection-wand",
    category: "towers-wands",
    categoryName: "Towers & Generators",
    price: 1199,
    originalPrice: 1499,
    rating: 4.8,
    reviewCount: 26,
    inStock: true,
    stockCount: 11,
    discountPercentage: 20,
    images: [
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
      "/images/services/crystal_bracelets.png"
    ],
    thumbnail: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Volcanic glass extraction wand designed to sever negative energetic cords and unblock root stagnation.",
    description: "Mirror-polished Mexican Black Obsidian point. Used in Lama Fera energy sessions and home clearing rituals to dissolve emotional hooks, past relationship cords, and dark thought patterns.",
    healingBenefits: [
      "Cuts energetic cords attached to past toxic relationships",
      "Eliminates fear and uncovers the root subconscious blocks",
      "Shields against negative psychic projections and draining environments",
      "Forces deep shadow integration for authentic emotional liberation"
    ],
    chakra: ["Root"],
    intention: ["Protection & Shielding", "Love & Emotional Healing"],
    zodiac: ["Scorpio", "Sagittarius", "Capricorn"],
    weight: "160g",
    dimensions: "Height: 11cm x 3cm",
    origin: "Mexico",
    reikiAttuned: true,
    cleansingMethod: "Smudge with sage or Palo Santo. Also cleansed under running water.",
    affirmation: "I release all cords and attachments that no longer serve my highest good."
  }
];
