import { rockPaperScissorsData } from '../RockPapersScissorsData/rockPaperScissorsData'

export const printGunSelectedComputer = (e) => {
  setTimeout(() => {
    rockPaperScissorsData.varcomputer = Math.floor(
      Math.random() * rockPaperScissorsData.gunsLinksImages.length
    )

    document.querySelector('#computerSelection').src =
      rockPaperScissorsData.gunsLinksImages[
        rockPaperScissorsData.varcomputer
      ].img

    document.querySelector('#h3gunComputer').textContent =
      rockPaperScissorsData.gunsLinksImages[
        rockPaperScissorsData.varcomputer
      ].gun
  }, 300)
}
