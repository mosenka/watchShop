import * as flsFunctions from "./vendor/functions.js";
import { throttle } from "./vendor/throttle.js";
import "lazysizes";
import Swiper, { Navigation } from "swiper";
// import Inputmask from "inputmask";

flsFunctions.isWebp();

if (navigator.userAgent.indexOf("Firefox") >= 0) {
	var elms = document.querySelectorAll("link[rel=preload][as=style]");
	for (let i = 0; i < elms.length; i++) {
		elms[i].rel = "stylesheet";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");

/*
	const swiper = new Swiper(".banners", {
		modules: [Navigation],
		loop: true,
		initialSlide: 1,
		slidesPerView: 1,
		centeredSlides: true,
		speed: 400,
		spaceBetween: 20,
		navigation: {
			nextEl: ".banners__nav--next",
			prevEl: ".banners__nav--prev",
		},
	});*/


	const destroySlider = (slider) => {
		slider.destroy(true, true);
		const wrapper = newsList.querySelector(".swiper-wrapper");
		if(wrapper) {
			wrapper.removeAttribute("style")
		}


		const slidersArr = wrapper
			? wrapper.querySelectorAll(".swiper-slide")
			: false;

		if (slidersArr && slidersArr.length > 0) {
			slidersArr.forEach((slide) => {
				slide.removeAttribute("style");
			});
		}
	};

	const udateSlider = (slider) => {
		slider.init();
		slider.update();
	};

	/*if (window.innerWidth >= 576) {
		destroySlider(newsSlider);
	} else {
		newsSlider.init();
	}*/

	/*const resize = throttle(
		window.addEventListener(
			"resize",
			function () {
				if(window.innerWidth < 576) {
					udateSlider()
				} else {
					destroySlider(newsSlider);
				}
			},
			"500"
		)
	);*/
});




