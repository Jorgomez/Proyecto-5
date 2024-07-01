export const listenerPrintTemplates = (
  button,
  funcion1,
  funcion2,
  parameter1,
  parameter2,
  parameter3,
  funcion3
) => {
  document.querySelector(button).addEventListener('click', () => {
    if (funcion1) {
      funcion1()
    }
    if (funcion2) {
      funcion2(parameter1, parameter2, parameter3)
    }

    if (funcion3) {
      funcion3()
    }
  })
}
