$(function() {
    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 10,
        center: true,
        dots:false,
        loop: true,
        nav: true,
        freeDrag:false,
        pullDrag:false,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            // 0:{
            //     items:1,
            //     nav:true,
            //     loop:true
            // },
            // 768:{
            //     items:3,
            //     nav:true,
            //     loop:true
            // },
            // 1000:{
            //     items:3,
            //     nav:true,
            //     loop:true
            // }
        }
    });
});
