import '../css/style.css';

import '../css/style_burger-menu.css';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// import Swiper styles
import 'swiper/swiper-bundle.min.css';
import '../css/style_sliders.css';

import { clickMainButton } from './button_main.js'
clickMainButton ()

import { clickSliderButton} from './button_sliders'

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  const height = window.innerHeight


  if (width < 768) {
    // init Swiper:
    const swiper = new Swiper('.swiper', {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      // slidesPerView: 1.15,
      slidesPerView: 'auto',
      spaceBetween: 16,
      slidesOffsetBefore: 16,

    })
  } else {
    clickSliderButton ()
  }
})

