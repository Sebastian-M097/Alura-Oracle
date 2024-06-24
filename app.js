/*asignarTextoElemento('h1', 'Juego del Numero secreto Papá!');
asignarTextoElemento('p', 'Elige un numero entre 1 y 10');


let intentos = 1;*/

/*let titulo = document.querySelector("h1");
titulo.innerHTML ="juego del numero secreto";*/
let numeroSecreto = generarNumeroSecreto();
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10+1);
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo) {

        asignarTextoElemento('p',`Ya se sortearon todos los numeros posibles`);
        
    } else {
         //si numero generado esta incluido en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return;
        }
    }
   
}
console.log(numeroSecreto);

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${nu}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntentos() {
    //let numeroDeUsuario = document.querySelector('input')
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
     //limpiar caja
     limpiarCaja();
     //Indicar mensaje de intervalo de números 
     //Generar el número aleatorio
     //Inicializar el número intentos
     condicionesIniciales();
     //Deshabilitar el botón de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');

     
}

condicionesIniciales();