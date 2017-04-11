var botonFut = document.getElementById("botonFutbol");
botonFut.addEventListener("click", mostrarCanchaFut);
botonFut.addEventListener("dblclick", ocultarCanchaFut);

var botonBasquet = document.getElementById("botonBasquet");
botonBasquet.addEventListener("click", mostrarCanchaBasquet);
botonBasquet.addEventListener("dblclick", ocultarCanchaBasquet);

var botonTenis = document.getElementById("botonTenis")
botonTenis.addEventListener("click", mostrarCanchaTenis);
botonTenis.addEventListener("dblclick", ocultarCanchaTenis);

//Funciones para mostrar y ocultar canchas.

function mostrarCanchaFut(){
  var canchaFut = document.getElementById("canchaFutbol");
  canchaFutbol.style.display = "block";
}

function ocultarCanchaFut(){
  var canchaFut = document.getElementById("canchaFutbol");
  canchaFutbol.style.display = "none";
}

function mostrarCanchaBasquet(){
  var canchaBasquet = document.getElementById("canchaBasquet");
  canchaBasquet.style.display = "block";
}

function ocultarCanchaBasquet(){
  var canchaBasquet = document.getElementById("canchaBasquet");
  canchaBasquet.style.display = "none";
}

function mostrarCanchaTenis(){
  var canchaTenis = document.getElementById("canchaTenis");
  canchaTenis.style.display = "block";
}

function ocultarrCanchaTenis(){
  var canchaTenis = document.getElementById("canchaTenis");
  canchaTenis.style.display = "none";
}
