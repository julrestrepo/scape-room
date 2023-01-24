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
    if(n1.value == 99 && n2.value == 5 && n3.value == 76){
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

const papel = document.querySelector('.papel')
const papel2 = document.querySelector('.papel2')
const texto = document.querySelector('.papel .texto')
const texto2 = document.querySelector('.papel2 .texto')
const zoom = document.querySelector('.zoom')
const zoom2 = document.querySelector('.zoom2')
let estadoPapel = 0;
papel.addEventListener('click', () => {
  if(estadoPapel == 0){
    setTimeout(() => papel.classList.add('afuera'), 100)
    setTimeout(() => texto.classList.remove('oculto'), 100)
    estadoPapel = 1
  }else if(estadoPapel == 1){
    setTimeout(() => zoom.classList.remove('oculto'), 100)
    setTimeout(() => papel.classList.add('oculto'), 100)
    setTimeout(() => papel2.classList.remove('oculto'), 5000)
    estadoPapel = 2
  }
})

papel2.addEventListener('click', () => {
  console.log(estadoPapel)
  if(estadoPapel == 2){
    setTimeout(() => papel2.classList.add('afuera'), 100)
    setTimeout(() => texto2.classList.remove('oculto'), 100)
    estadoPapel = 3
  }else if(estadoPapel == 3){
    setTimeout(() => zoom2.classList.remove('oculto'), 100)
    setTimeout(() => papel2.classList.add('oculto'), 100)
    estadoPapel = 4
  }
})