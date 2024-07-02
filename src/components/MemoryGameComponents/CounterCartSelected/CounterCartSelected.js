export const localStorageDataMG =
  JSON.parse(localStorage.getItem('dataMG')) || {}

export const Counters = {
  selectedCarts: localStorageDataMG.selectedCarts || 0,
  oportunities: localStorageDataMG.oportunities || 10,
  puntuacion: localStorageDataMG.puntuacion || 0
}
export const counterCartSelected = (event) => {
  if (
    !event.target.classList.contains('selected') &&
    !event.target.classList.contains('founded')
  ) {
    Counters.selectedCarts++
    event.target.classList.add('selected')
  }
}
