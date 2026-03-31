const planetas = [
    {
        nome: "Marte",
        img: "https://via.placeholder.com/300/ff0000",
        distancia: 225
    },
    {
        nome: "Júpiter",
        img: "https://via.placeholder.com/300/f0a500",
        distancia: 778
    },
    {
        nome: "Saturno",
        img: "https://via.placeholder.com/300/cccc99",
        distancia: 1429
    }
];

let index = 0;

function trocarPlaneta() {
    index = (index + 1) % planetas.length;
    document.getElementById("planeta").src = planetas[index].img;
}

function adicionarPlaneta() {
    const tabela = document.getElementById("tabela");

    const p = planetas[Math.floor(Math.random() * planetas.length)];

    const linha = document.createElement("tr");

    const nome = document.createElement("td");
    nome.textContent = p.nome;

    const distancia = document.createElement("td");
    distancia.textContent = p.distancia;

    linha.appendChild(nome);
    linha.appendChild(distancia);

    tabela.appendChild(linha);
}