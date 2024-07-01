import { parameters } from '../../../components/NoughtsCrossesComponents/NougthsCrosseVar/NougthsCrossesVar'
import { restartParameters } from '../restartParamenters/restartParameters'
import './templateWinnerNandC.css'

export const templateWinnerNougthsAndCrosses = (section) => {
  section.innerHTML += `

           <h2 class='WinnerNAndCh2'>The winner:</h2> <p id=winner>${parameters.winnerLetter} </p>

           <button id='startAgainNandC'> Start Again </button>`
}
