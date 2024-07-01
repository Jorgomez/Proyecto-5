import { Counters } from '../../../components/MemoryGameComponents/CounterCartSelected/CounterCartSelected'
import { arrayCarts } from '../../../components/MemoryGameComponents/DataMG/Datamg'
import { turnCarts } from '../../../components/MemoryGameComponents/Listenner/listenerMemory'
import { main } from '../../../components/MainElement/MainElement'

import './memoryGame.css'
export const templatePunctuation = (boxPunctuation) => {
  boxPunctuation.innerHTML = `  <p> Points: ${Counters.puntuacion} </p> <p> Oportunities: ${Counters.oportunities} </p>`
}

export const templateMemoryGame = (boxDivCarts) => {
  arrayCarts.sort(() => Math.random() - 0.5)
  arrayCarts.forEach((cart) => {
    const divCarts = document.createElement('div')
    divCarts.className = 'cart'
    boxDivCarts.append(divCarts)
    divCarts.addEventListener('click', (e) => turnCarts(e, cart))
  })
}

export const printTemplateMemoryGame = () => {
  main.innerHTML = ''
  const boxPunctuation = document.createElement('section')
  boxPunctuation.id = 'boxPunctuation'
  boxPunctuation.className = 'flexContainer'
  const boxDivCarts = document.createElement('section')
  boxDivCarts.id = 'heroMemoryGame'
  boxDivCarts.className = 'flexContainer'
  main.append(boxPunctuation, boxDivCarts)
  templatePunctuation(boxPunctuation)
  templateMemoryGame(boxDivCarts)
}
