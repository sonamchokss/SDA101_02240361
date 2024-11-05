class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--card-bg-color, #fff);
                    border: 1px solid var(--card-border-color, #e0e0e0);
                    border-radius: var(--card-border-radius, 10px);
                    padding: var(--card-padding, 16px);
                    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s;
                    transform: scale(0.5);
                }
                
                :host(:hover) {
                    transform: scale(1.02);
                }

                .header {
                    padding: 40px;
                }

                .content {
                    margin-bottom: 50px;
                    margin-left: 50px;
                    font-size: 50px;
                }

                .footer {
                    margin-left: 50px;                  
                }
            </style>
            <div class="header">
                <slot name="header">${this.getAttribute('card-title') || 'Default Title'}</slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
            <div>
                <slot type="button"></slot>
            </div>
        `;
    }
}

customElements.define('custom-card', CustomCard);