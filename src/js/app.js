import * as flsFunctions from "./vendor/functions.js";
import { throttle } from "./vendor/throttle.js";
import "lazysizes";
import Swiper, { Navigation, Pagination } from "swiper";

flsFunctions.isWebp();

if (navigator.userAgent.indexOf("Firefox") >= 0) {
	var elms = document.querySelectorAll("link[rel=preload][as=style]");
	for (let i = 0; i < elms.length; i++) {
		elms[i].rel = "stylesheet";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");
	const advantagesSlider = body.querySelector('.advantages__slider');

	const slider = new Swiper(advantagesSlider, {
		modules: [Navigation, Pagination],
		loop: true,
		slidesPerView: 1,
		centeredSlides: true,
		speed: 400,
		navigation: {
			nextEl: ".slider-nav__next",
			prevEl: ".slider-nav__prev",
		},
		pagination: {
			clickable: true,
			el: '.slider-counter',
			bulletClass: "slider-counter__item",
			bulletActiveClass: "slider-counter__item-active",
			type: 'bullets',
			renderBullet: function (index,  className) {
				return `<span class="${className}">${index > 9 ? (index + 1) : '0' + (index + 1)}</span>`;
			},
		},
	})

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




