import { parameters } from '../NougthsCrosseVar/NougthsCrossesVar'
import { renderActivePlayer } from '../RenderActivePlayer/renderActivePlayer'

export const restartParameters = () => {
  parameters.win = false
  parameters.activePlayer = ''
  parameters.boxClicked = 0
  renderActivePlayer()
}
