(function ($) {
    "use strict";
    jQuery(window).on('load', function () {
        $(".preloader").delay(1600).fadeOut("slow");
    });

    setTimeout(myGreeting, 1800);

    function myGreeting() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {},
            scrollContainer: null,
            resetAnimation: true,
        });
        wow.init();
    }
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header.style-1, header.style-2, header.style-3');
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    $('.search-btn').on("click", function () {
        $('.mobile-search').addClass('slide');
    });
    $('.search-cross-btn').on("click", function () {
        $('.mobile-search').removeClass('slide');
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.scroll-btn').addClass('show');
        } else {
            $('.scroll-btn').removeClass('show');
        }
    });
    $('.scroll-btn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    $('.mobile-menu-btn').on("click", function () {
        $('.main-menu').addClass('show-menu');
    });
    $('.menu-close-btn').on("click", function () {
        $('.main-menu').removeClass('show-menu');
    });
    $('.dropdown-icon').on('click', function () {
        $(this).toggleClass('active').next('ul').slideToggle();
        $(this).parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().children('.active').removeClass('active');
    });
    var toggleIcon = document.querySelectorAll('.sidebar-menu-icon')
    var closeIcon = document.querySelectorAll('.cross-icon')
    var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')
    toggleIcon.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
                el.classList.add('show-sidebar')
            })
        })
    })
    closeIcon.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
                el.classList.remove('show-sidebar')
            })
        })
    })
    window.onclick = function (event) {
        searchWrap.forEach((el) => {
            if (event.target === el) {
                el.classList.remove('show-sidebar')
            }
        })
    }
    var heroSliderTwo = new Swiper('.banner1', {
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000
        },
        pagination: {
            el: ".hero-one-pagination",
            clickable: true,
        }
    });
    var swiper = new Swiper(".category1-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        roundLengths: true,
        navigation: {
            nextEl: '.category-prev1',
            prevEl: '.category-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            440: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
            1400: {
                slidesPerView: 7
            },
        }
    });
    var swiper = new Swiper(".category2-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        roundLengths: true,
        pagination: false,
        navigation: {
            nextEl: '.category-prev2',
            prevEl: '.category-next2',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            380: {
                slidesPerView: 2
            },
            540: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
            1400: {
                slidesPerView: 7
            },
        }
    });
    var swiper = new Swiper(".upcoming-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: '.coming-prev1',
            prevEl: '.coming-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".upcoming-slider2", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: '.coming-prev2',
            prevEl: '.coming-next2',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                pagination: false
            },
            480: {
                slidesPerView: 1,
                pagination: false
            },
            768: {
                slidesPerView: 2,
                pagination: false
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".upcoming-slider3", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: '.coming-prev3',
            prevEl: '.coming-next3',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 2,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        navigation: {
            nextEl: '.blog-prev1',
            prevEl: '.blog-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        navigation: {
            nextEl: '.testi-prev1',
            prevEl: '.testi-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1,
                autoplay: true,
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".testimonial-slider2", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        navigation: {
            nextEl: '.testi-prev2',
            prevEl: '.testi-next2',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1,
                autoplay: true,
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });

    $(".auc-slide").owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        rewind:true,
        dotsContainer: '.dots-auc',
        nav: false,
        rtl: true
    });



    $('.countdown').attr('data-date');


    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });
    }
    const togglePassword2 = document.getElementById('togglePassword2');
    const password2 = document.querySelector('#password2');
    if (togglePassword2) {
        togglePassword2.addEventListener('click', function (e) {
            const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
            password2.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });
    }

    const togglePassword3 = document.getElementById('togglePassword3');
    const password3 = document.querySelector('#password3');
    if (togglePassword3) {
        togglePassword3.addEventListener('click', function (e) {
            const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
            password3.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });
    }
    $(".counter-item").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll('.odometer')[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $(".counter-single").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll('.odometer')[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $('.popup-youtube').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    $('.auc-bid .plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.auc-bid .minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.tabs-nav a').click(function () {
        // Check for active
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');
        // Display active tab
        let currentTab = $(this).attr('href');
        $('.tabs-content .content-div').hide();
        $(currentTab).show();
        return false;
    });

    $(".hijri-date-input").hijriDatePicker({
        isRTL: true,
        locale: "ar-sa",
        format: "DD-MM-YYYY",
        hijriFormat: "iYYYY-iMM-iDD",
        dayViewHeaderFormat: "MMMM YYYY",
        hijriDayViewHeaderFormat: "iMMMM iYYYY",
    });

    $('.table.datatable').DataTable({
        lengthChange: true,
        language: {
            "url": "http://cdn.datatables.net/plug-ins/1.12.1/i18n/ar.json"
        }
    });

    $('.toolbox-layout .btn-layout').on('click', function (e) {
        if ($(this).hasClass('icon-mode-grid')) {
            $('.btn-layout').removeClass('active');
            $(this).addClass('active')
            $('.auctions-card').removeClass('list').addClass('grid');
        } else if ($(this).hasClass('icon-mode-list')) {
            $('.btn-layout').removeClass('active');
            $(this).addClass('active')
            $('.auctions-card').removeClass('grid').addClass('list');
        }
    });

    $('select').select2();


}(jQuery));