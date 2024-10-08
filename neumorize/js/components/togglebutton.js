class ToggleButton {
    constructor(containerId, buttonId) {
        this.toggleButtonContainer = document.getElementById(containerId);
        this.toggleButtonMetal = document.getElementById(buttonId);
        this.toggleButtonContainerClientWidth = this.toggleButtonContainer.clientWidth;
        this.toggleButtonMetalClientWidth = this.toggleButtonMetal.clientWidth;
        this.root = document.documentElement;
        this.accentColor2 = getComputedStyle(this.root).getPropertyValue('--accent-color2').trim();

        this.init();
    }

    init() {
        this.toggleButtonContainer.addEventListener('click', () => this.toggle());
    }

    toggle() {
        console.log(this.accentColor2);

        let currentPosition = this.toggleButtonMetal.style.left;
        let buttonStretch = this.toggleButtonContainerClientWidth - this.toggleButtonMetalClientWidth;

        if (currentPosition === "" || currentPosition === "0px") {
            this.toggleButtonMetal.style.left = buttonStretch + "px";
            this.toggleButtonContainer.style.backgroundColor = this.accentColor2;
        } else {
            this.toggleButtonMetal.style.left = "0px";
            this.toggleButtonContainer.style.backgroundColor = "transparent";
        }
    }
}


// const toggleButton = new ToggleButton('toggle-button-container', 'toggle-button-metal');
