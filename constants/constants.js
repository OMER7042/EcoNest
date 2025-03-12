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
