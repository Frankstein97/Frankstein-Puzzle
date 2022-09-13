// LO MISMO PERO CAPTURANDO BOTONES (TENDRIA QUE HABER UNA MEJOR FORMA PARA ACORTAR CODIGO Y NO REPETIR)

document.getElementById("top").onclick = function clickTop() {
    var nuevaFilaPiezaVacia
    var nuevaColumnaPiezaVacia
    nuevaFilaPiezaVacia = filaVacia - 1;
    nuevaColumnaPiezaVacia = columnaVacia;
 
      if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    }
      ultimoMov = document.getElementById('flecha');
  ultimoMov.textContent = '↑';
  var gano = chequearSiGano();
        if (gano) {
          setTimeout(function() {
              mostrarCartelGanador();
              }, 500);
            }
          
}
// -
document.getElementById("button").onclick = function clickButton() {
  var nuevaFilaPiezaVacia
  var nuevaColumnaPiezaVacia
  nuevaFilaPiezaVacia = filaVacia + 1;
  nuevaColumnaPiezaVacia = columnaVacia;

    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
      intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
      actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }
    ultimoMov = document.getElementById('flecha');
    ultimoMov.textContent = '↓';

    var gano = chequearSiGano();
        if (gano) {
          setTimeout(function() {
              mostrarCartelGanador();
              }, 500);
            }
          
}
// -
document.getElementById("right").onclick = function clickRigth() {
  var nuevaFilaPiezaVacia
  var nuevaColumnaPiezaVacia
  nuevaFilaPiezaVacia = filaVacia;
    nuevaColumnaPiezaVacia = columnaVacia + 1;

    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
      intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
      actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }
    ultimoMov = document.getElementById('flecha');
    ultimoMov.textContent = '→';
    var gano = chequearSiGano();
        if (gano) {
          setTimeout(function() {
              mostrarCartelGanador();
              }, 2000);
            }
          
}
// -
document.getElementById("left").onclick = function clickLeft() {
  var nuevaFilaPiezaVacia
  var nuevaColumnaPiezaVacia
  nuevaFilaPiezaVacia = filaVacia;
  nuevaColumnaPiezaVacia = columnaVacia - 1;

    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
      intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
      actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }
    ultimoMov = document.getElementById('flecha');
    ultimoMov.textContent = '→';
    var gano = chequearSiGano();
        if (gano) {
          setTimeout(function() {
              mostrarCartelGanador();
              }, 500);
            }
          
}
// -
// Arreglo que contiene las intrucciones del juego 
var instrucciones = [`Comenza moviendo las flechas`, `arma el rompecabezas`, `revela el mensaje al ganar`];
// Arreglo para ir guardando los movimientos que se vayan realizando
var movimientos = [];

// Representación de la grilla. Cada número representa a una pieza. El 9 es la posición vacía
var grilla = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];  

/* Estas dos variables son para guardar la posición de la pieza vacía.*/
var filaVacia = 2;
var columnaVacia = 2;


function mostrarInstrucciones(instrucciones) {
  for (i = 0; i < instrucciones.length; i++) {
    mostrarInstruccionEnLista(instrucciones[i],'lista-instrucciones');

  
}
}

/* función que agregue la última dirección al arreglo de movimientos */
function ultimaDireccion (direccion){
  movimientos.push(direccion)
  actualizarUltimoMovimiento(direccion)
}
/* Esta función va a chequear si el Rompecabezas esta en la posicion ganadora.*/
function chequearSiGano() {


      let grillaFlat = grilla.flat();
      for(i = 0; i < grillaFlat.length; i ++){
        if(grillaFlat[i] != i+1){
          return false;
        }
      }
      return true;
    }
    
// Implementar alguna forma de mostrar un cartel que avise que ganaste el juego
function mostrarCartelGanador() {
  Swal.fire({
      icon: 'success',
          imageUrl: 'images/init.gif',
          imageWidth: 300,
          imageHeight: 200,
          imageAlt: 'Custom image',
      title: 'GANASTE!!!',
      text: 'Gracias por jugar. Te deseo una excelente giornata :)',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

}


function intercambiarPosicionesGrilla(filaPos1, columnaPos1, filaPos2, columnaPos2) {
    var posicionUno = grilla[filaPos1][columnaPos1];
    grilla[filaPos1][columnaPos1] = grilla[filaPos2][columnaPos2];
    grilla[filaPos2][columnaPos2] = posicionUno;
}

// Actualiza la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
  filaVacia = nuevaFila;
  columnaVacia = nuevaColumna;
 
}


// Para chequear si la posicón está dentro de la grilla.
function posicionValida(fila, columna) {
  return ((fila === 0 || fila === 1 || fila === 2) && (columna === 0 || columna === 1 || columna === 2));

}

/* Movimiento de fichas, */
function moverEnDireccion(direccion) {
  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;
  
  // Mueve pieza hacia la abajo, reemplazandola con la blanca
  if (direccion === codigosDireccion.ABAJO) {
    nuevaFilaPiezaVacia = filaVacia + 1;
    nuevaColumnaPiezaVacia = columnaVacia;
  }
    
  // Mueve pieza hacia arriba, reemplazandola con la blanca
  else if (direccion === codigosDireccion.ARRIBA) {
    nuevaFilaPiezaVacia = filaVacia - 1;
    nuevaColumnaPiezaVacia = columnaVacia;
  }
    
  // Mueve pieza hacia la derecha, reemplazandola con la blanca
  else if (direccion === codigosDireccion.DERECHA) {
    nuevaFilaPiezaVacia = filaVacia;
    nuevaColumnaPiezaVacia = columnaVacia + 1;
  }
    
  // Mueve pieza hacia la izquierda, reemplazandola con la blanca
  else if (direccion === codigosDireccion.IZQUIERDA ) {
    nuevaFilaPiezaVacia = filaVacia;
    nuevaColumnaPiezaVacia = columnaVacia - 1;
  }

  /* chequea si la nueva posición es válida*/

    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);

  //dirección del movimiento al arreglo de movimientos
  ultimaDireccion(direccion);

    }
}

/* codigosDireccion es un objeto que permite reemplazar
el uso de números, facilita la lectura del código. */
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}

/* Funcion que realiza el intercambio logico (en la grilla) y ademas actualiza
el intercambio en la pantalla (DOM).*/
function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
  // Intercambio posiciones en la grilla
  var pieza1 = grilla[fila1][columna1];
  var pieza2 = grilla[fila2][columna2];

  intercambiarPosicionesGrilla(fila1, columna1, fila2, columna2);
  intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);

}

/* Intercambio de posiciones de los elementos del DOM  */

function intercambiarPosicionesDOM(idPieza1, idPieza2) {
  var elementoPieza1 = document.getElementById(idPieza1);
  var elementoPieza2 = document.getElementById(idPieza2);

  var padre = elementoPieza1.parentNode;

  var clonElemento1 = elementoPieza1.cloneNode(true);
  var clonElemento2 = elementoPieza2.cloneNode(true);

  padre.replaceChild(clonElemento1, elementoPieza2);
  padre.replaceChild(clonElemento2, elementoPieza1);
}

/* Actualiza el último movimiento en la pantalla, representado con una flecha. */
function actualizarUltimoMovimiento(direccion) {
  ultimoMov = document.getElementById('flecha');
  switch (direccion) {
    case codigosDireccion.ARRIBA:
      ultimoMov.textContent = '↑';
      break;
    case codigosDireccion.ABAJO:
      ultimoMov.textContent = '↓';
      break;
    case codigosDireccion.DERECHA:
      ultimoMov.textContent = '→';
      break;
    case codigosDireccion.IZQUIERDA:
      ultimoMov.textContent = '←';
      break;
  }
}

/* Esta función permite agregar una instrucción a la lista con idLista. */
function mostrarInstruccionEnLista(instruccion, idLista) {
  var ul = document.getElementById(idLista);
  var li = document.createElement("li");
  li.textContent = instruccion;
  ul.appendChild(li);
}

/* mezcla las piezas del tablero una cantidad de veces dada.*/

function mezclarPiezas(veces) {
  if (veces <= 0) {
    return;
  }
  
  var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA,
      codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA
    ];

  var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function() {
      mezclarPiezas(veces - 1);
    }, 100);
}
/*captura las teclas presionadas por el usuario*/
function capturarTeclas() {
  document.body.onkeydown = (function(evento) {
    
    if (evento.which === codigosDireccion.ABAJO ||
      evento.which === codigosDireccion.ARRIBA ||
      evento.which === codigosDireccion.DERECHA ||
      evento.which === codigosDireccion.IZQUIERDA) {

      moverEnDireccion(evento.which);

        var gano = chequearSiGano();
        if (gano) {
          setTimeout(function() {
              mostrarCartelGanador();
              }, 500);
            }
            evento.preventDefault();
        }
    })
}

/* Se inicia el rompecabezas mezclando las piezas */
function iniciar() {
    mostrarInstrucciones(instrucciones);
    mezclarPiezas(30);
    capturarTeclas();
}

// Ejecutamos la función iniciar
iniciar();