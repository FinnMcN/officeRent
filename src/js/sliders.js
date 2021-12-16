/* import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core"; */


//gallery sliders
let gallerySwiper;
let gallerySliderBP = window.matchMedia("(max-width: 580px)");
let isInit = false;

export default function initSwipers() {
    
    /* SwiperCore.use([Navigation, Pagination]); */
    
    if (document.querySelector(".office-gallery")) {
        window.addEventListener("resize", () => {
            gallerySlider();
        });
    }
    window.addEventListener("load", () => {
        gallerySlider();
        officesSlider();
        officeSlider();
    })
}
function gallerySlider() {
    const sliders = document.querySelectorAll(".office-gallery");

    if (!document.querySelector(".office-gallery")) {
        return;
    }

    if (gallerySliderBP.matches) {
        if (!isInit) {
            sliders.forEach((item) => {
                const nextBtn = item.querySelector(".slider__next-btn");
                const prevBtn = item.querySelector(".slider__prev-btn");

                addSwiperClasses(item);
                
                gallerySwiper = new Swiper(item, {
                    slidesPerView: 1,
                    navigation: {
                        prevEl: prevBtn,
                        nextEl: nextBtn,
                    },
                    spaceBetween: 30,
                    pagination: {
                        el: ".office-gallery__pagination",
                        type: "fraction",
                    },
                });
            });
            isInit = true;
        }
    } else {
        if (isInit) {
            sliders.forEach(item => {
                const wrapper = item.querySelector(".swiper-wrapper");
                wrapper.classList.remove("swiper-wrapper");
            })
            gallerySwiper.destroy();
            isInit = false;
        }
    }
}

function officesSlider() {
    const sliders = document.querySelectorAll(".offices-slider");

    if (!sliders) {
        return;
    }

    sliders.forEach((item) => {
        const prevBtn = item.nextElementSibling;
        const nextBtn = prevBtn.nextElementSibling;
        const pagination = document.createElement("div");

        addSwiperClasses(item);

        pagination.classList.add("offices-slider__pagination");
        item.append(pagination);

        const swiper = new Swiper(item, {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: {
                el: ".offices-slider__pagination",
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
}

function officeSlider() {
    const sliders = document.querySelectorAll(".office-slider");

    if (!sliders) {
        return;
    }

    sliders.forEach((item) => {
        const nextBtn = item.lastElementChild;
        const prevBtn = nextBtn.previousElementSibling;

        addSwiperClasses(item);
        const swiper = new Swiper(item, {
            slidesPerView: 1,
            simulateTouch: false,
            observer: true,
            observeParents: true,
            spaceBetween: 20,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
        });
    });
}

function addSwiperClasses(slider) {
    const wrapper = slider.children[0];
    const [...slides] = wrapper.children;

    slider.classList.add("swiper");
    wrapper.classList.add("swiper-wrapper");
    slides.forEach(slide => {
        slide.classList.add("swiper-slide");
    });
}