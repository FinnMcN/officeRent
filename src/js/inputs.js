export default function initInputs() {
    inputNumbers();
    rangeSliders();
}

function changeBgInput() {
    this.style.background = `linear-gradient(90deg, ${this.inputColor} ${
        (this.value / this.max) * 100
    }%, ${this.defaultColor} ${(this.value / this.max) * 100}%)`;
}

function inputNumbers() {
    const counter = document.querySelectorAll(".counter");

    // доделать mousedown mouseup events -> need optimization
    if (counter.length !== 0) {
        counter.forEach(function (item) {
            const input = item.querySelector(".counter__input");
            const minus = item.querySelector(".counter__btn-minus");
            const plus = item.querySelector(".counter__btn-plus");
            if (input.getAttribute("type") === "number") {
                let mouseDownFlag = true;

                //set default input attributes
                input.setAttribute("value", "0");
                input.setAttribute("min", "0");
                input.setAttribute("max", "9999");

                if (input.getAttribute("min") === "0" && !minus.hasAttribute("disabled")) {
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
}

function rangeSliders() {
    const rangeSlider = document.querySelectorAll(".range-input");

    if (rangeSlider.length !== 0) {
        rangeSlider.forEach((slider) => {
            slider.inputColor = "#ED4040";
            slider.defaultColor = "#f6f6f6";
            changeBgInput.call(slider);
            slider.addEventListener("input", changeBgInput);
        });

        const valueDisplay = document;
    }
}