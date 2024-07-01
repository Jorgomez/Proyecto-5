import { main } from '../MainElement/MainElement'

export const printStartAgainTemplate = (
  element,
  sectionNameID,
  templateToprint,
  funcion1,
  parameter1,
  parameter2,
  parameter3
) => {
  // main.innerHTML = ''
  const sectionBox = document.createElement(element)
  sectionBox.id = sectionNameID
  sectionBox.className = 'flexContainer'
  main.append(sectionBox)
  templateToprint(sectionBox)

  if (funcion1) {
    funcion1(parameter1, parameter2, parameter3)
  }
}
