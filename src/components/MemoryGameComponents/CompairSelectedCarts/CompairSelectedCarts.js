import { Counters } from '../CounterCartSelected/CounterCartSelected'

import { listenerPrintTemplates } from '../../Listenners/listenerPrintTemplates'

import { templateStartAgainWinner } from '../../../pages/MemoryGame/startAgainWinner/startAgainWinner'
import { templateStartAgainLooser } from '../../../pages/MemoryGame/StartAgainLooser/startAgainlooser'
import {
  printTemplateMemoryGame,
  templatePunctuation
} from '../../../pages/MemoryGame/HeroMemoryGame/memoryGame'
import { printStartAgainTemplate } from '../../printStartAgainTemplate/printStartAgainTemplate'
import { getGamesScores } from '../../LocalStorage/localStorage'
import { resetCounters } from '../ResetCounters/ResetCounters'
export let cart1
export let cart2

export const basicGameLogic = (event) => {
  if (Counters.selectedCarts === 1) {
    cart1 = event
  }
  if (Counters.selectedCarts === 2) {
    cart2 = event
    setTimeout(() => {
      if (
        cart1.target.style.backgroundImage ===
        cart2.target.style.backgroundImage
      ) {
        Counters.puntuacion++
        Counters.selectedCarts = 0
        cart1.target.classList.add('founded')
        cart2.target.classList.add('founded')
      } else {
        ;(cart1.target.style.backgroundImage = `url('https://www.transparenttextures.com/patterns/basketball.png')`),
          (cart1.target.style.transform = 'rotateY(360deg)'),
          (cart2.target.style.backgroundImage = `url('https://www.transparenttextures.com/patterns/basketball.png')`),
          (cart2.target.style.transform = 'rotateY(360deg)'),
          (Counters.selectedCarts = 0),
          Counters.oportunities--
      }
      getGamesScores('dataMG', Counters)

      document.getElementById('boxPunctuation')
      templatePunctuation(boxPunctuation)
      if (Counters.puntuacion === 6) {
        printStartAgainTemplate(
          'section',
          'startAgainWinner',
          templateStartAgainWinner,
          listenerPrintTemplates,
          '#buttonStartAgainWinner',
          printTemplateMemoryGame
        ),
          resetCounters()
        return
      }

      if (Counters.oportunities === 0) {
        printStartAgainTemplate(
          'section',
          'startAgainLooser',
          templateStartAgainLooser,
          listenerPrintTemplates,
          '#buttonStartAgainLooser',
          printTemplateMemoryGame
        ),
          resetCounters()
      }
      getGamesScores('dataMG', Counters)
    }, 1000)
  }
}
