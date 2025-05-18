$(document).ready(function () {
    function initSlickIfMobile() {
        const $slider = $('.multiple-items');

        if ($(window).width() < 768) {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            }
        } else {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        }

        const $slider1 = $('.categories-grid');
        if ($(window).width() < 768) {
            if (!$slider1.hasClass('slick-initialized')) {
                $slider1.slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: true,
                    infinite: false
                });
            }
        } else {
            if ($slider1.hasClass('slick-initialized')) {
                $slider1.slick('unslick');
            }
        }
    }

    initSlickIfMobile();
    $(window).on('resize', initSlickIfMobile);
});

