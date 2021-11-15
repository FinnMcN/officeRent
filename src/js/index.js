import initSwipers from "./sliders.js";
import addClickEvents from "./clickEvents.js";
import inputNumber from "./inputs.js";
import addTabs from "./tabs.js";
import addloadMore from "./loadMore.js";
import media from "./media.js";

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementsByTagName("input");
    initSwipers();   
    inputNumber();
    addTabs();
    addloadMore();
    addClickEvents();
    media();
});