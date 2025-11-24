document.getElementById("formQuestionario").addEventListener("submit", async function(event) {
    event.preventDefault();

    const dados = {
        nomeUsuario: document.getElementById("nomeUsuario").value,
        planetaFavorito: document.getElementById("planetaFavorito").value,
        nivelConhecimento: document.getElementById("nivelConhecimento").value,
        gostaAstronomia: document.getElementById("gostaAstronomia").value,
        curiosidade: document.getElementById("curiosidade").value
    };

    const mensagem = document.getElementById("mensagem");

    try {
        const response = await fetch("http://localhost:8080/api/questionario/salvar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            mensagem.textContent = "Questionário enviado com sucesso!";
            mensagem.style.color = "lightgreen";
            document.getElementById("formQuestionario").reset();
        } else {
            mensagem.textContent = "Erro ao enviar questionário!";
            mensagem.style.color = "red";
        }

    } catch (error) {
        mensagem.textContent = "Erro ao conectar ao servidor!";
        mensagem.style.color = "red";
        console.error(error);
    }
});