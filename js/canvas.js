let pantalla = document.querySelector("canvas");
let tablero = pantalla.getContext("2d");



function linea(){
    tablero.lineWidth =8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="rgb(2, 2, 74)";  
}
    linea();
    tablero.lineWidth =8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle ="rgb(2, 2, 74)";

    tablero.fillRect(200,20,1200,820);
    tablero.beginPath();
    tablero.moveTo(500,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();

    function dibujarLineas(){
        tablero.lineWidth = 6;
        tablero.lineCap = "round";

        tablero.lineJoin = "round";
        tablero.fillStyle = "#F3F5F6";
        tablero.strokeStyle ="rgb(2, 2, 74)";
        
        let ancho = 600/palabra.length;
        for (let i = 0 ; i < palabra.length; i++){
        // let texto = palabra;
        tablero.moveTo(500+(ancho*i),640);
        tablero.lineTo(550+(ancho*i),640);
        // tablero.font="50px 'Carter One', cursive";
        // tablero.strokeText(texto,500+(ancho*i),620); //texto con los dos métodos
        // tablero.fillText(texto,500+(ancho*i),620);
    
        }
      
        tablero.stroke();
        tablero.closePath();


    }
    dibujarLineas();
    
    
    function dibujarTexto(index){
       
        tablero.font = "400 63px 'Carter One', cursive";
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "rgb(230, 153, 9)";

        let anchura = 600/palabra.length;
        tablero.fillText(palabra[index],505+(anchura*index),620);
        tablero.stroke();
        
        }



    function escribirLetraIncorrecta(letra, errorsLeft){
        tablero.font = "bold 40px'Carter One', cursive";
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "rgb(230, 153, 9)";
        tablero.fillText(letra, 500+(40*(10-errorsLeft)), 710,40);

    }

   
    dibujarLineas();

    function orcaUno(){
        linea();
        tablero.beginPath();
        tablero.moveTo(550,150);
        tablero.lineTo(550,500);
        tablero.stroke();
        tablero.closePath();

    }
    
  
    function orcaDos(){
        linea();
        tablero.beginPath();
        tablero.moveTo(550,150);
        tablero.lineTo(750,150);
        tablero.stroke();
        tablero.closePath();

    }
    
    

    function orcaTres(){
        linea();
        tablero.beginPath();
        tablero.moveTo(750,200);
        tablero.lineTo(750,150);
        tablero.stroke();
        tablero.closePath();

    }
   
   


    function orcaCuatro(){
        linea();
        tablero.beginPath();
        tablero.arc(750,210, 30, 0, 2*3.14);
        tablero.stroke();
        tablero.fill();
    }
  

    function orcaCinco(){
        linea();
        tablero.beginPath();
        tablero.moveTo(750,245);
        tablero.lineTo(750,350);
        tablero.stroke();
        tablero.closePath();

    }


    function orcaSeis(){
        linea();
        tablero.beginPath();
        tablero.moveTo(750,350);
        tablero.lineTo(700,420);
        tablero.stroke();
        tablero.closePath();

    }
   
    function orcaSiete(){
        linea();
        tablero.beginPath();
        tablero.moveTo(750,350);
        tablero.lineTo(800,420);
        tablero.stroke();
        tablero.closePath();

    }
    
    function orcaOcho(){
        linea();
        tablero.beginPath();
        tablero.moveTo(750,270);
        tablero.lineTo(800,300);
        tablero.stroke();
        tablero.closePath();

    }
    

    function orcaNueve(){
        linea();
        tablero.beginPath();
        tablero.moveTo(750,270);
        tablero.lineTo(700,300);
        tablero.stroke();
        tablero.closePath();

    }
    
    

    

   


   
   

