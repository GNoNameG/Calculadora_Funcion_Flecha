//Variables de la calculadora
var btnNumeros = document.getElementsByName("btnNumero");
var pantallaPrincipal = document.getElementById("pantallaPrincipal");
var signoOperacional = document.getElementById("signoOperacional");
var btnIgual = document.getElementById("btnIgual");

//variables que conforman a los labels del historial
var operadorHistorial = document.getElementById("operadorHistorial");
var numeroAHistorial = document.getElementById("numeroAHistorial");
var numeroBHistorial = document.getElementById("numeroBHistorial");

//Varriables numericas que componen la ecuacion de la calculadora
var valorA = 0;
var valorB = 0;
var resultado = 0;


//For que recorre el arreglo btnNumeros, para leer el valor de cada uno de los botones
for(let i = 0; i < btnNumeros.length; i++){
    btnNumeros[i].addEventListener("click",function(){
       pantallaPrincipal.value =  pantallaPrincipal.value + btnNumeros[i].value; 
    });
}


//Funcion para validar las reglas operacionales
function validaciones(){
    
    if(pantallaPrincipal.value == ""){
        pantallaPrincipal.focus();     
    
    }else if(numeroAHistorial.innerHTML != "" &&  operadorHistorial.innerHTML != "" 
             && numeroBHistorial.innerHTML == ""){
        
        btnIgual.focus();
        
    }else{
        valorA = pantallaPrincipal.value;
        numeroAHistorial.innerHTML = valorA;
        numeroBHistorial.innerHTML = "";
        pantallaPrincipal.value = "";
    }
    
}


//Funciones Operacionales dentro de la calculadora
function suma(){
    operadorHistorial.innerHTML = "+";
    signoOperacional.innerHTML = "+";
    validaciones();
}

function resta(){
    operadorHistorial.innerHTML = "-";
    signoOperacional.innerHTML = "-";
    validaciones();
}

function multiplicacion(){
    operadorHistorial.innerHTML = "x";
    signoOperacional.innerHTML = "x";
    validaciones();
}

function division(){
    operadorHistorial.innerHTML = "/";
    signoOperacional.innerHTML = "/";
    validaciones();
}



//Funcion que realiza las operaciones
function operaciones(){
    valorB = pantallaPrincipal.value;
    numeroBHistorial.innerHTML = valorB;
    
    switch(signoOperacional.innerHTML){
        case "+":
            resultado = parseFloat(valorA) + parseFloat(valorB);
            break;
        case "-":
            resultado = parseFloat(valorA) - parseFloat(valorB);
            break;
        case "x":
            resultado = parseFloat(valorA) * parseFloat(valorB);
            break;
        case "/":
            resultado = parseFloat(valorA) / parseFloat(valorB);
            break;
    }
    
    signoOperacional.innerHTML = "=";
    pantallaPrincipal.value = resultado;
}


//Funcion que entrega el resultado Final al momento de presionar el boton Igual
function resultadoFinal(){
    
    if(pantallaPrincipal.value != "" && signoOperacional.innerHTML != ""
      && signoOperacional.innerHTML != "="){
        operaciones();  
    }else{
        pantallaPrincipal.focus();
    }
}


//Funcion que reinicia la calculadora

function reiniciarCalculadora(){
    valorA = 0;
    valorB = 0;
    resultado = 0;
    pantallaPrincipal.value = "";
    signoOperacional.innerHTML = "";
    operadorHistorial.innerHTML = "";
    numeroAHistorial.innerHTML = "";
    numeroBHistorial.innerHTML = "";
}
























