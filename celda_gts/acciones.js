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
    if(n1.value == 32 && n2.value == 12 && n3.value == 44){
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

const luz = document.querySelector('.luz .tira')
const circulito = document.querySelector('.luz .circulito')
const apagada = document.querySelector('.luz .apagada')
const papel = document.querySelector('.papel')
const numeros = document.querySelector('.numeros')
const letras = document.querySelector('.letras')
const sentenciados = document.querySelector('.sentenciados')
let estadoLuz = 0;
let estadoPapel = 0;
luz.addEventListener('click', () => {
  apagarLuz();
})

circulito.addEventListener('click', () => {
  apagarLuz();
})

function apagarLuz(){
  if(estadoLuz == 0){
    setTimeout(() => luz.classList.add('jalada'), 100)
    setTimeout(() => circulito.classList.add('jalada'), 100)
    setTimeout(() => apagada.classList.remove('oculto'), 100)
    setTimeout(() => papel.classList.add('apagada'), 100)
    setTimeout(() => numeros.classList.remove('ocultos'), 100)
    setTimeout(() => letras.classList.remove('ocultos'), 100)
    setTimeout(() => salida.classList.add('apagada'), 100)
    setTimeout(() => sentenciados.classList.remove('oculto'), 100)
    console.log(estadoPapel);
    if(estadoPapel == 1){
      setTimeout(() => letras.classList.remove('oculto'), 100)
      setTimeout(() => numeros.classList.add('oculto'), 100)
    }
    
    if(estadoPapel == 2){
      setTimeout(() => letras.classList.add('oculto'), 100)
      setTimeout(() => numeros.classList.remove('oculto'), 100)
    }

    estadoLuz = 1
  }else if(estadoLuz == 1){
    setTimeout(() => luz.classList.remove('jalada'), 100)
    setTimeout(() => circulito.classList.remove('jalada'), 100)
    setTimeout(() => apagada.classList.add('oculto'), 100)
    setTimeout(() => papel.classList.remove('apagada'), 100)
    setTimeout(() => letras.classList.add('ocultos'), 100)
    setTimeout(() => numeros.classList.add('ocultos'), 100)
    setTimeout(() => salida.classList.remove('apagada'), 100)
    setTimeout(() => sentenciados.classList.add('oculto'), 100)
    estadoLuz = 0
  }
}

papel.addEventListener('click', () => {
  if(estadoPapel == 0){
    setTimeout(() => papel.classList.add('afuera'), 100)
    setTimeout(() => numeros.classList.remove('oculto'), 100)
    estadoPapel = 1;
  }else if(estadoPapel == 1){
    setTimeout(() => letras.classList.add('oculto'), 100)
    setTimeout(() => numeros.classList.remove('oculto'), 100)
    estadoPapel = 2
  }else if(estadoPapel == 2){
    setTimeout(() => letras.classList.remove('oculto'), 100)
    setTimeout(() => numeros.classList.add('oculto'), 100)
    estadoPapel = 1;
  }
})