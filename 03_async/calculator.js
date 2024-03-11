const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;

//funcion dividir con callback
/* function dividir(n1, n2, callback) {
  if (n2 !== 0) {
    return callback(null, n1 / n2);
  } else {
    return callback("n2 es cero");
  }
}

function calrcular(n1, n2, operacionArealizar) {
  const resultadoDeLaOperacion = operacionArealizar(n1, n2, verificarDivision);
  return resultadoDeLaOperacion;
} */

function verificarDivision(error, exito) {
  if (error) {
    console.log("ocurrio un error");
    console.log("el error es: " + error);
    return error;
  } else {
    return exito;
  }
}

const res1 = calcular(10, 20, sumar);
console.log(res1);
const res2 = calcular(10, 20, restar);
console.log(res2);
console.log(calcular(10, 20, multiplicar));


//funcion dividir con promesa
function dividir(n1, n2) {
  return new Promise((exito, fracaso) => {
    if (n2 !== 0) {
      return exito(n1 / n2);
    } else {
      return fracaso("n2 es cero");
    }
  });
}

function calcular(n1, n2, operacionArealizar) {
  const resultadoDeLaOperacion = operacionArealizar(n1, n2);
  return resultadoDeLaOperacion;
}

calcular(10, 20, dividir)
  .then((respuesta) => console.log(respuesta))
  .catch((err) => console.log(err));

calcular(10, 0, dividir)
  .then((respuesta) => console.log(respuesta))
  .catch((err) => console.log(err));
