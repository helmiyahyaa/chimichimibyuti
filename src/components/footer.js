class AppFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          © 2023 CHIMI CHIMI BY UTI. Made with KELOMPOK 6 STARTUP DIGITAL ITK.
        </footer>
      `;
    }
  }
  
  customElements.define('app-footer', AppFooter);
  