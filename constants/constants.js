export const ECO_IMG_URL =
  "https://cdn3d.iconscout.com/3d/premium/thumb/earth-3d-icon-download-in-png-blend-fbx-gltf-file-formats--world-globe-global-ecology-space-pack-science-technology-icons-10896366.png?f=webp";
export const POINTS_IMG_URL =
  "https://cdn3d.iconscout.com/3d/premium/thumb/tea-leaf-3d-icon-download-in-png-blend-fbx-gltf-file-formats--leaves-relaxing-pack-food-drink-icons-9466149.png?f=webp";

const weeklyTips = [
  "🚯 Try a 'Plastic-Free Week' by avoiding single-use plastics.",
  "🌳 Plant a tree or support a reforestation project to give back to the planet.",
  "📚 Read or share an article about sustainability with a friend.",
  "🧃 Avoid buying bottled drinks—carry a reusable bottle instead.",
  "🍽 Eat locally sourced, seasonal foods to reduce carbon footprint.",
  "🛠 Repair broken items instead of discarding them—extend their life!",
  "👕 Repurpose old clothes into cleaning rags or donate them instead of throwing them away.",
  "🥕 Reduce food waste by meal prepping and using leftovers creatively.",
  "🧴 Upcycle glass jars for storage instead of buying plastic containers.",
  "🛍 Buy in bulk to reduce packaging waste and save money.",
  "🚲 Walk, bike, or use public transport at least 3 days this week to lower emissions.",
  "🛒 Choose sustainable brands that use eco-friendly packaging.",
  "💡 Switch to energy-efficient appliances and unplug devices when not in use.",
  "📦 Flatten and recycle cardboard boxes properly after use.",
  "🧼 Make homemade, chemical-free cleaning solutions using vinegar and baking soda.",
  "🚿 Reduce water waste by fixing leaks and taking shorter showers.",
  "🚮 Organize a neighborhood clean-up to remove litter and promote recycling.",
];

const dailyTips = [
  "♻️ Avoid plastic straws—carry a reusable one or sip directly.",
  "🛍 Always keep a cloth bag handy for shopping trips to avoid plastic bags.",
  "🌱 Compost fruit and veggie scraps instead of tossing them in the trash.",
  "🚿 Turn off the tap while brushing your teeth to save water.",
  "📦 Reuse delivery boxes for storage or DIY projects.",
  "🚮 Properly dispose of e-waste by taking old gadgets to a recycling center.",
  "💡 Switch off unnecessary lights and appliances when leaving a room.",
  "🥤 Bring your own reusable coffee cup to cafes instead of using disposable ones.",
  "🍎 Store food properly to prevent spoilage and reduce food waste.",
  "👕 Wash clothes in cold water and air-dry them to save energy.",
  "🚲 Choose walking or biking for short trips instead of driving.",
  "📝 Switch to digital notes instead of using paper.",
  "🧴 Refill and reuse containers instead of buying new ones.",
  "🛠 Repair broken items instead of discarding them.",
  "🥕 Eat more plant-based meals to reduce your carbon footprint.",
  "🚰 Use a water filter instead of buying bottled water.",
  "🎁 Wrap gifts in reusable fabric instead of disposable wrapping paper.",
  "🍂 Use fallen leaves as compost instead of throwing them away.",
  "📚 Borrow books from a library instead of buying new ones.",
  "💳 Support brands that prioritize sustainability and ethical production.",
  "🚯 Pick up and properly dispose of at least one piece of litter today.",
  "🍽 Avoid food waste by serving smaller portions and saving leftovers.",
  "🚘 Carpool with friends or use public transport to reduce emissions.",
  "🖨 Print only when absolutely necessary—go digital instead.",
  "💧 Collect rainwater to water your plants and reduce water waste.",
  "🌿 Grow herbs or small plants at home to improve air quality.",
  "📲 Unsubscribe from junk mail to reduce paper waste.",
  "🧺 Use wool dryer balls instead of disposable dryer sheets.",
  "🚪 Close doors and windows when the AC or heater is on to conserve energy.",
  "🗑 Sort your trash properly—make sure recyclables go in the right bin.",
  "🥡 Bring your own container for takeout instead of using plastic ones.",
];

export const getDailyTip = (tip) => {
  const today = new Date().getDate() % dailyTips.length;
  if (tip === 0) return dailyTips[today];

  return dailyTips[tip];
};

export const getWeeklyTip = () => {
  const weekNumber = Math.floor(new Date().getDate() / 7) % weeklyTips.length;
  return weeklyTips[weekNumber];
};
const CO2_EMISSIONS = {
  Bicycle: 0, // kg CO2 per km
  Feet: 0, // Walking also emits no CO2
  "Electric Car": 0.05, // Approximate value in kg CO2 per km
  Car: 0.21, // Average petrol car emissions per km
  Bus: 0.08, // Bus per passenger per km
  Train: 0.04, // Train per passenger per km
  Bike: 0.1, // Motorcycle emissions per km
  Carpool: 0.07, // Assuming 3 people share a car
  Flight: 0.25, // Per passenger per km
  "Didn't Travel": 0, // No emissions
};

export const TRAVEL_DATA = [
  {
    id: 1,
    title: "Bicycle",
    img: "https://media.post.rvohealth.io/wp-content/uploads/2024/04/Woman-Riding-Rented-Bicycle-In-A-City.-Cycling-and-smiling-1296x728-header.jpg",
    show: true,
    emission: CO2_EMISSIONS.Bicycle,
  },
  {
    id: 2,
    title: "Bus",
    img: "https://images.jdmagicbox.com/quickquotes/images_main/luxury-volvo-bus-on-hire-2223242540-k7ybbv15.jpg",
    show: true,
    emission: CO2_EMISSIONS.Bus,
  },
  {
    id: 3,
    title: "Car",
    img: "https://www.motortrend.com/uploads/sites/5/2014/10/2012-Honda-Accord-SE-sedan-front-three-quarter.jpg",
    show: true,
    emission: CO2_EMISSIONS.Car,
  },
  {
    id: 4,
    title: "Train",
    img: "https://eurasiantimes.com/wp-content/uploads/2020/10/BULLET-TRAIN-1.png",
    show: true,
    emission: CO2_EMISSIONS.Train,
  },
  {
    id: 5,
    title: "Bike",
    img: "https://cdn.shopify.com/s/files/1/0762/7194/3984/files/harley-davidson-for-blog.jpg?v=1700739672",
    show: true,
    emission: CO2_EMISSIONS.Bike,
  },
  {
    id: 6,
    title: "Electric Car",
    img: "https://www.frost.com/wp-content/uploads/2020/11/Electric-Car-1080x675.jpg",
    show: true,
    emission: CO2_EMISSIONS["Electric Car"],
  },
  {
    id: 7,
    title: "Carpool",
    img: "https://www.explore.com/img/gallery/carpooling-services-might-just-be-the-key-to-staying-on-budget-while-traveling-upgrade/carpooling-services-might-just-be-the-key-to-staying-on-budget-while-traveling-1696013866.jpg",
    show: true,
    emission: CO2_EMISSIONS.Carpool,
  },
  {
    id: 8,
    title: "Didn't Travel",
    img: "https://thenambypambyblog.com/wp-content/uploads/2020/08/man-taking-notes-in-front-of-computer-jpeg.jpeg",
    show: false,
    emission: CO2_EMISSIONS["Didn't Travel"],
  },
  {
    id: 9,
    title: "Feet",
    img: "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    show: false,
    emission: CO2_EMISSIONS.Feet,
  },
  {
    id: 10,
    title: "Flight",
    img: "https://bookonlineflights.weebly.com/uploads/1/3/7/2/137291490/flights_orig.jpg",
    show: true,
    emission: CO2_EMISSIONS.Flight,
  },
];
const ENERGY_CONSUMPTION = {
  AC: 2.5, // kWh per hour
  Fan: 0.075, // kWh per hour
  Heater: 1.5, // kWh per hour
  Lighting: 0.06, // kWh per LED bulb per hour
  "Water Heater": 3.0, // kWh per hour
  Refrigerator: 0.15, // kWh per hour
  Laundry: 0.5, // kWh per hour (varies by cycle)
  Dishwasher: 1.2, // kWh per cycle (avg per hour use)
  Oven: 2.0, // kWh per hour
  TV: 0.1, // kWh per hour
  Others: 0.5, // kWh per hour (approx for misc appliances)
};
export const CO2_EMISSION_FACTOR = 0.4; // kg CO2 per kWh (global avg for electricity generation)

export const ENERGY_DATA = [
  {
    id: 1,
    title: "AC",
    type: "hvac",
    img: "https://images.squarespace-cdn.com/content/v1/6376de9bc133a25c4badd51f/1720843086645-Q0MKEK3L4EUHCKFWB01F/Remote_Control_Adjusting_AC.jpg",
    info: "Switched off AC",
    emission: ENERGY_CONSUMPTION.AC,
  },
  {
    id: 2,
    title: "Fan",
    type: "hvac",
    img: "https://lastudio.co.in/wp-content/uploads/2024/11/Whimberl-Black.jpg",
    info: "Did not use Fan",
    emission: ENERGY_CONSUMPTION.Fan,
  },
  {
    id: 3,
    title: "Heater",
    type: "hvac",
    img: "https://t4.ftcdn.net/jpg/11/40/33/07/360_F_1140330726_KHdBrFrTaKklrqY1naWxII8I4maITO07.jpg",
    info: "Turned off Heater",
    emission: ENERGY_CONSUMPTION.Heater,
  },
  {
    id: 4,
    title: "Lighting",
    type: "lighting",
    img: "https://img.freepik.com/premium-photo/decorative-modern-light-bulb-room-incandescent-lamp_616001-4393.jpg",
    info: "Switched off lights",
    emission: ENERGY_CONSUMPTION.Lighting,
  },
  {
    id: 5,
    title: "Water Heater",
    type: "appliances",
    img: "https://economysolarsolutions.com/images/img/menu/electric.jpg",
    info: "Did not use Water Heater",
    emission: ENERGY_CONSUMPTION["Water Heater"],
  },
  {
    id: 6,
    title: "Refrigerator",
    type: "appliances",
    img: "https://www.sathya.store/img/product/Trzmd5hSl1nDfIrL.webp",
    info: "Switched off Refrigerator",
    emission: ENERGY_CONSUMPTION.Refrigerator,
  },
  {
    id: 7,
    title: "Laundry",
    type: "appliances",
    img: "https://w7.pngwing.com/pngs/39/324/png-transparent-washing-machines-lg-electronics-home-appliance-washing-machine-electronics-clothes-dryer-vacuum-cleaner.png",
    info: "Did not use Laundry",
    emission: ENERGY_CONSUMPTION.Laundry,
  },
  {
    id: 8,
    title: "Dishwasher",
    type: "appliances",
    img: "https://img.freepik.com/free-psd/dishwasher-isolated-transparent-background_191095-25400.jpg",
    info: "Did not use Dishwasher",
    emission: ENERGY_CONSUMPTION.Dishwasher,
  },
  {
    id: 9,
    title: "Oven",
    type: "appliances",
    img: "https://w7.pngwing.com/pngs/666/358/png-transparent-oven-barbecue-grill-baking-name-of-kin-end-large-capacity-oven-baking-kitchen-appliance-chicken.png",
    info: "Did not use Oven",
    emission: ENERGY_CONSUMPTION.Oven,
  },
  {
    id: 10,
    title: "TV",
    type: "appliances",
    img: "https://cdn.mos.cms.futurecdn.net/dm9qefzptw9gep3e33pFuK.jpg",
    info: "Switched off TV",
    emission: ENERGY_CONSUMPTION.TV,
  },
  {
    id: 11,
    title: "Others",
    type: "appliances",
    img: "https://i.pinimg.com/736x/46/f7/81/46f7815681f655b8cf50bbd6ab2af614.jpg",
    info: "Switched off other appliances",
    emission: ENERGY_CONSUMPTION.Others,
  },
];
const FOOD_EMISSIONS = {
  Beef: 27,    // kg CO2e per kg
  Pork: 12,    // kg CO2e per kg
  Dairy: 3,    // kg CO2e per kg
  Poultry: 6,  // kg CO2e per kg
  Fish: 5,     // kg CO2e per kg
};
 

export const FOOD_DATA = [
  {
    id: 1,
    title: "Poultry",
    img: "https://static01.nyt.com/images/2020/03/25/dining/18clark-roast-chicken/clark-roast-chicken-superJumbo-v4.jpg",
    emission: FOOD_EMISSIONS.Poultry,
  },
  {
    id: 2,
    title: "Fish",
    img: "https://feastwithsafiya.com/wp-content/uploads/2021/08/Baked-Indian-Masala-Tilapia-Fish.jpg",
    emission: FOOD_EMISSIONS.Fish,
  },
  {
    id: 3,
    title: "Pork",
    img: "https://recipes.pork.com.au/wp-content/uploads/sites/2/2024/05/Air-fryer-pork-loin-roast_Preview.jpg",
    emission: FOOD_EMISSIONS.Pork,
  },
  {
    id: 4,
    title: "Beef",
    img: "https://embed.widencdn.net/img/beef/gh6lzohosy/exact/Ridiculously%20Tasty%20Roast%20Beef%2002.tif?keep=c&u=7fueml",
    emission: FOOD_EMISSIONS.Beef,
  },
  {
    id: 5,
    title: "Dairy",
    img: "https://www.dairyfoods.com/ext/resources/DF/2022/June/GettyImages-911727186.jpg?1652887599",
    emission: FOOD_EMISSIONS.Dairy,
  },
];

export const WASTE_DATA = [
  {
    id: 1,
    title: "Wet Waste",
    img: "https://bincrusher.com/wp-content/uploads/2020/07/iStock-1057790090-1024x683.jpg",
    info:"Composted", 
    emission: 0.5,
  },
  {
    id: 2,
    title: "Dry Waste",
    img: "https://globalindiannetwork.com/wp-content/uploads/what-is-dry-waste.webp",
    info:"Ensured reuse or recycle",
    emission: 1.0,
  },
  {
    id: 3,
    title: "Electronic",
    img: "https://www.genevaenvironmentnetwork.org/wp-content/uploads/2020/09/ewaste-aspect-ratio-2000-1200-1024x614.jpg",
    info:"Refurbished or recycled",
    emission: 5,
  },
  {
    id: 4,
    title: "Clothes",
    img: "https://etimg.etb2bimg.com/photo/111625033.cms",
    info:"Donated or upcycled",
    emission: 3,
  },
  {
    id: 5,
    title: "Footwear",
    img: "https://s3-prod.utech-polyurethane.com/styles/800x600/s3/iStock%2C%20800%2C%20Web%2C%20footwear%2C%20waste%2C%20pile.jpeg",
    info:"Donated or recycled",
    emission: 3,

  },
  {
    id: 6,
    title: "Furniture",
    img: "https://giftguideonline.com.au/wp-content/uploads/2023/02/iStock-1456590290.jpg",
    info:"Donated or upcycled",
    emission: 10,
  },
  {
    id: 7,
    title: "Others",
    img: "https://www.jsremovals.co.uk/wp-content/uploads/2023/09/How-Much-Waste-UK-Produces.jpeg",
    info:"Recycled or repurposed",
    emission:1
  },
];
export const REMEDIATION_DATA = [
  {
    id: 1,
    img: "https://res.cloudinary.com/drt2tlz1j/images/f_auto,q_auto/v1675888910/fn1/global-government-tree-planting/global-government-tree-planting.jpg?_i=AA",
    title: "Tree Planting",
    info: "No of trees planted",
    sub: "trees",
    emission:0.24
  },
  {
    id: 2,
    img: "https://images.ctfassets.net/zr62mq1hhu5q/4LIRsaVj59Cb04TmnpFUE1/bda3d60dbfea83339589781157a93b05/Birds_eye__sunset_behind_solar_plant.jpg?fm=jpg&w=1400&h=980&q=85&fit=fill",
    title: "Solar Power",
    info: "No of solar panels installed",
    sub: "panels",
    emission:0.5
  },
];
