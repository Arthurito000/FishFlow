const formulario = document.querySelector('.form');
const container = document.getElementById('container-cards');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // 1. Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const habitat = document.getElementById('habitat').value;
    const foto = document.getElementById('foto').files[0];

    // 2. Cria o elemento do Card
    const novoCard = document.createElement('article');
    novoCard.classList.add('card');

    // 3. Monta o conteúdo do Card (Template String)
    novoCard.innerHTML = `
        <img src="${URL.createObjectURL(foto)}" alt="${nome}">
        <h3>${nome}</h3>
        <p>Habitat: ${habitat}</p>
        <span>Status: Cadastrado</span>
    `;

    // 4. Adiciona o card na tela
    container.appendChild(novoCard);

    // Limpa o formulário
    formulario.reset();
});