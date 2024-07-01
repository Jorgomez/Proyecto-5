import { rockPaperScissorsData } from '../RockPapersScissorsData/rockPaperScissorsData'

export const getGunName = (e) => {
  document.querySelector('#h3gunUser').textContent =
    rockPaperScissorsData.gunsLinksImages.find(
      (gun) => gun.img === e.target.src
    ).gun
}
