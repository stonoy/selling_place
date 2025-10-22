const productsArray = [
  {
    title: "Royal Enfield Classic 350",
    description: "2019 model, 22,000 km, Stealth Black edition.",
    price: 145000,
    images: ["https://picsum.photos/seed/re1/400/300", "https://picsum.photos/seed/re2/400/300"],
    category: "Vehicles",
    type: "Motorbike",
    location: "Bangalore, Karnataka",
    isSold: false
  },
  {
    title: "HP Spectre x360",
    description: "13.5-inch, Intel i7 12th Gen, 16GB RAM, 1TB SSD.",
    price: 125000,
    images: ["https://picsum.photos/seed/hp1/400/300", "https://picsum.photos/seed/hp2/400/300"],
    category: "Electronics",
    type: "Laptop",
    location: "Chennai, Tamil Nadu",
    isSold: false
  },
  {
    title: "Sofa Set 5-Seater",
    description: "L-shaped, grey fabric, with 3-year warranty.",
    price: 35000,
    images: ["https://picsum.photos/seed/sofa1/400/300", "https://picsum.photos/seed/sofa2/400/300"],
    category: "Furniture",
    type: "Sofa",
    location: "Indore, Madhya Pradesh",
    isSold: false
  },
  {
    title: "Samsung Galaxy Watch 5",
    description: "Bluetooth + LTE, 44mm, Silver color.",
    price: 22000,
    images: ["https://picsum.photos/seed/watch1/400/300", "https://picsum.photos/seed/watch2/400/300"],
    category: "Electronics",
    type: "Smartwatch",
    location: "Surat, Gujarat",
    isSold: false
  },
  {
    title: "Maruti Suzuki Baleno",
    description: "2020 model, Petrol, 18,000 km, Blue color.",
    price: 690000,
    images: ["https://picsum.photos/seed/baleno1/400/300", "https://picsum.photos/seed/baleno2/400/300"],
    category: "Vehicles",
    type: "Car",
    location: "Delhi, Delhi",
    isSold: false
  },
  {
    title: "Dining Chair Set of 4",
    description: "Solid wood, cushioned seats, brown finish.",
    price: 12000,
    images: ["https://picsum.photos/seed/chair1/400/300", "https://picsum.photos/seed/chair2/400/300"],
    category: "Furniture",
    type: "Chair",
    location: "Nagpur, Maharashtra",
    isSold: false
  },
  {
    title: "Lenovo Legion 5 Pro",
    description: "Ryzen 7 6800H, RTX 3070, 16GB RAM, 1TB SSD.",
    price: 135000,
    images: ["https://picsum.photos/seed/legion1/400/300", "https://picsum.photos/seed/legion2/400/300"],
    category: "Electronics",
    type: "Laptop",
    location: "Chandigarh, Punjab",
    isSold: false
  },
  {
    title: "Whirlpool Washing Machine",
    description: "7.5kg, top load, fully automatic.",
    price: 22000,
    images: ["https://picsum.photos/seed/wm1/400/300", "https://picsum.photos/seed/wm2/400/300"],
    category: "Home Appliances",
    type: "Washing Machine",
    location: "Bhopal, Madhya Pradesh",
    isSold: false
  },
  {
    title: "Apple MacBook Air M2",
    description: "13-inch, 8GB RAM, 512GB SSD, Space Grey.",
    price: 118000,
    images: ["https://picsum.photos/seed/airm2a/400/300", "https://picsum.photos/seed/airm2b/400/300"],
    category: "Electronics",
    type: "Laptop",
    location: "Mumbai, Maharashtra",
    isSold: false
  },
  {
    title: "KTM Duke 390",
    description: "2021 model, 15,000 km, Orange color.",
    price: 210000,
    images: ["https://picsum.photos/seed/duke1/400/300", "https://picsum.photos/seed/duke2/400/300"],
    category: "Vehicles",
    type: "Motorbike",
    location: "Kochi, Kerala",
    isSold: false
  },
  {
    title: "Sony PlayStation 5",
    description: "Disk edition, 825GB SSD, comes with 2 controllers.",
    price: 55000,
    images: ["https://picsum.photos/seed/ps51/400/300", "https://picsum.photos/seed/ps52/400/300"],
    category: "Electronics",
    type: "Gaming Console",
    location: "Hyderabad, Telangana",
    isSold: false
  },
  {
    title: "Honda Activa 6G",
    description: "2021 model, 8,500 km driven, grey color.",
    price: 72000,
    images: ["https://picsum.photos/seed/activa1/400/300", "https://picsum.photos/seed/activa2/400/300"],
    category: "Vehicles",
    type: "Scooter",
    location: "Lucknow, Uttar Pradesh",
    isSold: false
  },
  {
    title: "LG 55-inch OLED TV",
    description: "4K UHD, Smart TV, with Magic Remote.",
    price: 89000,
    images: ["https://picsum.photos/seed/lg1/400/300", "https://picsum.photos/seed/lg2/400/300"],
    category: "Electronics",
    type: "Television",
    location: "Pune, Maharashtra",
    isSold: false
  },
  {
    title: "Wooden Dining Table Set",
    description: "6-seater, teak wood, glass top.",
    price: 45000,
    images: ["https://picsum.photos/seed/dining1/400/300", "https://picsum.photos/seed/dining2/400/300"],
    category: "Furniture",
    type: "Dining Table",
    location: "Ranchi, Jharkhand",
    isSold: false
  },
  {
    title: "Canon EOS 90D",
    description: "24.1MP DSLR camera, 18-135mm lens included.",
    price: 78000,
    images: ["https://picsum.photos/seed/canon1/400/300", "https://picsum.photos/seed/canon2/400/300"],
    category: "Electronics",
    type: "Camera",
    location: "Jaipur, Rajasthan",
    isSold: false
  },
  {
    title: "Nike Air Jordan 1",
    description: "Size 9, Retro High OG, Chicago colorway.",
    price: 16000,
    images: ["https://picsum.photos/seed/jordan1/400/300", "https://picsum.photos/seed/jordan2/400/300"],
    category: "Fashion",
    type: "Shoes",
    location: "Ahmedabad, Gujarat",
    isSold: false
  },
  {
    title: "Apple iPad Pro 12.9",
    description: "M2 chip, 256GB storage, Silver color.",
    price: 105000,
    images: ["https://picsum.photos/seed/ipad1/400/300", "https://picsum.photos/seed/ipad2/400/300"],
    category: "Electronics",
    type: "Tablet",
    location: "Thane, Maharashtra",
    isSold: false
  },
  {
    title: "Hero Splendor Plus",
    description: "2018 model, 35,000 km, black color.",
    price: 45000,
    images: ["https://picsum.photos/seed/splendor1/400/300", "https://picsum.photos/seed/splendor2/400/300"],
    category: "Vehicles",
    type: "Motorbike",
    location: "Varanasi, Uttar Pradesh",
    isSold: false
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    description: "12GB RAM, 512GB storage, Phantom Black.",
    price: 115000,
    images: ["https://picsum.photos/seed/s23u1/400/300", "https://picsum.photos/seed/s23u2/400/300"],
    category: "Electronics",
    type: "Mobile",
    location: "Delhi, Delhi",
    isSold: false
  },
  {
    title: "Refrigerator LG Double Door",
    description: "Frost-free, 360L, convertible design.",
    price: 39000,
    images: ["https://picsum.photos/seed/fridge1/400/300", "https://picsum.photos/seed/fridge2/400/300"],
    category: "Home Appliances",
    type: "Refrigerator",
    location: "Kolkata, West Bengal",
    isSold: false
  },
  {
    title: "Apple Watch Series 9",
    description: "GPS + Cellular, 45mm, Midnight Aluminum Case.",
    price: 38000,
    images: ["https://picsum.photos/seed/watch1/400/300", "https://picsum.photos/seed/watch2/400/300"],
    category: "Electronics",
    type: "Wearable",
    location: "Surat, Gujarat",
    isSold: false
  },
  {
    title: "HP Omen Gaming Laptop",
    description: "Ryzen 7, RTX 3070, 16GB RAM, 1TB SSD.",
    price: 125000,
    images: ["https://picsum.photos/seed/hp1/400/300", "https://picsum.photos/seed/hp2/400/300"],
    category: "Electronics",
    type: "Laptop",
    location: "Indore, Madhya Pradesh",
    isSold: false
  },
  {
    title: "Maruti Swift Dzire",
    description: "2019 model, 45,000 km, diesel, white color.",
    price: 525000,
    images: ["https://picsum.photos/seed/swift1/400/300", "https://picsum.photos/seed/swift2/400/300"],
    category: "Vehicles",
    type: "Car",
    location: "Nagpur, Maharashtra",
    isSold: false
  },
  {
    title: "Tissot Men’s Chronograph Watch",
    description: "Swiss made, sapphire crystal, original box included.",
    price: 45000,
    images: ["https://picsum.photos/seed/tissot1/400/300", "https://picsum.photos/seed/tissot2/400/300"],
    category: "Fashion",
    type: "Watch",
    location: "Chandigarh, Punjab",
    isSold: false
  },
  {
    title: "Wooden King Size Bed",
    description: "Solid Sheesham wood with side storage drawers.",
    price: 32000,
    images: ["https://picsum.photos/seed/bed1/400/300", "https://picsum.photos/seed/bed2/400/300"],
    category: "Furniture",
    type: "Bed",
    location: "Patna, Bihar",
    isSold: false
  },
  {
    title: "Whirlpool Washing Machine",
    description: "7kg, fully automatic, top load, white.",
    price: 14000,
    images: ["https://picsum.photos/seed/wm1/400/300", "https://picsum.photos/seed/wm2/400/300"],
    category: "Home Appliances",
    type: "Washing Machine",
    location: "Kanpur, Uttar Pradesh",
    isSold: false
  },
  {
    title: "Adidas Ultraboost",
    description: "Running shoes, size 10, triple black.",
    price: 9000,
    images: ["https://picsum.photos/seed/adidas1/400/300", "https://picsum.photos/seed/adidas2/400/300"],
    category: "Fashion",
    type: "Shoes",
    location: "Bhopal, Madhya Pradesh",
    isSold: false
  },
  {
    title: "Dell Ultrasharp Monitor",
    description: "27-inch, 4K UHD, adjustable stand.",
    price: 27000,
    images: ["https://picsum.photos/seed/dell1/400/300", "https://picsum.photos/seed/dell2/400/300"],
    category: "Electronics",
    type: "Monitor",
    location: "Kochi, Kerala",
    isSold: false
  },
  {
    title: "Yamaha FZ V3",
    description: "2022 model, red color, 12,000 km driven.",
    price: 110000,
    images: ["https://picsum.photos/seed/yamaha1/400/300", "https://picsum.photos/seed/yamaha2/400/300"],
    category: "Vehicles",
    type: "Motorbike",
    location: "Visakhapatnam, Andhra Pradesh",
    isSold: false
  },
  {
    title: "Samsung 1.5 Ton AC",
    description: "Split inverter AC, 5-star rating, copper condenser.",
    price: 35000,
    images: ["https://picsum.photos/seed/ac1/400/300", "https://picsum.photos/seed/ac2/400/300"],
    category: "Home Appliances",
    type: "Air Conditioner",
    location: "Vadodara, Gujarat",
    isSold: false
  },
  {
    title: "iPhone 14 Pro Max",
    description: "Brand new, 256GB, Space Black. Comes with warranty.",
    price: 95000,
    images: ["https://picsum.photos/seed/iphone1/400/300", "https://picsum.photos/seed/iphone2/400/300"],
    category: "Electronics",
    type: "Mobile",
    location: "Mumbai, Maharashtra",
    isSold: false
  },
  {
    title: "Samsung Galaxy S23 Ultra",
    description: "12GB RAM, 512GB storage, Phantom Black, excellent condition.",
    price: 78000,
    images: ["https://picsum.photos/seed/samsung1/400/300", "https://picsum.photos/seed/samsung2/400/300"],
    category: "Electronics",
    type: "Mobile",
    location: "Delhi, Delhi",
    isSold: false
  },
  {
    title: "MacBook Pro M2",
    description: "16-inch, 1TB SSD, Space Gray. Barely used.",
    price: 165000,
    images: ["https://picsum.photos/seed/macbook1/400/300", "https://picsum.photos/seed/macbook2/400/300"],
    category: "Electronics",
    type: "Laptop",
    location: "Bengaluru, Karnataka",
    isSold: false
  },
  {
    title: "Honda Activa 6G",
    description: "2023 model, 3,000 km driven, well maintained.",
    price: 72000,
    images: ["https://picsum.photos/seed/activa1/400/300", "https://picsum.photos/seed/activa2/400/300"],
    category: "Vehicles",
    type: "Scooter",
    location: "Pune, Maharashtra",
    isSold: false
  },
  {
    title: "Royal Enfield Classic 350",
    description: "BS6, Stealth Black, 2022 model, single owner.",
    price: 155000,
    images: ["https://picsum.photos/seed/re1/400/300", "https://picsum.photos/seed/re2/400/300"],
    category: "Vehicles",
    type: "Motorbike",
    location: "Chennai, Tamil Nadu",
    isSold: false
  },
  {
    title: "Sony Bravia 55-inch 4K TV",
    description: "Ultra HD Smart TV, HDR, WiFi. Hardly used.",
    price: 48000,
    images: ["https://picsum.photos/seed/sony1/400/300", "https://picsum.photos/seed/sony2/400/300"],
    category: "Electronics",
    type: "Television",
    location: "Hyderabad, Telangana",
    isSold: false
  },
  {
    title: "Wooden Dining Table Set",
    description: "6-seater, Sheesham wood, with cushioned chairs.",
    price: 25000,
    images: ["https://picsum.photos/seed/dining1/400/300", "https://picsum.photos/seed/dining2/400/300"],
    category: "Furniture",
    type: "Dining",
    location: "Ahmedabad, Gujarat",
    isSold: false
  },
  {
    title: "LG Refrigerator 340L",
    description: "Double door, frost-free, silver finish.",
    price: 22000,
    images: ["https://picsum.photos/seed/fridge1/400/300", "https://picsum.photos/seed/fridge2/400/300"],
    category: "Home Appliances",
    type: "Refrigerator",
    location: "Kolkata, West Bengal",
    isSold: false
  },
  {
    title: "Nike Air Jordan 1",
    description: "Original sneakers, size 9, barely worn.",
    price: 11000,
    images: ["https://picsum.photos/seed/jordan1/400/300", "https://picsum.photos/seed/jordan2/400/300"],
    category: "Fashion",
    type: "Shoes",
    location: "Lucknow, Uttar Pradesh",
    isSold: false
  },
  {
    title: "Canon EOS 90D DSLR",
    description: "24-70mm kit lens, used for professional shoots.",
    price: 72000,
    images: ["https://picsum.photos/seed/canon1/400/300", "https://picsum.photos/seed/canon2/400/300"],
    category: "Electronics",
    type: "Camera",
    location: "Jaipur, Rajasthan",
    isSold: false
  },
];

module.exports = productsArray;
