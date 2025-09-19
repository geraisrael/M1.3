// roundrobin.js
// Ejecutar con: node roundrobin.js <numeroProcesos>

function obtenerLineaAleatoria() {
  const lineas = [
    "a = 1 + 2;",
    "b = 3 + 4;",
    "c = 5 + 6;",
    "console.log('Hola mundo');",
    "console.log(a);",
    "console.log(b);",
    "console.log(c);"
  ];
  return lineas[Math.floor(Math.random() * lineas.length)];
}

function inicializarProcesos(n) {
  const procesos = [];
  for (let i = 1; i <= n; i++) {
    const numLineas = Math.floor(Math.random() * 3) + 2; 
    const codigo = [];
    for (let j = 0; j < numLineas; j++) {
      codigo.push(obtenerLineaAleatoria());
    }
    procesos.push({ id: i, codigo });
  }
  return procesos;
}

function simular(procesos) {
  let quedan = true;
  let indice = 0;

  while (quedan) {
    quedan = false;
    for (let i = 0; i < procesos.length; i++) {
      if (procesos[i].codigo[indice]) {
        console.log(`Proceso ${procesos[i].id}`);
        console.log(`Línea de código: ${procesos[i].codigo[indice]}`);
        quedan = true;
      }
    }
    indice++;
  }
}

const numProcesos = parseInt(process.argv[2]);
if (isNaN(numProcesos) || numProcesos <= 0) {
  console.log("Uso: node roundrobin.js <numeroProcesos>");
  process.exit(1);
}

const procesos = inicializarProcesos(numProcesos);
console.log("Procesos generados:", procesos);
console.log("\nSimulación RR................\n");
simular(procesos);
