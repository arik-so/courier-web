(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 1000,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-list', {
        duration: 600,
        delay: 1000
    });
    sr.reveal('.sr-contact-us', {
        duration: 1000,
        scale: 0.3,
        distance: '100px',
        easing   : 'ease-in-out',
        rotate   : { z: 20 }
    }, 300);

})(jQuery); // End of use strict
