import { getGamesScores } from '../../LocalStorage/localStorage'
import { rockPaperScissorsData } from '../RockPapersScissorsData/rockPaperScissorsData'
import { ComputerBitUser, tie, userBitComputer } from '../results/results'

export const gameLogic = (user1, user2) => {
  if ((user1 === 'Rock') & (user2 === 'Scissor')) {
    userBitComputer(user1, user2)
  }
  if ((user1 === 'Rock') & (user2 === 'Paper')) {
    ComputerBitUser(user1, user2)
    // rockPaperScissorsData.computerScore++
    // renderComputerScore.textContent = rockPaperScissorsData.computerScore
    // renderResults.textContent= user1+"bits"+user2
  }
  if ((user1 === 'Rock') & (user2 === 'Rock')) {
    tie()
  }

  if ((user1 === 'Paper') & (user2 === 'Scissor')) {
    ComputerBitUser(user1, user2)
    // rockPaperScissorsData.computerScore++
    // renderComputerScore.textContent = rockPaperScissorsData.computerScore
    // renderResults.textContent= user1+"bits"+user2
  }

  if ((user1 === 'Paper') & (user2 === 'Rock')) {
    userBitComputer(user1, user2)
    // rockPaperScissorsData.userScore++
    // renderUserScore.textContent = rockPaperScissorsData.userScore
  }
  if ((user1 === 'Paper') & (user2 === 'Paper')) {
    tie()
  }
  if ((user1 === 'Scissor') & (user2 === 'Scissor')) {
    tie()
  }
  if ((user1 === 'Scissor') & (user2 === 'Rock')) {
    ComputerBitUser(user1, user2)
    // rockPaperScissorsData.computerScore++
    // renderComputerScore.textContent = rockPaperScissorsData.computerScore
  }
  if ((user1 === 'Scissor') & (user2 === 'Paper')) {
    userBitComputer(user1, user2)

    // rockPaperScissorsData.userScore++
    // renderUserScore.textContent = rockPaperScissorsData.userScore
  }

  getGamesScores('dataRPS', rockPaperScissorsData.scoresObjet)
}
