document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    // Objeto que será enviado ao backend
    const usuario = { email, senha };

    try {
        const response = await fetch("http://localhost:8080/api/usuarios/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            mensagem.textContent = "Login realizado com sucesso!";
            mensagem.style.color = "green";

            // Redirecionar para o dashboard, vou criar depois :)
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1200);
        } 
        else {
            const erro = await response.text(); // Pega o texto vindo do Controller
            mensagem.textContent = erro;
            mensagem.style.color = "red";
        }

    } catch (e) {
        mensagem.textContent = "Erro ao conectar com o servidor!";
        mensagem.style.color = "red";
        console.error(e);
    }
});