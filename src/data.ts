/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Review, SpecialOffer, GalleryItem } from './types';

// Map our custom generated images
export const IMAGES = {
  hero: '/src/assets/images/chow_box_hero_1782623619710.jpg',
  croissants: '/src/assets/images/chow_box_croissants_1782623634854.jpg',
  signatureCake: '/src/assets/images/chow_box_signature_cake_1782623648712.jpg',
  sourdough: '/src/assets/images/chow_box_artisan_sourdough_1782623662432.jpg',
};

export const CATEGORIES = [
  'Artisan Bread',
  'Fresh Loaves',
  'Croissants',
  'Danish Pastries',
  'Muffins',
  'Cookies',
  'Donuts',
  'Cakes',
  'Cupcakes',
  'Cheesecakes',
  'Brownies',
  'Tarts',
  'Sandwiches',
  'Coffee & Hot Drinks'
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Artisan Bread
  {
    id: 'ab1',
    name: 'Artisan Country Sourdough',
    description: 'Our signature 36-hour slow-fermented classic sourdough, with a dark, blistering, crackling crust and light, airy open-crumb interior.',
    category: 'Artisan Bread',
    price: 8.50,
    image: IMAGES.sourdough,
    isBestSeller: true,
    isVegan: true,
  },
  {
    id: 'ab2',
    name: 'Olive & Rosemary Ciabatta',
    description: 'Fluffy Italian slipper bread infused with fresh rosemary and aromatic Kalamata olives.',
    category: 'Artisan Bread',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    isVegan: true,
  },

  // 2. Fresh Loaves
  {
    id: 'fl1',
    name: 'Pillowy Brioche Loaf',
    description: 'Rich, golden-crumbed French bread made with generous quantities of pure Normandy butter and fresh local eggs.',
    category: 'Fresh Loaves',
    price: 9.00,
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
  },
  {
    id: 'fl2',
    name: 'Honey Whole Wheat Loaf',
    description: 'Wholesome, nutty, stone-ground whole wheat loaf sweetened with organic forest honey.',
    category: 'Fresh Loaves',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
  },

  // 3. Croissants
  {
    id: 'cr1',
    name: 'Classic Butter Croissant',
    description: 'A golden, flaky pastry masterpiece made with dozens of micro-thin layers of pure butter. Incredibly crispy outside, soft inside.',
    category: 'Croissants',
    price: 4.50,
    image: IMAGES.croissants,
    isBestSeller: true,
  },
  {
    id: 'cr2',
    name: 'Double-Baked Almond Croissant',
    description: 'Filled with velvety almond frangipane cream, re-baked to a crispy finish and topped with toasted almond flakes and powdered sugar.',
    category: 'Croissants',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cr3',
    name: 'Pain au Chocolat',
    description: 'Layers of delicate buttery puff pastry wrapped around rich dark Belgian chocolate rods.',
    category: 'Croissants',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600',
  },

  // 4. Danish Pastries
  {
    id: 'dp1',
    name: 'Vanilla Apricot Danish',
    description: 'Laminated pastry nest filled with rich Madagascar vanilla bean custard and sweet, vibrant glazed apricot halves.',
    category: 'Danish Pastries',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'dp2',
    name: 'Raspberry Cream Cheese Danish',
    description: 'Tangy fresh raspberries sitting on a velvety cloud of sweetened cream cheese, framed by crispy caramelized pastry.',
    category: 'Danish Pastries',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
  },

  // 5. Muffins
  {
    id: 'mf1',
    name: 'Wild Blueberry Streusel',
    description: 'Moist buttermilk muffin packed to the brim with wild blueberries and finished with a crunchy brown sugar crumble.',
    category: 'Muffins',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'mf2',
    name: 'Double Chocolate Fudge Muffin',
    description: 'Deep cocoa muffin loaded with premium dark chocolate chunks, creating a molten-like chocolate center when warmed.',
    category: 'Muffins',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1558961317-1911883a5522?auto=format&fit=crop&q=80&w=600',
  },

  // 6. Cookies
  {
    id: 'ck1',
    name: 'Salted Chocolate Chunk Cookie',
    description: 'Soft, chewy center with caramelized crispy edges, pools of dark chocolate, and a sprinkle of flaky Maldon sea salt.',
    category: 'Cookies',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
  },
  {
    id: 'ck2',
    name: 'Pistachio Cranberry Shortbread',
    description: 'Buttery, melt-in-your-mouth shortbread flecked with raw chopped pistachios and ruby-red dried cranberries.',
    category: 'Cookies',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1558961317-1911883a5522?auto=format&fit=crop&q=80&w=600',
    isNutFree: false,
  },

  // 7. Donuts
  {
    id: 'dn1',
    name: 'Vanilla Bean Glazed Donut',
    description: 'Feather-light raised brioche donut dipped in an aromatic glaze speckled with real vanilla bean seeds.',
    category: 'Donuts',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1530016555861-3d17a4285859?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'dn2',
    name: 'Salted Caramel Custard Donut',
    description: 'Artisan brioche donut stuffed with a silky, house-cooked salted caramel diplomat cream.',
    category: 'Donuts',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
  },

  // 8. Cakes
  {
    id: 'ca1',
    name: 'Chow Box Signature Cake',
    description: 'A masterpiece of dense, moist chocolate cake layered with rich Belgian dark chocolate ganache, adorned with fresh organic berries and delicate edible gold leaf flakes.',
    category: 'Cakes',
    price: 48.00,
    image: IMAGES.signatureCake,
    isBestSeller: true,
  },
  {
    id: 'ca2',
    name: 'Strawberries & Cream Chiffon',
    description: 'Extremely light, spongey vanilla chiffon cake filled with organic sliced strawberries and fresh, airy whipped chantilly cream.',
    category: 'Cakes',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600',
  },

  // 9. Cupcakes
  {
    id: 'cu1',
    name: 'Velvety Red Velvet Cupcake',
    description: 'Moist, light cocoa sponge with a gorgeous crimson color, piled high with a tangy, premium white chocolate cream cheese frosting.',
    category: 'Cupcakes',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cu2',
    name: 'Lemon Lavender Cupcake',
    description: 'Vibrant lemon zest cupcake infused with subtle culinary lavender buds, topped with silky house-cooked lemon curd buttercream.',
    category: 'Cupcakes',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600',
  },

  // 10. Cheesecakes
  {
    id: 'cc1',
    name: 'Classic New York Cherry',
    description: 'Incredibly dense, velvety cream cheese cake baked on a spiced graham cracker crust, blanketed in a bright cherry compote.',
    category: 'Cheesecakes',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cc2',
    name: 'Salted Caramel Macadamia Cheesecake',
    description: 'Smooth cream cheese base infused with homemade caramel, topped with roasted salted macadamia nuts and extra caramel drizzle.',
    category: 'Cheesecakes',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
  },

  // 11. Brownies
  {
    id: 'br1',
    name: 'Triple Chocolate Fudge Brownie',
    description: 'Dense, chewy chocolate brownie made with rich Dutch cocoa, loaded with dark, milk, and white chocolate chips.',
    category: 'Brownies',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'br2',
    name: 'Espresso Sea Salt Brownie',
    description: 'A deeply dark, espresso-infused fudge brownie that highlights the floral notes of cocoa, topped with coarse sea salt flakes.',
    category: 'Brownies',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=600',
  },

  // 12. Tarts
  {
    id: 'tt1',
    name: 'Toasted Meringue Lemon Tart',
    description: 'Crisp, sweet butter pastry shell filled with highly puckering fresh lemon curd and crowned with clouds of toasted Italian meringue.',
    category: 'Tarts',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
  },
  {
    id: 'tt2',
    name: 'Fresh Glazed Berry Tart',
    description: 'Sweet tart shell lined with a thin layer of dark chocolate, filled with smooth almond pastry cream and piled with seasonal berries.',
    category: 'Tarts',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600',
  },

  // 13. Sandwiches
  {
    id: 'sw1',
    name: 'Prosciutto & Fig Ciabatta',
    description: 'Thinly sliced cured prosciutto di Parma, house-made sweet fig jam, wild baby arugula, and double-cream brie cheese on warm toasted ciabatta.',
    category: 'Sandwiches',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
  },
  {
    id: 'sw2',
    name: 'Tuscan Caprese Sourdough',
    description: 'Heirloom tomato slices, fresh water buffalo mozzarella, thick organic basil pesto, and aged balsamic reduction on toasted country sourdough.',
    category: 'Sandwiches',
    price: 11.50,
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600',
  },

  // 14. Coffee & Hot Drinks
  {
    id: 'cf1',
    name: 'Signature Rose Cardamom Latte',
    description: 'Bold double-shot of organic espresso, steamed oat milk, infused with house-steeped organic rose petals and ground cardamom seeds.',
    category: 'Coffee & Hot Drinks',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
  },
  {
    id: 'cf2',
    name: 'Velvety Flat White',
    description: 'Rich, robust double espresso balanced perfectly with smooth, micro-foamed velvety milk.',
    category: 'Coffee & Hot Drinks',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'cf3',
    name: 'Ceremonial Japanese Matcha Latte',
    description: 'Finest Japanese stone-ground Uji matcha whisked to a froth and blended with creamy almond milk and a touch of organic honey.',
    category: 'Coffee & Hot Drinks',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Victoria Hawthorne',
    rating: 5,
    comment: 'The pastries here are a work of art! The croissants are always fresh, incredibly flaky, and transport me straight to Paris. The attention to detail is unmatched.',
    date: 'June 20, 2026',
    role: 'Local Food Critic',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'r2',
    name: 'Benjamin Harrison',
    rating: 5,
    comment: 'Chow Box crafted a stunning chocolate celebration cake for my daughter\'s birthday. It was elegant, tasted heavenly without being overly sweet, and everyone was asking where it came from.',
    date: 'June 14, 2026',
    role: 'Verified Customer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 'r3',
    name: 'Sophie Deveraux',
    rating: 5,
    comment: 'My absolute favorite bakery. I walk over every single morning just to grab their signature Rose Cardamom Latte and a warm country sourdough loaf. Absolute perfection.',
    date: 'May 28, 2026',
    role: 'Daily Regular',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'so1',
    title: 'Daily Fresh Deal',
    description: 'Get any freshly brewed coffee alongside a Butter Croissant or Danish pastry for a perfect morning start.',
    discountText: 'Save 25% Everyday',
    badge: 'Morning Ritual',
    code: 'FRESHSTART',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'so2',
    title: 'Weekend Dessert Feast',
    description: 'Assemble a custom box of any 4 signature slices, tarts, or cheesecakes for your family weekend gathering.',
    discountText: 'Flat $24 Only',
    badge: 'Weekend Special',
    code: 'SWEETWEEKEND',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'so3',
    title: 'Celebrate with Chow Box',
    description: 'Order your custom birthday or anniversary celebration cake 48 hours in advance and receive complimentary gourmet cupcakes.',
    discountText: '+ 4 Free Cupcakes',
    badge: 'Custom Cakes',
    code: 'CELEBRATE',
    image: IMAGES.signatureCake,
  },
  {
    id: 'so4',
    title: 'Afternoon Tea Picnic Box',
    description: 'A beautiful hamper with 2 sandwiches, 2 tarts, 2 cookies, and 2 bottles of cold brew, packed in a premium wooden carrier.',
    discountText: 'Special $32 Package',
    badge: 'Perfect Picnic',
    code: 'AFTERNOONTEA',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600',
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Crispy Traditional Sourdough',
    category: 'bread',
    image: IMAGES.sourdough,
  },
  {
    id: 'g2',
    title: 'Golden Laminations & Croissants',
    category: 'pastry',
    image: IMAGES.croissants,
  },
  {
    id: 'g3',
    title: 'Luxury Birthday Cake Design',
    category: 'cake',
    image: IMAGES.signatureCake,
  },
  {
    id: 'g4',
    title: 'Pistachio Cranberry Shortbreads',
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'g5',
    title: 'Chow Box Signature Espresso Bar',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g6',
    title: 'Our Warm, Cozy Cafe Seating',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'g7',
    title: 'Our Fluffy Glazed Yeast Donuts',
    category: 'donut',
    image: 'https://images.unsplash.com/photo-1530016555861-3d17a4285859?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'g8',
    title: 'Handcrafted Lemon Curd Tarts',
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'g9',
    title: 'Slow Fermentation & Dusting',
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'w1',
    title: 'Freshly Baked Daily',
    description: 'We bake at 4:00 AM every single day to guarantee that your morning bread and pastries are crispy, warm, and fresh.',
    icon: 'Sparkles',
  },
  {
    id: 'w2',
    title: 'Premium Ingredients',
    description: 'We source premium Normandy butter, stone-ground unbleached organic flour, and high-purity Belgian dark chocolates.',
    icon: 'Award',
  },
  {
    id: 'w3',
    title: 'Handmade Recipes',
    description: 'No industrial shortcuts or artificial stabilizers. Every fold, shape, and decoration is crafted carefully by hand.',
    icon: 'Heart',
  },
  {
    id: 'w4',
    title: 'Affordable Prices',
    description: 'High-end artisanal quality priced with respect for our neighborhood community so everyone can enjoy premium baking.',
    icon: 'Banknote',
  },
  {
    id: 'w5',
    title: 'Friendly Service',
    description: 'Our warm, hospitable baristas and bakers greet you by name and with a bright smile to start your day with comfort.',
    icon: 'Smile',
  },
  {
    id: 'w6',
    title: 'Hygienic Kitchen',
    description: 'We maintain a pristine, state-of-the-art open-view baking kitchen with rigorous sanitary standards for ultimate safety.',
    icon: 'ShieldCheck',
  },
  {
    id: 'w7',
    title: 'Custom Cakes',
    description: 'Collaborate directly with our master pastry chef to bring your dream celebration cake and flavors to spectacular life.',
    icon: 'Cake',
  },
  {
    id: 'w8',
    title: 'Fast Ordering',
    description: 'Skip the long morning queue with our easy, fast online pre-ordering widget and seamless WhatsApp integration.',
    icon: 'Zap',
  },
];

export const CONTACT_INFO = {
  address: '128 Gourmet Boulevard, Culinary District, CA 90210',
  phone: '+1 (555) 743-2253', // BREAD
  email: 'hello@chowboxbakery.com',
  whatsapp: '15557432253',
  googleMapsUrl: 'https://maps.google.com/maps?q=128%20Gourmet%20Boulevard,%20Culinary%20District&t=&z=13&ie=UTF8&iwloc=&output=embed',
  hours: [
    { days: 'Monday – Friday', time: '6:30 AM – 7:30 PM' },
    { days: 'Saturday', time: '7:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '7:30 AM – 5:00 PM' }
  ],
  socials: {
    instagram: 'https://instagram.com/chowboxbakery',
    facebook: 'https://facebook.com/chowboxbakery',
    pinterest: 'https://pinterest.com/chowboxbakery',
    twitter: 'https://twitter.com/chowboxbakery',
  }
};
