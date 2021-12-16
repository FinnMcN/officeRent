export function changeInputBg() {
    const currentValue = (this.value / this.max) * 100;

    //first input case
    if (this.nextElementSibling !== null) {
        const endValue = (this.nextElementSibling.value / this.nextElementSibling.max) * 100;

        if (currentValue > endValue) {
            changeBgInput.bind(this.nextElementSibling)(endValue, currentValue);
        } else {
            changeBgInput.bind(this.nextElementSibling)(currentValue, endValue);
        }
    }

    //second input case
    if (this.previousElementSibling !== null) {
        const startValue =
            (this.previousElementSibling.value / this.previousElementSibling.max) * 100;

        if (currentValue < startValue) {
            changeBgInput.bind(this)(currentValue, startValue);
        } else {
            changeBgInput.bind(this)(startValue, currentValue);
        }
    }
}

export function displayValues(input, start, end) {
    //first input case
    if (input.nextElementSibling !== null) {
        if (Number(input.value) < Number(input.nextElementSibling.value)) {
            start.innerHTML = `${input.value} ₽`;
            end.innerHTML = `${input.nextElementSibling.value} ₽`;
        } else {
            start.innerHTML = `${input.nextElementSibling.value} ₽`;
            end.innerHTML = `${input.value} ₽`;
        }
    }
    //second input case
    if (input.previousElementSibling !== null) {
        if (Number(input.value) > Number(input.previousElementSibling.value)) {
            start.innerHTML = `${input.previousElementSibling.value} ₽`;
            end.innerHTML = `${input.value} ₽`;
        } else {
            start.innerHTML = `${input.value} ₽`;
            end.innerHTML = `${input.previousElementSibling.value} ₽`;
        }
    }
}

export function setDefaultValues(inputs, start, end) {
    const defaultValues = {
        start: "0",
        end: "1000000"
    }
    inputs[0].value = defaultValues.start;
    inputs[1].value = defaultValues.end;
    inputs.forEach(input => {
        changeInputBg.bind(input)();
        displayValues(input, start, end);
    });
}

function changeBgInput(start, end) {
    this.style.background = `linear-gradient(
                90deg, ${this.defaultColor} ${start}%,
                ${this.inputColor} ${start}%,
                ${this.inputColor} ${end}%,
                ${this.defaultColor} ${end}%
            )`;
}