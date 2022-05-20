const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');
const quebrar = document.getElementById('quebrar');

function ligarLampada (){

    lampada.src="./assets/ligada.jpg";

}

ligar.addEventListener('click',ligarLampada);


function desligarLampada(){

    lampada.src="./assets/desligada.jpg";

}

desligar.addEventListener('click',desligarLampada);


function quebrarLampada(){

    lampada.src="./assets/quebrada.jpg";

}

quebrar.addEventListener('click',quebrarLampada);


