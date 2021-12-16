import initSwipers from "./sliders.js";
import { addClickEvents } from "./events/clickEvents.js";
import { counterInputs, rangeInputs, resetCheckBoxInputs } from "./events/addInputHandlers.js";
import addloadMore from "./loadMore.js";
import media from "./media.js";
import addScrollEvents from "./events/windowScrollEvents.js";

document.addEventListener("DOMContentLoaded", function () {
    initSwipers();  
    media();
    counterInputs();
    rangeInputs();
    resetCheckBoxInputs(".popup-facilities");
    addloadMore();
    addClickEvents();
    addScrollEvents();
});