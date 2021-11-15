/* import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core"; */


export default function initSwipers() {
    const swiperItems = document.querySelectorAll(".slider-item");
    const swiperWrappers = document.querySelectorAll(".slider-wrapper");
    
    const officesSliders = document.querySelectorAll(".offices__slider");
    const officeSliders = document.querySelectorAll(".office__slider");

    /* SwiperCore.use([Navigation, Pagination]); */

    //add swiper classes to slider items -> need optimization
    swiperItems.forEach(item => {
        item.classList.add("swiper-slide");
    });
    swiperWrappers.forEach(item => {
        item.classList.add("swiper-wrapper");
    });  
    officesSliders.forEach(function(item) {
        const prevBtn = item.nextElementSibling;
        const nextBtn = prevBtn.nextElementSibling;
        const pagination = document.createElement("div");

        item.classList.add("swiper");
        pagination.classList.add("offices__slider-pagination");
        item.append(pagination);

        const swiper = new Swiper(item, {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: {
                el: ".offices__slider-pagination",
            },
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
                pagination: "",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1391: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    });
    officeSliders.forEach(function (item) {
        const nextBtn = item.lastElementChild;
        const prevBtn = nextBtn.previousElementSibling;
        item.classList.add("swiper");
        const swiper = new Swiper(item, {
            slidesPerView: 1,
            simulateTouch: false,
            observer: true,
            observeParents: true,
            /* autoHeight: true, */
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
            breakpoints: {
                1000: {
                    autoHeight: false,
                },
            },
        });
    });
}
