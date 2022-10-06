const abecedario = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
const querty = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
 
const idLetras=document.getElementById("letras");
const idDisposicionTeclado=document.getElementById("disposicionTeclado");

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

let letrasprecionadas=[];
let letrasprecionadas2=[];




