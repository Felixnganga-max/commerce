import beauty from "../assets/images/beauty.png";
import furniture from "../assets/images/furniture.png";
import shoe from "./images/shoe.jpg";
import iphones from "./images/iphones.jpg";
import supermarket from "./images/supermarket.jpg";
import screenlight from "./images/screenlight.avif";
import hoodie from "./images/hoodie.webp";
import fridge from "./images/fridge.avif";
import gaming from "./images/gaming.webp";
import phone from "./images/phone.webp";
import watch from "./images/watch.webp";
import wirebad from "./images/wirebad.webp";
import charger from "./images/charger.webp";
import valentine from "./images/valentine.png";
import lg from "./images/lg.png";
import sneakers from "./images/sneakers.png";
import forher from "./images/forher.png";
import beddingset from "./images/beddingset.png";
import kids from "./images/kids.jpg";
import laptop from "./images/laptop.png";
import seats from "./images/seat.jpg";
import airfyer from "./images/airfyer.webp";
import blender from "./images/blender.webp";
import espresso from "./images/espresso.avif";
import microwave from "./images/microwave.webp";
import robotvacuum from "./images/robotvacuum.webp";
import dress from "./images/dress.jpg";
import flannel from "./images/flannel.jpg";
import hoodiy from "./images/hoodie.jpg";
import tshirt from "./images/t-shirts.jpg";
import jacket from "./images/jacket.jpg";
import cards from "./images/cards.jpg";
import necklace from "./images/necklace.jpg";
import perfume from "./images/perfume.jpg";
import back from "./images/back.jpg";
import flowers from "./images/flowers.jpg";
import massage from "./images/massage.webp";
import skin from "./images/skin.webp";
import beard from "./images/beard.jpg";
import hair from "./images/hair.jpg";
import toothbrush from "./images/toothbrush.jpg";

const displayImages = {
  beauty,
  toothbrush,
  beard,
  skin,
  massage,
  hair,
  flowers,
  back,
  perfume,
  cards,
  necklace,
  dress,
  flannel,
  jacket,
  hoodiy,
  tshirt,
  blender,
  robotvacuum,
  espresso,
  microwave,
  airfyer,
  seats,
  kids,
  laptop,
  forher,
  beddingset,
  lg,
  shoe,
  furniture,
  iphones,
  supermarket,
  sneakers,
  fridge,
  screenlight,
  hoodie,
  valentine,
};

export default displayImages;

export const commerceItems = [
  // Electronics
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 49.99,
    description:
      "High-quality wireless earbuds with noise cancellation and long battery life.",
    category: "Electronics",
    image: wirebad,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    description:
      "Latest model smartphone with a high-resolution display and powerful processor.",
    category: "Electronics",
    image: phone,
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: 1299.99,
    description:
      "Powerful gaming laptop with high-end graphics and fast refresh rate display.",
    category: "Electronics",
    image: gaming,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199.99,
    description:
      "Feature-packed smartwatch with fitness tracking and customizable watch faces.",
    category: "Electronics",
    image: watch,
  },
  {
    id: 5,
    name: "Wireless Charger",
    price: 29.99,
    description: "Fast wireless charging pad compatible with multiple devices.",
    category: "Electronics",
    image: charger,
  },

  // Home Appliances
  {
    id: 6,
    name: "Air Fryer",
    price: 89.99,
    description:
      "Oil-free air fryer for healthier cooking with adjustable temperature control.",
    category: "Home Appliances",
    image: airfyer,
  },
  {
    id: 7,
    name: "Blender",
    price: 49.99,
    description:
      "High-speed blender perfect for smoothies and meal preparation.",
    category: "Home Appliances",
    image: blender,
  },
  {
    id: 8,
    name: "Microwave Oven",
    price: 129.99,
    description: "Compact microwave oven with multiple cooking presets.",
    category: "Home Appliances",
    image: microwave,
  },
  {
    id: 9,
    name: "Robot Vacuum",
    price: 249.99,
    description:
      "Smart robot vacuum with automatic cleaning and scheduling features.",
    category: "Home Appliances",
    image: robotvacuum,
  },
  {
    id: 10,
    name: "Espresso Machine",
    price: 199.99,
    description: "Professional-grade espresso machine for coffee lovers.",
    category: "Home Appliances",
    image: espresso,
  },

  // Clothes
  {
    id: 11,
    name: "Men’s Hoodie",
    price: 39.99,
    description:
      "Comfortable and stylish hoodie made from premium cotton blend.",
    category: "Clothes",
    image: hoodiy,
  },
  {
    id: 12,
    name: "Women’s Dress",
    price: 59.99,
    description: "Elegant evening dress perfect for special occasions.",
    category: "Clothes",
    image: dress,
  },
  {
    id: 13,
    name: "Flannel Shirt",
    price: 79.99,
    description: "Lightweight and durable running shoes for everyday training.",
    category: "Clothes",
    image: flannel,
  },
  {
    id: 14,
    name: "Quality T-Shirts",
    price: 99.99,
    description:
      "Insulated winter jacket designed to keep you warm in cold weather.",
    category: "Clothes",
    image: tshirt,
  },
  {
    id: 15,
    name: "Jackets",
    price: 19.99,
    description: "Stylish adjustable cap with breathable fabric.",
    category: "Clothes",
    image: jacket,
  },

  // Gifts
  {
    id: 16,
    name: "Cards",
    price: 299.99,
    description: "Premium stainless steel watch with elegant design.",
    category: "Gifts",
    image: cards,
  },
  {
    id: 17,
    name: "Scented Flowers Set",
    price: 24.99,
    description:
      "A set of beautifully scented candles to create a relaxing atmosphere.",
    category: "Gifts",
    image: flowers,
  },
  {
    id: 18,
    name: "Luxurious Necklace",
    price: 14.99,
    description: "Customizable coffee mug with name or message engraving.",
    category: "Gifts",
    image: necklace,
  },
  {
    id: 19,
    name: "Scented Perfume",
    price: 29.99,
    description: "Classic wooden photo frame perfect for displaying memories.",
    category: "Gifts",
    image: perfume,
  },
  {
    id: 20,
    name: "Back Scratcher",
    price: 50.0,
    description: "Digital gift card that can be used for various purchases.",
    category: "Gifts",
    image: back,
  },

  // Personal Care
  {
    id: 21,
    name: "Electric Toothbrush",
    price: 39.99,
    description:
      "Rechargeable electric toothbrush with multiple cleaning modes.",
    category: "Personal Care",
    image: toothbrush,
  },
  {
    id: 22,
    name: "Hair Straightener",
    price: 59.99,
    description:
      "Professional hair straightener with adjustable temperature settings.",
    category: "Personal Care",
    image: hair,
  },
  {
    id: 23,
    name: "Beard Grooming Kit",
    price: 34.99,
    description: "Complete beard grooming kit with trimmer, oil, and comb.",
    category: "Personal Care",
    image: beard,
  },
  {
    id: 24,
    name: "Skincare Set",
    price: 79.99,
    description:
      "Full skincare set including cleanser, moisturizer, and serum.",
    category: "Personal Care",
    image: skin,
  },
  {
    id: 25,
    name: "Massage Gun",
    price: 99.99,
    description: "Deep tissue massage gun for muscle relaxation and recovery.",
    category: "Personal Care",
    image: massage,
  },
];
