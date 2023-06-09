"use strict"

document.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(".tabheader__item");
	const tabContent = document.querySelectorAll(".tabcontent");
	const tabsParent = document.querySelector(".tabheader__items");

	function hideTabContent() {
		tabContent.forEach(item => {
			item.style.display = "none";
		});

		tabs.forEach(function (item) {
			item.classList.remove('tabheader__item_active')
		});
	}
	function showTabContent(i = 0) {
		tabContent[i].style.display = 'block';
		tabs[i].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', (event) => {
		const target  = event.target

		if(target && target.classList.contains('tabheader__item')){
			tabs.forEach((item, i) =>{
				if (target == item){
					hideTabContent()
					showTabContent(i)
				}
			});
		}

	});


});
