const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

let nomeDoPet = "Naninha";

function donoDoPet(usuarios, nomeDoPet) {
  let indice = -5;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].pets.includes(nomeDoPet)) {
      indice = i;
    }
  }
  if (indice >= 0) {
    let nomeDodonoDoPet = usuarios[indice].nome;
    console.log(nomeDodonoDoPet);
  }
  if (indice < 0 || indice == null) {
    console.log(`Que pena ${nomeDoPet}, não encontramos seu dono(a)`);
  }
}
donoDoPet(usuarios, nomeDoPet);
