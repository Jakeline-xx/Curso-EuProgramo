// de onde virá o evento (virá do botão), seguido de ponto, o nome do método addEventListener, abrir parenteses, incluir o nome do evento (click)entre aspas, vírgula para separar, indicação do que deve ser feito (if else).

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome").value != "" &&
        document.getElementById("email").value != "" &&
        document.getElementById("email").contains("@")&&
        document.getElementById("numero").value != "") {
        alert("Prontinho! Você recebrá as novidades por email!")
    } else {
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}

