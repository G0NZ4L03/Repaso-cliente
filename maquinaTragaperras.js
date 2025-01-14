//Maquina Tragaperras
window.onload = function () {

  //Constantes
  const RECORTEX = 200;
  const RECORTEY = 120;
  const PINTARX = 500;
  const PINTARY = 150;

   //Variables canvas
   let canvasIzq;
   let ctxIzq;

   let canvasCentro;
   let ctxCentro;

   let canvasDerecha;
   let ctxDerecha;

  let frecuenciaJuegoIzq;
  let frecuenciaJuegoCentro;
  let frecuenciaJuegoDrch;


  //Objeto 1
   function ventanaIzq() {
    this.x = 0 ;
    this.y = 0 ; 
    this.recorteX = RECORTEX;
    this.recorteY = RECORTEY;
    this.pintarX = PINTARX;
    this.pintarY = PINTARY;

    this.posicion = Math.floor(Math.random() * 9); // Posición inicial del sprite

    this.animacionJuego = [
        [0,30], // Foto 1
        [0,165], // Foto 2
        [0,300], // Foto 3
        [0,435], // Foto 4
        [0,570], // Foto 5
        [0,705], // Foto 6
        [0,840], // Foto 7
        [0,975], // Foto 8
        [0,1110], // Foto 9
    ];
    };

ventanaIzq.prototype.imagen = new Image();
ventanaIzq.prototype.imagen.src = "./assets/imgs/tragape.png";

ventanaIzq.prototype.pintar = function () {
 // Dibujamos el sprite en el canvas
     ctxIzq.clearRect(0, 0, canvasIzq.width, canvasIzq.height); 
     ctxIzq.drawImage(this.imagen, // Imagen completa con todos los comecocos
      this.animacionJuego[this.posicion][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
      this.animacionJuego[this.posicion][1],      // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
      this.recorteX, 
      this.recorteY, // Tamaño del recorte
      this.x, 
      this.y, // Posición en el canvas
      this.pintarX, 
      this.pintarY // Tamaño en el canvas
    );
}

ventanaIzq.prototype.moverSprite = function () {
  console.log("Entra a la funcion mover el sprite");
    this.posicion = (this.posicion + 1) % 9; // Avanzar entre frames del sprite
};


//Objeto 2
function ventanaCentro() {
  this.x = 0 ;
  this.y = 0 ; 
  this.recorteX = RECORTEX;
  this.recorteY = RECORTEY;
  this.pintarX = PINTARX;
  this.pintarY = PINTARY;

  this.posicion = Math.floor(Math.random() * 9); // Posición inicial del sprite

  this.animacionJuego = [
      [0,30], // Foto 1
      [0,165], // Foto 2
      [0,300], // Foto 3
      [0,435], // Foto 4
      [0,570], // Foto 5
      [0,705], // Foto 6
      [0,840], // Foto 7
      [0,975], // Foto 8
      [0,1110], // Foto 9
  ];
  };

ventanaCentro.prototype.imagen = new Image();
ventanaCentro.prototype.imagen.src = "./assets/imgs/tragape.png";

ventanaCentro.prototype.pintar = function () {
// Dibujamos el sprite en el canvas
console.log("Entra a la funcion pintar");
   ctxCentro.clearRect(0, 0, canvasCentro.width, canvasCentro.height); 
   ctxCentro.drawImage(this.imagen, // Imagen completa con todos los comecocos
    this.animacionJuego[this.posicion][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
    this.animacionJuego[this.posicion][1],      // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
    this.recorteX, 
    this.recorteY, // Tamaño del recorte
    this.x, 
    this.y, // Posición en el canvas
    this.pintarX, 
    this.pintarY // Tamaño en el canvas
  );
}

ventanaCentro.prototype.moverSprite = function () {
console.log("Entra a la funcion mover el sprite");
  this.posicion = (this.posicion + 1) % 9; // Avanzar entre frames del sprite
};

//Objeto 3

function ventanaDrch() {
  this.x = 0 ;
  this.y = 0 ; 
  this.recorteX = RECORTEX;
  this.recorteY = RECORTEY;
  this.pintarX = PINTARX;
  this.pintarY = PINTARY;

  this.posicion = Math.floor(Math.random() * 9); // Posición inicial del sprite

  this.animacionJuego = [
      [0,30], // Foto 1
      [0,165], // Foto 2
      [0,300], // Foto 3
      [0,435], // Foto 4
      [0,570], // Foto 5
      [0,705], // Foto 6
      [0,840], // Foto 7
      [0,975], // Foto 8
      [0,1110], // Foto 9
  ];
  };

ventanaDrch.prototype.imagen = new Image();
ventanaDrch.prototype.imagen.src = "./assets/imgs/tragape.png";

ventanaDrch.prototype.pintar = function () {
// Dibujamos el sprite en el canvas
   ctxDerecha.clearRect(0, 0, canvasDerecha.width, canvasDerecha.height); 
   ctxDerecha.drawImage(this.imagen, // Imagen completa con todos los comecocos
    this.animacionJuego[this.posicion][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
    this.animacionJuego[this.posicion][1],      // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
    this.recorteX, 
    this.recorteY, // Tamaño del recorte
    this.x, 
    this.y, // Posición en el canvas
    this.pintarX, 
    this.pintarY // Tamaño en el canvas
  );
  console.log("Termina de pintar");
}

ventanaDrch.prototype.moverSprite = function () {
console.log("Entra a la funcion mover el sprite");
  this.posicion = (this.posicion + 1) % 9; // Avanzar entre frames del sprite
};


function moverVentanaIzquierda() {
  ventanucoIzq.pintar();
  ventanucoIzq.moverSprite();
}

function moverVentanaICentro() {
  ventanucoCentro.pintar();
  ventanucoCentro.moverSprite();
}

function moverVentanaDerecha() {
  ventanucoDrch.pintar();
  ventanucoDrch.moverSprite();
}

function boton1() {
  comenzarJuego();
  frecuenciaJuegoIzq = setInterval(moverVentanaIzquierda, 1000 / 15);
  frecuenciaJuegoCentro = setInterval(moverVentanaICentro, 1000 / 15);
  frecuenciaJuegoDrch = setInterval(moverVentanaDerecha, 1000 / 15);

}

function boton3() {
  comenzarJuego();
  frecuenciaJuegoIzq = setInterval(moverVentanaIzquierda, 1000 / 13);
  frecuenciaJuegoCentro = setInterval(moverVentanaICentro, 1000 / 13);
  frecuenciaJuegoDrch = setInterval(moverVentanaDerecha, 1000 / 13);
}

function boton5() {
  comenzarJuego();
  frecuenciaJuegoIzq = setInterval(moverVentanaIzquierda, 1000 / 10);
  frecuenciaJuegoCentro = setInterval(moverVentanaICentro, 1000 / 10);
  frecuenciaJuegoDrch = setInterval(moverVentanaDerecha, 1000 / 10);

}

function boton7() {
  comenzarJuego();
  frecuenciaJuegoIzq = setInterval(moverVentanaIzquierda, 1000 / 7);
  frecuenciaJuegoCentro = setInterval(moverVentanaICentro, 1000 / 7);
  frecuenciaJuegoDrch = setInterval(moverVentanaDerecha, 1000 / 7);
}

function boton10() {
  comenzarJuego();
  frecuenciaJuegoIzq = setInterval(moverVentanaIzquierda, 1000 / 1);
  frecuenciaJuegoCentro = setInterval(moverVentanaICentro, 1000 / 1);
  frecuenciaJuegoDrch = setInterval(moverVentanaDerecha, 1000 / 1);
}

function comenzarJuego() {
  canvasIzq = document.getElementById('canvasI');
  ctxIzq = canvasIzq.getContext('2d');

  canvasCentro = document.getElementById('canvasC');
  ctxCentro = canvasIzq.getContext('2d');

  canvasDerecha = document.getElementById('canvasD');
  ctxDerecha = canvasIzq.getContext('2d');

  console.log("empieza el juego");

  ventanucoIzq = new ventanaIzq();
  ventanucoCentro = new ventanaCentro();
  ventanucoDrch = new ventanaDrch();

  // Desactivar el botón para evitar múltiples llamadas
  //document.getElementById("comenzarJuego").onclick = null;
}
function pararJuegoIzquierda() {
  clearInterval(frecuenciaJuegoIzq);
  console.log("pararJuego");
}

function pararJuegoCentro() {
  clearInterval(frecuenciaJuegoCentro);
  console.log("pararJuego");
}

function pararJuegoDerecha() {
  clearInterval(frecuenciaJuegoDrch);
  console.log("pararJuego");
}

//Capturamos los botones de lanzar dinero
document.getElementById("lanza1").onclick = boton1;
document.getElementById("lanza3").onclick = boton3;
document.getElementById("lanza5").onclick = boton5;
document.getElementById("lanza7").onclick = boton7;
document.getElementById("lanza10").onclick = boton10;
document.getElementById("paraI").onclick = pararJuegoIzquierda;
document.getElementById("paraC").onclick = pararJuegoCentro;
document.getElementById("paraD").onclick = pararJuegoDerecha;

}

