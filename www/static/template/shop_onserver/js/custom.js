/***************************************************************************************************************
 ||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR RepairPlus            ||||||||||||||||||||||||||||||||||||||
 ****************************************************************************************************************
 ||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
 ****************************************************************************************************************
 ****************************************************************************************************************
 01. Revolution slider
 02. Sticky header
 03. Prealoader
 04. Language switcher
 05. prettyPhoto
 06. BrandCarousel
 07. Testimonial carousel
 08. ScrollToTop
 09. Cart Touch Spin
 10. PriceFilter
 11. Cart touch spin
 12. Fancybox activator
 13. ContactFormValidation
 14. Scoll to target
 15. PrettyPhoto

 ****************************************************************************************************************
 ||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
 ****************************************************************************************************************/

'use strict';

// ===RevolutionSliderActiver===


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if (r != null) return unescape(r[2]);
    return "";
}


function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper #slider1').length) {
        $('#slider1').revolution({
            sliderType: 'standard',
            sliderLayout: 'auto',
            delay: 5000,

            navigationType: 'bullet',
            navigationArrows: '0',
            navigationStyle: 'preview3',
            dottedOverlay: 'yes',
            hideTimerBar: 'off',
            onHoverStop: 'off',
            navigation: {
                arrows: {enable: true}
            },
            gridwidth: [1200, 940, 720, 480],
            gridheight: [540, 550, 550, 500]
        });
    }
    ;
}

// ====Main menu===
function mainmenu() {
    // Submenu Dropdown Toggle
    if ($('.main-menu li.dropdown ul').length) {
        $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

        // Dropdown Button
        $('.main-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
    }
}

// ===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    }
    ;
}

//  scoll to Top
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $('.scroll-to-target').on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    }
}

// ===Prealoder===
function prealoader() {
    if ($('.preloader').length) {
        $('.preloader').delay(100).fadeOut(100);
    }
}

// ===Language switcher===
function languageSwitcher() {
    if ($('#polyglot-language-options').length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
            onChange: function (evt) {
                alert('The selected language is: ' + evt.selectedItem);
            }

        });
    }
    ;
}

// ===Prettyphoto Lightbox===
function prettyPhoto() {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        slideshow: 3000,
        autoplay_slideshow: false,
        fullscreen: true,
        social_tools: false
    });
}

// ===Brand Carousel===
function brandCarousel() {
    if ($('.brand').length) {
        $('.brand').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1100: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }
}

// ===Testimonial Slider===
function testimonialSlider() {
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 700,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1100: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }
}

//  Fact counter
function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function () {
            timer.countTo();
        });
    }
}

// Accordion Box
function accordion() {
    if ($('.accordion-box').length) {
        $('.accordion-box').on('click', '.accord-btn', function () {
            if ($(this).hasClass('active') !== true) {
                $('.accordion .accord-btn').removeClass('active');
            }

            if ($(this).next('.accord-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);
            }
        });
    }
}

// Cart Touch Spin
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $('input.quantity-spinner').TouchSpin({
            verticalbuttons: true
        });
    }
}

// Select menu
function selectDropdown() {
    if ($('.selectmenu').length) {
        $('.selectmenu').selectmenu();
    }
    ;
}

//  Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function (event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    }
    ;
}

// Date picker
function datepicker() {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    }
    ;
}

// Time picker
function timepicker() {
    $('input[name="time"]').ptTimeSelect();
}

function shopList() {
    var list = $('#list');
    var contentGoods = $('#contentGoods');
    contentGoods.empty();
    $.getJSON('./json/GoodsList.json', function (data) {
        var goods = data || [];
        goods.forEach(function (good, index) {
            contentGoods.append(getGoodInfo(good));
        });
        list.on('click', 'li', function () {
            var type = $(this).attr('data-title');
            $('.goodsList').hide();
            var select = $('[data-type="' + type + '"]');
            select.show();

            // select.show().siblings('.goodsList:not('+select+')').hide();
        });
        list.find('li:eq(0)').trigger('click');
    });
}

function blogList() {
    var list = $('#list');
    var blogContainer = $('#blogContainer');
    blogContainer.empty();
    $.getJSON('./json/BlogsList.json', function (data) {
        (data || []).forEach(function (bolg, index) {
            blogContainer.append(getBolgInfo(bolg));
        });
        list.on('click', 'li', function () {
        });
        list.find('li:eq(0)').trigger('click');
    });
}

function getBolgInfo(bolg) {
    var blogDom = ' <div class="single-blog-item">\n' +
        '                        <div class="img-holder">\n' +
        '                            <img src="' + bolg.img + '" alt="Awesome Image">\n' +
        '                            <div class="overlay">\n' +
        '                                <div class="box">\n' +
        '                                    <div class="content">\n' +
        '                                        <a target="_blank" href="blog-single.html?id=' + bolg.id + '""><i class="fa fa-link"></i></a>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="text-holder">\n' +
        '                            <div class="date-box">\n' +
        '                                <h4>' + bolg.time + '</h4>\n' +
        '                            </div>\n' +
        '                            <div class="text-box">\n' +
        '                                <a target="_blank" href="blog-single.html?id=' + bolg.id + '"">\n' +
        '                                    <h3 class="blog-title">' + bolg.title + '</h3>\n' +
        '                                </a>\n' +
        '                                <div class="text">\n' +
        '                                    <p>' + bolg.desc + '</p>\n' +
        '                                    <div class="bottom clearfix">\n' +
        '                                        <div class="readmore pull-left">\n' +
        '                                            <a target="_blank" href="blog-single.html?id=' + bolg.id + '">阅读更多<i class="fa fa-caret-right" aria-hidden="true"></i></a>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>';
    return $(blogDom);
}

function getGoodInfo(good) {
    var goodDom = '<div style="width:280px;height:320px;" class="col-md-4 col-sm-4 col-xs-12 goodsList" data-type=' + good.type + '>\n' +
        '                            <div class="single-product-item">\n' +
        '                                <div class="img-holder">\n' +
        '                                    <img src="' + good.img + '" width="200" height="180" alt="Awesome Product Image">\n' +
        '                                    <div class="overlay-box">\n' +
        '                                        <div class="box">\n' +
        '                                            <div class="content">\n' +
        '                                                <a class="thm-btn bg-1" target="_blank" href="shop-single.html?id=' + good.id + '">查看详情</a>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="title-holder">\n' +
        '                                    <div class="top clearfix">\n' +
        '                                        <div class="product-title pull-left">\n' +
        '                                            <a target="_blank" href="shop-single.html?id=' + good.id + '">\n' +
        '                                                <h5>' + good.info + '</h5>\n' +
        '                                            </a>\n' +
        '                                        </div>\n' +
        '                                        <div class="review-box pull-right">\n' +
        '                                            <ul>\n' +
        '                                                <li><i class="fa fa-star"></i></li>\n' +
        '                                                <li><i class="fa fa-star"></i></li>\n' +
        '                                                <li><i class="fa fa-star"></i></li>\n' +
        '                                                <li><i class="fa fa-star"></i></li>\n' +
        '                                            </ul>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '\n' +
        '                            </div>\n' +
        '                        </div>';

    return $(goodDom);
}


function updateBlogInfo() {
    var id = GetQueryString("id");
    if (id) {
        $.getJSON('./json/BlogsList.json', function (data) {
            var blogInfo = data.filter(function (o) {
                return o.id === id
            })[0];
            $('#titleBlog').text(blogInfo.title);
            $('#imgBlog').attr("src",blogInfo.img);
            $('#descBlog').text(blogInfo.desc);
        });
    }
}
function updateGoodInfo() {
    var id = GetQueryString("id");
    if (id) {
        $.getJSON('./json/GoodsList.json', function (data) {
            var good = data.filter(function (o) {
                return o.id === id
            })[0];
            $('.goodInfo').text(good.info);
            $('#imgGood').attr("src",good.img);
            $('#goodDesc').text(good.info);
        });
    }
}
// Contact Form Validation
if ($('#contact-form').length) {
    $('#contact-form').validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data('loading-text'));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status = 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () {
                        $(form_result_div).fadeOut('slow');
                    }, 6000);
                }
            });
        }
    });
}

// Dom Ready Function
$(function () {
    // (function ($) {
        // add your functions
        revolutionSliderActiver();
        mainmenu();
        languageSwitcher();
        brandCarousel();
        testimonialSlider();
        scrollToTop();
        prettyPhoto();
        CounterNumberChanger();
        accordion();
        cartTouchSpin();
        selectDropdown();
        priceFilter();
        datepicker();
        timepicker();
        shopList();
        blogList();
        updateBlogInfo();
        updateGoodInfo();
    // })(jQuery);
});

jQuery(window).on('scroll', function () {
    (function ($) {
        stickyHeader();
    })(jQuery);
});

// Instance Of Fuction while Window Load event
jQuery(window).on('load', function () {
    (function ($) {
        prealoader();
    })(jQuery);
});
