import adaptive from "./adaptive.js";
export default function addClickEvents() {
    const inputBlocks = document.querySelectorAll(".def__input");
    const favorites = document.querySelectorAll(".favorite");
    const filterButtons = document.querySelectorAll(".search__filter-button");
    const popup = document.querySelectorAll(".popup");
    const overlay = document.querySelectorAll(".overlay");
    const tables = document.querySelectorAll(".office__about-table__item");
    const menu = document.querySelector(".header__menu-icon");

    const mapBtn = document.querySelector(".search__map-show__btn");
    const backToListBtn = document.querySelector(".search__map-list__btn");
    const filtersBtn = document.querySelector(".search__map-filters__btn");

    //menu
    if (menu) {
        menu.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }

    //map btns
    if (mapBtn) {
        mapBtn.addEventListener("click", function () {
            const searchBlock = document.querySelector(".search");
            searchBlock.classList.add("show-map");
        });
    }

    if (backToListBtn) {
        backToListBtn.addEventListener("click", function () {
            const searchBlock = document.querySelector(".search");
            searchBlock.classList.remove("show-map");
        });
    }

    //show filters
    if (filtersBtn) {
        filtersBtn.addEventListener("click", function () {
            const width = window.innerWidth;
            if (width <= 1000) {
                const searchFilters = document.querySelector(".search__filters");
                searchFilters.classList.toggle("active"); 
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
            row.addEventListener("click", function (e) {
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
            input.addEventListener("focus", function () {
                inputBlock.classList.add("active");
            });
            input.addEventListener("blur", function () {
                inputBlock.classList.remove("active");
            });
        });
    }

    //like toggle anim
    if (favorites.length !== 0) {
        favorites.forEach(function (item) {
            item.addEventListener("click", function () {
                this.classList.toggle("active");
            });
        });
    }

    //filter buttons anim and popup toggle
    if (filterButtons.length !== 0) {
        filterButtons.forEach(function (filterButton) {
            filterButton.addEventListener("click", function () {
                filterButtons.forEach(function (item1) {
                    if (filterButton === item1) {
                        return;
                    }
                    if (item1.classList.contains("active")) {
                        item1.classList.toggle("active");
                    }
                });
                popup.forEach(function (popupWindow) {
                    if (filterButton.id === popupWindow.id) {
                        popupWindow.classList.toggle("active");
                        overlay[0].classList.toggle("active");
                    }
                });
                this.classList.toggle("active");
            });
        });
    }

    //anim when clicking on overlay
    if (overlay.length !== 0) {
        overlay[0].addEventListener("click", function () {
            filterButtons.forEach(function (item) {
                if (item.classList.contains("active")) {
                    item.classList.toggle("active");
                }
            });
            popup.forEach(function (popupWindow) {
                popupWindow.classList.remove("active");
            });
            overlay[0].classList.toggle("active");
        });
    }
}
