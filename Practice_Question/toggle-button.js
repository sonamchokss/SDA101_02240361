class ToggleButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    
        this.state = localStorage.getItem("toggle-state") === "ON";
    
        this.button = document.createElement("button");
        this.updateButton();
    
        this.shadowRoot.appendChild(this.button);
    
        this.button.addEventListener("click", this.toggle.bind(this));
    }
  
    toggle() {
        this.state = !this.state;
        localStorage.setItem("toggle-state", this.state ? "ON" : "OFF");
        this.updateButton();
        
        this.dispatchEvent(new CustomEvent("toggle-changed", {
            detail: { state: this.state ? "ON" : "OFF" },
            bubbles: true,
            composed: true,
        }));
    }
  
    updateButton() {
        this.button.textContent = this.state ? "ON" : "OFF";
        this.button.style.backgroundColor = this.state ? "blue" : "red";
        this.button.style.color = "white";
        this.button.style.border = "15px";
        this.button.style.padding = "10px 20px";
        this.button.style.fontSize = "16px";
        this.button.style.cursor = "pointer";
    }
  }
  
  customElements.define("toggle-button", ToggleButton);