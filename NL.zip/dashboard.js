// Plant info database (you can expand)
const plantData = {
  "Aloe Vera": "Aloe Vera is known for medicinal uses. Needs sunlight, moderate water, grows well indoors.",
  "Snake Plant": "Snake Plant purifies air. Thrives in low light, requires little water, very hardy.",
  "Tulsi": "Tulsi is sacred in India. Needs daily sunlight, moderate watering, used for immunity."
};

// Search Function
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

if (searchInput && clearSearch) {
  searchInput.addEventListener("input", function() {
    clearSearch.style.display = searchInput.value ? "inline" : "none";
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll(".plant-card").forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(query) ? "block" : "none";
    });
  });

  clearSearch.addEventListener("click", function() {
    searchInput.value = "";
    clearSearch.style.display = "none";
    // Trigger input event to reset the gallery
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
    plantInfoElem.innerText = plantData[name] || "Information coming soon!";
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

// Chatbot
function toggleChat() {
  const chatbotPanel = document.getElementById("chatbotPanel");
  if (chatbotPanel) {
    chatbotPanel.classList.toggle("open");
    // Make sure your CSS handles .chatbot-panel.open { display: flex; } or similar
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  if (input && chatBody) {
    const message = input.value.trim();
    if (message) {
      const userMsg = document.createElement("p");
      userMsg.innerHTML = "<strong>You:</strong> " + message;
      chatBody.appendChild(userMsg);

      // Improved keyword-based bot response
      let botReply = "I'm here to help with your plant care questions!";

      const msg = message.toLowerCase();

      if (msg.includes("water") || msg.includes("watering")) {
        botReply = "Most plants prefer their soil to dry out slightly between waterings. Check the top inch of soil—if it's dry, it's time to water!";
      } else if (msg.includes("sun") || msg.includes("light")) {
        botReply = "Most indoor plants need bright, indirect sunlight. Avoid direct harsh sun unless your plant is a succulent or cactus.";
      } else if (msg.includes("fertilizer") || msg.includes("feed")) {
        botReply = "Fertilize your plants during their growing season (spring and summer) with a balanced, water-soluble fertilizer every 2-4 weeks.";
      } else if (msg.includes("yellow") && msg.includes("leaves")) {
        botReply = "Yellow leaves can be caused by overwatering, underwatering, or lack of nutrients. Check your watering routine and consider fertilizing.";
      } else if (msg.includes("disease") || msg.includes("spot") || msg.includes("fungus")) {
        botReply = "Remove affected leaves and avoid overhead watering. Ensure good air circulation. If needed, use an organic fungicide.";
      } else if (msg.includes("pest") || msg.includes("insect") || msg.includes("bug")) {
        botReply = "Inspect your plant for pests like aphids or spider mites. Wipe leaves with soapy water or use neem oil for treatment.";
      } else if (msg.includes("hello") || msg.includes("hi")) {
        botReply = "Hello! How can I assist you with your plants today?";
      } else if (msg.includes("thank")) {
        botReply = "You're welcome! Let me know if you have more questions.";
      }

      const botMsg = document.createElement("p");
      botMsg.innerHTML = "<strong>Nurturing AI Assistant:</strong> " + botReply;
      chatBody.appendChild(botMsg);

      chatBody.scrollTop = chatBody.scrollHeight;
      input.value = "";
    }
  }
}

// Enable Enter key to send message in chatbot
const chatInput = document.getElementById("chatInput");
if (chatInput) {
  chatInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });
}

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.toggle("open");

  if (sidebar.classList.contains("open")) {
    hamburger.classList.add("hidden"); // hide ☰
  } else {
    hamburger.classList.remove("hidden"); // show ☰
  }
}

function previewPlantImage(event, imgId) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById(imgId).src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
