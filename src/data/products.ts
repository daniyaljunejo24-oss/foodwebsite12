export type Category = 'Burgers' | 'Pizza' | 'Pasta' | 'Starters' | 'Drinks' | 'Desserts';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: Category;
  image: string;
  tags: string[];
  rating: number;
  popular?: boolean;
}

export const categories: { name: Category; icon: string; description: string }[] = [
  { name: 'Burgers', icon: '🍔', description: 'Juicy, flame-grilled perfection' },
  { name: 'Pizza', icon: '🍕', description: 'Wood-fired Italian classics' },
  { name: 'Pasta', icon: '🍝', description: 'Fresh pasta, rich sauces' },
  { name: 'Starters', icon: '🥗', description: 'Small plates, big flavor' },
  { name: 'Drinks', icon: '🥤', description: 'Refreshing handcrafted beverages' },
  { name: 'Desserts', icon: '🍰', description: 'Sweet endings worth savoring' },
];

export const products: Product[] = [
  {
    id: 'classic-cheddar-burger',
    name: 'Classic Cheddar Burger',
    description: 'Flame-grilled beef patty, aged cheddar, caramelized onions, house sauce.',
    longDescription: 'Our signature burger features a half-pound of locally sourced, grass-fed beef flame-grilled to perfection. Topped with aged Vermont cheddar, slow-caramelized onions, crisp lettuce, ripe tomato, and our secret house sauce on a toasted brioche bun. Served with hand-cut fries.',
    price: 14.5,
    category: 'Burgers',
    image: 'https://images.pexels.com/photos/8305726/pexels-photo-8305726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Bestseller', 'Grass-fed'],
    rating: 4.9,
    popular: true,
  },
  {
    id: 'smash-double-burger',
    name: 'Smash Double Burger',
    description: 'Two smashed patties, American cheese, pickles, special sauce.',
    longDescription: 'Two thin beef patties smashed on the griddle for maximum crust, layered with melted American cheese, dill pickles, shredded lettuce, and our tangy special sauce. A double-decker of crispy, caramelized goodness on a soft potato bun.',
    price: 16.0,
    category: 'Burgers',
    image: 'https://images.pexels.com/photos/15476368/pexels-photo-15476368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Double', 'Crispy'],
    rating: 4.8,
    popular: true,
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    description: 'Buttermilk-fried chicken, slaw, pickles, spicy mayo.',
    longDescription: 'Free-range chicken thigh marinated in buttermilk for 24 hours, then hand-breaded and fried until golden and crackly. Layered with crunchy cabbage slaw, bread-and-butter pickles, and a swipe of spicy chipotle mayo on a brioche bun.',
    price: 15.0,
    category: 'Burgers',
    image: 'https://images.pexels.com/photos/17300434/pexels-photo-17300434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Crispy', 'Spicy'],
    rating: 4.7,
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'San Marzano tomato, fresh mozzarella, basil, olive oil.',
    longDescription: 'The classic that started it all. Our wood-fired Margherita features San Marzano tomato sauce, fresh mozzarella di bufala, hand-torn basil leaves, and a drizzle of extra-virgin olive oil on a 72-hour fermented sourdough crust. Simple, perfect, timeless.',
    price: 16.0,
    category: 'Pizza',
    image: 'https://images.pexels.com/photos/6223186/pexels-photo-6223186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Classic', 'Wood-fired'],
    rating: 4.9,
    popular: true,
  },
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    description: 'Double pepperoni, mozzarella, tomato, oregano.',
    longDescription: 'A generous layer of double-cut, naturally cured pepperoni over our house tomato sauce and whole-milk mozzarella. Finished with a sprinkle of dried oregano and a crispy, blistered crust. A crowd-pleaser that never goes out of style.',
    price: 17.5,
    category: 'Pizza',
    image: 'https://images.pexels.com/photos/31587831/pexels-photo-31587831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Bestseller'],
    rating: 4.8,
    popular: true,
  },
  {
    id: 'bbq-chicken-pizza',
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, red onion, cilantro, smoky BBQ sauce.',
    longDescription: 'Smoky and sweet. Our BBQ chicken pizza tops a thin crust with grilled chicken breast, thinly sliced red onion, fresh cilantro, and a generous swirl of house-made barbecue sauce. Finished with a blend of mozzarella and smoked gouda.',
    price: 18.0,
    category: 'Pizza',
    image: 'https://images.pexels.com/photos/33458049/pexels-photo-33458049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Smoky'],
    rating: 4.7,
  },
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    description: 'Guanciale, egg yolk, pecorino, black pepper.',
    longDescription: 'Authentic Roman carbonara made the traditional way. Tossed in a silky emulsion of egg yolk, grated pecorino romano, and crispy guanciale, finished with a generous crack of black pepper. No cream, just pure technique.',
    price: 15.0,
    category: 'Pasta',
    image: 'https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Authentic', 'Roman'],
    rating: 4.8,
    popular: true,
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    description: 'Spicy tomato, garlic, chili, parsley, pecorino.',
    longDescription: 'A fiery, soul-warming dish. Penne rigate tossed in a spicy tomato sauce with garlic, dried chili flakes, and a splash of olive oil. Finished with chopped parsley and a dusting of pecorino. Angry, in the best way.',
    price: 13.0,
    category: 'Pasta',
    image: 'https://images.pexels.com/photos/28936956/pexels-photo-28936956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Spicy'],
    rating: 4.6,
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Bacon Fries',
    description: 'Crispy fries, melted cheddar, bacon, scallions, sour cream.',
    longDescription: 'Hand-cut russet potatoes fried twice for ultimate crispness, then loaded with melted cheddar, crispy bacon bits, sliced scallions, and a dollop of sour cream. The ultimate shareable starter — if you are willing to share.',
    price: 9.5,
    category: 'Starters',
    image: 'https://images.pexels.com/photos/20535803/pexels-photo-20535803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Shareable'],
    rating: 4.7,
    popular: true,
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    description: 'Crispy wings, buffalo sauce, blue cheese dip, celery.',
    longDescription: 'Eight jumbo chicken wings fried until shatteringly crisp, then tossed in our house buffalo sauce made with aged hot sauce and butter. Served with a cool blue cheese dip and crisp celery sticks.',
    price: 12.0,
    category: 'Starters',
    image: 'https://images.pexels.com/photos/36782573/pexels-photo-36782573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Spicy', 'Shareable'],
    rating: 4.8,
  },
  {
    id: 'strawberry-lemonade',
    name: 'Strawberry Lemonade',
    description: 'Fresh strawberries, lemon, mint, lightly sweetened.',
    longDescription: 'A refreshing house-pressed lemonade blended with macerated fresh strawberries and a hint of mint. Lightly sweetened with raw cane sugar and served over crushed ice. The perfect balance of tart and sweet.',
    price: 6.0,
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/5609524/pexels-photo-5609524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Fresh', 'Cold'],
    rating: 4.7,
    popular: true,
  },
  {
    id: 'chocolate-milkshake',
    name: 'Chocolate Milkshake',
    description: 'Belgian chocolate, vanilla ice cream, whipped cream.',
    longDescription: 'A thick, indulgent milkshake made with rich Belgian chocolate and premium vanilla ice cream, blended until silky smooth. Topped with a mountain of fresh whipped cream and a dusting of cocoa. Served with a cherry on top.',
    price: 7.5,
    category: 'Drinks',
    image: 'https://images.pexels.com/photos/38178695/pexels-photo-38178695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Thick', 'Indulgent'],
    rating: 4.8,
  },
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    description: 'Espresso-soaked ladyfingers, mascarpone, cocoa.',
    longDescription: 'Layers of espresso-dipped ladyfingers nestled between clouds of airy mascarpone cream, dusted with bitter Dutch cocoa. Made fresh daily with free-range eggs and authentic Italian espresso. Light, boozy, and irresistible.',
    price: 8.5,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/34807010/pexels-photo-34807010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Bestseller', 'Italian'],
    rating: 4.9,
    popular: true,
  },
  {
    id: 'chocolate-lava-cake',
    name: 'Chocolate Lava Cake',
    description: 'Warm molten center, vanilla ice cream, berries.',
    longDescription: 'A warm, individual chocolate cake with a molten dark chocolate center that flows when you cut into it. Served with a scoop of Madagascar vanilla ice cream and fresh berries. The ultimate chocolate lover\'s dessert.',
    price: 9.0,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/27819688/pexels-photo-27819688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Warm', 'Molten'],
    rating: 4.9,
  },
  {
    id: 'cheesecake',
    name: 'Berry Cheesecake',
    description: 'New York style, berry compote, graham crust.',
    longDescription: 'A dense, creamy New York-style cheesecake on a buttery graham cracker crust, topped with a glossy mixed-berry compote and fresh mint. Silky, rich, and perfectly balanced. A timeless classic done right.',
    price: 8.0,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/38495630/pexels-photo-38495630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Creamy', 'Classic'],
    rating: 4.7,
  },
];

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Sarah Mitchell',
    role: 'Food Blogger',
    rating: 5,
    text: 'Urban Bites has completely redefined my expectations for casual dining. The Smash Double Burger is the best I have had in the city — every bite is a perfect balance of crispy, juicy, and savory.',
    avatar: 'SM',
  },
  {
    id: 'r2',
    name: 'James Okonkwo',
    role: 'Regular Guest',
    rating: 5,
    text: 'I come here every Friday with my family. The Margherita pizza is authentic, the service is warm, and the atmosphere feels like home. This is our go-to spot and it never disappoints.',
    avatar: 'JO',
  },
  {
    id: 'r3',
    name: 'Elena Rossi',
    role: 'Local Chef',
    rating: 5,
    text: 'As a chef myself, I am picky. The carbonara here is made the proper Roman way — no cream, just technique. The respect for ingredients is obvious in every dish that comes out of that kitchen.',
    avatar: 'ER',
  },
  {
    id: 'r4',
    name: 'Marcus Chen',
    role: 'Foodie',
    rating: 4,
    text: 'The chocolate lava cake alone is worth the trip. Warm, molten, and paired perfectly with vanilla ice cream. The whole menu is thoughtful and the vibe is always great.',
    avatar: 'MC',
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Food' | 'Interior' | 'Drinks' | 'Desserts';
  span?: 'wide' | 'tall' | 'large';
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.pexels.com/photos/8305726/pexels-photo-8305726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gourmet burger with cheese', category: 'Food', span: 'large' },
  { id: 'g2', src: 'https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Elegant restaurant interior', category: 'Interior', span: 'wide' },
  { id: 'g3', src: 'https://images.pexels.com/photos/36366519/pexels-photo-36366519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful cocktails', category: 'Drinks' },
  { id: 'g4', src: 'https://images.pexels.com/photos/5172006/pexels-photo-5172006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Tiramisu and chocolate desserts', category: 'Desserts' },
  { id: 'g5', src: 'https://images.pexels.com/photos/6223186/pexels-photo-6223186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Fresh Margherita pizza', category: 'Food', span: 'tall' },
  { id: 'g6', src: 'https://images.pexels.com/photos/28575445/pexels-photo-28575445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Warm restaurant seating area', category: 'Interior' },
  { id: 'g7', src: 'https://images.pexels.com/photos/5609524/pexels-photo-5609524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Strawberry lemonade', category: 'Drinks' },
  { id: 'g8', src: 'https://images.pexels.com/photos/34807010/pexels-photo-34807010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Tiramisu slice', category: 'Desserts' },
  { id: 'g9', src: 'https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Spaghetti carbonara', category: 'Food', span: 'wide' },
  { id: 'g10', src: 'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Romantic dinner table setup', category: 'Interior' },
  { id: 'g11', src: 'https://images.pexels.com/photos/38178695/pexels-photo-38178695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Chocolate milkshake', category: 'Drinks' },
  { id: 'g12', src: 'https://images.pexels.com/photos/27819688/pexels-photo-27819688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Chocolate lava cake', category: 'Desserts', span: 'tall' },
];

export const restaurantInfo = {
  name: 'Urban Bites',
  tagline: 'Good Food. Great Moments.',
  phone: '(555) 482-7700',
  email: 'hello@urbanbites.com',
  address: '142 Maplewood Avenue, Portland, OR 97201',
  hours: [
    { day: 'Monday – Thursday', time: '11:00 AM – 10:00 PM' },
    { day: 'Friday – Saturday', time: '11:00 AM – 12:00 AM' },
    { day: 'Sunday', time: '12:00 PM – 9:00 PM' },
  ],
  socials: {
    instagram: '#',
    facebook: '#',
    twitter: '#',
    youtube: '#',
  },
};

export const teamMembers = [
  {
    name: 'Marco Bellini',
    role: 'Executive Chef & Founder',
    bio: 'With 20 years in kitchens across Florence, New York, and Portland, Marco founded Urban Bites to bring bold, honest cooking to the neighborhood.',
    image: 'https://images.pexels.com/photos/19420186/pexels-photo-19420186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Priya Sharma',
    role: 'Head Pastry Chef',
    bio: 'Priya trained at Le Cordon Bleu and leads our dessert program, crafting everything from our daily tiramisu to seasonal pastry specials.',
    image: 'https://images.pexels.com/photos/26621714/pexels-photo-26621714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'David Thompson',
    role: 'General Manager',
    bio: 'David has spent 15 years building warm, welcoming restaurant teams. He makes sure every guest feels like family from the moment they walk in.',
    image: 'https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const heroImages = [
  'https://images.pexels.com/photos/8305726/pexels-photo-8305726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6223186/pexels-photo-6223186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
