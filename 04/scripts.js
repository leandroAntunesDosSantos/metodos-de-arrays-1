const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

let tipoDeOperacao = "atender";

let nomeDoPaciente = "leandro";

function clinicaMedica(pacientes, tipoDeOperacao, nomeDoPaciente) {
  if (tipoDeOperacao === "atender") {
    pacientes.splice(0, 1);
    //console.log(pacientes);
  } else if (tipoDeOperacao == "agendar") {
    pacientes.push(nomeDoPaciente);
    //pacientes.splice(pacientes.lenght, 0, nomeDoPaciente);
  }
  console.log(pacientes);
}

clinicaMedica(pacientes, tipoDeOperacao, nomeDoPaciente);
