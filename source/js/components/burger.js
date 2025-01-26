document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("toggle").addEventListener("click", function() {
		document.querySelector("header").classList.toggle("header--openned")
	})
});