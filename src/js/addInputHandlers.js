import { changeInputBg, displayValues, setDefaultValues } from "./inputHandlers.js";

export function counterInputs() {
    const counter = document.querySelectorAll(".counter");
    const counterBlock = document.querySelector(".popup-props");

    // доделать mousedown mouseup events -> need optimization
    if (counter.length !== 0) {
        counter.forEach(function (item) {
            const input = item.querySelector(".counter__input");
            const minus = item.querySelector(".counter__btn-minus");
            const plus = item.querySelector(".counter__btn-plus");
            if (input.getAttribute("type") === "number") {
                let mouseDownFlag = true;

                //set default input attributes
                input.setAttribute("value", 0);
                input.setAttribute("min", 0);
                input.setAttribute("max", 9999);

                if (Number(input.getAttribute("min")) === 0 && !minus.hasAttribute("disabled")) {
                    minus.setAttribute("disabled", true);
                }

                input.addEventListener("input", function (e) {
                    //minus
                    if (input.value < 1 && !minus.hasAttribute("disabled")) {
                        minus.setAttribute("disabled", true);
                    } else {
                        minus.removeAttribute("disabled");
                    }
                    //plus
                    if (input.value > 9998 && !plus.hasAttribute("disabled")) {
                        plus.setAttribute("disabled", true);
                    } else {
                        plus.removeAttribute("disabled");
                    }
                });
                minus.addEventListener("click", function () {
                    if (input.value < 2) {
                        this.setAttribute("disabled", true);
                    }
                    input.value--;
                    if (input.value < 9999) {
                        plus.removeAttribute("disabled");
                    }
                });
                plus.addEventListener("click", function () {
                    if (input.value > 9997) {
                        this.setAttribute("disabled", true);
                    }
                    input.value++;
                    if (input.value > 0 && minus.hasAttribute("disabled")) {
                        minus.removeAttribute("disabled");
                    }
                });

                //удерживание
                minus.addEventListener("mousedown", function (event) {
                    /* const interval;
                    if (mouseDownFlag) {
                        interval = setInterval(() => {
                            input.value--;
                        }, 200) 
                    } */
                });
                minus.addEventListener("mouseup", function (event) {
                    mouseDownFlag = false;
                });
            }
        });
    }

    //reset counter inputs button handler
    if (counterBlock) {
        const inputs = counterBlock.querySelectorAll(".counter__input");
        const resetBtn = counterBlock.querySelector(".clear-btn");
        const defaultValue = 0;

        resetBtn.addEventListener("click", () => {
            inputs.forEach(input => {
                input.value = defaultValue;
            });
        });
    }
    
}

export function rangeInputs() {
    const rangeBlock = document.querySelectorAll(".range-block");

    if (rangeBlock.length !== 0) {
        rangeBlock.forEach((block) => {
            const doubleRange = block.querySelector(".double-range");
            const valueStart = block.querySelector(".popup-price__value-start").children[0];
            const valueEnd = block.querySelector(".popup-price__value-end").children[0];
            const clearBtn = block.querySelector(".clear-btn");      
            const inputs = doubleRange.querySelectorAll(".range-input");
            const inputsArr = [];

            for (let i = 0; i < inputs.length; i++) {
                const inputRange = inputs[i];
                inputsArr.push(inputs[i]);

                //input range background colors
                inputRange.inputColor = "#ED4040";
                inputRange.defaultColor = "#f6f6f6";

                //call when page is ready or reload
                changeInputBg.call(inputRange);

                //add oninput handlers
                inputRange.addEventListener("input", changeInputBg);
                inputRange.addEventListener("input", (e) => {
                    displayValues(e.target, valueStart, valueEnd); 
                });
            }
            //add reset button handler
            clearBtn.addEventListener("click", () => {
                setDefaultValues(inputsArr, valueStart, valueEnd);
            });
        });
    }
}

export function clearCheckBoxInputs(block) {
    if (document.querySelector(block)) {
        const qwe = document.querySelector(block);
        const inputs = qwe.querySelectorAll(".tags__item");
        const resetBtn = qwe.querySelector(".clear-btn");

        //reset checkbox inputs button handler
        resetBtn.addEventListener("click", () => {
            inputs.forEach((item) => {
                item.children[0].checked = false;
            });
        });
    }
}