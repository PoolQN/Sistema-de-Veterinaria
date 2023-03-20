function saludar() {
    alert("Hola querida mascota");
}

function presentarse() {
    alert("Te saluda Pol");
}

const botonsaludo = document.getElementById("saludo");
botonsaludo.addEventListener("click", presentarse);