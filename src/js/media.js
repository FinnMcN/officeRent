import move from "./adaptive.js";
import adaptive from "./adaptive.js";

export default function media() {
    const officeForm = document.querySelectorAll(".office-form");
    const searchItems = document.querySelectorAll(".search-item");

    function adaptiveOfficeForm(width) {
        if (officeForm.length !== 0) {
            if (width <= 1390 && width >= 1001) {
                officeForm.forEach((item) => {
                    //input wrapper
                    if (!item.querySelector(".office-form__input-wrapper")) {
                        const officeFormWrapper = document.createElement("div");
                        const moveTo = item.querySelector(".office-form__title");
                        officeFormWrapper.classList.add("office-form__input-wrapper");

                        moveTo.after(officeFormWrapper);
                    }
                });
            }
            
            officeForm.forEach((item) => {
                const cityInput = {
                    selector: item.querySelector(".office-form__city-input"),
                    start: {
                        relativeEl: item.querySelector(".office-form__title"),
                        method: "after",
                    },
                    replace: {
                        relativeEl: item.querySelector(".office-form__input-wrapper"),
                        method: "append",
                    },
                };
                const dateInput = {
                    selector: item.querySelector(".office-form__date-input"),
                    start: {
                        relativeEl: item.querySelector(".office-form__tags"),
                        method: "after",
                    },
                    replace: {
                        relativeEl: item.querySelector(".office-form__input-wrapper"),
                        method: "append",
                    },
                };
                const defBtn = {
                    selector: item.querySelector(".office-form__btn"),
                    start: {
                        relativeEl: item,
                        method: "append",
                    },
                    replace: {
                        relativeEl: item.querySelector(".office-form__tags"),
                        method: "append",
                    },
                };
                adaptive([cityInput, dateInput, defBtn], width <= 1390 && width >= 1001);
            });  
            
            if (!(width <= 1390 && width >= 1001)) {
                officeForm.forEach((item) => {
                    //wrapper remove
                    if (item.querySelector(".office-form__input-wrapper")) {
                        item.querySelector(".office-form__input-wrapper").remove();
                    }
                });
            }
        }
    }

    function adaptiveSearchItem(width) {    
        searchItems.forEach(item => {
            const tags = {
                selector: item.querySelector(".search-item__tags"),
                start: {
                    relativeEl: item.querySelector(".search-item__header"),
                    method: "after",
                },
                replace: {
                    relativeEl: item.querySelector(".search-item__slider"),
                    method: "after",
                },
            };
            const itemInfo = {
                selector: item.querySelector(".search-item__info"),
                start: {
                    relativeEl: item.querySelector(".search-item__slider"),
                    method: "after",
                },
                replace: {
                    relativeEl: item.querySelector(".search-item__slider"),
                    method: "before",
                },
            };
            const itemFavorite = {
                selector: item.querySelector(".search-item__favorite"),
                start: {
                    relativeEl: item.querySelector(".search-item__rate"),
                    method: "prepend",
                },
                replace: {
                    relativeEl: item.querySelector(".search-item__slider"),
                    method: "prepend",
                },
            };
            const rateValue = {
                selector: item.querySelector(".search-item__rate"),
                start: {
                    relativeEl: item.querySelector(".search-item__header"),
                    method: "append",
                },
                replace: {
                    relativeEl: item.querySelector(".search-item__type"),
                    method: "append",
                },
            };
            const itemNumbers = {
                selector: item.querySelector(".search-item__numbers"),
                start: {
                    relativeEl: item.querySelector(".search-item__info"),
                    method: "append",
                },
                replace: {
                    relativeEl: item.querySelector(".search-item__header"),
                    method: "append",
                },
            };

            adaptive([itemInfo, tags, itemFavorite, rateValue, itemNumbers], width <= 1000);
        });
                
    }

    function adaptiveMapFilters(width) {
        if (document.querySelector(".search-filters")) {
            const searchFilters = {
                selector: document.querySelector(".search-filters"),
                start: {
                    relativeEl: document.querySelector(".search__title"),
                    method: "after",
                },
                replace: {
                    relativeEl: document.querySelector(".search"),
                    method: "append",
                },
            };
            
            adaptive([searchFilters], width <= 1000);
        }

        if (document.querySelector(".filters-btn")) {
            const btn = document.querySelector(".filters-btn");
            const filtersBtnText = btn.querySelector(".map-btn__name");

            const filtersBtn = {
                selector: document.querySelector(".filters-btn"),
                start: {
                    relativeEl: document.querySelector(".search__map-nav"),
                    method: "append",
                },
                replace: {
                    relativeEl: document.querySelector(".header__top"),
                    method: "append",
                },
            };

            
            if (width <= 768) {
                btn.classList.add("header__filters-btn");
                btn.classList.remove("map-btn");
                filtersBtnText.classList.add("map-btn__name_hide");
            } else {
                btn.classList.remove("header__filters-btn");
                btn.classList.add("map-btn");
                filtersBtnText.classList.remove("map-btn__name_hide");
            }
            adaptive([filtersBtn], width <= 768);
        }
    }

    function adaptiveFooter(width) {
        const footerPolicyName = {
            selector: document.querySelector(".footer-policy__name"),
            start: {
                relativeEl: document.querySelector(".footer-policy__text"),
                method: "prepend",
            },
            replace: {
                relativeEl: document.querySelector(".footer-policy__inner"),
                method: "after",
            },
        }; 

        adaptive([footerPolicyName], width <= 1390);
    }

    function allMedia() {
        const currentWidth = window.innerWidth;
        adaptiveOfficeForm(currentWidth);
        adaptiveMapFilters(currentWidth);
        adaptiveFooter(currentWidth);
        adaptiveSearchItem(currentWidth);
    }
    window.addEventListener("resize", allMedia);
    allMedia();
}
