const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

let tipoDeOperacao = "agendar";

let nomeDoPaciente = "Bárbara";

function clinicaMedica(pacientes, tipoDeOperacao, nomeDoPaciente) {
  if (tipoDeOperacao === "atender") {
    pacientes.splice(0, 1);
  } else if (tipoDeOperacao == "agendar") {
    pacientes.splice(pacientes.length, 0, nomeDoPaciente);
  }
  console.log(pacientes);
}

function agendarPaciente(pacientes, nomeDoPaciente) {
  pacientes.splice(pacientes.length, 0, nomeDoPaciente);
  console.log(pacientes);
}

function atenderPaciente(pacientes) {
  pacientes.splice(0, 1);
  console.log(pacientes);
}
function cancelarAtendimento(pacientes, nomeDoPaciente) {
  let indice = pacientes.indexOf(nomeDoPaciente);
  pacientes.splice(indice, 1);
}
cancelarAtendimento(pacientes, nomeDoPaciente);
console.log(pacientes);
