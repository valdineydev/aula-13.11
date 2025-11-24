const planetas = [
  { nome: "Mercúrio", ordem: 1, tipo: "Rochoso", curiosidade: "Menor planeta e o mais próximo do Sol." },
  { nome: "Vênus", ordem: 2, tipo: "Rochoso", curiosidade: "Planeta mais quente devido ao efeito estufa extremo." },
  { nome: "Terra", ordem: 3, tipo: "Rochoso", curiosidade: "Único planeta conhecido com vida." },
  { nome: "Marte", ordem: 4, tipo: "Rochoso", curiosidade: "Possui o maior vulcão do sistema solar, Olympus Mons." },
  { nome: "Júpiter", ordem: 5, tipo: "Gasoso", curiosidade: "Maior planeta do sistema solar." },
  { nome: "Saturno", ordem: 6, tipo: "Gasoso", curiosidade: "Famoso por seus belíssimos anéis." },
  { nome: "Urano", ordem: 7, tipo: "Gás Gelado", curiosidade: "Gira 'de lado', diferente dos outros planetas." },
  { nome: "Netuno", ordem: 8, tipo: "Gás Gelado", curiosidade: "Possui ventos extremamente fortes." },
];

// Monta os cards
function carregarPlanetas() {
  const grid = document.getElementById("planetas-grid");
  const totalSpan = document.getElementById("total-planetas");

  grid.innerHTML = "";

  totalSpan.textContent = planetas.length;

  planetas.forEach(planeta => {
    const card = document.createElement("div");
    card.classList.add("card-planeta");

    card.innerHTML = `
      <div class="card-header">
        <span class="card-title">${planeta.nome}</span>
        <span class="card-tag">${planeta.tipo}</span>
      </div>
      <div class="card-subinfo">
        Ordem em relação ao Sol: <strong>${planeta.ordem}º</strong>
      </div>
      <div class="card-curiosidade">${planeta.curiosidade}</div>
    `;

    grid.appendChild(card);
  });
}

// Botão que recarrega os dados
document.getElementById("btn-refresh").addEventListener("click", carregarPlanetas);

// Botão que leva ao questionário
document.getElementById("btn-questionario").addEventListener("click", () => {
  window.location.href = "questionario.html";
});

// Carrega ao iniciar
window.addEventListener("load", carregarPlanetas);