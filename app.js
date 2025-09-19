const opciones = ["piedra","papel","tijera"];
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const print = document.getElementById("print");
const btnEleccionMaquina = document.getElementById("eleccion-maquina");


let elegir = opciones[Math.floor(Math.random()*opciones.length)];

function reiniciarJuego() {
    // Puedes limpiar la pantalla, elegir una nueva opción para la máquina, etc.
    elegir = opciones[Math.floor(Math.random() * opciones.length)]; // si lo estás generando así
    btnEleccionMaquina.style.display = "none";
    print.textContent = "Haz tu elección...";
};

piedra.addEventListener("click", function(){
    let piedras = "piedra";
    if(piedras == elegir){
        print.textContent = `Empate: La maquina Eligio: ${elegir}`;
    }else if(elegir == "papel"){
        print.textContent = `Perdiste: La maquina eligio: ${elegir}`
    }else{
        print.textContent = `Ganaste: La maquina Elgio: ${elegir}`;
    };
    btnEleccionMaquina.textContent = `Máquina eligió: ${elegir}`;
    btnEleccionMaquina.style.display = "inline-block";

    // Esperar 2 segundos y luego reiniciar el juego
    setTimeout(reiniciarJuego, 3000);
});

papel.addEventListener("click",function(){
    let papeles = "papel";
    if(papeles == elegir){
        print.textContent = `Empate: La maquina eligio: ${elegir}`;
    }else if(elegir == "tijera"){
        print.textContent = `Pediste: La maquina eligio: ${elegir}`;
    }else{
        print.textContent = `Ganaste: La maquina eligio: ${elegir}`;
    }
    btnEleccionMaquina.textContent = `Máquina eligió: ${elegir}`;
    btnEleccionMaquina.style.display = "inline-block";

    setTimeout(reiniciarJuego,3000);
});

tijera.addEventListener("click",function(){
    let tijeras = "tijera";
    if(tijeras == elegir){
        print.textContent = `Empate: La maquina eligio: ${elegir}`;
    }else if(elegir == "papel"){
        print.textContent = `Ganaste: La maquina eligio: ${elegir}`;
    }else {
        print.textContent = `Perdiste: La maquina eligio: ${elegir}`;
    }
    btnEleccionMaquina.textContent = `Máquina eligió: ${elegir}`;
    btnEleccionMaquina.style.display = "inline-block";

    setTimeout(reiniciarJuego, 3000);
});

