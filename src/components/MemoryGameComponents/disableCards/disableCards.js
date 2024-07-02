export const disableAllCards = () => {
  const cards = document.querySelectorAll('.cart')
  cards.forEach((card) => {
    card.classList.add('disabled')
  })
}

export const enableAllCards = () => {
  const cards = document.querySelectorAll('.cart')
  cards.forEach((card) => {
    card.classList.remove('disabled')
  })
}
