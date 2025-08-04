const sampleListings = [
  {
    title: "Forest Cabin Escape",
    description: "Cozy cabin nestled deep in the forest, perfect for a peaceful retreat.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3500,
    location: "Mussoorie",
    country: "India"
  },
  {
    title: "Lakeside Tent Camp",
    description: "Experience the tranquility of lakeside camping with breathtaking views.",
    image: "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1800,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Mountain View Cottage",
    description: "Charming cottage with panoramic views of the Himalayas.",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4200,
    location: "Manali",
    country: "India"
  },
  {
    title: "Desert Glamping Dome",
    description: "Luxury dome in the heart of the desert. Stargaze in style.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5200,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Beachfront Bamboo Hut",
    description: "Rustic bamboo hut just steps away from the beach.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2800,
    location: "Goa",
    country: "India"
  },
  {
    title: "Oceanfront Villa Retreat",
    description: "Stunning villa overlooking crystal-clear waters with a private pool.",
    image: "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 8500,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Modern Resort House",
    description: "Sleek luxury house with lush gardens and tranquil pool.",
    image: "https://plus.unsplash.com/premium_photo-1682377521630-8ca87f643f49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9200,
    location: "Gold Coast",
    country: "Australia"
  },
  {
    title: "Luxury Poolside Villa",
    description: "Private villa with pool and open seating area in tropical setting.",
    image: "https://plus.unsplash.com/premium_photo-1687960116228-13d383d20188?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9700,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Beachside Resort Villa",
    description: "Charming villa right on the beach with panoramic sea views.",
    image: "https://plus.unsplash.com/premium_photo-1687960116506-f31f84371838?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7500,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Countryside Farm Stay",
    description: "Peaceful farmhouse surrounded by green fields.",
    image: "https://plus.unsplash.com/premium_photo-1746430472661-40b094d680d2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3100,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Urban City Apartment",
    description: "Modern apartment located in the heart of the city.",
    image: "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Tropical Treehouse",
    description: "Unique stay among the treetops with lush views all around.",
    image: "https://plus.unsplash.com/premium_photo-1682377521724-ececd24a83b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4900,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Snowy Mountain Lodge",
    description: "Warm and rustic lodge in snowy mountain region.",
    image: "https://plus.unsplash.com/premium_photo-1748217392686-56e45fcaee65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    price: 6100,
    location: "Whistler",
    country: "Canada"
  },
  {
    title: "Riverfront Wooden Cabin",
    description: "Cozy wooden cabin with a serene river view.",
    image: "https://plus.unsplash.com/premium_photo-1687960116696-d1e38565140f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3300,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Hilltop Retreat",
    description: "Modern villa with breathtaking hilltop views.",
    image: "https://plus.unsplash.com/premium_photo-1682377521765-d5a6f0bfbe1f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 8700,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Historic Colonial Mansion",
    description: "Experience heritage and comfort in this vintage mansion.",
    image: "https://plus.unsplash.com/premium_photo-1682377521597-1d6e5a7ab8ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 10500,
    location: "Havana",
    country: "Cuba"
  },
  {
    title: "Island Overwater Bungalow",
    description: "Stay in an exotic overwater bungalow with private deck.",
    image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 11000,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Japanese Ryokan",
    description: "Traditional Japanese inn with tatami floors and hot spring bath.",
    image: "https://plus.unsplash.com/premium_photo-1723823037282-c004e4b1a194?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7200,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Alpine Chalet",
    description: "Authentic chalet with a fireplace and mountain views.",
    image: "https://plus.unsplash.com/premium_photo-1723823034538-7597ffd01909?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 8000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Eco Jungle Retreat",
    description: "Eco-friendly lodging in the midst of a jungle sanctuary.",
    image: "https://plus.unsplash.com/premium_photo-1675745329634-8c187fa18c00?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3600,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Scandinavian Cabin",
    description: "Minimalist wood cabin with lakeside views.",
    image: "https://plus.unsplash.com/premium_photo-1687960116777-914243ae4799?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500,
    location: "Oslo",
    country: "Norway"
  },
  {
    title: "Rustic Barn House",
    description: "Converted barn with open beams and countryside charm.",
    image: "https://plus.unsplash.com/premium_photo-1723489679424-938636b6b9bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5200,
    location: "Devon",
    country: "UK"
  },
  {
    title: "Treetop Bamboo House",
    description: "Handcrafted bamboo treehouse with open-air design.",
    image: "https://plus.unsplash.com/premium_photo-1748075588586-525c48d6dd03?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3900,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Secluded Forest Lodge",
    description: "Quiet retreat surrounded by pine forests.",
    image: "https://plus.unsplash.com/premium_photo-1748729621081-b0713af7e331?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3100,
    location: "Oregon",
    country: "USA"
  },
  {
    title: "Beach Shack Paradise",
    description: "Simple and serene beach shack with hammock and waves.",
    image: "https://plus.unsplash.com/premium_photo-1747326386378-e8325dd4b981?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2600,
    location: "Palolem",
    country: "India"
  },
  {
    title: "Vintage Garden Villa",
    description: "Charming villa with a blooming private garden.",
    image: "https://plus.unsplash.com/premium_photo-1733306523667-80d5e5668631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5300,
    location: "Nice",
    country: "France"
  },
  {
    title: "City Penthouse",
    description: "Luxurious penthouse apartment with skyline views.",
    image: "https://plus.unsplash.com/premium_photo-1748326208198-815e6fb7575d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9900,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Bohemian Studio",
    description: "Artistic studio apartment filled with character.",
    image: "https://plus.unsplash.com/premium_photo-1661883954124-f542bd113a02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4100,
    location: "Barcelona",
    country: "Spain"
  }
];

module.exports = { data: sampleListings };
