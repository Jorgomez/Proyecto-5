import { valuesCatch } from '../CatchValues/catchValues'
import { changePLayer } from '../NoughtsCrossesPlayer/ChangePLayer'
import { parameters } from '../NougthsCrosseVar/NougthsCrossesVar'
import { checkConvination } from '../CheckConvinations/checkConvinations'

export const printActivePlayer = (e) => {
  if (!e.target.textContent) {
    e.target.textContent = parameters.activePlayer
    parameters.boxClicked++
    changePLayer()

    valuesCatch()
    checkConvination()
  }
}
