let btnJugar=document.getElementById("iniciar-juego");
const boxPerdiste = document.getElementById('light-box');
const boxGanste = document.getElementById('light-box-ganaste');
const boxPalabra = document.getElementById('light-box-palabra');

const seccionNuevaPalabra = document.getElementById('cargarNuevaPalabra');
const input = document.getElementById('texto');
const abecedario = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
const querty = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
const idLetras=document.getElementById("letras");
const idDisposicionTeclado=document.getElementById("disposicionTeclado");

let palabraSecreta ="";
let errors= 8;
let letras=[];
let contador=[];
let contadorLetraCorrectasIngresadas=[];
let palabra;
let letra;
let dibujo=0;
let letra2=[];
let datoPalabra=[];

/*carga de nueva palabra */
function agregarNuevaPalabra(){
    let palabraNuevaCargada= document.getElementById("palabra").value;
    datoPalabra.push(palabraNuevaCargada);
    localStorage.setItem('data', datoPalabra);/*guarda*/
// localStorage.getItem('data')    
    document.getElementById("palabra").value = '';
    boxPalabra.style.transform= "scale(1)";
}

function agragarPalabra(){
    seccionNuevaPalabra.style.transform="scale(1)";
}

function cargoPalabra(){
    boxPalabra.style.transform= "scale(0)"
}

let palabras_4= ["ALURA", "HTML","CASA" , "ORACLE"];
let palabras_2=[];
palabras_2= localStorage.getItem('data');
// let palabras_3=[];
let palabras_3 = palabras_2;
let palabras= [];
palabras= palabras_4.concat(palabras_3);

btnJugar = iniciarJuego();

/*seleccion de palabra*/
function palabrasAlazar(){
    palabra = palabras[Math.floor(Math.random() * palabras.length)].toLocaleUpperCase();
    document.getElementById('escribri-Palabra-secreta').innerHTML=palabra;
}

function escribirPalabra(palabra){
    document.write(palabra);
}

console.log(palabra);

function contarErrors(){
    errors=errors-1;
}

function palabraSecretaSinRepetir(){
    for (let i=0; i<palabra.length; i++){
        if (!contador.includes(palabra[i])){
            contador.push(palabra[i]);
        }
    }
}

// funcion para mostrar las letras
// tiene que recibir el listado de letras a mostrar
const mostrarLetras = listadoLetras => {
    idLetras.innerHTML="";
    // añadimos las letras
    listadoLetras.split('').map(el => {
        let span=document.createElement("span");
        span.addEventListener("click", teclaPulsada);
        span.innerText=el;
        if (el==" ") {
            span.classList.add("space");
        }
        idLetras.appendChild(span);
    });
}
// por defecto indicamos que muestre el teclado querty
mostrarLetras(querty);
 
// función que recibe la pulsación de la tecla
// tanto del teclado fisico como del teclado dibujado en la pantalla
function teclaPulsada(event) {
    const tecla=this.classList && this.classList.contains("space") ? " " : this.innerText;
    if (abecedario.indexOf(tecla)>=0) {
        letra = tecla;
        cargareLetra(letra)
        // document.getElementById("texto").value+=tecla;
    }
}
 
// creamos un evento por si el usuario quiere cambiar el estilo del teclado
// entre querty o abecedario
Array.from(idDisposicionTeclado.querySelectorAll("span")).map(el => el.addEventListener("click", function() {
    // añadimos el estilo .selected al elemento seleccionado
    Array.from(idDisposicionTeclado.querySelectorAll("span")).map(el => el == this ? this.classList.add("selected") : el.classList.remove("selected"));
    mostrarLetras(eval(this.innerText.toLowerCase()));
}));
let cargaLetraIncorrecta=[];
function cargareLetra(letra){
    if(!cargaLetraIncorrecta.includes(letra)){
        cargaLetraIncorrecta.push(letra);
        letraCorrecta(letra)
    }
}



let contarLetra=0;

function letraCorrecta(letra){
    if (palabra.includes(letra)){
        for(let i = 0 ; i < palabra.length; i++){
            if(palabra[i]=== letra){
                dibujarTexto(i);
                contarLetraIngresada(letra);
            }
        }
    }else{
        contarErrors();
        escribirLetraIncorrecta(letra, errors);
        dibujo=dibujo+1;
        palabraIncorrecta()
  }
    
}

function contarLetraIngresada(letra){
    if(palabra.includes(letra) && !contadorLetraCorrectasIngresadas.includes(letra)){
        contadorLetraCorrectasIngresadas.push(letra);
    }if(contadorLetraCorrectasIngresadas.length===contador.length){
        ganaste();
    } 

}

function palabraIncorrecta(){

    switch (dibujo){
        case dibujo = 1:
            orcaUno();
            orcaDos();
            orcaTres();
            break;
        case dibujo = 2:
            orcaCuatro();
            break;
        case dibujo = 3:
            orcaCinco();
            break;
        case dibujo = 4:
            orcaSeis();
            break;
        case dibujo = 5:
            orcaSiete();
            break;
        case dibujo = 6:
            orcaOcho();
            break;
        case dibujo = 7:
            orcaNueve();
            break;
        case dibujo = 8:
            finJuego();
            break;
    }
    
}


function finJuego(){
    boxPerdiste.style.transform= "scale(1)";
}

function ganaste(){
    boxGanste.style.transform= "scale(1)";
}

console.log(errors)

function iniciarJuego(){
    palabrasAlazar();
    palabraSecretaSinRepetir();
   
}

