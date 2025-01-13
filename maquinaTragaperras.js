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

  let frecuenciaJuego;

   function ventanaIzquierda() {
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

ventanaIzquierda.prototype.imagen = new Image();
ventanaIzquierda.prototype.imagen.src = "./assets/imgs/tragape.png";

ventanaIzquierda.prototype.pintar = function () {
 // Dibujamos el sprite en el canvas
 console.log("Entra a la funcion pintar");
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
    console.log("Termina de pintar");
}

ventanaIzquierda.prototype.moverSprite = function () {
  console.log("Entra a la funcion mover el sprite");
    this.posicion = (this.posicion + 1) % 9; // Avanzar entre frames del sprite
};

function moverVentanaIzquierda() {
  ventanucoIzq.pintar();
  ventanucoIzq.moverSprite();
}

function boton1() {
  comenzarJuego();
  frecuenciaJuego = setInterval(moverVentanaIzquierda, 1000 / 15);
}

function boton3() {
  comenzarJuego();
  frecuenciaJuego = setInterval(moverVentanaIzquierda, 1000 / 13);
}

function boton5() {
  comenzarJuego();
  frecuenciaJuego = setInterval(moverVentanaIzquierda, 1000 / 10);
}

function boton7() {
  comenzarJuego();
  frecuenciaJuego = setInterval(moverVentanaIzquierda, 1000 / 7);
}

function boton10() {
  comenzarJuego();
  frecuenciaJuego = setInterval(moverVentanaIzquierda, 1000 / 1);
}

function comenzarJuego() {
  canvasIzq = document.getElementById('canvasI');
  ctxIzq = canvasIzq.getContext('2d');

  console.log("empieza el juego");

  ventanucoIzq = new ventanaIzquierda();

  // Desactivar el botón para evitar múltiples llamadas
  //document.getElementById("comenzarJuego").onclick = null;
}
function pararJuegoIzquierda() {
  clearInterval(frecuenciaJuego);
  console.log("pararJuego");
}

//Capturamos los botones de lanzar dinero
document.getElementById("lanza1").onclick = boton1;
document.getElementById("lanza3").onclick = boton3;
document.getElementById("lanza5").onclick = boton5;
document.getElementById("lanza7").onclick = boton7;
document.getElementById("lanza10").onclick = boton10;
document.getElementById("paraI").onclick = pararJuegoIzquierda;

}

