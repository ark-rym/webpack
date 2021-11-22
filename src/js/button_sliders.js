export function clickSliderButton() {
  let sliderBrendsInner = document.querySelector('.brends-slider__wrapper')
  let buttonBrendsOpen = document.querySelector('.brends__show-more-button')

  let sliderTechsInner = document.querySelector('.techs-slider__wrapper')
  let buttonTechsOpen = document.querySelector('.techs__show-more-button')

  buttonBrendsOpen.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (buttonBrendsOpen.value == 'Скрыть') {
      buttonBrendsOpen.value = 'Показать все'
      let x = 160
      sliderBrendsInner.style.height = x + "px"
      document.querySelector('.brends__show-more-image').style.transform = 'rotate(0)';
    } else {
      sliderBrendsInner.style.height = 'auto'
      buttonBrendsOpen.value = 'Скрыть'
      document.querySelector('.brends__show-more-image').style.transform = 'rotate(180deg)';
    }
  });

  buttonTechsOpen.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (buttonTechsOpen.value == 'Скрыть') {
      buttonTechsOpen.value = 'Показать все'
      let x = 160
      sliderTechsInner.style.height = x + "px"
      document.querySelector('.techs__show-more-image').style.transform = 'rotate(0)';
    } else {
      sliderTechsInner.style.height = 'auto'
      buttonTechsOpen.value = 'Скрыть'
      document.querySelector('.techs__show-more-image').style.transform = 'rotate(180deg)';
    }
  });

}