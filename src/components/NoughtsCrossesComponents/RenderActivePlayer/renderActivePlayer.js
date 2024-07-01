import { parameters } from '../NougthsCrosseVar/NougthsCrossesVar'

export const renderActivePlayer = () => {
  const activePlayerElement = document.querySelector('.randerActivePlayer')
  activePlayerElement.textContent = `Active Player: ${parameters.activePlayer}`
}
