(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var logo = document.querySelector("#logo");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
		logo.classList.toggle("hideLogo");
	}
	

	button.addEventListener("click", hamburgerMenu, false);

		
})();