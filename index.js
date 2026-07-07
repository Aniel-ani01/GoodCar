
// Dictionnaire de traductions
const translations = {
  en: {
    tagline: "Let's get you in the road",
    location: "Near Lycée Avedji Elavagnon, Lomé, Togo",
    signature: "We are your partner to drive with confidence ✨",
    whatsapp: "WhatsApp",
    tiktok: "TikTok",
    mail: "Email"
  },
  fr: {
    tagline: "Soyez sur la route avec nous",
    location: "Face du Lycée Avedji Elavagnon, Lomé, Togo",
    signature: "Nous sommes votre partenaire pour rouler en toute confiance ✨",
    whatsapp: "WhatsApp",
    tiktok: "TikTok",
    mail: "Courrier"
  },
  zh: {
    tagline: "让我们带您上路",
    location: "洛美阿维季埃拉瓦尼翁中学附近，多哥",
    signature: "我们是您安心驾驶的合作伙伴 ✨",
    whatsapp: "WhatsApp",
    tiktok: "TikTok",
    mail: "邮件"
  }
};

// Langue actuelle
let currentLanguage = 'en';

// Fonction pour traduire le site
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

let slideIndex = 1;
let slides = document.querySelectorAll(".slides img");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Défilement automatique toutes les 5 secondes
setInterval(() => {
  plusSlides(1);
}, 5000);

const carousel = document.querySelector("#carousel .logos-slide");

if (carousel) {
  carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
  });
}

// Language Selector
function toggleLanguageMenu() {
  const menu = document.getElementById("languageMenu");
  menu.classList.toggle("show");
}

function changeLanguage(lang) {
  event.preventDefault();
  
  const langText = document.querySelector(".lang-text");
  
  const langLabel = {
    'fr': 'FR',
    'en': 'EN',
    'zh': 'ZH'
  };
  
  currentLanguage = lang;
  langText.textContent = langLabel[lang] || 'EN';
  
  // Traduire la page
  translatePage(lang);
  
  // Fermer le menu
  const menu = document.getElementById("languageMenu");
  menu.classList.remove("show");
  
  // Sauvegarder la langue préférée
  localStorage.setItem('preferredLanguage', lang);
}

// Charger la langue sauvegardée ou utiliser l'anglais par défaut
window.addEventListener('load', () => {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  currentLanguage = savedLanguage;
  
  const langText = document.querySelector(".lang-text");
  const langLabels = { 'fr': 'FR', 'en': 'EN', 'zh': 'ZH' };
  langText.textContent = langLabels[savedLanguage];
  
  // Appliquer la traduction au chargement
  translatePage(savedLanguage);
});

// Fermer le menu quand on clique ailleurs
document.addEventListener("click", function(event) {
  const selector = document.querySelector(".language-selector");
  if (selector && !selector.contains(event.target)) {
    const menu = document.getElementById("languageMenu");
    menu.classList.remove("show");
  }
});

