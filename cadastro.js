// Adiciona um "ouvinte de evento" (event listener) no formulário
// Assim, quando o usuário clicar em "Cadastrar Usuário", esta função será executada
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  // Impede o envio padrão do formulário (que recarregaria a página)
  event.preventDefault();

  // Captura os valores digitados nos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade").value;
  const genero = document.getElementById("genero").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  // Elemento onde serão exibidas mensagens de erro ou sucesso
  const mensagem = document.getElementById("mensagem");

  //  Validação: verifica se as senhas são iguais
  if (senha !== confirmarSenha) {
    mensagem.textContent = "As senhas não conferem!";
    mensagem.style.color = "red";
    return; // Interrompe a execução aqui se estiver errado
  }

  //  Obtém os usuários já cadastrados no localStorage
  // Se não existir nenhum, cria uma lista vazia
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  //  Verifica se o e-mail já está cadastrado
  const emailJaExiste = usuarios.some(u => u.email === email);
  if (emailJaExiste) {
    mensagem.textContent = "E-mail já cadastrado!";
    mensagem.style.color = "red";
    return;
  }

  //  Cria um novo objeto de usuário com os dados preenchidos
  const novoUsuario = {
    nome,
    email,
    idade,
    genero,
    senha
  };

  // Adiciona o novo usuário à lista e salva novamente no localStorage
  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // ✅ Exibe mensagem de sucesso
  mensagem.textContent = "Usuário cadastrado com sucesso!";
  mensagem.style.color = "green";

  // 🧹 Limpa todos os campos do formulário
  document.getElementById("cadastroForm").reset();
});