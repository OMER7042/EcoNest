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
  Beef: 27, // kg CO2e per kg
  Pork: 12, // kg CO2e per kg
  Dairy: 3, // kg CO2e per kg
  Poultry: 6, // kg CO2e per kg
  Fish: 5, // kg CO2e per kg
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
    info: "Composted",
    emission: 0.5,
  },
  {
    id: 2,
    title: "Dry Waste",
    img: "https://globalindiannetwork.com/wp-content/uploads/what-is-dry-waste.webp",
    info: "Ensured reuse or recycle",
    emission: 1.0,
  },
  {
    id: 3,
    title: "Electronic",
    img: "https://www.genevaenvironmentnetwork.org/wp-content/uploads/2020/09/ewaste-aspect-ratio-2000-1200-1024x614.jpg",
    info: "Refurbished or recycled",
    emission: 5,
  },
  {
    id: 4,
    title: "Clothes",
    img: "https://etimg.etb2bimg.com/photo/111625033.cms",
    info: "Donated or upcycled",
    emission: 3,
  },
  {
    id: 5,
    title: "Footwear",
    img: "https://s3-prod.utech-polyurethane.com/styles/800x600/s3/iStock%2C%20800%2C%20Web%2C%20footwear%2C%20waste%2C%20pile.jpeg",
    info: "Donated or recycled",
    emission: 3,
  },
  {
    id: 6,
    title: "Furniture",
    img: "https://giftguideonline.com.au/wp-content/uploads/2023/02/iStock-1456590290.jpg",
    info: "Donated or upcycled",
    emission: 10,
  },
  {
    id: 7,
    title: "Others",
    img: "https://www.jsremovals.co.uk/wp-content/uploads/2023/09/How-Much-Waste-UK-Produces.jpeg",
    info: "Recycled or repurposed",
    emission: 1,
  },
];
export const REMEDIATION_DATA = [
  {
    id: 1,
    img: "https://res.cloudinary.com/drt2tlz1j/images/f_auto,q_auto/v1675888910/fn1/global-government-tree-planting/global-government-tree-planting.jpg?_i=AA",
    title: "Tree Planting",
    info: "No of trees planted",
    sub: "trees",
    emission: 0.24,
  },
  {
    id: 2,
    img: "https://images.ctfassets.net/zr62mq1hhu5q/4LIRsaVj59Cb04TmnpFUE1/bda3d60dbfea83339589781157a93b05/Birds_eye__sunset_behind_solar_plant.jpg?fm=jpg&w=1400&h=980&q=85&fit=fill",
    title: "Solar Power",
    info: "No of solar panels installed",
    sub: "panels",
    emission: 0.5,
  },
];
export const TASKS = [
  {
    id: 1,
    title: "Use Natural Light During the Day, Switch Off at Night",
    img: "https://miro.medium.com/v2/resize:fit:1400/0*HJ9Rz9MCPJSjy_Id",
    points: 2,
    saved: 0.5,
    successTitle: "Bright idea!",
    successSubtitle:
      "Your energy-saving action today is lighting the way to a greener future!",
    info: "Using natural daylight reduces the need for artificial lighting, lowering electricity consumption and greenhouse gas emissions from power plants. Additionally, switching off lights at night prevents unnecessary energy waste, saving both money and resources.",
  },
  {
    id: 2,
    title: "Turn Off Electronics When Not in Use",
    img: "https://taraenergy.com/wp-content/uploads/2022/04/energy-vampires-electronics-examples-in-home.jpg",
    points: 3,
    saved: 1.2,
    info: "Many electronics consume power even when turned off, known as 'phantom load.' Unplugging or switching off devices prevents this waste, reducing energy consumption and lowering carbon emissions generated by electricity production.",
    successTitle: "Power down!",
    successSubtitle:
      "Your action to unplug electronics is a step toward a more sustainable future!",
  },
  {
    id: 3,
    title: "Unplug Chargers & Devices When Fully Charged",
    img: "https://www.sempersolaris.com/wp-content/uploads/does-unplugging-save-electric.jpg",
    points: 2,
    saved: 0.7,
    info: "Chargers left plugged in consume energy even when not in use. By unplugging them, you cut down unnecessary electricity use, reducing demand on power grids and lowering fossil fuel emissions.",
    successTitle: "Fully charged!",
    successSubtitle:
      "Your action to unplug chargers is a small step with a big impact on energy conservation!",
  },
  {
    id: 4,
    title: "Opt for a Shorter Shower (Under 5 Minutes)",
    img: "https://www.insidehook.com/wp-content/uploads/2020/08/hero-14.jpg?fit=1200%2C800",
    points: 4,
    saved: 2.0,
    info: "Shorter showers reduce water consumption, which in turn saves energy used for heating water. Water treatment and heating contribute significantly to carbon emissions, so using less helps reduce your footprint.",
    successTitle: "Shower power!",
    successSubtitle:
      "Your choice to take shorter showers is a refreshing step toward water conservation and sustainability!",
  },
  {
    id: 5,
    title: "Carry a Reusable Water Bottle Instead of Buying Plastic",
    img: "https://cdn.shopify.com/s/files/1/0551/8009/9722/files/my-borosil-stainless-steel-bottles-500ml-bliss-bottle-red-500-ml-32973736050826_53d0fa21-6e14-4123-a3c3-78bb631e974a_480x480.jpg?v=1716544560",
    points: 3,
    saved: 0.8,
    info: "Plastic bottles require significant energy to produce and contribute to pollution. Using a reusable bottle reduces plastic waste, conserves resources, and lowers emissions associated with plastic manufacturing.",
    successTitle: "Thirsty for change!",
    successSubtitle:
      "Your choice to use a reusable bottle is a refreshing step toward a cleaner planet!",
  },
  {
    id: 6,
    title: "Use Public Transport, Walk, or Bike Instead of Driving",
    img: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b03c4292e7a246109ce6b1f8465ff482.jpg",
    points: 5,
    saved: 3.5,
    info: "Cars emit large amounts of CO₂. Choosing public transport, biking, or walking reduces fuel consumption and air pollution, making a significant impact on your carbon footprint.",
    successTitle: "On the right track!",
    successSubtitle:
      "Your choice to use alternative transportation is a step toward cleaner air and a healthier planet!",
  },
  {
    id: 7,
    title: "Skip Meat for a Day (Try a Plant-Based Meal)",
    img: "https://eu-images.contentstack.com/v3/assets/bltcc046473819c9a19/blt4f2e410cabe53695/648590643837df9076d8c7bf/GettyImages-Meat.jpeg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale",
    points: 5,
    saved: 4.0,
    info: "Meat production is resource-intensive, requiring large amounts of water and emitting greenhouse gases. Eating plant-based meals reduces demand for meat, conserving resources and lowering emissions.",
    successTitle: "Plant power!",
    successSubtitle:
      "Your choice to enjoy a plant-based meal is a delicious step toward a more sustainable diet!",
  },
  {
    id: 8,
    title: "Avoid Single-Use Plastics (Use Cloth Bags & Metal Straws)",
    img: "https://img.freepik.com/free-photo/back-view-man-carrying-tote-bag_53876-96623.jpg",
    points: 3,
    saved: 1.5,
    info: "Single-use plastics contribute to pollution and take centuries to decompose. Switching to reusable alternatives reduces waste and decreases the demand for plastic production, which is energy-intensive.",
    successTitle: "Plastic-free hero!",
    successSubtitle:
      "Your choice to avoid single-use plastics is a step toward a cleaner environment and a healthier future!",
  },
  {
    id: 9,
    title: "Recycle Properly (Sort Waste Before Disposing)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/NEA_recycling_bins%2C_Orchard_Road.JPG/1200px-NEA_recycling_bins%2C_Orchard_Road.JPG",
    points: 4,
    saved: 2.2,
    info: "Recycling reduces landfill waste and lowers the need for raw materials, conserving resources and reducing emissions from manufacturing new products.",
    successTitle: "Recycling champion!",
    successSubtitle:
      "Your commitment to proper recycling is a valuable contribution to a more sustainable future!",
  },
  {
    id: 10,
    title: "Air-Dry Clothes Instead of Using a Dryer",
    img: "https://st.depositphotos.com/1063346/1364/i/450/depositphotos_13643724-stock-photo-primary-colored-t-shirts.jpg",
    points: 4,
    saved: 2.8,
    info: "Clothes dryers consume a lot of electricity. Air-drying clothes saves energy, reducing your carbon footprint while also extending the life of your garments.",
    successTitle: "Hang in there!",
    successSubtitle:
      "Your choice to air-dry clothes is a step toward a more sustainable lifestyle and a greener planet!",
  },
  {
    id: 11,
    title: "Use a Reusable Coffee Cup Instead of Disposable Ones",
    img: "https://ca.keepcup.com/media/wysiwyg/SEO_block/keepcup-04797.jpg-1.jpg",
    points: 3,
    saved: 1.0,
    info: "Disposable coffee cups contribute to landfill waste and require resources to produce. A reusable cup minimizes waste and lowers the environmental impact of single-use items.",
    successTitle: "Cup of change!",
    successSubtitle:
      "Your choice to use a reusable coffee cup is a small action with a big impact on waste reduction and sustainability!",
  },
  {
    id: 12,
    title: "Compost Food Scraps Instead of Throwing Them Away",
    img: "https://5.imimg.com/data5/YA/XW/NB/SELLER-54332421/city-compost-500x500.jpg",
    points: 5,
    saved: 3.0,
    info: "Composting food scraps reduces landfill waste and methane emissions while creating nutrient-rich soil that benefits plant growth and reduces reliance on chemical fertilizers.",
    successTitle: "Compost king/queen!",
    successSubtitle:
      "Your choice to compost food scraps is a valuable contribution to a healthier planet and a more sustainable future!",
  },
  {
    id: 13,
    title: "Reduce Water Waste by Fixing Leaky Taps",
    img: "https://guide-images.cdn.ifixit.com/igi/AYks5jBprcWL3WOc.medium",
    points: 4,
    saved: 2.5,
    info: "Leaky taps waste gallons of water daily, increasing energy use in water treatment. Fixing leaks conserves water, reducing strain on water supplies and lowering energy consumption.",
    successTitle: "Drip, drip, hooray!",
    successSubtitle:
      "Your action to fix leaky taps is a drop in the bucket toward water conservation and a greener future!",
  },
  {
    id: 14,
    title: "Buy Local & Seasonal Produce to Reduce Carbon Miles",
    img: "https://c8.alamy.com/comp/J7JRTD/fresh-fruits-and-vegetables-on-sale-at-the-curb-market-a-local-farmers-J7JRTD.jpg",
    points: 4,
    saved: 2.0,
    info: "Locally grown food requires less transportation, reducing emissions from fuel use. Seasonal produce also requires fewer resources to grow, making it a more sustainable choice.",
    successTitle: "Locally sourced hero!",
    successSubtitle:
      "Your choice to buy local and seasonal produce is a step toward a more sustainable diet and a healthier planet!",
  },
  {
    id: 15,
    title: "Use Eco-Friendly Cleaning Products",
    img: "https://res.cloudinary.com/drt2tlz1j/images/f_auto,q_auto/v1690263898/fn1/eco-friendly-cleaning-products/eco-friendly-cleaning-products.png?_i=AA",
    points: 3,
    saved: 1.2,
    info: "Conventional cleaning products contain harmful chemicals that pollute water sources. Eco-friendly alternatives use biodegradable ingredients, reducing environmental impact.",
    successTitle: "Clean and green!",
    successSubtitle:
      "Your choice to use eco-friendly cleaning products is a step toward a healthier home and a cleaner environment!",
  },
];

export const ACTIONS = [
  {
    id: 1,
    title: "Travel",
    subtitle: "by using lower emission vechicles",
    successTitle: "You are driving change!",
    successSubtitle:
      "Every journey counts. Your action toady makes you a true planet hero on the go!",
    image:
      "https://www.indianflavours.es/web/image/product.product/3433/image_1024/TRANSPORT%20COST?unique=3c0eff6",
  },
  {
    id: 2,
    title: "Energy",
    subtitle: "by reducing energy consumption",
    successTitle: "Keep up this energy!",
    successSubtitle:
      "Your enery-saving action today makes you a champion of change!",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/427/309/non_2x/alternative-energy-sources-concept-planet-earth-in-human-hands-with-wind-turbines-and-solar-panels-hand-drawing-isolated-on-white-background-illustration-renewable-green-energy-save-the-planet-vector.jpg",
  },
  {
    id: 3,
    title: "Food",
    subtitle: "by reducing consumption of high emission foods",
    successTitle: "Food for tought",
    successSubtitle:
      "You are what you eat!. Your action today will makes you a planet saver",
    image:
      "https://previews.123rf.com/images/magone/magone1709/magone170900029/85933237-breakfast-vegan-plate-for-healthy-eating-isolated-on-white-background-top-view.jpg",
  },
  {
    id: 4,
    title: "Waste",
    subtitle: "by reduce, reuse and recycle of waste",
    image: "https://m.media-amazon.com/images/I/81xVGwKdeoL.jpg",
    successTitle: "Waste not, want not!",
    successSubtitle:
      "Your efforts in reducing waste are clearing the path to a cleaner planet!",
  },
  {
    id: 5,
    title: "Remediation",
    subtitle: "by planting trees and cleaning up the environment",
    image:
      "https://thumbs.dreamstime.com/b/tree-white-background-no6-14621137.jpg",
    successTitle: "You are on the right track!",
    successSubtitle:
      "Your efforts in planting trees are helping the planet breathe easy!",
  },
];
