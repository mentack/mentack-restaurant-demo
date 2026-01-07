export const dishes = [
  // Starters
  {
    id: 1,
    category: 'starters',
    name: { en: 'Mediterranean Hummus', tr: 'Akdeniz Humusu' },
    description: { en: 'Creamy hummus with tahini, lemon, and a hint of garlic, served with warm pita.', tr: 'Tahin, limon ve sarımsak dokunuşlu kremsi humus, sıcak pide ile servis edilir.' },
    imageId: 'signature-dish-1',
    price: { en: '$12', tr: '₺250' }
  },
  {
    id: 2,
    category: 'starters',
    name: { en: 'Spicy Calamari', tr: 'Acılı Kalamar' },
    description: { en: 'Lightly fried calamari tossed in a spicy chili sauce.', tr: 'Hafifçe kızartılmış ve acı biber sosuyla harmanlanmış kalamar.' },
    imageId: 'gallery-1',
    price: { en: '$16', tr: '₺350' }
  },
  // Main Courses
  {
    id: 3,
    category: 'main-courses',
    name: { en: 'Grilled Ribeye Steak', tr: 'Izgara Antrikot' },
    description: { en: 'A 12oz ribeye steak grilled to perfection, served with asparagus and potato wedges.', tr: 'Mükemmel pişirilmiş 340gr antrikot, kuşkonmaz ve elma dilim patates ile.' },
    imageId: 'signature-dish-1',
    price: { en: '$38', tr: '₺950' }
  },
  {
    id: 4,
    category: 'main-courses',
    name: { en: 'Seafood Linguine', tr: 'Deniz Mahsullü Linguine' },
    description: { en: 'Linguine pasta with shrimp, mussels, and clams in a white wine tomato sauce.', tr: 'Karides, midye ve istiridye ile beyaz şaraplı domates soslu linguine makarna.' },
    imageId: 'signature-dish-2',
    price: { en: '$28', tr: '₺750' }
  },
  {
    id: 5,
    category: 'main-courses',
    name: { en: 'Chicken Parmigiana', tr: 'Piliç Parmigiana' },
    description: { en: 'Breaded chicken breast topped with marinara sauce and melted mozzarella.', tr: 'Marinara sosu ve eritilmiş mozzarella ile kaplanmış pane tavuk göğsü.' },
    imageId: 'category-mains',
    price: { en: '$24', tr: '₺680' }
  },
  // Desserts
  {
    id: 6,
    category: 'desserts',
    name: { en: 'Chocolate Lava Cake', tr: 'Çikolatalı Volkan Kek' },
    description: { en: 'Warm chocolate cake with a molten center, served with vanilla ice cream.', tr: 'Akışkan merkezli sıcak çikolatalı kek, vanilyalı dondurma ile servis edilir.' },
    imageId: 'signature-dish-3',
    price: { en: '$14', tr: '₺300' }
  },
  {
    id: 7,
    category: 'desserts',
    name: { en: 'Classic Tiramisu', tr: 'Klasik Tiramisu' },
    description: { en: 'Layers of coffee-soaked ladyfingers and creamy mascarpone.', tr: 'Kahveye batırılmış kedi dili bisküvileri ve kremsi mascarpone katmanları.' },
    imageId: 'category-desserts',
    price: { en: '$13', tr: '₺280' }
  },
  // Drinks
  {
    id: 8,
    category: 'drinks',
    name: { en: 'Signature Old Fashioned', tr: 'İmza Old Fashioned' },
    description: { en: 'A perfect blend of bourbon, bitters, and a hint of orange.', tr: 'Bourbon, bitter ve portakal dokunuşunun mükemmel bir karışımı.' },
    imageId: 'category-drinks',
    price: { en: '$18', tr: '₺450' }
  }
];

export const galleryImageIds = [
  'gallery-1',
  'gallery-2',
  'gallery-3',
  'gallery-4',
  'gallery-5',
  'gallery-6',
  'about-chef',
  'signature-dish-2'
];
