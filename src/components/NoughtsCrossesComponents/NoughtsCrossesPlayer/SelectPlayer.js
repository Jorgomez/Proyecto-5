import { templateNoughtsAndCrosses } from '../../../pages/NoughtsAndCrosses/HeroNoughtsAndCrosses/NoughtsAndCrosses'
import { parameters } from '../NougthsCrosseVar/NougthsCrossesVar'
import { renderActivePlayer } from '../RenderActivePlayer/renderActivePlayer'

export const selectPlayer = (e) => {
  if (!parameters.activePlayer || parameters.boxClicked === 0) {
    parameters.activePlayer = e.target.textContent
  }
  renderActivePlayer()
}
