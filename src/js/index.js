import '../css/style.css';

import '../css/style_burger-menu.css';

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// import Swiper styles
import 'swiper/swiper-bundle.min.css';
import '../css/style_sliders.css';

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
    

    var sliderBrendsInner = document.querySelector('.brends-slider__wrapper')
    var buttonBrendsOpen = document.querySelector('.brends__show-more-button')
    var slidesBrendsList = document.querySelectorAll('.brends-slider__slide');
    var slidesBrendsSlide = document.querySelector('.brends-slider__slide');

    var sliderTechsInner = document.querySelector('.techs-slider__wrapper')
    var buttonTechsOpen = document.querySelector('.techs__show-more-button')
    var slidesTechsList = document.querySelectorAll('.techs-slider__slide');

    // if (slidesBrendsSlide.offsetWidth < 210) {
    //   slidesBrendsSlide.css.backgroundSize = 
    // }

    var nElementsInRow = 3
    var sliderInnerPadding = 24
    if (width > 1120) {
      nElementsInRow = 4
      sliderInnerPadding = 32
    }

    buttonBrendsOpen.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (buttonBrendsOpen.value == 'Скрыть') {
        buttonBrendsOpen.value = 'Показать все'
        var x = 160
        sliderBrendsInner.style.height = x + "px"
        document.querySelector('.brends__show-more-image').style.transform = 'rotate(0)';
      } else {
        // var x = Math.ceil(slidesBrendsList.length/nElementsInRow) * (72 + 16) - 16
        // sliderBrendsInner.style.height = x + "px"
        sliderBrendsInner.style.height = 'auto'
        buttonBrendsOpen.value = 'Скрыть'
        document.querySelector('.brends__show-more-image').style.transform = 'rotate(180deg)';
      }
    });

    buttonTechsOpen.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (buttonTechsOpen.value == 'Скрыть') {
        buttonTechsOpen.value = 'Показать все'
        var x = 160
        sliderTechsInner.style.height = x + "px"
        document.querySelector('.techs__show-more-image').style.transform = 'rotate(0)';
      } else {
        // var x = Math.ceil(slidesTechsList.length/nElementsInRow) * (160 + 16) - 16  
        // sliderTechsInner.style.height = x + "px"
        sliderTechsInner.style.height = 'auto'
        buttonTechsOpen.value = 'Скрыть'
        document.querySelector('.techs__show-more-image').style.transform = 'rotate(180deg)';
      }
    });

  }

  var textHeiht
  if (width < 768) {
    textHeiht = 90
  } else {
    textHeiht = 160
  }



  var buttonTextOpen = document.querySelector('.info__read-more-button')
  var textAll = document.querySelector('.info__text')

  buttonTextOpen.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (buttonTextOpen.value == 'Скрыть') {
      buttonTextOpen.value = 'Читать далее'
      textAll.classList.add('info__text-js')
      // textAll.style.maxHeight = textHeiht + 'px'
      document.querySelector('.info__read-more-image').style.transform = 'rotate(0)'
    } else {
      buttonTextOpen.value = 'Скрыть'
      textAll.classList.remove('info__text-js')
      document.querySelector('.info__read-more-image').style.transform = 'rotate(180deg)'
    }
  })

})

