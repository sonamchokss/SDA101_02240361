class UserProfile extends HTMLElement {
    constructor() {
        super();
    
        const shadow = this.attachShadow({ mode: 'open' });
    
        const container = document.createElement('div');
        container.classList.add('profile-card');
    
        const nameElement = document.createElement('h2');
        nameElement.classList.add('name');
        nameElement.textContent = this.getAttribute('name') || 'Unknown Name';
    
        const roleElement = document.createElement('p');
        roleElement.classList.add('role');
        roleElement.textContent = this.getAttribute('role') || 'Unknown Role';
    
        container.appendChild(nameElement);
        container.appendChild(roleElement);
    
        const style = document.createElement('style');
        style.textContent = `
            .profile-card {
            border: 1px solid #ccc;
            padding: 35px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 200px;
            text-align: center;
            font-style: italic;
            }
            .name {
            margin: 0;
            font-size: 25px;
            color: #00008B;
            }
            .role {
            margin: 4px 0 0;
            font-size: 15px;
            color: #666;
            }
        `;
    
        shadow.appendChild(style);
        shadow.appendChild(container);
    }
  }
 
  customElements.define('user-profile', UserProfile);