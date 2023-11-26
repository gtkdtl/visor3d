// Obtén una referencia al elemento <model-viewer> por su ID
const modelo3D = document.getElementById("visor3D");

// Obtén una referencia a los botones por sus ID

const botonMaquina5 = document.getElementById("maquina5");
const botonMaquina7 = document.getElementById("maquina7");



const botonCargar = document.getElementById("boton-icono_cargar");
const botonCompactar = document.getElementById("boton-icono_compactar");
const botonConformar = document.getElementById("boton-icono_conformar");
const botonExcavar = document.getElementById("boton-icono_excavar");
const botonTransportar = document.getElementById("boton-icono_transportar");

const botonInfo = document.getElementById("boton-icono_info");





botonMaquina5.addEventListener("click", function () {
    // Cambia el atributo src del <model-viewer> al valor deseado
    modelo3D.setAttribute("src", "modelos_P1/6_Excavadora_D8T.glb");

    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";

    botonInfo.setAttribute("data-bs-target", "#maquina5-modal");
});


botonMaquina7.addEventListener("click", function () {
    // Cambia el atributo src del <model-viewer> al valor deseado
    modelo3D.setAttribute("src", "modelos_P1/8_MartilloHidraulico_336.glb");

    botonCargar.style.display = "none";
    botonCompactar.style.display = "none";
    botonConformar.style.display = "none";
    botonExcavar.style.display = "none";
    botonTransportar.style.display = "none";

    botonInfo.setAttribute("data-bs-target", "#maquina7-modal");

});

window.addEventListener("load", function () {
    botonInfo.classList.add("heartbeat-animation");
  });
  
  // Detiene la animación cuando se hace clic en cualquier parte de la página
  document.addEventListener("click", function (event) {
    if (event.target !== botonInfo) {
      botonInfo.classList.remove("heartbeat-animation");
    }
  });