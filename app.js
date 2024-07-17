document.addEventListener("DOMContentLoaded", (event) => {
  var botonEncriptar = document.getElementById("encriptar");
  var botonDesencriptar = document.getElementById("desencriptar");
  var botonCopiar = document.getElementById("copiarTexto");

  botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    encriptar();
  });
  botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    desencriptar();
  });
  botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    copiarTexto();
  });
});

function encriptar() {
  let texto = document.getElementById("textoInput").value;

  if (texto) {
    // Verifico que se haya ingresado algo
    let textoOutput = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    document.querySelector("#muñeco").style.display = "none";
    document.querySelector("#frame5").style.display = "none";
    document.querySelector("#textoOutput").style.display = "block";
    document.querySelector("#textoOutput").value = textoOutput;
  }
}

function desencriptar() {
  let texto = document.getElementById("textoInput").value;
  if (texto) {
    let textoOutput = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    document.querySelector("#muñeco").style.display = "none";
    document.querySelector("#frame5").style.display = "none";
    document.querySelector("#textoOutput").style.display = "block";
    document.querySelector("#textoOutput").value = textoOutput;
  }
}

function copiarTexto() {
  var textoOutput = document.getElementById("textoOutput").value;

  if (navigator.clipboard) {
    // Uso la nueva API del Portapapeles
    navigator.clipboard
      .writeText(textoOutput)
      .then(function () {
        console.log("Texto copiado al portapapeles");
        console.log(textoOutput);
      })
      .catch(function (err) {
        console.error("Error al copiar el texto: ", err);
      });
  } else {
    // Fallback para navegadores que no soportan la API del Portapapeles
    const textArea = document.createElement("textarea");
    textArea.value = textoOutput;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      console.log("Texto copiado al portapapeles (fallback)");
    } catch (err) {
      console.error("Error al copiar el texto (fallback): ", err);
    }
    document.body.removeChild(textArea);
  }
}
