import { listenerRockPaperScissors } from '../../../components/RockPapersScissorsComponents/Listeners/listenerRockPaperScissors'
import { printGunSelectedUser } from '../../../components/RockPapersScissorsComponents/PrintGunSelected/PrintGunSelectedUser'
import { rockPaperScissorsData } from '../../../components/RockPapersScissorsComponents/RockPapersScissorsData/rockPaperScissorsData'
import { restartLocalStore } from '../../../components/RockPapersScissorsComponents/restartLocalStorage/restarstLocalStorage'

import './heroRockPaperScissors.css'
export const templateRockPaperScsissors = (section) => {
  const boxHeroRpS = document.createElement('section')
  boxHeroRpS.className = 'flexContainer'
  boxHeroRpS.id = 'boxHeroRpS'
  boxHeroRpS.innerHTML = `<div id='boxScores'><h2> Scores </h2>    <button id='restoreScores'>Restart Scores</button></div>
  <articles id='punctuacion' ><p class='users'>User<p id='userScore'>  ${
    rockPaperScissorsData.scoresObjet.userScore || 0
  }</p>
  <p id='computerScore'> ${
    rockPaperScissorsData.scoresObjet.computerScore || 0
  }</p> <p class='users'>Computer</p></articles>  

<article id='gunSelection'>
<div class= 'user'>
<h3 id='h3gunUser'></h3>
<img alt=""id='userSelection'> 
</div>
<div class= 'computer'>
<h3 id='h3gunComputer'></h3>
<img alt=""id='computerSelection'> 
</div>
</article>
`
  const boxDivOptions = document.createElement('section')
  boxDivOptions.id = 'boxOptionsToChoose'
  for (let i = 0; i < 3; i++) {
    const divImgOptions = document.createElement('div')
    const nameOption = document.createElement('p')
    nameOption.textContent = rockPaperScissorsData.gunsLinksImages[i].gun

    const imgOptions = document.createElement('img')
    imgOptions.className = 'OptionToChoose'
    imgOptions.src = rockPaperScissorsData.gunsLinksImages[i].img

    divImgOptions.id = 'N' + i
    divImgOptions.append(nameOption, imgOptions)
    boxDivOptions.append(divImgOptions)
  }
  const instruction = document.createElement('p')
  instruction.id = 'instructionResults'
  instruction.textContent = 'Make your move :'

  section.append(boxHeroRpS, instruction, boxDivOptions)

  listenerRockPaperScissors('.OptionToChoose', printGunSelectedUser)

  document
    .querySelector('#restoreScores')
    .addEventListener('click', () => restartLocalStore())
}
