class AppHome extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <section class="home" id="home">
          <div class="container">
          <h2 class="home__title title">Detail Toko</h2>
            <div class="home__video-container">
              <iframe width="1280" height="720" src="https://www.youtube.com/embed/CA4l4S2P7As?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>   
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('app-home', AppHome);
  