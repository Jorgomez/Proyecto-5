export const getGamesScores = (nameStorage, objet) => {
  localStorage.setItem(nameStorage, JSON.stringify(objet))
}
