const localStorageData = JSON.parse(localStorage.getItem('dataRPS')) || {}

export const rockPaperScissorsData = {
  gunsLinksImages: [
    {
      gun: 'Rock',
      img: 'https://res.cloudinary.com/digcf0lad/image/upload/v1719158847/proyecto%205/stone_he3ztf.png'
    },
    {
      gun: 'Paper',
      img: 'https://res.cloudinary.com/digcf0lad/image/upload/v1719158837/proyecto%205/paper_r87laq.png'
    },

    {
      gun: 'Scissor',
      img: 'https://res.cloudinary.com/digcf0lad/image/upload/v1719158838/proyecto%205/scissors_1_jvmtxl.png'
    }
  ],

  scoresObjet: {
    varcomputer: 0,
    userScore: localStorageData.userScore || 0,
    computerScore: localStorageData.computerScore || 0
  }
}
