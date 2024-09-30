window.addEventListener('DOMContentLoaded', function(){
    const swiper_1 = new Swiper('.swiper_rated', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        allowTouchMove: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

})