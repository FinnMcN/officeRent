export default function move(elements, statement) {
    elements.map(element => {
        if (statement && !element.selector.classList.contains("moved")) {
            const {
                selector,
                replace: { relativeEl, method }
            } = element;

            selector.classList.add("moved");
            replace(selector, relativeEl, method);
        } else if (!statement && element.selector.classList.contains("moved")) {
            const {
                selector,
                start: { relativeEl, method }
            } = element;
            
            selector.classList.remove("moved");
            replace(selector, relativeEl, method);
        }
    }) 
}

function replace(el, moveTo, method) {
    switch (method) {
        case "append":
            moveTo.append(el);
            break;
        case "prepend":
            moveTo.prepend(el);
            break;
        case "before":
            moveTo.before(el);
            break;
        case "after":
            moveTo.after(el);
            break;
        default:
            break;
    }
}