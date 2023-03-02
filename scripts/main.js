document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("burgerBar").addEventListener("click", function() {
		document.querySelector("header").classList.toggle("open")
	})
}) 
// smoothly scroll
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})