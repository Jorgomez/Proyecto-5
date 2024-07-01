import { gameLogic } from '../Posibilities/gameLogic'

export const checkTheWinner = () => {
  const gunUser = document.querySelector('#h3gunUser').textContent

  const gunComputer = document.querySelector('#h3gunComputer').textContent

  setTimeout(() => {
    gameLogic(gunUser, gunComputer)
  }, 300)
}
