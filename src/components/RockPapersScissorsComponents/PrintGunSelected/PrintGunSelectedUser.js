import { checkTheWinner } from '../checkWiner/checkWinner'
import { getGunName } from '../getGunName/getGunName'
import { printGunSelectedComputer } from './printGunSelectedComputer'

export const printGunSelectedUser = (e) => {
  document.querySelector('#userSelection').src = e.target.src
  getGunName(e)

  printGunSelectedComputer()
  setTimeout(() => {
    checkTheWinner()
  }, 500)
}
