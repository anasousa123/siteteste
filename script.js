const planetas = [
    {
        nome: "Marte",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        distancia: 225
    },
    {
        nome: "Júpiter",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
        distancia: 778
    },
    {
        nome: "Saturno",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
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

    linha.innerHTML = `
        <td>${p.nome}</td>
        <td>${p.distancia}</td>
    `;

    tabela.appendChild(linha);
}