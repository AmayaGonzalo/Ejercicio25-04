let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Ingrese un dato";

btnEnv.addEventListener("click", () => {
  //TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("El dato ingresado es: ", dato.value);
});
