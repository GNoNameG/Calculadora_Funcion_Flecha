var Number1;
var Number2;
var NumberR;
var list = document.getElementById('list');

function init() {
    //var
    var history = document.getElementById('history');
    var historyContainer = document.getElementById('historyContainer');
    var close = document.getElementById('close');
    var backdrop = document.getElementById('backdrop');
    var footer = document.getElementById('footer');
    var Resultado = document.getElementById('Resultado');
    var Suma = document.getElementById('Suma');
    var Resta = document.getElementById('Resta');
    var Multiplicación = document.getElementById('Multiplicación');
    var División = document.getElementById('División');
    var Igual = document.getElementById('Igual');
    var Reset = document.getElementById('Reset');
    var Uno = document.getElementById('Uno');
    var Dos = document.getElementById('Dos');
    var Tres = document.getElementById('Tres');
    var Cuatro = document.getElementById('Cuatro');
    var Cinco = document.getElementById('Cinco');
    var Seis = document.getElementById('Seis');
    var Siete = document.getElementById('Siete');
    var Ocho = document.getElementById('Ocho');
    var Nueve = document.getElementById('Nueve');
    var Cero = document.getElementById('Cero');

    //Events
    history.addEventListener("click", () => {
        backdrop.classList.add("open");
        historyContainer.classList.add("open");
    })
    close.addEventListener("click", () => {
        backdrop.classList.remove("open");
        historyContainer.classList.remove("open");
    })
    footer.addEventListener("click", () => {
        list.innerHTML = "";
    })

    Uno.onclick = function () {
        Resultado.textContent = Resultado.textContent + "1";
    }
    Dos.onclick = function () {
        Resultado.textContent = Resultado.textContent + "2";
    }
    Tres.onclick = function () {
        Resultado.textContent = Resultado.textContent + "3";
    }
    Cuatro.onclick = function () {
        Resultado.textContent = Resultado.textContent + "4";
    }
    Cinco.onclick = function () {
        Resultado.textContent = Resultado.textContent + "5";
    }
    Seis.onclick = function () {
        Resultado.textContent = Resultado.textContent + "6";
    }
    Siete.onclick = function () {
        Resultado.textContent = Resultado.textContent + "7";
    }
    Ocho.onclick = function () {
        Resultado.textContent = Resultado.textContent + "8";
    }
    Nueve.onclick = function () {
        Resultado.textContent = Resultado.textContent + "9";
    }
    Cero.onclick = function () {
        Resultado.textContent = Resultado.textContent + "0";
    }
    Reset.onclick = () => {
        Number1 = 0;
        Number2 = 0;
        Clear();
    }
    Suma.onclick = () => {
        Number1 = Resultado.textContent;
        NumberR = "+";
        Clear();
    }
    Resta.onclick = () => {
        Number1 = Resultado.textContent;
        NumberR = "-";
        Clear();
    }
    Multiplicación.onclick = () => {
        Number1 = Resultado.textContent;
        NumberR = "*";
        Clear();
    }
    División.onclick = () => {
        Number1 = Resultado.textContent;
        NumberR = "/";
        Clear();
    }
    Igual.onclick = () => {
        Number2 = Resultado.textContent;
        Solución();
    }
}

function Clear() {
    var Resultado = document.getElementById("Resultado");
    Resultado.textContent = "";
}

function Reset() {
    var Resultado = document.getElementById("Resultado");
    Resultado.textContent = "";
    Number1 = 0;
    Number2 = 0;
    NumberR = "";
}

function Solución() {
    var Resultado = document.getElementById("Resultado");
    var Sol = 0;
    switch (NumberR) {
        case "+":
            Sol = parseFloat(Number1) + parseFloat(Number2);
            break;
        case "-":
            Sol = parseFloat(Number1) - parseFloat(Number2);
            break;
        case "*":
            Sol = parseFloat(Number1) * parseFloat(Number2);
            break;
        case "/":
            Sol = parseFloat(Number1) / parseFloat(Number2);
            break;
        default:
            window.alert("Escoge un operación");
            break;
    }
    Clear();
    list.innerHTML += `
    <li>
        <h3>${Sol}</h3>
        <p>${Number1} + ${Number2}</p>
    </li>
    `;
    Resultado.textContent = Sol;
    console.log(Sol);
}

