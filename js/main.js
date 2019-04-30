/*------------------------------------
 *Author:FortunaTheme
 *Template:AppVille
 *Version:1.0
 *-------------------------------------
 */
(function($) {

    "use strict";

    jQuery(document).ready(function() {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */

        var themeWindow = $(window);
        var pagebody = $('html, body');

        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            themeWindow.scrollTop(0);
        });



        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function() {}
        };

        // The actual plugin
        var singleNav = jQuery('.single-page-nav');
        singleNav.singlePageNav({
            offset: singleNav.outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            beforeStart: function() {
                console.log('begin scrolling');
            },
            onComplete: function() {
                console.log('done scrolling');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top Events--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function() {
            pagebody.animate({
                scrollTop: 0
            }, 2000);
        });

        themeWindow.on("scroll", function() {
            var top = themeWindow.scrollTop();
            var scrollTopArea = $("#scroll-top-area");
            if (top < 150) {
                scrollTopArea.css('display', 'none');
            } else if (top >= 150) {
                scrollTopArea.css('display', 'block');
            }
        });


        /*
         * -----------------------------------------------------------------
         *--------------------Animation using animate.css-------------------
         * -----------------------------------------------------------------
         */



        var animation1 = jQuery('.animation');

        animation1.waypoint(function() {
            var thisElement = $(this.element);
            var animation = thisElement.attr('data-animation');

            thisElement.css('opacity', '1');
            thisElement.addClass("animated " + animation).delay(2000);
        }, {
            offset: '75%',
        });

        /*
         * -----------------------------------------------------------------
         *------------------------------slicknav----------------------------
         * -----------------------------------------------------------------
         */



        var menu = $("#menu");

        menu.slicknav({
            label: '',
        });


        /*
         * -----------------------------------------------------------------
         *----------------------contact form ajax---------------------------
         * -----------------------------------------------------------------
         */



        var contactSubmit = $('#contact-submit');

        contactSubmit.on('click', function(e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();

            var message = $('#message').val();
            var form = new Array({
                'name': name,
                'email': email,
                'message': message
            });

            $.ajax({
                type: 'POST',
                url: "contact.php",
                data: ({
                    'action': 'contact',
                    'form': form
                })
            }).done(function(data) {

                var conResult = $('#contact .result');
                conResult.html(data);
                $(".contact-form-area")[0].reset();

            });

        });

        /*--------------------magnificPopup------------------*/
        if ($(".video").is("#video")) {

            var videoPlay = $('.video-play');
            videoPlay.magnificPopup({
                type: 'iframe',
                closeBtnInside: false,
                closeOnContentClick: true,
                tLoading: '', // remove text from preloader


            });
        }

        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Gallery------------------
         * -----------------------------------------------------------------
         */


        $("#owl-demo-gallery").owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            margin: 10,
            responsiveClass: true,
            center: true,
            nav: true,
            pagination: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3,
                }
            }
        });

        $(".owl-prev").html('<i class="ti-angle-left"></i>');
        $(".owl-next").html('<i class="ti-angle-right"></i>');


        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Testimonial------------------
         * -----------------------------------------------------------------
         */



        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1, //1 item above 1000px browser width
            itemsDesktop: [1000, 1], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });

        /*
         * -----------------------------------------------------------------
         *-------------------------------CounterUp---------------------------
         * -----------------------------------------------------------------
         */
        if ($(".fun-fact").is(".fun-area")) {
            var count = $('.counter');
            count.counterUp({
                delay: 10,
                time: 100,
            });
        }

    });

})(jQuery);