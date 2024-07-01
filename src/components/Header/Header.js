import { listenerPrintTemplates } from '../Listenners/listenerPrintTemplates'
import { printTemplateMemoryGame } from '../../pages/MemoryGame/HeroMemoryGame/memoryGame'
import './Header.css'
import { resetCounters } from '../MemoryGameComponents/ResetCounters/ResetCounters'
import { printTemplates } from '../PrintTemplates/PrintTemplates'
import { templateNoughtsAndCrosses } from '../../pages/NoughtsAndCrosses/HeroNoughtsAndCrosses/NoughtsAndCrosses'

import { templateRockPaperScsissors } from '../../pages/RockPaperScissors/HeroRockParperScissors/heroRockPaperScissors'
import { showMenuBar } from '../showMenuBar/showMenuBar'
import { main } from '../MainElement/MainElement'

const headerTemplate = () => {
  return ` <div id="boxLogo-Button" class="flexContainer" > <img
    src="https://res.cloudinary.com/digcf0lad/image/upload/v1711761580/Portafolio/logo_1_1_kczsvy.png"
    alt="Logo-image"
  class="logo"
  /> </div>
<nav id='gameList' class='classGameList' flexContainer">
<ul class="game-list flexContainer" >
<li id='juego1'><a>Memory Game</a></li>
<li id='juego2'><a>Noughts & crosses</a></li>
<li id='juego3'><a>Rock, Paper, Scissors</a></li>
</ul>

  </nav>
<div   class='boxSmallMenu'>
  <img src='https://res.cloudinary.com/digcf0lad/image/upload/v1711830949/Portafolio/Group_8_lenzdx.png' alt="menuBar" id='menuBar'>

  <nav id='gamelistMenuBar'
  class='hidden'>
<ul class="game-list2" >
<li id='juego11'><a>Memory Game</a></li>
<li id='juego21'><a>Noughts & crosses</a></li>
<li id='juego31'><a>Rock, Paper, Scissors</a></li>
</ul>

  </nav>

  </div>

    `
}
export const printHeaderTemplate = () => {
  const header = document.createElement('header')
  header.className = 'flexContainer'
  header.innerHTML = headerTemplate()
  document.body.append(header)
  listenerPrintTemplates('#juego1', printTemplateMemoryGame, resetCounters)
  listenerPrintTemplates(
    '#juego2',
    0,
    printTemplates,
    'section',
    'sectionNoughtsAndCrosses',
    templateNoughtsAndCrosses,
    0
  )

  listenerPrintTemplates(
    '#juego3',
    0,
    printTemplates,
    'section',
    'sectionRockPapperScissors',
    templateRockPaperScsissors,
    0
  )
  listenerPrintTemplates(
    '#juego11',
    printTemplateMemoryGame,
    0,
    0,
    0,
    0,
    showMenuBar
  )
  listenerPrintTemplates(
    '#juego21',
    0,
    printTemplates,
    'section',
    'sectionNoughtsAndCrosses',
    templateNoughtsAndCrosses,
    showMenuBar
  )

  listenerPrintTemplates(
    '#juego31',
    0,
    printTemplates,
    'section',
    'sectionRockPapperScissors',
    templateRockPaperScsissors,
    showMenuBar
  )
  listenerPrintTemplates('#menuBar', showMenuBar)
}
