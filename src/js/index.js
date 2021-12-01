import initSwipers from "./sliders.js";
import addClickEvents from "./clickEvents.js";
import { counterInputs, rangeInputs, clearCheckBoxInputs } from "./addInputHandlers.js";
import addTabs from "./tabs.js";
import addloadMore from "./loadMore.js";
import media from "./media.js";

document.addEventListener("DOMContentLoaded", function () {
    initSwipers();  
    counterInputs();
    rangeInputs();
    clearCheckBoxInputs(".popup-facilities");
    addTabs();
    addloadMore();
    addClickEvents();
    media();
});