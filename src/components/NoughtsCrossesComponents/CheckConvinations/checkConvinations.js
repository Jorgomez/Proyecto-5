import { templateNoughtsAndCrosses } from '../../../pages/NoughtsAndCrosses/HeroNoughtsAndCrosses/NoughtsAndCrosses'

import { listenerPrintTemplates } from '../../Listenners/listenerPrintTemplates'
import { printTemplates } from '../../PrintTemplates/PrintTemplates'
import { printStartAgainTemplate } from '../../printStartAgainTemplate/printStartAgainTemplate'

import { parameters } from '../NougthsCrosseVar/NougthsCrossesVar'
import { restartParameters } from '../restartParamenters/restartParameters'
import { templateTieNougthsAndCrosses } from '../templateTieNandC/templateTieNandC'
import { templateWinnerNougthsAndCrosses } from '../templateWinner/templateWinnerNandC'

export const checkConvination = () => {
  if (parameters.boxClicked > 4) {
    for (let combo of parameters.winnerConvinations) {
      let [a, b, c] = combo
      if (
        parameters.values[a] &&
        parameters.values[a] === parameters.values[b] &&
        parameters.values[a] === parameters.values[c]
      ) {
        parameters.winnerLetter = parameters.values[a]
        printStartAgainTemplate(
          'section',
          'WinnerNougthsAndCrosses',
          templateWinnerNougthsAndCrosses
        )
        listenerPrintTemplates(
          '#startAgainNandC',
          0,
          printTemplates,
          'section',
          'sectionNoughtsAndCrosses',
          templateNoughtsAndCrosses
        )

        parameters.win = true

        restartParameters()
        return
      }
    }

    if (!parameters.values.includes('') && !parameters.win) {
      printStartAgainTemplate(
        'section',
        'tieNougthsAndCrosses',
        templateTieNougthsAndCrosses
      )
      listenerPrintTemplates(
        '#startAgainNandC',
        0,
        printTemplates,
        'section',
        'sectionNoughtsAndCrosses',
        templateNoughtsAndCrosses
      )

      restartParameters()
    }
  }
}
