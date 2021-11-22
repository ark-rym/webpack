
export function clickMainButton () {
  let buttonTextOpen = document.querySelector('.info__read-more-button')
  const textAll = document.querySelector('.info__text')

  buttonTextOpen.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (buttonTextOpen.value == 'Скрыть') {
      buttonTextOpen.value = 'Читать далее'
      textAll.classList.add('info__text-js')
      document.querySelector('.info__read-more-image').style.transform = 'rotate(0)'
    } else {
      buttonTextOpen.value = 'Скрыть'
      textAll.classList.remove('info__text-js')
      document.querySelector('.info__read-more-image').style.transform = 'rotate(180deg)'
    }
  })
}
