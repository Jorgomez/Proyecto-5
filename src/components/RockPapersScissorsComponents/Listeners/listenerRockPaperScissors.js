export const listenerRockPaperScissors = (elements, funcion) => {
  document.querySelectorAll(elements).forEach((element) => {
    element.addEventListener('click', (e) => {
      funcion(e)
    })
  })
}
