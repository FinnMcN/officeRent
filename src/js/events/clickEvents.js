import Tabs from "./tabs.js";
import SwipeForm from "./swipeEvents.js";

const overlay = document.querySelector(".overlay");

export function addClickEvents() {
    const inputBlocks = document.querySelectorAll(".def-input");
    const popup = document.querySelectorAll(".popup");
    const tables = document.querySelectorAll(".table__item");
    const menu = document.querySelector(".header__menu-icon");
    const bookingForm = document.querySelector(".office__booking");
    const comments = document.querySelectorAll(".office-comments");

    //Buttons
    const favorites = document.querySelectorAll(".favorite-btn");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const mapBtn = document.querySelector(".search__map-show__btn");
    const backToListBtn = document.querySelector(".list-btn");
    const filtersBtn = document.querySelector(".filters-btn");
    

    //show more comments

    //booking form
    if (bookingForm) {
        const btnShow = document.querySelector(".booking-form__show-btn");
        const btnCallback = () => {
            new SwipeForm(bookingForm);
            bookingForm.classList.toggle("office__booking_active");
            disableScroll();
        }
        
        btnShow.addEventListener("click", btnCallback);
    }

    //menu
    if (menu) {
        menu.addEventListener("click", function () {
            this.classList.toggle("header__menu-icon--active");
        });
    }

    //map btns
    if (mapBtn) {
        mapBtn.addEventListener("click", function () {
            const mapBlock = document.querySelector(".search__map-block");
            const showBtn = document.querySelector(".search__map-show__btn");

            mapBlock.classList.add("search__map-block_active");
            showBtn.classList.add("search__map-show__btn_active");
        });
    }

    if (backToListBtn) {
        backToListBtn.addEventListener("click", function () {
            const mapBlock = document.querySelector(".search__map-block");
            const showBtn = document.querySelector(".search__map-show__btn");

            mapBlock.classList.remove("search__map-block_active");
            showBtn.classList.remove("search__map-show__btn_active");
        });
    }

    //show filters
    if (filtersBtn) {
        filtersBtn.addEventListener("click", function () {
            const width = screen.width;
            if (width <= 1000) {
                const searchFilters = document.querySelector(".search-filters");
                searchFilters.classList.toggle("search-filters_active");
            }
        });
    }

    //table info toggle
    if (tables.length !== 0) {
        new Tabs(tables, "table__item_active");
    }

    //input focus anim
    if (inputBlocks.length !== 0) {
        inputBlocks.forEach((inputBlock) => {
            const input = inputBlock.children[1];
            input.addEventListener("focus", function () {
                inputBlock.classList.add("def-input--active");
            });
            input.addEventListener("blur", function () {
                inputBlock.classList.remove("def-input--active");
            });
        });
    }

    //like toggle anim
    if (favorites.length !== 0) {
        favorites.forEach(function (item) {
            item.addEventListener("click", function () {
                this.classList.toggle("favorite-btn_active");
            });
        });
    }

    //filter buttons anim and popup toggle
    if (filterButtons.length !== 0) {
        filterButtons.forEach(function (filterButton) {
            filterButton.addEventListener("click", function () {
                popup.forEach(function (popupWindow) {
                    if (filterButton.id === popupWindow.id) {
                        popupWindow.classList.toggle("popup_active");
                        overlay.classList.toggle("overlay_active");
                    }
                });
                this.classList.toggle("filter-btn_active");
            });
        });
    }

    //anim when clicking on overlay
    if (overlay && overlay.length !== 0) {
        overlay.addEventListener("click", function () {
            filterButtons.forEach((item) => {
                if (item.classList.contains("filter-btn_active")) {
                    item.classList.toggle("filter-btn_active");
                }
            });
            popup.forEach(function (popupWindow) {
                popupWindow.classList.remove("popup_active");
            });
            overlay.classList.toggle("overlay_active");
        });
    }

}

export function disableScroll() {
    document.body.style.overflow = "hidden";
}
export function enableScroll() {
    document.body.removeAttribute("style");
}
