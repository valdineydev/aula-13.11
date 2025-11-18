// Adiciona um "ouvinte" de evento para o formulário.
// Quando o formulário for enviado (submit), esta função será executada.
document.getElementById("cadastroForm").addEventListener("submit", async function(event) {

    // Impede que a página recarregue automaticamente ao enviar o formulário.
    // Isso é fundamental para trabalhar com fetch() sem perder os dados.
    event.preventDefault();

    // Captura os valores digitados nos campos do formulário.
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Pega o elemento onde será exibida a mensagem de sucesso ou erro.
    const mensagem = document.getElementById("mensagem");

    // Cria um objeto JavaScript com os dados do usuário.
    // Esse objeto será convertido em JSON para enviar ao backend.
    const usuario = { nome, email, senha };

    try {

        // Faz a requisição HTTP POST para a API do Spring Boot.
        // Aqui enviamos o usuário como JSON dentro do "body".
        const response = await fetch("http://localhost:8080/api/usuarios/cadastrar", {
            method: "POST",                         // Tipo da requisição
            headers: { "Content-Type": "application/json" }, // Indica que o corpo é JSON
            body: JSON.stringify(usuario)           // Converte o objeto em JSON
        });

        // Verifica se a resposta da API foi bem-sucedida (status 200–299).
        if (response.ok) {

            // Mostra mensagem de sucesso ao usuário.
            mensagem.textContent = "Usuário cadastrado com sucesso!";
            mensagem.style.color = "green";

            // Limpa os campos do formulário após enviar.
            document.getElementById("cadastroForm").reset();

        } else {
            // Caso o servidor responda com erro (400, 500, etc.)
            mensagem.textContent = "Erro ao cadastrar!";
            mensagem.style.color = "red";
        }

    } catch (error) {
        // Este bloco captura erros de conexão, como:
        // servidor desligado, URL errada, internet caída, etc.
        mensagem.textContent = "Erro ao conectar com o servidor!";
        mensagem.style.color = "red";

        // Mostra o erro no console para fins de depuração.
        console.error(error);
    }
});