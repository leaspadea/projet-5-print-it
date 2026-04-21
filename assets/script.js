const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments du DOM
const bannerImg = document.querySelector("#banner .banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector("#banner .dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Index de la slide actuellement affichée
let currentIndex = 0;

// Étape 3 : Génération dynamique des bullet points (un par slide)
slides.forEach((_, index) => {
	const dot = document.createElement("span");
	dot.classList.add("dot");
	// Le premier point est marqué comme sélectionné par défaut
	if (index === 0) {
		dot.classList.add("dot_selected");
	}
	dotsContainer.appendChild(dot);
});

// Sélection de tous les points après leur création
const dots = document.querySelectorAll(".dot");

/**
 * Met à jour la slide affichée : image, texte et point actif.
 * @param {number} index - Index de la slide à afficher
 */
function updateSlide(index) {
	// Étape 4 : changement de l'image et du texte
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;

	// Mise à jour du point actif
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[index].classList.add("dot_selected");
}

// Étapes 2, 4 & 5 : Event listeners sur les flèches avec défilement infini
arrowLeft.addEventListener("click", () => {
	// Si on est sur la première slide, on revient à la dernière
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlide(currentIndex);
});

arrowRight.addEventListener("click", () => {
	// Si on est sur la dernière slide, on revient à la première
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlide(currentIndex);
});
