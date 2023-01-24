const celda = document.querySelector('.celda')
const fin = document.querySelector('.fin')
const salida = document.querySelector('.salida')
const botonSalida = document.querySelector('.salida .boton')
const tablero = document.querySelector('.tablero')
const puerta = document.querySelector('.puerta')
botonSalida.addEventListener('click', () => {
  setTimeout(() => botonSalida.classList.add('ocultar'), 100)
  setTimeout(() => botonSalida.classList.remove('ocultar'), 300)
  setTimeout(() => tablero.classList.remove('oculto'), 100)
})

const botonTablero = document.querySelector('.tablero .validar')
const n1 = document.getElementById('numero1')
const n2 = document.getElementById('numero2')
const n3 = document.getElementById('numero3')
botonTablero.addEventListener('click', () => {
  const val = 'intentos'
  let intentos = parseInt(window.localStorage.getItem(val), 10) || 0
  if(intentos < 3){
    if(n1.value == 45 && n2.value == 68 && n3.value == 93){
      setTimeout(() => puerta.classList.add('abierta'), 100)
    }else{
      window.localStorage.setItem(val, intentos + 1)
      alert(`Fallaste, te quedan ${3 - (intentos + 1)} intentos`)
    }
  }else{
    alert('No puedes volver a intentar')
  }
})

const botonSalir = document.querySelector('.tablero .salir')
botonSalir.addEventListener('click', () => {
  setTimeout(() => tablero.classList.add('oculto'), 100)
})

const accion = document.querySelector('.accion')
const botonAccion = document.querySelector('.accion .boton')
const rojo = document.querySelector('.rojo')
const azul = document.querySelector('.azul')
const verde = document.querySelector('.verde')
let acciones = 0;
botonAccion.addEventListener('click', () => {
  if(acciones === 0){
    setTimeout(() => accion.classList.add('azul'), 100)
    setTimeout(() => accion.classList.remove('rojo'), 100)
    setTimeout(() => accion.classList.remove('verde'), 100)
    setTimeout(() => rojo.classList.add('oculto'), 100)
    setTimeout(() => azul.classList.remove('oculto'), 100)
    setTimeout(() => verde.classList.add('oculto'), 100)
    setTimeout(() => salida.classList.add('azulada'), 100)
    setTimeout(() => salida.classList.remove('rojiza'), 100)
    setTimeout(() => salida.classList.remove('verdoza'), 100)
    acciones = 1;
  }else if (acciones === 1){
    setTimeout(() => accion.classList.add('rojo'), 100)
    setTimeout(() => accion.classList.remove('azul'), 100)
    setTimeout(() => accion.classList.remove('verde'), 100)
    setTimeout(() => rojo.classList.remove('oculto'), 100)
    setTimeout(() => azul.classList.add('oculto'), 100)
    setTimeout(() => verde.classList.add('oculto'), 100)
    setTimeout(() => salida.classList.remove('azulada'), 100)
    setTimeout(() => salida.classList.add('rojiza'), 100)
    setTimeout(() => salida.classList.remove('verdoza'), 100)
    acciones = 2
  }else if (acciones === 2){
    setTimeout(() => accion.classList.remove('rojo'), 100)
    setTimeout(() => accion.classList.remove('azul'), 100)
    setTimeout(() => accion.classList.add('verde'), 100)
    setTimeout(() => rojo.classList.add('oculto'), 100)
    setTimeout(() => azul.classList.add('oculto'), 100)
    setTimeout(() => verde.classList.remove('oculto'), 100)
    setTimeout(() => salida.classList.remove('azulada'), 100)
    setTimeout(() => salida.classList.remove('rojiza'), 100)
    setTimeout(() => salida.classList.add('verdoza'), 100)
    acciones = 3
  }else if (acciones === 3){
    setTimeout(() => accion.classList.remove('rojo'), 100)
    setTimeout(() => accion.classList.remove('azul'), 100)
    setTimeout(() => accion.classList.remove('verde'), 100)
    setTimeout(() => rojo.classList.add('oculto'), 100)
    setTimeout(() => azul.classList.add('oculto'), 100)
    setTimeout(() => verde.classList.add('oculto'), 100)
    setTimeout(() => salida.classList.remove('azulada'), 100)
    setTimeout(() => salida.classList.remove('rojiza'), 100)
    setTimeout(() => salida.classList.remove('verdoza'), 100)
    acciones = 0
  }
})