import { rockPaperScissorsData } from '../RockPapersScissorsData/rockPaperScissorsData'

export const restartLocalStore = () => {
  localStorage.clear()
  rockPaperScissorsData.scoresObjet.userScore = 0
  rockPaperScissorsData.scoresObjet.computerScore = 0
  const renderComputerScore = document.querySelector('#computerScore')
  renderComputerScore.textContent = 0

  const renderUserScore = document.querySelector('#userScore')
  renderUserScore.textContent = 0
}
