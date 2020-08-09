// Reto 1 de saludar al nombre ingresado en el input

const retoUnoSaludo = document.getElementById("reto-1-saludo");
const retoUnoInput = document.getElementById("reto-1-input");

const retoUnoSaludar = () => {
  let nombre = retoUnoInput.value;
  retoUnoSaludo.textContent = `Hola ${nombre} encantado de conocerte`;
  retoUnoSaludo.setAttribute("class", "reto-1-saludo");
  retoUnoInput.value = "";
};

// Reto 2 de saludar al nombre y apellido ingresado en los inputs

const retoDosSaludo = document.getElementById("reto-2-saludo");
const retoUnoInputNombre = document.getElementById("reto-2-input-nombre");
const retoDosInputApellido = document.getElementById("reto-2-input-apellido");

const retoDosSaludar = () => {
  let nombre = retoUnoInputNombre.value;
  let apellido = retoDosInputApellido.value;
  retoDosSaludo.textContent = `Hola ${nombre} ${apellido}`;
  retoDosSaludo.setAttribute("class", "reto-1-saludo");
  retoDosInput.value = "";
};

// Reto 3 imprimir en varias lineas los valores de un array

categorias = [
  "Desarrollo e Ingenieria",
  "Diseño y UX",
  "Marketing",
  "Negocios y emprendimiento",
  "Producción Audiovisual",
  "Crecimiento Profesional",
];

const contenedor = document.getElementById("reto-3");

const retoTresMostrarCategorias = () => {
  if (contenedor.children.length == 0) {
    categorias.map((categoria) => {
      let nuevaCategoría = document.createElement("p");
      let contenido = document.createTextNode(categoria);
      nuevaCategoría.appendChild(contenido);
      contenedor.appendChild(nuevaCategoría);
    });
  } else {
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  }
};

// Reto 4 realizar una suma de enteros

const retoCuatroInputA = document.getElementById("reto-4-input-a");
const retoCuatroInputB = document.getElementById("reto-4-input-b");
const retoCuatroResultado = document.getElementById("reto-4-resultado");

const retoCuatroSuma = () => {
  let a = parseInt(retoCuatroInputA.value);
  let b = parseInt(retoCuatroInputB.value);
  let resultadoSuma = a + b;
  let resultado = document.createElement("h2");
  contenido = document.createTextNode(
    `El resultado de la suma es: ${resultadoSuma}`
  );
  resultado.appendChild(contenido);
  retoCuatroResultado.appendChild(resultado);
  retoCuatroResultado.setAttribute("class", "reto-4-saludo");
};

// Reto 5 realizar una suma de los primeros 2 números y multiplicarlo por el tercero.

const retoCincoInputA = document.getElementById("reto-5-input-a");
const retoCincoInputB = document.getElementById("reto-5-input-b");
const retoCincoInputC = document.getElementById("reto-5-input-c");
const retoCincoResultado = document.getElementById("reto-5-resultado");

const retoCincoOperacion = () => {
  let a = parseInt(retoCincoInputA.value);
  let b = parseInt(retoCincoInputB.value);
  let c = parseInt(retoCincoInputC.value);
  let resultadoOperacion = (a + b) * c;
  let resultado = document.createElement("h2");
  contenido = document.createTextNode(
    `El resultado de la operacion es: ${resultadoOperacion}`
  );
  resultado.appendChild(contenido);
  retoCincoResultado.appendChild(resultado);
  retoCincoResultado.setAttribute("class", "reto-4-saludo");
};

// Reto 6 realizar una suma de los primeros 2 números y multiplicarlo por el tercero.

const retoSeisInputA = document.getElementById("reto-6-input-a");
const retoSeisInputB = document.getElementById("reto-6-input-b");
const retoSeisResultado = document.getElementById("reto-6-resultado");

const retoSeis = () => {
  let a = parseInt(retoSeisInputA.value);
  let b = parseInt(retoSeisInputB.value);
  let resultadoSuma = a - b;
  let resultado = document.createElement("h2");
  if (resultadoSuma > 0) {
    while (retoSeisResultado.firstChild) {
      retoSeisResultado.removeChild(retoSeisResultado.firstChild);
    }
    contenido = document.createTextNode(
      `Nos quedan solo ${resultadoSuma} porciones de 🍕`
    );
    resultado.appendChild(contenido);
    retoSeisResultado.appendChild(resultado);
    retoSeisResultado.setAttribute("class", "reto-4-saludo");
  } else {
    while (retoSeisResultado.firstChild) {
      retoSeisResultado.removeChild(retoSeisResultado.firstChild);
    }
    contenido = document.createTextNode(
      `No nos quedan más porciones de 🍕 😭😭`
    );
    resultado.appendChild(contenido);
    retoSeisResultado.appendChild(resultado);
    retoSeisResultado.setAttribute("class", "reto-4-saludo");
  }
};

// Reto 7 Calcular cuantos años tenía el año pasado y cuantos va a tener el año próximo.

const retoSieteInput = document.getElementById("reto-7-input");
const retoSieteContenedor = document.getElementById("reto-7-resultado");

const retoSiete = () => {
  let edad = retoSieteInput.value;
  let anterior = parseInt(edad) - 1;
  let proximo = parseInt(edad) + 1;
  retoSieteContenedor.textContent = `Tu edad el año pasado era de ${anterior} y el año que viene va a ser de ${proximo}`;
  retoSieteContenedor.setAttribute("class", "reto-1-saludo");
  retoSieteInput.value = "";
};

// Reto 8 Calcular cuantos años tenía el año pasado y cuantos va a tener el año próximo.

const retoOchoInputA = document.getElementById("reto-8-input-a");
const retoOchoInputB = document.getElementById("reto-8-input-b");
const retoOchoInputC = document.getElementById("reto-8-input-c");
const retoOchoInputD = document.getElementById("reto-8-input-d");
const retoOchoContenedor = document.getElementById("reto-8-resultado");

const retoOcho = () => {
  let cuenta = retoOchoInputA.value;
  let personas = retoOchoInputB.value;
  let propina = cuenta * (retoOchoInputC.value / 100);
  let impuesto = cuenta * (retoOchoInputD.value / 100);
  let precioFinal =  parseInt(cuenta) + parseInt(propina) + parseInt(impuesto);
  let pagoIndividual = (precioFinal / personas);
  retoOchoContenedor.textContent = `Cada uno debe pagar: ${pagoIndividual}`;
  retoOchoContenedor.setAttribute("class", "reto-1-saludo");
};

// Reto 9 Calcular cuantas horas, minutos y segundos hay en la cantidad de días indicados.

const retoNueveInputA = document.getElementById("reto-9-input-a");
const retoNueveContenedor = document.getElementById("reto-9-resultado");

const retoNueve = () => {
  let dias = retoNueveInputA.value;
  let cantidadHoras = (dias * 24);
  let cantidadMinutos = (dias * 24) * 60;
  let cantidadSegundos = ((dias * 24) * 60) * 60;

  retoNueveContenedor.textContent = `En ${dias} días hay ${cantidadHoras} horas, ${cantidadMinutos} minutos y ${cantidadSegundos} segundos. `;
  retoNueveContenedor.setAttribute("class", "reto-1-saludo");
};

// Reto 10 Calcular cuantas horas, minutos y segundos hay en la cantidad de días indicados.

const retoDiezInputA = document.getElementById("reto-10-input-a");
const retoDiezContenedor = document.getElementById("reto-10-resultado");

const retoDiez = () => {
  let millas = retoDiezInputA.value;
  let cantidadKilometros = parseFloat(millas * 1.609344).toFixed(1);
  console.log(cantidadKilometros);
  if(millas > 1) {
    retoDiezContenedor.textContent = `En ${millas} millas hay ${cantidadKilometros} Kilómetros. `;
  } else {
    retoDiezContenedor.textContent = `En ${millas} milla hay ${cantidadKilometros} Kilómetros. `;
  }
  retoDiezContenedor.setAttribute("class", "reto-1-saludo");
};

// Reto 11 El usuario debe ingresar un número mayor a 1000 y otro menor a 100 y se le debe indicar cuantas veces entra el número menor dentro del mayor.

const retoOnceInputA = document.getElementById("reto-11-input-a");
const retoOnceInputB = document.getElementById("reto-11-input-b");
const retoOnceContenedor = document.getElementById("reto-11-resultado");

const retoOnce = () => {
  let mayor = parseInt(retoOnceInputA.value);
  let menor = parseInt(retoOnceInputB.value);
  if(mayor >= 1000){
    if(menor <= 100){
      let resultado = parseInt(mayor / menor);
      retoOnceContenedor.textContent = `En el número ${mayor} entra ${resultado} veces, en el número ${menor}.`;
      retoOnceContenedor.setAttribute("class", "reto-1-saludo");
    }else {
      retoOnceContenedor.textContent = `El segundo número debe ser menor que 100`;
      retoOnceContenedor.setAttribute("class", "reto-1-saludo");
    }
  }else {
    retoOnceContenedor.textContent = `El primer número debe ser mayor que 1000`;
    retoOnceContenedor.setAttribute("class", "reto-1-saludo");
  }
};