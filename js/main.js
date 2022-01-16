let offsetTop;
const winHeight = $(window).height();
let docScroll;
const delay = 300;

$(document).ready(function () {
    $('.home-banner-carousel').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 700,
        autoplaySpeed: 2000,
        pauseOnHover: false
    });

    $('.certificates-carousel').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });

    $('.product-carousel').slick({
        arrows: false,
        dots: true,
        // autoplay: true,
        speed: 700,
        autoplaySpeed: 2000,
        pauseOnHover: false
    });

    $('.has-drop-down > a').on('click touchend', function (e) {
        e.preventDefault();
        let parent = $(this).parent();
        if(parent.hasClass('open')){
            parent.find('.drop-down').slideUp(600);
            parent.removeClass('open');
        } else {
            parent.find('.drop-down').slideDown(600);
            parent.addClass('open');
        }
    });

    $('.hamburger-menu').on('click touchend', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $('.header-right-side').addClass('open-menu');
        } else {
            $(this).removeClass('open');
            $('.header-right-side').removeClass('open-menu');
        }
    });

    const aboutTop = $('.about-top');

    if (aboutTop.length) {
        setTimeout(function () {
            aboutTop.addClass('animate');
            setTimeout(function () {
                aboutTop.addClass('animate-gear');
            }, 600);
        }, 500);
    }

    $('.history-tab').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).siblings('.history-tab-info').slideUp(400);
            $(this).removeClass('open');
            $(this).parent().removeClass('open');
        } else {
            $('.open').siblings('.history-tab-info').slideUp(400);
            $('.open').removeClass('open');
            $(this).siblings('.history-tab-info').slideDown(400);
            $(this).addClass('open');
            $(this).parent().addClass('open');
        }
    });

    $('.send-message').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('form-open')) {
            $(this).addClass('form-open');
            $('.contact-top-form').fadeIn(600);
        }
    });

    $('.close-form').on('click touchend', function (e) {
        e.preventDefault();
        $('.send-message').removeClass('form-open');
        $('.contact-top-form').fadeOut(600);
    });

    $('.single-contact-btn').on('click touchend', function (e) {
        e.preventDefault();
        let parent = $(this).closest('.single-contact');
        let imgSrc = $(this).data('img-src');
        if (!parent.hasClass('active-contact')) {
            $('.active-contact').removeClass('active-contact');
            parent.addClass('active-contact');
            $('.contact-top-background').animate({
                opacity: '0'
            }, delay);
            setTimeout(function () {
                $('.contact-top-background').attr('style', 'background: url("' + imgSrc + '")');
                $('.contact-top-background').animate({
                    opacity: '1'
                }, delay);
            }, delay + 10);
        }
    });

    $('.more-photos img').on('click touchedn', function () {
        if (!$('.img-popup').length) {
            $('.single-news-page').append($('<div class="pop-overlay"><div class="img-popup"><img src="' + $(this).attr('src') + '" alt=""></div></div>'))
        }
        $('.pop-overlay').fadeIn(700);
    });

    $(document).on('click touchend', function (e) {
        if (e.target.className == 'pop-overlay') {
            $('.pop-overlay').fadeOut(700);
        }
    });

    function closeAllSelects(){
        $('.open.select .select-list').slideUp(300);
        $('.open.select').removeClass('open');
    }

    $('.select-value').on('click touchend', function () {
        if($(this).parent().hasClass('open')){
        } else {
            closeAllSelects();
            $(this).parent().addClass('open');
            $(this).siblings('.select-list').slideDown(300);
        }
    });

    $(document).on('click touchend', '.select.open li', function (e) {
        let input = $(this).closest('.config-part').find('input[type="hidden"]');
        let selectValue = $(this).closest('.config-part').find('.select-value');
        let optionValue = $(this).attr('value');
        let optionText = $(this).text();
        input.val(optionValue);
        selectValue.text(optionText);
        closeAllSelects();
    });

    let quantityItems = $('.quality-item');

    $(document).scroll(function () {
        docScroll = $(this).scrollTop();
        quantityItems.each(function () {
            offsetTop = ($(this).offset()).top;
            if (winHeight + docScroll > offsetTop + (winHeight / 3) && !($(this).hasClass("visible")) && $(this).is(":visible")) {
                $(this).addClass("visible");
                console.log($(this));
            }
        });
    });
});
