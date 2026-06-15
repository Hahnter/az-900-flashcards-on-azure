const cards = [
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.1",
    objectiveTitle: "Describe cloud computing",
    skill: "Define cloud computing",
    question: "What is cloud computing?",
    answer: "Cloud computing is the delivery of computing services over the internet, such as compute, storage, networking, databases, and software."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.1",
    objectiveTitle: "Describe cloud computing",
    skill: "Describe the shared responsibility model",
    question: "What does the shared responsibility model explain?",
    answer: "It explains which security and operations tasks are handled by the cloud provider and which remain the customer's responsibility."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.1",
    objectiveTitle: "Describe cloud computing",
    skill: "Define public, private, and hybrid cloud models",
    question: "How do public, private, and hybrid clouds differ?",
    answer: "Public cloud uses provider-owned infrastructure, private cloud is dedicated to one organization, and hybrid cloud combines public and private environments."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.1",
    objectiveTitle: "Describe cloud computing",
    skill: "Identify cloud model use cases",
    question: "When might an organization use a hybrid cloud model?",
    answer: "A hybrid model is useful when an organization wants cloud scalability while keeping some workloads or data in a private environment."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.1",
    objectiveTitle: "Describe cloud computing",
    skill: "Describe the consumption-based model",
    question: "What is consumption-based pricing?",
    answer: "Consumption-based pricing means paying for the resources you actually use rather than paying for all infrastructure upfront."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.1",
    objectiveTitle: "Describe cloud computing",
    skill: "Compare cloud pricing models",
    question: "How do CapEx and OpEx relate to cloud pricing?",
    answer: "CapEx is upfront capital spending. OpEx is ongoing operating spending. Cloud computing often shifts costs from CapEx to OpEx."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.1",
    objectiveTitle: "Describe cloud computing",
    skill: "Describe serverless",
    question: "What does serverless mean in cloud computing?",
    answer: "Serverless means the cloud provider manages the servers and scaling while you deploy code or functions that run when triggered."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.2",
    objectiveTitle: "Describe benefits of cloud services",
    skill: "Describe high availability and scalability",
    question: "Why are high availability and scalability important cloud benefits?",
    answer: "High availability helps apps stay accessible, while scalability lets resources increase or decrease as demand changes."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.2",
    objectiveTitle: "Describe benefits of cloud services",
    skill: "Describe reliability and predictability",
    question: "What do reliability and predictability mean in Azure?",
    answer: "Reliability helps services recover and continue operating, while predictability helps you plan performance and costs more consistently."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.2",
    objectiveTitle: "Describe benefits of cloud services",
    skill: "Describe security and governance benefits",
    question: "How can cloud services improve security and governance?",
    answer: "Cloud platforms provide built-in tools for identity, access control, policies, monitoring, compliance, and security recommendations."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.2",
    objectiveTitle: "Describe benefits of cloud services",
    skill: "Describe manageability benefits",
    question: "What is cloud manageability?",
    answer: "Cloud manageability is the ability to create, configure, monitor, automate, and control resources using portals, command-line tools, APIs, and policies."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.3",
    objectiveTitle: "Describe cloud service types",
    skill: "Describe IaaS",
    question: "What is infrastructure as a service, or IaaS?",
    answer: "IaaS provides virtualized infrastructure such as virtual machines, disks, and networks while the customer manages the operating system and apps."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.3",
    objectiveTitle: "Describe cloud service types",
    skill: "Describe PaaS",
    question: "What is platform as a service, or PaaS?",
    answer: "PaaS provides a managed platform for building and hosting apps without managing the underlying operating system or server infrastructure."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.3",
    objectiveTitle: "Describe cloud service types",
    skill: "Describe SaaS",
    question: "What is software as a service, or SaaS?",
    answer: "SaaS is complete software delivered over the internet, where the provider manages the application and infrastructure."
  },
  {
    category: "Cloud Concepts",
    objective: "OBJ 1.3",
    objectiveTitle: "Describe cloud service types",
    skill: "Identify IaaS, PaaS, and SaaS use cases",
    question: "When should you choose IaaS, PaaS, or SaaS?",
    answer: "Choose IaaS for control over servers, PaaS for managed app hosting and development, and SaaS when you want a ready-to-use application."
  },
  {
    category: "Azure Architecture",
    objective: "OBJ 2.1",
    objectiveTitle: "Describe core Azure architectural components",
    skill: "Describe regions, region pairs, and sovereign regions",
    question: "What are Azure regions, region pairs, and sovereign regions?",
    answer: "Regions are geographic areas with Azure datacenters, region pairs support resiliency, and sovereign regions serve special compliance or government needs."
  },
  {
    category: "Azure Architecture",
    objective: "OBJ 2.1",
    objectiveTitle: "Describe core Azure architectural components",
    skill: "Describe availability zones",
    question: "What is an Azure availability zone?",
    answer: "An availability zone is a physically separate datacenter location within an Azure region used to improve resiliency."
  },
  {
    category: "Azure Architecture",
    objective: "OBJ 2.1",
    objectiveTitle: "Describe core Azure architectural components",
    skill: "Describe Azure datacenters",
    question: "What role do Azure datacenters play?",
    answer: "Azure datacenters contain the physical infrastructure that runs Azure services, including servers, networking, power, and cooling."
  },
  {
    category: "Azure Architecture",
    objective: "OBJ 2.1",
    objectiveTitle: "Describe core Azure architectural components",
    skill: "Describe resources and resource groups",
    question: "What is the difference between an Azure resource and a resource group?",
    answer: "A resource is an Azure service instance, such as a web app or storage account. A resource group is a logical container for related resources."
  },
  {
    category: "Azure Architecture",
    objective: "OBJ 2.1",
    objectiveTitle: "Describe core Azure architectural components",
    skill: "Describe subscriptions",
    question: "What is an Azure subscription?",
    answer: "An Azure subscription is a billing and management boundary used to access and organize Azure services."
  },
  {
    category: "Azure Architecture",
    objective: "OBJ 2.1",
    objectiveTitle: "Describe core Azure architectural components",
    skill: "Describe management groups",
    question: "What are Azure management groups used for?",
    answer: "Management groups organize multiple subscriptions so governance settings like policies and access controls can be applied at scale."
  },
  {
    category: "Azure Architecture",
    objective: "OBJ 2.1",
    objectiveTitle: "Describe core Azure architectural components",
    skill: "Describe Azure hierarchy",
    question: "How do management groups, subscriptions, resource groups, and resources relate?",
    answer: "Management groups contain subscriptions, subscriptions contain resource groups, and resource groups contain Azure resources."
  },
  {
    category: "Compute & Networking",
    objective: "OBJ 2.2",
    objectiveTitle: "Describe Azure compute and networking services",
    skill: "Compare containers, virtual machines, and functions",
    question: "How do virtual machines, containers, and functions differ?",
    answer: "Virtual machines provide full server control, containers package apps and dependencies, and functions run small pieces of code in response to events."
  },
  {
    category: "Compute & Networking",
    objective: "OBJ 2.2",
    objectiveTitle: "Describe Azure compute and networking services",
    skill: "Describe VM options",
    question: "What are common Azure virtual machine options?",
    answer: "Options include Azure Virtual Machines, Virtual Machine Scale Sets for scaling, availability sets for resiliency, and Azure Virtual Desktop for remote desktops."
  },
  {
    category: "Compute & Networking",
    objective: "OBJ 2.2",
    objectiveTitle: "Describe Azure compute and networking services",
    skill: "Describe VM resource requirements",
    question: "What resources are commonly required for an Azure virtual machine?",
    answer: "A VM commonly needs compute size, disks, networking, an operating system image, authentication settings, and security rules."
  },
  {
    category: "Compute & Networking",
    objective: "OBJ 2.2",
    objectiveTitle: "Describe Azure compute and networking services",
    skill: "Describe application hosting options",
    question: "What Azure options can host applications?",
    answer: "Azure can host apps using web apps, containers, virtual machines, and serverless functions depending on control, scaling, and management needs."
  },
  {
    category: "Compute & Networking",
    objective: "OBJ 2.2",
    objectiveTitle: "Describe Azure compute and networking services",
    skill: "Describe virtual networking services",
    question: "What Azure networking services should AZ-900 candidates recognize?",
    answer: "Key services include virtual networks, subnets, peering, Azure DNS, VPN Gateway, and ExpressRoute."
  },
  {
    category: "Compute & Networking",
    objective: "OBJ 2.2",
    objectiveTitle: "Describe Azure compute and networking services",
    skill: "Define public and private endpoints",
    question: "What is the difference between a public endpoint and a private endpoint?",
    answer: "A public endpoint is reachable over the internet, while a private endpoint connects privately through an Azure virtual network."
  },
  {
    category: "Storage",
    objective: "OBJ 2.3",
    objectiveTitle: "Describe Azure storage services",
    skill: "Compare Azure Storage services",
    question: "What are the main Azure Storage services?",
    answer: "Common services include Blob Storage for objects, Files for shared file storage, Queues for messages, Tables for NoSQL key-value data, and managed disks for VMs."
  },
  {
    category: "Storage",
    objective: "OBJ 2.3",
    objectiveTitle: "Describe Azure storage services",
    skill: "Describe storage tiers",
    question: "Why do Azure Storage access tiers matter?",
    answer: "Access tiers like hot, cool, cold, and archive help balance storage cost against how often data is accessed."
  },
  {
    category: "Storage",
    objective: "OBJ 2.3",
    objectiveTitle: "Describe Azure storage services",
    skill: "Describe redundancy options",
    question: "What do Azure Storage redundancy options do?",
    answer: "Redundancy options copy data within or across locations to improve durability and availability."
  },
  {
    category: "Storage",
    objective: "OBJ 2.3",
    objectiveTitle: "Describe Azure storage services",
    skill: "Describe storage account options and storage types",
    question: "What is an Azure storage account?",
    answer: "A storage account is a namespace and management boundary for Azure Storage data services, configuration, access, and billing."
  },
  {
    category: "Storage",
    objective: "OBJ 2.3",
    objectiveTitle: "Describe Azure storage services",
    skill: "Identify file movement options",
    question: "Which tools can move files to or from Azure Storage?",
    answer: "Common options include AzCopy, Azure Storage Explorer, and Azure File Sync."
  },
  {
    category: "Storage",
    objective: "OBJ 2.3",
    objectiveTitle: "Describe Azure storage services",
    skill: "Describe migration options",
    question: "What are Azure Migrate and Azure Data Box used for?",
    answer: "Azure Migrate helps assess and move workloads to Azure, while Azure Data Box helps transfer large amounts of data using a physical device."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe directory services",
    question: "What are Microsoft Entra ID and Microsoft Entra Domain Services?",
    answer: "Microsoft Entra ID is cloud identity and access management. Entra Domain Services provides managed domain services such as domain join and group policy support."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe authentication methods",
    question: "What are SSO, MFA, and passwordless authentication?",
    answer: "SSO lets users sign in once to access multiple apps, MFA requires extra verification, and passwordless uses methods like biometrics or security keys."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe external identities",
    question: "What are B2B and B2C external identities?",
    answer: "B2B supports collaboration with external business users, while B2C supports customer-facing identity for apps."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe Conditional Access",
    question: "What is Microsoft Entra Conditional Access?",
    answer: "Conditional Access uses signals such as user, location, device, risk, and app to decide whether access should be allowed, blocked, or require extra controls."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe Azure RBAC",
    question: "What does Azure role-based access control do?",
    answer: "Azure RBAC grants users, groups, or apps only the permissions they need to manage Azure resources."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe Zero Trust",
    question: "What is the Zero Trust security model?",
    answer: "Zero Trust assumes no user, device, or network is automatically trusted and requires verification before granting access."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe defense in depth",
    question: "What is defense in depth?",
    answer: "Defense in depth uses multiple layers of security controls so one failed control does not expose the whole environment."
  },
  {
    category: "Identity & Security",
    objective: "OBJ 2.4",
    objectiveTitle: "Describe Azure identity, access, and security",
    skill: "Describe Microsoft Defender for Cloud",
    question: "What is Microsoft Defender for Cloud used for?",
    answer: "Microsoft Defender for Cloud helps assess security posture, recommend improvements, and protect cloud and hybrid workloads."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.1",
    objectiveTitle: "Describe cost management in Azure",
    skill: "Describe factors that affect costs",
    question: "What factors can affect Azure costs?",
    answer: "Costs can be affected by resource type, usage, region, storage amount, bandwidth, pricing tier, reserved capacity, and support plan."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.1",
    objectiveTitle: "Describe cost management in Azure",
    skill: "Explore the pricing calculator",
    question: "What is the Azure Pricing Calculator used for?",
    answer: "The Azure Pricing Calculator estimates expected monthly costs for selected Azure services and configurations."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.1",
    objectiveTitle: "Describe cost management in Azure",
    skill: "Describe cost management capabilities",
    question: "What does Microsoft Cost Management help you do?",
    answer: "It helps analyze spending, create budgets, set alerts, allocate costs, and find opportunities to optimize Azure expenses."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.1",
    objectiveTitle: "Describe cost management in Azure",
    skill: "Describe the purpose of tags",
    question: "Why are tags useful in Azure?",
    answer: "Tags add metadata to resources so you can organize, report, filter, and track costs by owner, environment, project, or department."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.2",
    objectiveTitle: "Describe governance and compliance tools",
    skill: "Describe Microsoft Purview",
    question: "What is Microsoft Purview used for?",
    answer: "Microsoft Purview helps organizations discover, classify, govern, and manage data across their environments."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.2",
    objectiveTitle: "Describe governance and compliance tools",
    skill: "Describe Azure Policy",
    question: "What is Azure Policy used for?",
    answer: "Azure Policy helps enforce organizational standards, such as allowed regions, required tags, and approved resource types."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.2",
    objectiveTitle: "Describe governance and compliance tools",
    skill: "Describe resource locks",
    question: "What do Azure resource locks do?",
    answer: "Resource locks help prevent accidental deletion or modification of Azure resources."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.3",
    objectiveTitle: "Describe tools for managing and deploying Azure resources",
    skill: "Describe the Azure portal",
    question: "What is the Azure portal?",
    answer: "The Azure portal is a web-based interface for creating, configuring, monitoring, and managing Azure resources."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.3",
    objectiveTitle: "Describe tools for managing and deploying Azure resources",
    skill: "Describe Cloud Shell, CLI, and PowerShell",
    question: "How do Azure Cloud Shell, Azure CLI, and Azure PowerShell relate?",
    answer: "Cloud Shell is a browser-based shell that can run Azure CLI or Azure PowerShell commands for managing Azure resources."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.3",
    objectiveTitle: "Describe tools for managing and deploying Azure resources",
    skill: "Describe Azure Arc",
    question: "What is Azure Arc?",
    answer: "Azure Arc extends Azure management, governance, and security to resources outside Azure, such as on-premises or other-cloud servers."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.3",
    objectiveTitle: "Describe tools for managing and deploying Azure resources",
    skill: "Describe infrastructure as code",
    question: "What is infrastructure as code, or IaC?",
    answer: "IaC manages infrastructure using declarative or scripted files so deployments can be repeatable, versioned, and automated."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.3",
    objectiveTitle: "Describe tools for managing and deploying Azure resources",
    skill: "Describe ARM and ARM templates",
    question: "What are Azure Resource Manager and ARM templates?",
    answer: "Azure Resource Manager is Azure's deployment and management layer. ARM templates are JSON files that define Azure infrastructure for repeatable deployment."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.4",
    objectiveTitle: "Describe monitoring tools in Azure",
    skill: "Describe Azure Advisor",
    question: "What is Azure Advisor?",
    answer: "Azure Advisor provides personalized recommendations to improve reliability, security, performance, cost, and operational excellence."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.4",
    objectiveTitle: "Describe monitoring tools in Azure",
    skill: "Describe Azure Service Health",
    question: "What is Azure Service Health?",
    answer: "Azure Service Health provides personalized alerts and guidance about Azure service issues that may affect your resources."
  },
  {
    category: "Management & Governance",
    objective: "OBJ 3.4",
    objectiveTitle: "Describe monitoring tools in Azure",
    skill: "Describe Azure Monitor",
    question: "What does Azure Monitor include?",
    answer: "Azure Monitor collects and analyzes metrics and logs, and includes tools such as Log Analytics, alerts, and Application Insights."
  }
];

const categoryFilter = document.querySelector("#category-filter");
const objectiveFilter = document.querySelector("#objective-filter");
const cardPosition = document.querySelector("#card-position");
const cardTotal = document.querySelector("#card-total");
const cardCategory = document.querySelector("#card-category");
const cardObjective = document.querySelector("#card-objective");
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

function loadFilters() {
  const categories = [...new Set(cards.map((card) => card.category))].sort();
  const objectives = [...new Map(cards.map((card) => [
    card.objective,
    `${card.objective}: ${card.objectiveTitle}`
  ])).entries()];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  objectives.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    objectiveFilter.appendChild(option);
  });
}

function renderCard() {
  const currentCard = filteredCards[currentIndex];

  if (!currentCard) {
    cardPosition.textContent = "0";
    cardTotal.textContent = "0";
    filteredCount.textContent = "0";
    cardCategory.textContent = "No cards";
    cardObjective.textContent = "No objective";
    cardSide.textContent = "Empty";
    cardText.textContent = "No flashcards match these filters.";
    return;
  }

  cardPosition.textContent = String(currentIndex + 1);
  cardTotal.textContent = String(filteredCards.length);
  filteredCount.textContent = String(filteredCards.length);
  cardCategory.textContent = currentCard.category;
  cardObjective.textContent = `${currentCard.objective} - ${currentCard.skill}`;
  cardSide.textContent = isAnswerVisible ? "Answer" : "Question";
  cardText.textContent = isAnswerVisible ? currentCard.answer : currentCard.question;
  flashcard.setAttribute("aria-pressed", String(isAnswerVisible));
}

function applyFilters() {
  const selectedCategory = categoryFilter.value;
  const selectedObjective = objectiveFilter.value;

  filteredCards = cards.filter((card) => {
    const matchesCategory = selectedCategory === "All" || card.category === selectedCategory;
    const matchesObjective = selectedObjective === "All" || card.objective === selectedObjective;
    return matchesCategory && matchesObjective;
  });

  currentIndex = 0;
  isAnswerVisible = false;
  renderCard();
}

function showNextCard() {
  if (filteredCards.length === 0) return;
  currentIndex = (currentIndex + 1) % filteredCards.length;
  isAnswerVisible = false;
  renderCard();
}

function showPreviousCard() {
  if (filteredCards.length === 0) return;
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
  categoryFilter.value = "All";
  objectiveFilter.value = "All";
  currentIndex = 0;
  isAnswerVisible = false;
  applyFilters();
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

categoryFilter.addEventListener("change", applyFilters);
objectiveFilter.addEventListener("change", applyFilters);
nextButton.addEventListener("click", showNextCard);
previousButton.addEventListener("click", showPreviousCard);
shuffleButton.addEventListener("click", shuffleCards);
resetButton.addEventListener("click", resetStats);
knownButton.addEventListener("click", () => scoreCard("known"));
missedButton.addEventListener("click", () => scoreCard("missed"));

loadFilters();
renderCard();
