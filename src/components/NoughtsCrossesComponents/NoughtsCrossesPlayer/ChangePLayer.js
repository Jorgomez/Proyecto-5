import { templateNoughtsAndCrosses } from '../../../pages/NoughtsAndCrosses/HeroNoughtsAndCrosses/NoughtsAndCrosses'

import { parameters } from '../NougthsCrosseVar/NougthsCrossesVar'
import { renderActivePlayer } from '../RenderActivePlayer/renderActivePlayer'

export const changePLayer = () => {
  if (parameters.activePlayer === 'X') {
    return (parameters.activePlayer = 'O'), renderActivePlayer()
  }
  if (parameters.activePlayer === 'O') {
    return (parameters.activePlayer = 'X'), renderActivePlayer()
  }
}
