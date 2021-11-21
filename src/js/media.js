import move from "./adaptive.js";
import adaptive from "./adaptive.js";

export default function media() {
    const officeForm = document.querySelectorAll(".office-form");
    const searchItems = document.querySelectorAll(".search__item");

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
                selector: item.querySelector(".search__item-tags"),
                start: {
                    relativeEl: item.querySelector(".search__item-header"),
                    method: "after",
                },
                replace: {
                    relativeEl: item.querySelector(".search__item-slider"),
                    method: "after",
                },
            };
            const itemInfo = {
                selector: item.querySelector(".search__item-info"),
                start: {
                    relativeEl: item.querySelector(".search__item-slider"),
                    method: "after",
                },
                replace: {
                    relativeEl: item.querySelector(".search__item-slider"),
                    method: "before",
                },
            };
            const itemFavorite = {
                selector: item.querySelector(".search__item-favorite"),
                start: {
                    relativeEl: item.querySelector(".search__item-rate"),
                    method: "prepend",
                },
                replace: {
                    relativeEl: item.querySelector(".search__item-slider"),
                    method: "prepend",
                },
            };
            const rateValue = {
                selector: item.querySelector(".search__item-rate"),
                start: {
                    relativeEl: item.querySelector(".search__item-header"),
                    method: "append",
                },
                replace: {
                    relativeEl: item.querySelector(".search__item-type"),
                    method: "append",
                },
            };
            const itemNumbers = {
                selector: item.querySelector(".search__item-numbers"),
                start: {
                    relativeEl: item.querySelector(".search__item-info"),
                    method: "append",
                },
                replace: {
                    relativeEl: item.querySelector(".search__item-header"),
                    method: "append",
                },
            };

            adaptive([itemInfo, tags, itemFavorite, rateValue, itemNumbers], width <= 1000);
        });
                
    }

    function adaptiveMapFilters(width) {
        if (document.querySelector(".search__filters")) {
            const searchFilters = {
                selector: document.querySelector(".search__filters"),
                start: {
                    relativeEl: document.querySelector(".search-title"),
                    method: "after",
                },
                replace: {
                    relativeEl: document.querySelector(".search__map-block"),
                    method: "append",
                },
            };

            
            adaptive([searchFilters], width <= 1000);
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
