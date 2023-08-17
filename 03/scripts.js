const nomes = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 3;

function encontrandoCarros(nomes, posicao) {
  let novoArray = [];
  novoArray.push(nomes.slice(posicao, posicao + 3));
  console.log(novoArray);
}
encontrandoCarros(nomes, posicao);
