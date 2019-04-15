var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJX
	LazyFunction: function () {
		// Для лэзи загрузки 

		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top  - lazyImage.parentElement.clientHeight * 2)<= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});


		// лэзи 
		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.parentElement.clientHeight ) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});

	},



	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }
				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},

	mobileMenu: function () {
		// закрыть/открыть мобильное меню
		var toggMnu = $(".toggle-menu-mobile--js").click(function () {

			$(".toggle-menu-mobile--js").toggleClass("on");
			// $("body").toggleClass("fixed");
			$(".menu-mobile--js").toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		$('.menu-mobile--js ul li a').on('click', function () {
			$(".menu-mobile--js .toggle-mnu").click();
		});
		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				$(".toggle-menu-mobile--js").removeClass("on");
				// $("body").toggleClass("fixed");
				$(".menu-mobile--js").removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		// закрыть меню при горизонтальном свайпе
		$('.menu-mobile--js.active').swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == 'left') {
					$(".toggle-menu-mobile--js").removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
				if (direction == 'right') {
					$(".toggle-menu-mobile--js").removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
			},
			triggerOnTouchEnd: false,
		});
	},


	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},


	

 
	CustomInputFile: function CustomInputFile() {
		var file = $(".add-file input[type=file]");
		file.change(function () {
			var filename = $(this).val().replace(/.*\\/, "");
			var name = $(".add-file__filename  ");
			name.text(filename);

		});
	},

	 

	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}

};

JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	// вызов magnificPopupCall
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();
 




	var url = document.location.href;
	$.each($(".top-nav__nav a "), function () {

		if (this.href == url) {
			if ($(this).hasClass("top-nav__link") == true) {

				$(this).addClass('top-nav__link-active');
			}
			if ($(this).hasClass("footer__link") == true) {

				$(this).addClass('footer__link-active');
			}

		};

	});


	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню

		var topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
	}

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-menu-mobile--js").removeClass("on");
		// $("body").removeClass("fixed");
		$(".menu-mobile--js").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	$(".scroll-link-js,  .top-nav a").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   });

 $(".toggle-form-js").click(function(){
	 $(".tabs__text-block").slideToggle();
 })
$(".footer__top").click(function(){
	$('html, body').animate({ scrollTop: 0 }, 1100);
})
});