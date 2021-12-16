export default function addScrollEvents() {
    let scrollHeight = window.scrollY;
    let timeoutOnResize;
    let isResize = false;

    window.addEventListener("resize", function() {
        isResize = true;

        this.clearTimeout(timeoutOnResize);
        
        timeoutOnResize = setTimeout(function() {
            scrollHeight = this.scrollY;
            isResize = false;
        }, 100);
    })
    window.addEventListener("scroll", function() {
        if (!isResize)  {
            allScrollEvents(scrollHeight);
            scrollHeight = this.scrollY;
        }
    })
}

function allScrollEvents(scrollHeight) {
    bookingBtn(scrollHeight);
}

function bookingBtn(prevScrollHeight) {
    const element = document.querySelector(".booking-form__show-btn");

    if (!element) {
        return;
    }

    const hideClassName = "booking-form__show-btn_hide";
    const isScrollDown = prevScrollHeight < window.scrollY;
    const alreadyHasClass = element.classList.contains(hideClassName);

    if (isScrollDown) {
        if (!alreadyHasClass) {
            element.classList.add(hideClassName);
        }
    } else {
        element.classList.remove(hideClassName);
    }
}