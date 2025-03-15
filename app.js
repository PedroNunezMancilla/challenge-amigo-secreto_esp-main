// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

/*-------------------------------------------------------------------------------------------------*/
// Aplicación web que permite el ingreso de una lista de amigos/s, para luego realizar un sorte aleatorio en base 
// a la lista ingresada, la aplicacion escoge un amigo/a secreto/a en base a la lista. Posterior a esto se puede 
// reiniciar y asi volver a empezar, asi como tambien, poder seguir sorteando amigo/a secreto/a en 
// base a la lista.
//
// Consideraciones a cumplir
// -------------------------
// Desactivar boton "Sortear amigo"
// Desactiva boton "Nuevo juego"
// Validar que lo ingresado en el box no sea espacio en blanco o nulo
// Funcion que agrega un nuevo amigo/a a la lista
// Antes de ingresar el nombre a la lista se valida que este no exista sino se envia mensaje que ya existe
// Funcion que realiza el sorteo generando un numero aleatorio y obteniendo el nombre equivalente
// en base a ese indice en la lista
//
// Tecnologias: HTML, CSS, Javascript
// Herramientas: Visual Studio Code
// Fase: Pruebas, codigo se dejo con comentarios para mejor comprensión y mantención, tambien incluye escritura
// hacia la consola
// Autor: Pedro Núñez Mancilla
//
/*-------------------------------------------------------------------------------------------------*/

//Variables
let listaAmigos = [];
let cantidadenlista = 0;
let numeroAleatorio = 0;

condicionesIniciales();

function agregarAmigo(){
    if ((document.getElementById('amigo').value == "") || (document.getElementById('amigo').length == 0)){
        alert("Por favor, ingrese un nombre válido, es nulo o vacio");
        limpiarCaja();
        return false;
    }
    //buscar nombre de amigo secreto si existe en la lista no deja ingresarlo y envia mensaje que ya existe
    if (listaAmigos.indexOf(document.getElementById('amigo').value) > -1){
        console.log("Nombre ingresado " + document.getElementById('amigo').value + " ya existe en la lista");
        alert("Nombre ingresado " + document.getElementById('amigo').value + " ya existe en la lista");
        limpiarCaja();
        return false;
    }
    asignarTextoElemento('h2','Digite el nombre de sus amigos/as');
    console.log("---function agregarAmigo()---");
    console.log("Nombre ingresado es: " + document.getElementById('amigo').value);
    //alert("Nombre ingresado es: " + document.getElementById('amigo').value);
    //agregar nombre a la lista
    listaAmigos.push(document.getElementById('amigo').value);
    asignarTextoElemento('p',listaAmigos);
    //mostrar lista 
    console.log(listaAmigos);
    cantidadenlista=listaAmigos.length;
    console.log("Cantidad en lista: " + cantidadenlista);
    console.log("---function agregarAmigo()---");
    document.getElementById('sortear').removeAttribute('disabled'); //activa el boton "Sortear amigo"
    limpiarCaja();
}

function sortearAmigo(){
    //alert("sortearAmigo");
    //encontrar un aleatorio del maximo
    cantidadenlista=listaAmigos.length;
    numeroAleatorio = parseInt(Math.random() * cantidadenlista) + 1; //1 2 3...
    console.log("---function sortearAmigo()---");
    console.log("Numero aleatorio del maximo(" + cantidadenlista + "): " + numeroAleatorio);
    console.log("Nombre del aleatorio: " + listaAmigos[numeroAleatorio-1]);
    console.log("---function sortearAmigo()---");
    //alert("El amigo secreto sorteado es: " + listaAmigos[numeroAleatorio-1]);
    asignarTextoElemento('h2','El amigo/a secreto/a sorteado es: ' + listaAmigos[numeroAleatorio-1]);
    document.getElementById('reiniciar').style.display='flex'; //oculta boton "Reiniciar" 'block','inline','flex',etc.
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    console.log("---inicio---");
    listaAmigos = [];
    cantidadenlista = 0;
    numeroAleatorio = 0;
    asignarTextoElemento('h1','Amigo/a Secreto/a');
    asignarTextoElemento('h2','Digite el nombre de sus amigos/as');
    asignarTextoElemento('p','');
    document.querySelector('#sortear').setAttribute('disabled','true'); //desactiva boton "Sortear amigo"
    document.getElementById('reiniciar').style.display='none'; //oculta boton "Reiniciar"   
    limpiarCaja();
    console.log("Cantidad en lista: " + cantidadenlista);
    console.log("---inicio---");
}

function reiniciarJuego(){
    condicionesIniciales();
}