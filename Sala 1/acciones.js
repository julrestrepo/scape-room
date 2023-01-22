const celda = document.querySelector('.celda')
const saliste = document.querySelector('.saliste')
const botonSalida = document.querySelector('.salida .boton')
const tablero = document.querySelector('.tablero')
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
    if(n1.value == 7 && n2.value == 30 && n3.value == 23){
      setTimeout(() => celda.classList.add('oculto'), 100)
      setTimeout(() => saliste.classList.remove('oculto'), 100)
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

const botonSanitario = document.querySelector('.sanitario .boton')
const chorro = document.querySelector('.chorro')
const charco = document.querySelector('.charco')
const charcoAgua = document.querySelector('.charco .agua')
const charcoNumero = document.querySelector('.charco .numero')
botonSanitario.addEventListener('click', () => {
  setTimeout(() => botonSanitario.classList.add('presionado'), 100)
  setTimeout(() => botonSanitario.classList.remove('presionado'), 300)
  chorro.classList.remove('oculto')
  setTimeout(()=> charco.classList.remove('oculto'), 1000)
  setTimeout(()=> charcoAgua.classList.add('add-10'), 2000)
  setTimeout(()=> charcoAgua.classList.add('add-20'), 3000)
  setTimeout(()=> charcoAgua.classList.add('add-30'), 4000)
  setTimeout(()=> charcoAgua.classList.add('add-40'), 5000)
  setTimeout(()=> charcoAgua.classList.add('add-50'), 6000)
  setTimeout(()=> charcoNumero.classList.remove('oculto'), 6000)
})

const ladrillo = document.querySelector('.ladrillo .frontal')
const quiebre1 = document.querySelector('.ladrillo .quiebre1')
const quiebre2 = document.querySelector('.ladrillo .quiebre2')
const quiebre3 = document.querySelector('.ladrillo .quiebre3')
const quiebre4 = document.querySelector('.ladrillo .quiebre4')
const muro = document.querySelector('.ladrillo .muro')
const muroNumero = document.querySelector('.ladrillo .numero')
ladrillo.addEventListener('click', () => {
  setTimeout(() => ladrillo.classList.add('oculto'), 100)
  setTimeout(() => quiebre1.classList.remove('oculto'), 100)
})
quiebre1.addEventListener('click', () => {
  setTimeout(() => quiebre1.classList.add('oculto'), 100)
  setTimeout(() => quiebre2.classList.remove('oculto'), 100)
})
quiebre2.addEventListener('click', () => {
  setTimeout(() => quiebre2.classList.add('oculto'), 100)
  setTimeout(() => quiebre3.classList.remove('oculto'), 100)
})
quiebre3.addEventListener('click', () => {
  setTimeout(() => quiebre3.classList.add('oculto'), 100)
  setTimeout(() => quiebre4.classList.remove('oculto'), 100)
})
quiebre4.addEventListener('click', () => {
  setTimeout(() => quiebre4.classList.add('oculto'), 100)
  setTimeout(() => muro.classList.remove('oculto'), 100)
  setTimeout(() => muroNumero.classList.remove('oculto'), 100)
})

const tapa = document.querySelector('.tapa .frontal')
tapa.addEventListener('click', () => {
  setTimeout(() => tapa.classList.add('no-width'), 100)
})