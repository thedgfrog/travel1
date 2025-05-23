$(document).ready(function() {
    // Toggle menu on mobile
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
 
    $(window).on('load scroll', function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
 
        // Change header background on scroll
        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
 
        // Update active class on scroll
        $('section').each(function() {
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();
 
            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar ul li a[data-scroll="' + id + '"]').addClass('active');
            }
        });
    });
 });
 