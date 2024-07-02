import { basicGameLogic } from '../CompairSelectedCarts/CompairSelectedCarts'
import {
  Counters,
  counterCartSelected
} from '../CounterCartSelected/CounterCartSelected'

export const turnCarts = (event, objet) => {
  if (
    event.target.classList.contains('founded') ||
    event.target.classList.contains('selected') ||
    event.target.classList.contains('disabled')
  ) {
    return
  }
  counterCartSelected(event)
  if (Counters.selectedCarts <= 2) {
    event.target.style.backgroundImage = `url(${objet.surfboard})`
    event.target.style.transform = 'rotateY(180deg)'
  }

  basicGameLogic(event)
}
