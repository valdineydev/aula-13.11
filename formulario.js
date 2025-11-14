document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const msgResultado = document.getElementById("mensagem-resultado");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Coleta dos dados
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const assunto = form.assunto.value.trim();
    const mensagem = form.mensagem.value.trim();

    // Validação simples
    if (!nome || !email || !telefone || !assunto || !mensagem) {
      msgResultado.textContent = "Por favor, preencha todos os campos.";
      msgResultado.style.color = "red";
      return;
    }

    // Simula envio (poderia ser via fetch para backend)
    const dados = { nome, email, telefone, assunto, mensagem };
    console.log("Dados enviados:", dados);

    msgResultado.textContent = "Formulário enviado com sucesso!";
    msgResultado.style.color = "green";
    form.reset();
  });
});