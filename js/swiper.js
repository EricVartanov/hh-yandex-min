// const swiper1 = new Swiper(".idc-swiper", {
//     // Default parameters
//     loop: true,
//     direction: "horizontal",
//     slidesPerView: 1,
//     spaceBetween: 0,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     touchReleaseOnEdges: true,
//     allowTouchMove: true,
//     watchOverflow: true,
//     grabCursor: true,
//     thumbs: {
//         swiper: swiper2,
//     },
// });
// const swiper2 = new Swiper(".idc-swiper2", {
//     // Default parameters
//     loop: false,
//     direction: "horizontal",
//     slidesPerView: 5,
//     spaceBetween: 5,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     touchReleaseOnEdges: true,
//     allowTouchMove: true,
//     watchOverflow: true,
//     grabCursor: true,
// });
const swiper = new Swiper(".idc-swiper", {
    spaceBetween: 5,
    slidesPerView: 5,
    freeMode: false,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".idc-swiper2", {
    spaceBetween: 10,
    pagination: {
        el: ".idc-swiper-pagination",
        type: "bullets",
    },
    thumbs: {
        swiper: swiper,
    },
    grabCursor: true,
});
