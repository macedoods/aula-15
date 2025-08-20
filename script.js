// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carGrid = document.querySelector('.car-grid');
    const veiculos = [
        // Array de objetos contendo as informações dos 12 carros
        {
            nome: "Honda HR-V",
            versao: "EXL",
            preco: "R$ 160.400",
            motor: "1.5 DOHC i-VTEC",
            imagem: "url_imagem_hrv_exl.jpg"
        },
        // ... outros 11 carros
    ];

    veiculos.forEach(carro => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.nome} ${carro.versao}">
            <div class="car-info">
                <h3>${carro.nome}</h3>
                <p class="versao">${carro.versao}</p>
                <p class="preco">${carro.preco}</p>
                <p class="motor">${carro.motor}</p>
                <button class="details-button">Mais Detalhes</button>
            </div>
        `;
        carGrid.appendChild(card);
    });
});