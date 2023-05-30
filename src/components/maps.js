class AppMap extends HTMLElement {
	constructor() {
	  super();
	}
  
	connectedCallback() {
	  this.innerHTML = `
	  <section class="our-map" id="map">
	  <div class="container our-map__container">
	  	<div class="ourmap__items">
	  		<h2 class="our-map__title title">Lokasi Kami</h2>
	  			<p class="our-map__subtitle">Gg. Satria
	  				Gn. Samarinda, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76114</p>
	  		<div class="iframe-wrapper">
	  			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.894132070799!2d116.8594484!3d-1.2332459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df146388e65bbc5%3A0xb82d93e43d2d148a!2sGg.%20Satria%2C%20Gn.%20Samarinda%2C%20Kec.%20Balikpapan%20Utara%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076114!5e0!3m2!1sid!2sid!4v1685374583439!5m2!1sid!2sid" width="1280" height="720" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
			</div>
	  </div>
	</section>
	
	  `;
	}
  }
  
  customElements.define('app-map', AppMap);
  