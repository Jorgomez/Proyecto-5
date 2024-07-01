import { parameters } from '../NougthsCrosseVar/NougthsCrossesVar'

export const valuesCatch = () => {
  parameters.values = []
  document.querySelectorAll('.boxToClick').forEach((element) => {
    parameters.values.push(element.innerText)
  })
}
