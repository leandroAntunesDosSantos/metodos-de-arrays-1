const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

function letraA(frutas) {
  let frutasInvertido = frutas.reverse();
  let frutasInvertidoString = frutasInvertido.join(", ");
  console.log(frutasInvertidoString);
}
//letraA(frutas);

function letraB(frutas) {
  frutas.splice(0, 1);
  frutas.splice(frutas.length - 1, 1, "melão");
  console.log(frutas);
}
letraB(frutas);
