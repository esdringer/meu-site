document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const q1 = parseInt(document.getElementById('q1').value);
        const q2 = document.getElementById('q2').value.toLowerCase();
        const q3 = document.getElementById('q3').value.toLowerCase();

        let acertos = 0;

        if (q1 === 5) { // Resposta correta: 5
            acertos++;
        }
        if (q2 === 'flamengo') { // Resposta correta: Flamengo
            acertos++;
        }
        if (q3 === 'rússia') { // Resposta correta: Rússia
            acertos++;
        }

        if (acertos === 0) {
            resultado.textContent = `Que pena, ${name}, você errou todas.`;
        } else if (acertos === 1) {
            resultado.textContent = `Parabéns, ${name}, você acertou uma. Pelo visto você não é muito fã de futebol.`;
        } else if (acertos === 2) {
            resultado.textContent = `Meus parabéns, ${name}, você acertou duas. Vejo que entende de futebol.`;
        } else {
            resultado.textContent = `Excelente, ${name}, você acertou todas.`;
        }
    });
});
