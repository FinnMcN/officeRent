import adaptive from "./adaptive.js";
export default function addClickEvents() {
    const inputBlocks = document.querySelectorAll(".def-input");
    const favorites = document.querySelectorAll(".favorite");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const popup = document.querySelectorAll(".popup");
    const overlay = document.querySelectorAll(".overlay");
    const tables = document.querySelectorAll(".office__about-table__item");
    const menu = document.querySelector(".header__menu-icon");

    const mapBtn = document.querySelector(".search__map-show__btn");
    const backToListBtn = document.querySelector(".list-btn");
    const filtersBtn = document.querySelector(".filters-btn");

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
            const width = window.innerWidth;
            if (width <= 1000) {
                const searchFilters = document.querySelector(".search-filters");
                searchFilters.classList.toggle("search-filters_active"); 
            }
        });
    }

    //table info toggle
    if (tables.length !== 0) {
        const rows = [];
        let lastRow;
        tables.forEach((table) => {
            rows.push(table.children);
        });
        for (let i = 1; i < rows[0].length; i++) {
            const row = rows[0][i].children[0];
            row.addEventListener("click", function(e) {
                if (lastRow !== undefined) {
                    lastRow.classList.remove("active");
                }
                this.nextElementSibling.classList.toggle("active");
                lastRow = this.nextElementSibling;
            });
        }
    }

    //input focus anim
    if (inputBlocks.length !== 0) {
        inputBlocks.forEach((inputBlock) => {
            const input = inputBlock.children[1];
            input.addEventListener("focus", function() {
                inputBlock.classList.add("def-input--active");
            });
            input.addEventListener("blur", function() {
                inputBlock.classList.remove("def-input--active");
            });
        });
    }

    //like toggle anim
    if (favorites.length !== 0) {
        favorites.forEach(function (item) {
            item.addEventListener("click", function() {
                this.classList.toggle("active");
            });
        });
    }

    //filter buttons anim and popup toggle
    if (filterButtons.length !== 0) {
        filterButtons.forEach(function (filterButton) {
            filterButton.addEventListener("click", function() {
                popup.forEach(function (popupWindow) {
                    if (filterButton.id === popupWindow.id) {
                        popupWindow.classList.toggle("popup_active");
                        overlay[0].classList.toggle("overlay_active");
                    }
                });
                this.classList.toggle("filter-btn_active");
            });
        });
    }

    //anim when clicking on overlay
    if (overlay.length !== 0) {
        overlay[0].addEventListener("click", function () {
            filterButtons.forEach(item => {
                if (item.classList.contains("filter-btn_active")) {
                    item.classList.toggle("filter-btn_active");
                }
            });
            popup.forEach(function (popupWindow) {
                popupWindow.classList.remove("popup_active");
            });
            overlay[0].classList.toggle("overlay_active");
        });
    }
}
