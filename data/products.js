// data/products.ts
const PRODUCTS = [
  {
    id: 'oat-bliss',
    name: 'Oat Bliss - Classic Oat cookies',
    short: 'Nutritious oat cookies, lightly sweetened, crunchy texture.',
    price: 199,
    image: '/assets/oat-bliss.png',
    category: 'Oat',
    tags: ['high-fiber','heart-friendly','gut-health'],
    details: {
      summary: `Oat cookies made with whole-grain oats and natural sweeteners — a fiber-rich snack for heart & gut health.`,
      ingredients: ['Whole-grain oats','Butter','Brown sugar','Baking powder','Salt'],
      nutritionHighlights: [
        'Rich in soluble fiber (beta-glucan)',
        'Good source of iron, magnesium, zinc, B vitamins'
      ],
      benefits: [
        'Supports heart health — may help lower cholesterol',
        'Better blood sugar control vs refined-grain snacks',
        'Promotes digestive regularity and gut microbiome health',
        'Helps with weight management by increasing fullness'
      ],
      brochureNote: `Content adapted from product brochure: oats support heart health, digestion, and are nutrient-dense.` // brochure copy used. :contentReference[oaicite:2]{index=2}
    }
  },
  {
    id: 'choco-chunk',
    name: 'Choco Chunk Crunch',
    short: 'Indulgent chocolate chunks with a crisp oat base.',
    price: 249,
    image: '/assets/choco-chunk.png',
    category: 'Chocolate',
    tags: ['indulgent','crispy'],
    details: { /* ... */ }
  },
  {
    id: 'butter-delight',
    name: 'Butter Delight',
    short: 'Classic buttery cookies, melt-in-mouth texture.',
    price: 179,
    image: '/assets/butter-delight.png',
    category: 'Classic',
    tags: ['buttery','soft'],
    details: { /* ... */ }
  }
];

export default PRODUCTS;
