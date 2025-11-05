// Plant info database (you can expand)
const plantData = {
  "Monstera": `Monstera Deliciosa (Swiss Cheese Plant)

Description:
A tropical indoor plant with large, split leaves that add a lush, modern touch to any space.

Light:
Bright, indirect sunlight. Avoid harsh direct rays.

Water:
Water once a week when top soil feels dry. Don't overwater.

Temperature & Humidity:
Prefers 18–30°C and high humidity. Mist leaves occasionally.

Soil:
Well-draining mix with peat and perlite.

Fertilizer:
Feed monthly in spring and summer.

Common Problems:
Yellow leaves = too much water; Brown tips = low humidity.

Benefits:
Purifies air and enhances home décor.

Care Tip:
Wipe leaves often and support with a moss pole.`,
  "Pothos": `🌿 Pothos (Epipremnum aureum)

Description:
A fast-growing vine with heart-shaped leaves, known for bringing good luck and fresh air.

Light:
Bright, indirect sunlight. Tolerates low light too.

Water:
Water once a week or when soil feels dry. Avoid overwatering.

Temperature & Humidity:
Thrives in 20–35°C and medium humidity.

Soil:
Well-draining potting mix with compost.

Fertilizer:
Feed every 4–6 weeks during the growing season.

Common Problems:
Yellow leaves = overwatering; pale leaves = low light.

Benefits:
Purifies air and adds positivity to space.

Care Tip:
Trim regularly to keep it bushy and healthy.`,
  "Jade Plant": `🌿 Jade Plant (Crassula ovata)

Description:
A popular succulent with thick, glossy green leaves symbolizing luck and prosperity.

Light:
Needs bright, indirect sunlight; can tolerate some direct sun.

Water:
Water every 2–3 weeks. Let soil dry completely between waterings.

Temperature & Humidity:
Prefers 18–30°C and low to moderate humidity.

Soil:
Well-draining cactus or succulent mix.

Fertilizer:
Feed monthly in spring and summer with succulent fertilizer.

Common Problems:
Soft or wrinkled leaves = over or under watering.

Benefits:
Brings positive energy and purifies air.

Care Tip:
Avoid overwatering; ensure pot has good drainage.`,
  "Prayer Plant": `🌿 Prayer Plant (Maranta leuconeura)

Description:
A colorful indoor plant with patterned leaves that fold up at night like praying hands.

Light:
Bright, indirect sunlight. Avoid direct sun.

Water:
Keep soil slightly moist; water 1–2 times a week.

Temperature & Humidity:
Prefers 18–28°C and high humidity. Mist leaves often.

Soil:
Well-draining, rich potting mix.

Fertilizer:
Feed every 2–4 weeks in spring and summer.

Common Problems:
Brown leaf tips = dry air; yellow leaves = overwatering.

Benefits:
Beautiful foliage that adds calmness and color to homes.

Care Tip:
Clean leaves gently and keep away from cold drafts.`,
"Spider Plant": `Spider Plant (Chlorophytum comosum)

Description:
An easy-to-grow indoor plant with long, green-and-white striped leaves and baby offshoots.

Light:
Bright, indirect sunlight. Tolerates low light too.

Water:
Water once a week; let soil dry slightly between waterings.

Temperature & Humidity:
Thrives in 18–30°C with moderate humidity.

Soil:
Well-draining potting mix.

Fertilizer:
Feed every 2–4 weeks during spring and summer.

Common Problems:
Brown tips = fluoride in water or low humidity.

Benefits:
Excellent air purifier and easy to care for.

Care Tip:
Trim brown tips and repot yearly for fresh growth.`,
"Areca Palm" : `🌿 Areca Palm (Dypsis lutescens)

Description:
A graceful indoor palm with feathery green fronds that add a tropical touch to any space.

Light:
Bright, indirect sunlight. Avoid harsh direct rays.

Water:
Water 1–2 times a week; keep soil slightly moist, not soggy.

Temperature & Humidity:
Prefers 20–30°C and high humidity. Mist leaves regularly.

Soil:
Rich, well-draining potting mix.

Fertilizer:
Feed monthly during spring and summer with balanced fertilizer.

Common Problems:
Brown tips = dry air or underwatering.

Benefits:
Excellent air purifier and natural humidifier.

Care Tip:
Wipe leaves often and avoid overwatering.`,
"Rubber Plant" : `🌿 Rubber Plant (Ficus elastica)

Description:
A bold indoor plant with large, glossy leaves that give a modern, elegant look to any room.

Light:
Bright, indirect sunlight. Can handle some direct morning sun.

Water:
Water once a week; let top soil dry before watering again.

Temperature & Humidity:
Thrives in 20–30°C with moderate humidity.

Soil:
Well-draining potting mix with peat and perlite.

Fertilizer:
Feed every 4 weeks in spring and summer.

Common Problems:
Yellow leaves = overwatering; drooping = low light.

Benefits:
Purifies indoor air and adds rich greenery.

Care Tip:
Wipe leaves regularly to keep them shiny and dust-free.`,
"Boston Fern":`🌿 Boston Fern (Nephrolepis exaltata)

Description:
A lush fern with arching green fronds that adds a fresh, elegant touch indoors.

Light:
Bright, indirect light. Avoid direct sunlight.

Water:
Keep soil moist but not soggy. Water 2–3 times a week.

Temperature & Humidity:
Prefers 18–26°C and high humidity. Mist often.

Soil:
Rich, well-draining potting mix.

Fertilizer:
Feed every 4–6 weeks in growing season.

Common Problems:
Brown leaves = dry air or underwatering.

Benefits:
Excellent natural air purifier and humidity booster.

Care Tip:
Trim dry fronds and keep away from AC or heaters.`,
"Croton":`🌿 Croton Plant (Codiaeum variegatum)

Description:
A vibrant plant with bold, multicolored leaves that brighten any indoor or outdoor space.

Light:
Needs bright, indirect sunlight to maintain leaf color.

Water:
Water once or twice a week; keep soil slightly moist.

Temperature & Humidity:
Prefers 20–30°C and moderate to high humidity.

Soil:
Well-draining, rich potting mix.

Fertilizer:
Feed every 3–4 weeks in spring and summer.

Common Problems:
Leaf drop = sudden temperature change or low humidity.

Benefits:
Adds color and freshness to any décor.

Care Tip:
Wipe leaves regularly and avoid moving the plant too often.`,
"Oyster Plant":`🌿 Oyster Plant (Tradescantia spathacea)

Description:
A compact plant with striking green leaves on top and purple undersides, adding color and texture to any space.

Light:
Bright, indirect sunlight. Can tolerate partial shade.

Water:
Water once a week; let soil dry slightly between waterings.

Temperature & Humidity:
Thrives in 20–30°C and moderate humidity.

Soil:
Well-draining potting mix.

Fertilizer:
Feed every 4–6 weeks during spring and summer.

Common Problems:
Yellow leaves = overwatering; dull color = low light.

Benefits:
Low-maintenance and visually attractive foliage.

Care Tip:
Trim old leaves regularly to keep it looking fresh.`,
"Cactus":`🌵 Cactus (Cactaceae)

Description:
A hardy, low-maintenance succulent that stores water in its thick stems and thrives in dry conditions.

Light:
Needs plenty of bright, direct sunlight.

Water:
Water every 2–3 weeks; let soil dry completely before watering again.

Temperature & Humidity:
Prefers 18–35°C and low humidity.

Soil:
Sandy, well-draining cactus mix.

Fertilizer:
Feed once a month in spring and summer.

Common Problems:
Soft stems = overwatering; pale color = lack of sunlight.

Benefits:
Improves air quality and adds a modern, minimal look.

Care Tip:
Rotate occasionally for even growth and avoid overwatering.`,

  "Aloe Vera": `🌿 Aloe Vera (Aloe barbadensis miller)

Description:
A succulent plant with thick, fleshy leaves filled with soothing, medicinal gel.

Light:
Needs 6–8 hours of bright, indirect sunlight.

Water:
Water every 2–3 weeks; let soil dry completely between waterings.

Temperature & Humidity:
Prefers 18–30°C and dry conditions.

Soil:
Well-draining sandy or cactus mix.

Fertilizer:
Feed lightly twice a year during growing season.

Common Problems:
Soft leaves = overwatering; brown tips = too much sun.

Benefits:
Heals burns, improves skin, and purifies air.

Care Tip:
Water at the base – avoid wetting leaves.`,
  "Snake Plant": "Snake Plant purifies air. Thrives in low light, requires little water, very hardy.",
  "Tulsi": `🌿 Tulsi (Holy Basil - Ocimum tenuiflorum)

Description:
A sacred and aromatic plant known for its healing, spiritual, and air-purifying properties.

Light:
Needs 4–6 hours of direct sunlight daily.

Water:
Water every 1–2 days in summer; less in winter. Keep soil slightly moist.

Temperature & Humidity:
Thrives in 20–35°C with moderate humidity.

Soil:
Loamy, well-draining soil with organic compost.

Fertilizer:
Use organic compost once a month.

Common Problems:
Fungal infection if overwatered or waterlogged.

Benefits:
Boosts immunity, purifies air, and holds religious value.

Care Tip:
Pinch flower buds regularly to promote more leaf growth.`,
"Dragon Plant":`🌿 Dragon Plant (Dracaena marginata)

Description:
A stylish indoor plant with long, slender green leaves edged in red, perfect for homes and offices.

Light:
Bright, indirect sunlight; tolerates low light too.

Water:
Water once a week; let top soil dry between waterings.

Temperature & Humidity:
Thrives in 18–30°C with moderate humidity.

Soil:
Well-draining potting mix with peat and perlite.

Fertilizer:
Feed every 4–6 weeks in spring and summer.

Common Problems:
Brown leaf tips = fluoride in water or dry air.

Benefits:
Purifies air and adds an elegant, modern look.

Care Tip:
Wipe leaves and avoid overwatering.`,
"Bamboo Tree":`🎋 Bamboo Plant (Dracaena sanderiana / Lucky Bamboo)

Description:
A popular indoor plant symbolizing luck, peace, and prosperity. Known for its tall, green stalks and easy care.

Light:
Bright, indirect sunlight. Avoid direct sun.

Water:
If grown in water, change water every 7–10 days.
If in soil, water once a week to keep it slightly moist.

Temperature & Humidity:
Prefers 18–30°C and moderate humidity.

Soil:
Rich, well-draining potting mix (if planted in soil).

Fertilizer:
Feed monthly with mild liquid fertilizer.

Common Problems:
Yellow leaves = dirty water or too much fertilizer.

Benefits:
Brings positivity, purifies air, and enhances home décor.

Care Tip:
Use clean, filtered water and keep away from harsh sunlight.`,
"Shami Plant" : `🌿 Shami Plant (Prosopis cineraria)

Description:
A sacred and hardy plant known for its spiritual importance and ability to thrive in dry conditions.

Light:
Needs full sunlight for healthy growth.

Water:
Water once a week; allow soil to dry completely before watering again.

Temperature & Humidity:
Prefers warm climates, 25–40°C, and low humidity.

Soil:
Sandy or loamy, well-draining soil.

Fertilizer:
Feed every 2 months with organic compost.

Common Problems:
Overwatering can cause root rot.

Benefits:
Brings positive energy, improves air quality, and is used in traditional rituals.

Care Tip:
Place in sunny outdoor area and avoid excess watering.`,
"Rose":`🌹 Rose Plant (Rosa spp.)

Description:
A classic flowering plant known for its beautiful blooms and pleasant fragrance, symbolizing love and beauty.

Light:
Needs at least 5–6 hours of direct sunlight daily.

Water:
Water 2–3 times a week; keep soil moist but not soggy.

Temperature & Humidity:
Thrives in 20–30°C with moderate humidity.

Soil:
Rich, well-draining soil with organic compost.

Fertilizer:
Feed every 2–4 weeks with a balanced flower fertilizer.

Common Problems:
Aphids or black spots due to poor air circulation.

Benefits:
Adds beauty, fragrance, and positivity to the surroundings.

Care Tip:
Prune regularly to encourage new blooms and healthy growth.`,
"Jasmine":`🌼 Jasmine Plant (Jasminum spp.)

Description:
A fragrant flowering plant known for its white blooms and soothing aroma, often used in perfumes and rituals.

Light:
Needs 4–6 hours of direct sunlight daily.

Water:
Water 2–3 times a week; keep soil evenly moist.

Temperature & Humidity:
Prefers 20–32°C and moderate humidity.

Soil:
Well-draining, fertile soil with compost.

Fertilizer:
Feed every 3–4 weeks during growing season.

Common Problems:
Yellow leaves = overwatering or poor drainage.

Benefits:
Relieves stress, adds fragrance, and purifies air.

Care Tip:
Prune after flowering to maintain shape and promote new growth.`,
"Hibiscus":`🌺 Hibiscus (Hibiscus rosa-sinensis)

Description:
A tropical flowering plant with large, bright blooms that add vibrant color and beauty to any garden or balcony.

Light:
Needs 5–6 hours of direct sunlight daily.

Water:
Water 3–4 times a week; keep soil moist but not waterlogged.

Temperature & Humidity:
Thrives in 20–35°C with moderate to high humidity.

Soil:
Rich, well-draining soil with organic compost.

Fertilizer:
Feed every 2 weeks during blooming season.

Common Problems:
Yellow leaves = overwatering; no blooms = lack of sunlight.

Benefits:
Attracts pollinators and has medicinal and cosmetic uses.

Care Tip:
Prune regularly to encourage more flowers and healthy growth.`,
"Marigold":`🌼 Marigold (Tagetes spp.)

Description:
A cheerful flowering plant with golden-orange blooms, known for its beauty and pest-repelling properties.

Light:
Needs full sunlight for 5–6 hours daily.

Water:
Water 2–3 times a week; keep soil slightly moist.

Temperature & Humidity:
Grows well in 20–35°C and moderate humidity.

Soil:
Well-draining, fertile soil with compost.

Fertilizer:
Feed every 3–4 weeks during flowering season.

Common Problems:
Fungal issues if overwatered or overcrowded.

Benefits:
Repels insects, adds color, and is used in festivals and rituals.

Care Tip:
Remove dried flowers regularly to promote new blooms.`
};

// ===== SECTION MANAGEMENT =====
function showSection(sectionId, linkElement) {
  // Hide all sections
  const sections = ['homeSection', 'myPlantsSection', 'communitySection', 'guidesSection', 'shopSection', 'aboutSection', 'faqSection'];
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.display = 'none';
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
  
  // Update active link styling
  document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.classList.remove('active');
  });
  if (linkElement) {
    linkElement.classList.add('active');
  }
  
  // Close sidebar on mobile after selection
  if (window.innerWidth <= 768) {
    toggleSidebar();
  }
}

// Search Function
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

if (searchInput && clearSearch) {
  searchInput.addEventListener("input", function () {
    clearSearch.style.display = searchInput.value ? "inline" : "none";
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".plant-card").forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });

  clearSearch.addEventListener("click", function () {
    searchInput.value = "";
    clearSearch.style.display = "none";
    searchInput.dispatchEvent(new Event("input"));
  });
}

// Modal Functions
function openModal(name) {
  const plantNameElem = document.getElementById("plantName");
  const plantInfoElem = document.getElementById("plantInfo");
  const plantModalElem = document.getElementById("plantModal");
  if (plantNameElem && plantInfoElem && plantModalElem) {
    plantNameElem.innerText = name;
    plantInfoElem.innerText = plantData[name] || "Information is coming soon!";
    plantModalElem.style.display = "flex";
  }
}

function closeModal() {
  const plantModalElem = document.getElementById("plantModal");
  if (plantModalElem) {
    plantModalElem.style.display = "none";
  }
}

// Add click event to each plant
document.querySelectorAll(".plant-card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.name);
  });
});

// Allow closing modal with Escape key and by clicking outside content
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

const plantModalElem = document.getElementById('plantModal');
if (plantModalElem) {
  plantModalElem.addEventListener('click', function (e) {
    if (e.target === plantModalElem) closeModal();
  });
}

// Chatbot
function toggleChat() {
  const chatbotPanel = document.getElementById("chatbotPanel");
  if (chatbotPanel) {
    chatbotPanel.classList.toggle("open");
  }
}

// 🌿 Enhanced Nurtura AI with keyword-based logic
function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const userMsg = input.value.trim();

  if (userMsg === "") return;

  // User message bubble
  const userBubble = document.createElement("p");
  userBubble.style.textAlign = "right";
  userBubble.style.color = "#2e7d32";
  userBubble.textContent = userMsg;
  chatBody.appendChild(userBubble);

  // Bot thinking bubble
  const botBubble = document.createElement("p");
  botBubble.textContent = "🌿 Nurtura AI is thinking...";
  chatBody.appendChild(botBubble);

  chatBody.scrollTop = chatBody.scrollHeight;

  // 🌿 Keyword-based database
  const plantKeywords = {
    monstera: {
      disease: "🪴 Monstera diseases: Overwatering is the most common issue, causing yellowing leaves, mushy stems, and root rot—improve drainage, trim affected roots, and repot in fresh soil. Pests like spider mites and mealybugs can appear; treat with insecticidal soap or neem oil. Nutrient deficiencies or low light may lead to small, leggy growth.",
      watering: "💧 Water Monstera when the top 1-2 inches of soil are dry, usually every 7-10 days depending on humidity and temperature. Use lukewarm water, ensure pots have drainage holes, and avoid letting it sit in standing water to prevent rot.",
      light: "☀️ Monstera prefers bright, indirect light for optimal growth and fenestration (leaf holes). Place near east- or west-facing windows; direct harsh sun can scorch leaves, while too little light causes slow growth and smaller leaves.",
      fertilizer: "🌱 Apply a balanced, water-soluble fertilizer (like 20-20-20) diluted to half strength every 4-6 weeks during the growing season (spring-summer). Skip in fall-winter when growth slows to avoid salt buildup."
    },
    pothos: {
      disease: "🍃 Pothos diseases: Root rot from overwatering shows as yellow, wilting leaves—let soil dry out, trim rotted roots, and repot. Bacterial leaf spot or fungal issues cause brown spots; improve air circulation and avoid overhead watering. Pests like aphids or scale can infest; rinse or use neem oil.",
      watering: "💧 Allow the top 2 inches of soil to dry between waterings, typically every 1-2 weeks. Pothos are forgiving but overwatering leads to rot—use well-draining soil and check soil moisture with your finger before adding water.",
      light: "☀️ Pothos tolerates low to medium indirect light but grows best in bright, indirect spots. Variegated varieties need more light to maintain color; avoid deep shade where growth stalls or direct sun that burns leaves.",
      fertilizer: "🌿 Feed every 4-6 weeks in spring-summer with a balanced liquid fertilizer at half strength. Over-fertilizing causes leggy growth; withhold in winter when the plant is dormant."
    },
    aloe: {
      disease: "🪴 Aloe vera diseases: Overwatering causes soft, mushy leaves and root rot—dry out soil completely and repot in cactus mix. Aloe rust or fungal spots appear as orange pustules; remove affected leaves and improve airflow. Mealybugs are common pests; wipe with alcohol.",
      watering: "💧 Water deeply but infrequently, only when the soil is completely dry (every 2-3 weeks in summer, monthly in winter). Use the 'soak and dry' method with well-draining soil to mimic desert conditions and prevent rot.",
      light: "☀️ Aloe vera needs 6+ hours of bright, direct sunlight daily for healthy growth and gel production. Indoor plants thrive near south-facing windows; insufficient light causes etiolation (stretched, pale leaves).",
      fertilizer: "🌱 Fertilize sparingly every 6-8 weeks in spring-summer with a diluted cactus/succulent fertilizer (low nitrogen, like 10-10-10 at 1/4 strength). Avoid winter feeding to prevent weak growth."
    },
    rose: {
      disease: "🌹 Rose diseases: Black spot (dark spots with yellow halos) and powdery mildew (white powdery coating) are fungal issues—remove infected leaves, water at base, and apply neem oil or fungicide. Aphids and thrips cause curled leaves; hose off or use insecticidal soap. Stem canker leads to dieback.",
      watering: "💧 Water deeply 1-2 times per week in mornings to keep soil moist but not soggy, aiming for 1 inch per session. Mulch to retain moisture; avoid wetting foliage to prevent diseases, and reduce in cooler months.",
      light: "☀️ Roses require 6-8 hours of full direct sunlight daily for abundant blooms. Morning sun with afternoon shade prevents scorching; insufficient light reduces flowering and invites legginess.",
      fertilizer: "🌼 Use a rose-specific or balanced fertilizer (high phosphorus for blooms, like 10-18-10) every 4-6 weeks from spring to late summer. Incorporate compost annually; over-fertilizing burns roots."
    },
    hibiscus: {
      disease: "🌺 Hibiscus diseases: Yellowing leaves often signal overwatering, nutrient deficiency, or aphids—adjust moisture and inspect undersides for pests, treating with horticultural oil. Fungal issues like powdery mildew or leaf spot cause spots; ensure good air flow and avoid overhead watering. Bud drop from stress.",
      watering: "💧 Water deeply when the top inch of soil is dry, daily in hot summers but less (every 3-4 days) in cooler weather or winter. Keep soil evenly moist during flowering; poor drainage leads to root rot.",
      light: "☀️ Hibiscus loves full sun with 6+ hours daily for vibrant blooms. Partial shade in hottest climates prevents leaf scorch; indoor plants need bright south-facing windows.",
      fertilizer: "🌱 Apply a high-potassium bloom booster (like 10-30-20) weekly during active growth (spring-fall). Use diluted liquid feeds; reduce in winter to avoid salt buildup and leggy growth."
    },
    jade: {
      disease: "Jade Plant diseases: Root rot is #1 killer—caused by overwatering, poor drainage, or heavy soil. Signs: soft, mushy, translucent leaves. Fix: Remove from pot, trim black/rotten roots, let dry 1–2 days, repot in fresh cactus mix. Mealybugs appear as white cottony spots—wipe with 70% isopropyl alcohol.",
      watering: "Water thoroughly only when soil is 100% bone dry—typically every 2–3 weeks in summer, 4–6 weeks in winter. Use 'soak and dry' method. Jade stores water in thick leaves—overwatering = death. Use terracotta pots for faster drying.",
      light: "Bright direct sunlight for 4–6 hours daily is ideal—south or west window. Jade loves sun! Insufficient light causes etiolation (long, weak stems). Direct morning sun + filtered afternoon is perfect.",
      fertilizer: "Feed sparingly: every 6–8 weeks in spring/summer with diluted succulent fertilizer at ¼–½ strength. Avoid high-nitrogen—causes soft, leggy growth. No feeding in fall/winter."
    }
  };

  // Logic: check multiple matches
  const lowerMsg = userMsg.toLowerCase();
  let responseParts = [];
  let foundPlant = null;

  for (const plant in plantKeywords) {
    if (lowerMsg.includes(plant)) {
      foundPlant = plant;
      const topics = plantKeywords[plant];
      for (const topic in topics) {
        if (lowerMsg.includes(topic)) {
          responseParts.push(topics[topic]);
        }
      }
      if (responseParts.length === 0) {
        responseParts.push(`💡 ${plant.charAt(0).toUpperCase() + plant.slice(1)} is a beautiful plant! Ask me about its watering, light, or disease care 🌿.`);
      }
      break;
    }
  }

  let finalResponse = "";
  if (responseParts.length > 0) {
    finalResponse = responseParts.join("\n\n");
  } else {
    finalResponse = "I'm not sure about that yet 🌱. Try asking something like 'Monstera watering' or 'Rose disease'.";
  }

  // Simulate AI delay
  setTimeout(() => {
    botBubble.textContent = finalResponse;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 700);

  input.value = "";
}

// Enable Enter key to send message in chatbot
const chatInput = document.getElementById("chatInput");
if (chatInput) {
  chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });
}

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Show sections
function showSection(sectionId, element) {
  document.querySelectorAll(".content-section").forEach(sec => sec.style.display = "none");
  document.getElementById(sectionId).style.display = "block";

  // Highlight active menu
  document.querySelectorAll(".sidebar-menu a").forEach(a => a.classList.remove("active"));
  element.classList.add("active");

  // Close sidebar after navigation
  document.getElementById("sidebar").classList.remove("open");

  // If user opens My Plants — refresh it
  if (sectionId === "myPlantsSection") displayMyPlants();
}

// ---- My Plants Logic ----
let selectedPlants = JSON.parse(localStorage.getItem("myPlants")) || [];

document.addEventListener("DOMContentLoaded", () => {
  // Show home section by default
  showSection("homeSection", document.querySelector(".sidebar-menu a.active"));

  // Enable click to add plants
  const plantCards = document.querySelectorAll(".plant-card");
  plantCards.forEach(card => {
    card.addEventListener("click", () => {
      const plantName = card.dataset.name;
      const plantImg = card.querySelector("img").src;

      if (!selectedPlants.some(p => p.name === plantName)) {
        selectedPlants.push({ name: plantName, img: plantImg });
        localStorage.setItem("myPlants", JSON.stringify(selectedPlants));
        alert(`${plantName} added to your collection!`);
      } else {
        alert(`${plantName} is already in your collection!`);
      }
    });
  });
});

// Display user’s selected plants
function displayMyPlants() {
  const mySection = document.getElementById("myPlantsSection");

  // Remove existing gallery if any
  const oldGallery = mySection.querySelector(".my-plant-gallery");
  if (oldGallery) oldGallery.remove();

  // Remove old empty message
  const oldMsg = mySection.querySelector(".empty-message");
  if (oldMsg) oldMsg.remove();

  if (selectedPlants.length === 0) {
    const msg = document.createElement("div");
    msg.classList.add("empty-message");
    msg.innerHTML = `
      <div style="text-align:center; padding:40px; border:2px dashed #2e7d32; border-radius:12px; background:#f1f8e9;">
        <h2>🌿 You don’t have any plants yet!</h2>
        <p style="color:#555; font-size:1.1rem;">Select plants for yourself from the available plants on the <strong>Home</strong> section.</p>
        <button onclick="goToHome()" style="margin-top:20px; padding:10px 18px; background:#2e7d32; color:white; border:none; border-radius:8px; cursor:pointer;">
          Go to Home 🌱
        </button>
      </div>
    `;
    mySection.appendChild(msg);
    return;
  }

  // Create gallery
  const gallery = document.createElement("div");
  gallery.classList.add("my-plant-gallery");
  gallery.style.display = "grid";
  gallery.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
  gallery.style.gap = "20px";
  gallery.style.padding = "20px";

  selectedPlants.forEach((plant, index) => {
    const div = document.createElement("div");
    div.classList.add("my-plant-card");
    div.style.background = "#fff";
    div.style.borderRadius = "12px";
    div.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    div.style.padding = "10px";
    div.style.textAlign = "center";

    div.innerHTML = `
      <img src="${plant.img}" alt="${plant.name}" style="width:100%; border-radius:10px;">
      <h4 style="margin-top:10px; color:#2e7d32;">${plant.name}</h4>
      <button onclick="removePlant(${index})" style="margin-top:8px; background:#d32f2f; color:white; border:none; border-radius:6px; padding:6px 10px; cursor:pointer;">Remove</button>
    `;

    gallery.appendChild(div);
  });

  // Add “Add More” button
  const addMore = document.createElement("div");
  addMore.style.textAlign = "center";
  addMore.innerHTML = `
    <button onclick="goToHome()" style="margin-top:20px; padding:10px 18px; background:#2e7d32; color:white; border:none; border-radius:8px; cursor:pointer;">
      Add More Plants 🌱
    </button>
  `;

  mySection.appendChild(gallery);
  mySection.appendChild(addMore);
}

// Remove a plant from My Plants
function removePlant(index) {
  const confirmDelete = confirm(`Remove ${selectedPlants[index].name} from your collection?`);
  if (confirmDelete) {
    selectedPlants.splice(index, 1);
    localStorage.setItem("myPlants", JSON.stringify(selectedPlants));
    displayMyPlants();
  }
}

// Go to Home
function goToHome() {
  const homeLink = document.querySelector(".sidebar-menu a[onclick*='homeSection']");
  showSection("homeSection", homeLink);
}
