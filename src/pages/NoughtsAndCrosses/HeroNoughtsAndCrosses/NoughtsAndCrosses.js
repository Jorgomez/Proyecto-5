import { listenerNougthsCrosses } from '../../../components/NoughtsCrossesComponents/Listeners/ListenerNougthsCrosses'
import { selectPlayer } from '../../../components/NoughtsCrossesComponents/NoughtsCrossesPlayer/SelectPlayer'
import { parameters } from '../../../components/NoughtsCrossesComponents/NougthsCrosseVar/NougthsCrossesVar'

import { printActivePlayer } from '../../../components/NoughtsCrossesComponents/PrintActivePlayer/printAcitvePlayer'
import { renderActivePlayer } from '../../../components/NoughtsCrossesComponents/RenderActivePlayer/renderActivePlayer'

import './NoughtsAndCrosses.css'

export const templateNoughtsAndCrosses = (section) => {
  const boxPlayers = document.createElement('section')
  boxPlayers.className = 'flexContainer'
  boxPlayers.id = 'boxPlayers'
  boxPlayers.innerHTML = `<h2> Play whit: </h2> 
  
<div id='boxSelectPlayer'><button class='selectPlayer'>X</button> <p> Or</p> <button class='selectPlayer'>O</button></div> <p class='randerActivePlayer'></p> `

  const BoxdivNoughtsAndCrosses = document.createElement('section')
  BoxdivNoughtsAndCrosses.id = 'heroNoughtsAndCrosses'
  for (let i = 0; i < 9; i++) {
    const divNoughtsAndCrosses = document.createElement('div')
    divNoughtsAndCrosses.className = 'boxToClick flexContainer'
    divNoughtsAndCrosses.id = i
    BoxdivNoughtsAndCrosses.append(divNoughtsAndCrosses)
  }
  section.append(boxPlayers, BoxdivNoughtsAndCrosses)

  listenerNougthsCrosses('.selectPlayer', selectPlayer)

  listenerNougthsCrosses('.boxToClick', printActivePlayer)
  renderActivePlayer()
}
