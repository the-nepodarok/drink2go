  /* Menu Button Script */

const menuButton = document.querySelector('.user__button--nav');
const navMenu = document.querySelector('.main-nav');

const media = window.matchMedia('(max-width: 767px)');

function widthChange(width) {

  if (width.matches) {
    navMenu.classList.add('visually-hidden');
    menuButton.classList.remove('user__button--opened');
    menuButton.onclick = function() {
      navMenu.classList.toggle('visually-hidden');
      menuButton.classList.toggle('user__button--opened');
    }
  } else {
    navMenu.classList.remove('visually-hidden');
    menuButton.classList.add('menu-opened');
  }
}

media.addEventListener("change", () => {
  widthChange(media);
});

widthChange(media);

  /* Leaflet Map */

const map = L.map('map')
  .setView({
    lat: 59.96834382204316,
    lng: 30.31764660306664,
  }, 25);

L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96834382204316,
    lng: 30.31764660306664,
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

  /* Swiper Slider */

const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".slider__nav-arrow--right",
    prevEl: ".slider__nav-arrow--left",
  },
  pagination: {
    el: ".slider__nav-slider",
    clickable: true,
    bulletClass: "slider__nav-slider__block",
    bulletActiveClass: "slider__nav-slider__block--active",
    bulletElement: "span onclick=\"this.blur();\"",
  },
  autoplay: {
    delay: 5000,
  },
});
