class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header class="header">
          <div class="container">
            <div class="header__inner">
              <a href="index.html" class="header__logo logo">
                <img src="src/img/french-fries.png" alt="logo" class="logo__img img">
                <h2 id="namalogo">CHIMI CHIMI</h2>
              </a>
              <div class="header__body">
                <nav class="menu">
                  <ul class="menu__list">
                    <li class="menu__item">
                      <a href="#delivering" class="menu__link">Home</a>
                    </li>
                    <li class="menu__item">
                      <a href="#menu" class="menu__link">Menu</a>
                    </li>
                    <li class="menu__item">
                      <a href="#home" class="menu__link">Detail Toko</a>
                      </li>
                      <!-- <li class="menu__item">
                      <a href="#service" class="menu__link">Layanan</a>
                    </li> -->
                    
                  </ul>
                </nav>
              </div>
  
              <div class="header__burger">
                <span></span>
              </div>
            </div>
          </div>
        </header>
      `;
    }
  }
  
  // Mendefinisikan custom element <app-header>
  customElements.define('app-header', Header);
  