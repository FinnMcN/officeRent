export default class Tabs {
    constructor(tabs, activeClass) {
        this.tabs = tabs;
        this.activeClass = activeClass;
        this.activeTab = undefined;
        
        this.addTabs();
    }

    addTabs() {
        [...this.tabs].forEach((tab) => {
            tab.addEventListener("click", () => this.eventCallback(tab));
        });
    }

    eventCallback(tab) {
        if (this.activeTab !== undefined) {
            this.activeTab.classList.remove(this.activeClass);
        }

        tab.classList.add(this.activeClass);
        this.activeTab = tab;
    }
}