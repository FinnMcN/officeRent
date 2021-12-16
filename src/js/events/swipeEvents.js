import {enableScroll} from "./clickEvents.js";

export default class SwipeForm {
    constructor(node) {
        this.modal = node;
        this.modalHeight = (window.innerHeight * 75) / 100;
        this.bottom = 0;
        this.translateY = 0;
        this.eventsCallback = {};

        this.startY = null;
        this.endY = null;
        this.currentY = null;
        this.velocity = undefined
        this.currenDate = null;
        this.diffDate = 0;

        this.addListener("touchmove", this.modalSwipe);
        this.addListener("touchstart", this.getStartCords);
        this.addListener("touchend", this.getEndCords);
    }

    modalSwipe(e) {
        e.stopPropagation();
        if (this.bottom < -45) {
            this.translateY = 0;

            this.modal.removeAttribute("style");
            this.modal.classList.remove("office__booking_active");

            this.removeListener("touchmove");
            this.removeListener("touchstart");
            this.removeListener("touchend");
            
            setTimeout(enableScroll, 500);

            return;
        }

        //прерывистая чушь
        if (e.target === this.modal || this.isContentNotScrolled()) {
            const eventY = Math.floor(e.changedTouches[0].clientY);

            if (this.checkSwipeDirection(eventY) === "bottom") {
                this.translateY = Math.floor(eventY - this.currentY) / 3;
                this.bottom = this.bottom - this.translateY;
            }

            this.modal.style.bottom = `${this.bottom}%`;
            this.currentY = eventY;
        }
        
    }

    isContentNotScrolled() {
        const innerPos = this.modal.querySelector(".booking-form__inner");

        return innerPos.scrollTop === 0;
    }

    getVelocity() {
        this.velocity = this.translateY / this.diffDate;
    }

    removeListener(event) {
        this.modal.removeEventListener(event, this.eventsCallback[event]);
        delete this.eventsCallback[event];
    }

    addListener(event, callback) {
        this.eventsCallback[event] = callback.bind(this);
        this.modal.addEventListener(event, this.eventsCallback[event]);
    }

    checkSwipeDirection(eventY) {
        return this.currentY < eventY ? "bottom" : "top";
    }

    getStartCords(e) {
        this.currentY = Math.floor(e.changedTouches[0].clientY);
    }
    getEndCords(e) {
        this.endY = Math.floor(e.changedTouches[0].clientY);
    }
}