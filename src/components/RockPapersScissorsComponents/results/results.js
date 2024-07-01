import { getGamesScores } from '../../LocalStorage/localStorage'
import { rockPaperScissorsData } from '../RockPapersScissorsData/rockPaperScissorsData'

export const userBitComputer = (user1, user2) => {
  const renderUserScore = document.querySelector('#userScore')
  const renderResults = document.querySelector('#instructionResults')
  rockPaperScissorsData.scoresObjet.userScore++
  renderUserScore.textContent = rockPaperScissorsData.scoresObjet.userScore
  renderResults.textContent = user1 + ' beat ' + user2
  getGamesScores('dataRPS', rockPaperScissorsData.scoresObjet)
}

export const ComputerBitUser = (user1, user2) => {
  const renderComputerScore = document.querySelector('#computerScore')
  const renderResults = document.querySelector('#instructionResults')
  rockPaperScissorsData.scoresObjet.computerScore++
  renderComputerScore.textContent =
    rockPaperScissorsData.scoresObjet.computerScore

  renderResults.textContent = user2 + ' beat ' + user1
  getGamesScores('dataRPS', rockPaperScissorsData.scoresObjet)
}
export const tie = () => {
  const renderResults = document.querySelector('#instructionResults')
  renderResults.textContent = 'No one Win'
}
