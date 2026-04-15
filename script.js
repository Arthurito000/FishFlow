const formulario = document.querySelector('.form');
const listaPeixes = document.getElementById('lista-peixes');

function salvarNoLocalStorage(peixe) {
    let peixes = JSON.parse(localStorage.getItem('meusPeixes') || '[]');
    peixes.push(peixe);
    localStorage.setItem('meusPeixes', JSON.stringify(peixes));
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura de todos os campos
    const novoPeixe = {
        nome: document.getElementById('nome').value,
        cientifico: document.getElementById('cientifico').value,
        nutricao: document.getElementById('nutricao').value,
        habitat: document.getElementById('habitat').value,
        vida: document.getElementById('vida').value,
        comprimento: document.getElementById('comprimento').value,
        peso: document.getElementById('peso').value,
        periodo: document.getElementById('periodo').value,
        atrair: document.getElementById('atrair').value,
        link: document.getElementById('link').value

    };

salvarNoLocalStorage(novoPeixe);

    // Estrutura IDÊNTICA ao index.html
    const cardHTML = `
        <article class="fish-card">
            <div class="fish-visual">
                <img src="${novoPeixe.link}" alt="${novoPeixe.nome}">
                <h3>${novoPeixe.nome}</h3>
            </div>

            <div class="fish-info-grid">
                <div class="info-group">
                    <h4>Informações Básicas</h4>
                    <p><strong>Nome Científico:</strong> ${novoPeixe.cientifico}</p>
                    <p><strong>Nutrição:</strong> ${novoPeixe.nutricao}</p>
                    <p><strong>Habitat:</strong> ${novoPeixe.habitat}</p>
                    <p><strong>Idade Média:</strong> ${novoPeixe.vida}</p>
                </div>

                <div class="info-group">
                    <h4>Dados de Pesca</h4>
                    <p><strong>Comprimento:</strong> ${novoPeixe.comprimento}</p>
                    <p><strong>Peso:</strong> ${novoPeixe.peso}</p>
                    <p><strong>Periodo Ativo:</strong> ${novoPeixe.periodo}
                    <p><strong>Como Atrair:</strong> ${novoPeixe.atrair}</p>
                </div>
            </div>
        </article>
    `;

    listaPeixes.insertAdjacentHTML('afterbegin', cardHTML);
    formulario.reset();
});
