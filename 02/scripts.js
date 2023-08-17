const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];

const tamanhoDoGrupo = 4;

function separandoGrupos(nomes, tamanhoDoGrupo) {
  let novoArray = [];

  for (var i = 0; i < nomes.length; i = i + tamanhoDoGrupo) {
    novoArray.push(nomes.slice(i, i + tamanhoDoGrupo));
  }

  console.log(novoArray);
}
separandoGrupos(nomes, tamanhoDoGrupo);
