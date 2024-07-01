import { basicGameLogic } from '../CompairSelectedCarts/CompairSelectedCarts'
import {
  Counters,
  counterCartSelected
} from '../CounterCartSelected/CounterCartSelected'
import { getGamesScores } from '../../LocalStorage/localStorage'

export const turnCarts = (event, objet) => {
  if (event.target.classList.contains('founded')) {
    return
  }
  if (Counters.selectedCarts <= 2) {
    event.target.style.backgroundImage = `url(${objet.surfboard})`
    event.target.style.transform = 'rotateY(180deg)'
    counterCartSelected()
  }

  basicGameLogic(event)
}
