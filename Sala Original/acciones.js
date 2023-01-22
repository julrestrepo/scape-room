const botonSalida = document.querySelector('.salida .boton')
botonSalida.addEventListener('click', () => {
  setTimeout(() => btn.classList.add('ocultar'), 100)
  setTimeout(() => btn.classList.remove('ocultar'), 300)
})