// 1. Seleciona o formulário e a área onde os peixes vão aparecer
const formulario = document.querySelector('.form');
const listaPeixes = document.getElementById('lista-peixes');

// 2. Escuta o evento de "submit" (clique no botão)
formulario.addEventListener('submit', function(event) {
    
    // ISSO É O MAIS IMPORTANTE: Impede a página de recarregar
    event.preventDefault();

    // 3. Pega os valores dos inputs
    const nome = document.getElementById('nome').value;
    const habitat = document.getElementById('habitat').value;
    const link = document.getElementById('link').value;

    // 4. Cria a estrutura do Card (HTML dinâmico)
    const cardHTML = `
        <div class="card-peixe-container">
            <div class="card-content">
                <div class="card-image-box">
                    <img src="${link}" alt="${nome}">
                    <h3 class="card-name-title">${nome}</h3>
                </div>
                <div class="card-info-grid">
                    <div class="info-column">
                        <h4>Habitat</h4>
                        <p>${habitat}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 5. Adiciona o novo card dentro da div "lista-peixes"
    // Usamos 'insertAdjacentHTML' para ele aparecer no início da lista
    listaPeixes.insertAdjacentHTML('afterbegin', cardHTML);

    // 6. Limpa o formulário para o próximo cadastro
    formulario.reset();
});