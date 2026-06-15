const cards = [
  {
    category: "Cloud Concepts",
    question: "What is cloud computing?",
    answer: "Cloud computing is the delivery of computing services over the internet, including compute, storage, networking, databases, and software."
  },
  {
    category: "Cloud Concepts",
    question: "What is the difference between CapEx and OpEx?",
    answer: "CapEx is upfront capital spending. OpEx is ongoing operating spending. Cloud services commonly shift technology costs toward OpEx."
  },
  {
    category: "Cloud Concepts",
    question: "What is the shared responsibility model?",
    answer: "The cloud provider and customer share security and operations duties. The provider manages the cloud infrastructure, while the customer manages data, access, and configuration."
  },
  {
    category: "Azure Architecture",
    question: "What is an Azure region?",
    answer: "An Azure region is a geographic area that contains one or more Azure datacenters connected by a low-latency network."
  },
  {
    category: "Azure Architecture",
    question: "What is a resource group?",
    answer: "A resource group is a logical container used to organize and manage related Azure resources."
  },
  {
    category: "Azure Architecture",
    question: "What is an Azure subscription?",
    answer: "An Azure subscription is a billing and management boundary that gives access to Azure products and services."
  },
  {
    category: "Compute",
    question: "Which Azure service is closest to Vercel or Cloudflare Pages for static web apps?",
    answer: "Azure Static Web Apps is the closest match for hosting static sites and frontend apps with GitHub-based deployment."
  },
  {
    category: "Compute",
    question: "What is Azure App Service?",
    answer: "Azure App Service is a managed platform for hosting web apps, REST APIs, and backend services without managing servers."
  },
  {
    category: "Compute",
    question: "What is Azure Functions?",
    answer: "Azure Functions is a serverless compute service that runs code in response to events, such as HTTP requests, timers, or queue messages."
  },
  {
    category: "Storage",
    question: "What is Azure Blob Storage used for?",
    answer: "Azure Blob Storage stores unstructured object data, such as images, documents, backups, logs, and static website files."
  },
  {
    category: "Storage",
    question: "What are Azure Storage access tiers?",
    answer: "Access tiers such as hot, cool, cold, and archive help balance storage cost with how often data needs to be accessed."
  },
  {
    category: "Networking",
    question: "What is a virtual network in Azure?",
    answer: "An Azure Virtual Network lets Azure resources communicate with each other, the internet, and on-premises networks."
  },
  {
    category: "Identity & Security",
    question: "What is Microsoft Entra ID?",
    answer: "Microsoft Entra ID is Microsoft's cloud identity and access management service for users, groups, apps, and authentication."
  },
  {
    category: "Identity & Security",
    question: "What is role-based access control?",
    answer: "Role-based access control, or RBAC, assigns permissions to users, groups, or apps so they can perform specific actions on Azure resources."
  },
  {
    category: "Pricing & SLAs",
    question: "What is consumption-based pricing?",
    answer: "Consumption-based pricing means paying for what you use instead of buying and maintaining all infrastructure upfront."
  },
  {
    category: "Pricing & SLAs",
    question: "What is an SLA?",
    answer: "A service-level agreement describes Microsoft's commitments for uptime and connectivity for an Azure service."
  },
  {
    category: "Management & Governance",
    question: "What is Azure Policy?",
    answer: "Azure Policy helps enforce organizational rules, such as allowed regions, required tags, or approved resource types."
  },
  {
    category: "Management & Governance",
    question: "What is Azure Monitor?",
    answer: "Azure Monitor collects and analyzes metrics, logs, and alerts from Azure resources and applications."
  }
];

const categoryFilter = document.querySelector("#category-filter");
const cardPosition = document.querySelector("#card-position");
const cardTotal = document.querySelector("#card-total");
const cardCategory = document.querySelector("#card-category");
const cardSide = document.querySelector("#card-side");
const cardText = document.querySelector("#card-text");
const flashcard = document.querySelector("#flashcard");
const knownCount = document.querySelector("#known-count");
const missedCount = document.querySelector("#missed-count");
const filteredCount = document.querySelector("#filtered-count");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const shuffleButton = document.querySelector("#shuffle-button");
const resetButton = document.querySelector("#reset-button");
const knownButton = document.querySelector("#known-button");
const missedButton = document.querySelector("#missed-button");

let filteredCards = [...cards];
let currentIndex = 0;
let isAnswerVisible = false;
let known = 0;
let missed = 0;

function loadCategories() {
  const categories = [...new Set(cards.map((card) => card.category))].sort();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function renderCard() {
  const currentCard = filteredCards[currentIndex];

  if (!currentCard) {
    cardPosition.textContent = "0";
    cardTotal.textContent = "0";
    filteredCount.textContent = "0";
    cardCategory.textContent = "No cards";
    cardSide.textContent = "Empty";
    cardText.textContent = "No flashcards match this category.";
    return;
  }

  cardPosition.textContent = String(currentIndex + 1);
  cardTotal.textContent = String(filteredCards.length);
  filteredCount.textContent = String(filteredCards.length);
  cardCategory.textContent = currentCard.category;
  cardSide.textContent = isAnswerVisible ? "Answer" : "Question";
  cardText.textContent = isAnswerVisible ? currentCard.answer : currentCard.question;
  flashcard.setAttribute("aria-pressed", String(isAnswerVisible));
}

function applyCategoryFilter() {
  const selectedCategory = categoryFilter.value;
  filteredCards = selectedCategory === "All"
    ? [...cards]
    : cards.filter((card) => card.category === selectedCategory);

  currentIndex = 0;
  isAnswerVisible = false;
  renderCard();
}

function showNextCard() {
  currentIndex = (currentIndex + 1) % filteredCards.length;
  isAnswerVisible = false;
  renderCard();
}

function showPreviousCard() {
  currentIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
  isAnswerVisible = false;
  renderCard();
}

function shuffleCards() {
  filteredCards = [...filteredCards].sort(() => Math.random() - 0.5);
  currentIndex = 0;
  isAnswerVisible = false;
  renderCard();
}

function resetStats() {
  known = 0;
  missed = 0;
  knownCount.textContent = "0";
  missedCount.textContent = "0";
  currentIndex = 0;
  isAnswerVisible = false;
  applyCategoryFilter();
}

function scoreCard(type) {
  if (type === "known") {
    known += 1;
    knownCount.textContent = String(known);
  } else {
    missed += 1;
    missedCount.textContent = String(missed);
  }

  showNextCard();
}

flashcard.addEventListener("click", () => {
  isAnswerVisible = !isAnswerVisible;
  renderCard();
});

categoryFilter.addEventListener("change", applyCategoryFilter);
nextButton.addEventListener("click", showNextCard);
previousButton.addEventListener("click", showPreviousCard);
shuffleButton.addEventListener("click", shuffleCards);
resetButton.addEventListener("click", resetStats);
knownButton.addEventListener("click", () => scoreCard("known"));
missedButton.addEventListener("click", () => scoreCard("missed"));

loadCategories();
renderCard();
