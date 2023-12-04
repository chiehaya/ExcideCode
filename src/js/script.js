
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// ハンバーガーメニュー
$(function () {
    $(".js-hamburger").click(function () {
        $(this).toggleClass("is-open");
        if ($(this).hasClass("is-open")) {
            openDrawer();
        } else {
            closeDrawer();
        }
    });

    // backgroundまたはページ内リンクをクリックで閉じる
    $(".js-drawer a[href]").on("click", function () {
        closeDrawer();
    });

    // resizeイベント
    $(window).on('resize', function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            closeDrawer();
        }
    });
    
    
});

function openDrawer() {
    $(".js-drawer").addClass("is-open");
    $(".js-hamburger").addClass("is-open");
    $(".header__logo").addClass("is-open");
    $(".header__logo").addClass("is-open");
}

function closeDrawer() {
    $(".js-drawer").removeClass("is-open");
    $(".js-hamburger").removeClass("is-open");
    $(".header__logo").removeClass("is-open");
    $(".header__logo").removeClass("is-open");
}

// mv_swiper
const mv_swiper = new Swiper(".js-mv-swiper", {
    loop: true,
    speed: 2000,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// フェードインアニメーション
var fadeIn = $('.service__title,.works__title,.news__title,.works__article,.news__nav,.news__contents');
	$(window).scroll(function () {
	$(fadeIn).each(function () {
		var offset = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll > offset - windowHeight + 150) {
			$(this).addClass("is-scroll-in");
			}
	});
});

    // profile-swiper
    const profileSwiper = new Swiper(".js-profile-swiper", {
        loop: true,
        spaceBetween: 4,
        slidesPerView: 2.05,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
        delay: 0,
        }
    });

    // 画面幅が768px以下の場合のSwiper設定
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleViewportChange() {
            if (mediaQuery.matches) {
            // 画面幅が768px以下の場合
            profileSwiper.params.slidesPerView = 2.05;
            profileSwiper.update(); // Swiperを更新して変更を反映
            } else {
            // 画面幅が768pxより大きい場合
            profileSwiper.params.slidesPerView = 3;
            profileSwiper.update(); // Swiperを更新して変更を反映
        }
    }

    // 初回設定
    handleViewportChange();

    // ウィンドウのリサイズ時に発火
    window.addEventListener("resize", handleViewportChange);

});
