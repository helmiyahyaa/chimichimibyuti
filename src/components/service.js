class AppService extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <section class="service" id="service">
          <div class="container">
            <div class="service__inner">
              <h2 class="service__title title">Layanan Yang Kami Sediakan</h2>
              <div class="service__row">
                <div class="service__column">
                  <div class="service__item">
                    <div class="service__image">
                      <img src="img/icon/cutlery-fork.svg" alt="service" class="service__img img">
                    </div>
                    <h3 class="service__name">Outdoor Catering</h3>
                    <p class="service__text text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                  </div>
                </div>
                <div class="service__column">
                  <div class="service__item">
                    <div class="service__image">
                      <img src="img/icon/food-tray.svg" alt="service" class="service__img img">
                    </div>
                    <h3 class="service__name">Industrial Services</h3>
                    <p class="service__text text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                  </div>
                </div>
                <div class="service__column">
                  <div class="service__item">
                    <div class="service__image">
                      <img src="img/icon/cake.svg" alt="service" class="service__img img">
                    </div>
                    <h3 class="service__name">Events & Exhibition</h3>
                    <p class="service__text text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                  </div>
                </div>
                <div class="service__column">
                  <div class="service__item">
                    <div class="service__image">
                      <img src="img/icon/basket.svg" alt="service" class="service__img img">
                    </div>
                    <h3 class="service__name">Hospital Catering</h3>
                    <p class="service__text text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                  </div>
                </div>
              </div>
              <div class="service__button">
                <a href="#" class="service__link btn">All Services</a>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('app-service', AppService);
  