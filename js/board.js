var canvas =  document.querySelector(".board");
var lapiz = canvas.getContext("2d");

/*Canvas 1200 x 800*/

const trazar = (seccion) => {

    switch(seccion) {

        case "horca":                               /*[0]*/
            lapiz.strokeStyle = "wheat";
            lapiz.lineWidth = 8;           //Grosor de la horca
            lapiz.beginPath();
            lapiz.moveTo(175,225);
            lapiz.lineTo(5, 225);
            lapiz.moveTo(40,225);
            lapiz.lineTo(25,5);
            lapiz.lineTo(100,5);
            lapiz.lineTo(100,25);
            lapiz.stroke();
            break;
        
        case "cabeza":                              /*[1]*/
            lapiz.lineWidth = 5;
            lapiz.beginPath();
            lapiz.arc(100,50,25,0, Math.PI*2, true)        //True para dibujarlo en base a las manecillas del reloj
            lapiz.closePath();
            lapiz.stroke();
            break;

        case 'torso':                               /*[2] */
            lapiz.beginPath();
            lapiz.moveTo(100,75);
            lapiz.lineTo(100,140);
            lapiz.stroke();
            break;

        case 'brazoDerecho':                        /*[3]*/
            lapiz.beginPath();
            lapiz.moveTo(100,85);
            lapiz.lineTo(140,100);
            lapiz.stroke();
            break;
        
        case 'brazoIzquierdo':                      /*[4]*/
            lapiz.beginPath();
            lapiz.moveTo(100,85);
            lapiz.lineTo(60,100);
            lapiz.stroke();
            break;

        case 'piernaDerecha':                      /*[5]*/
            lapiz.beginPath();
            lapiz.moveTo(100,140);
            lapiz.lineTo(125, 190);
            lapiz.stroke();
            break;

        case 'piernaIzquierda':                     /*[6]*/
            lapiz.beginPath();
            lapiz.moveTo(100,140);
            lapiz.lineTo(80,190);
            lapiz.stroke();
            break;
        
        case 'pieIzquierdo':                         /*[7]*/
            lapiz.beginPath();
            lapiz.moveTo(82,190);
            lapiz.lineTo(70,185);
            lapiz.stroke()
            break;
    

        case 'pieDerecho':                         /*[8]*/
            lapiz.beginPath();
            lapiz.moveTo(122,190);
            lapiz.lineTo(135,185);
            lapiz.stroke();
            break;
        


    }

}

const secciones = [
    'horca', 'cabeza', 'torso', 
    'brazoDerecho', 'brazoIzquierdo',
    'piernaDerecha', 'piernaIzquierda', 
    'pieDerecho', 'pieIzquierdo'
]





/*
Crear una función para dibujar nuestro tablero de juego.
Establecer un tamaño máximo de 1200 x 800 para nuestro tablero
Colocar un color de fondo

*/