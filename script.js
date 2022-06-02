const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    //FLEXAS DA PAGINAÇÃO
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    //PAGINAÇÃO
    pagination: {
        el: '.swiper-pagination',
      },
    mousewheel: true,
    keyboard: true,
})