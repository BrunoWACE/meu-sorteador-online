function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const resultElement = document.querySelector(".result");
    const overlay = document.getElementById("countdown-overlay");
    const countdownText = document.getElementById("countdown-text");
    const sorteadoText = document.getElementById("sorteado-text");
    const ultimoNumero = document.getElementById("ultimo-numero");

    const zoomDuration = 2; // segundos (controle do tempo da animação e da contagem)

    if (min >= max) {
        resultElement.textContent = "O valor mínimo deve ser menor que o valor máximo.";
        resultElement.style.color = "#FFFFFF";
        resultElement.style.display = "block";
        return;
    }

    let countdown = 3;
    overlay.style.display = "flex";
    sorteadoText.style.display = "none";

    const startCountdown = () => {
        if (countdown > 0) {
            countdownText.textContent = countdown;
            countdownText.style.animation = "none";
            void countdownText.offsetWidth;
            countdownText.style.animation = `zoomFade ${zoomDuration}s ease forwards`;

            countdown--;
            setTimeout(startCountdown, zoomDuration * 1000);
        } else {
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            countdownText.textContent = "";
            sorteadoText.innerHTML = `Parabéns!<br>Esse é o Número Sorteado<br><br><strong class="numero-destaque">${result}</strong>`;
            sorteadoText.style.display = "block";

            // Fecha a tela de blur depois do tempo de exibição + animação
            setTimeout(() => {
                overlay.style.display = "none";

                /*if (resultElement) {
                    resultElement.style.display = "none";
                    resultElement.textContent = "";
                }*/

                if (ultimoNumero) {
                    ultimoNumero.textContent = `Último número sorteado: ${result}`;
                }
            }, (zoomDuration * 1000) + 3000); // exemplo: 2s + 1.5s de pausa = 3.5s

            // Confetti explosivo central
            confetti({
                particleCount: 500, // Mais partículas!
                spread: 160,        // Espalha mais pra todos os lados
                startVelocity: 60,  // Velocidade inicial mais alta
                scalar: 2,        // ESCALA maior (tamanho das partículas)
                origin: { y: 0.6 }  // Posição vertical centralizada
            });
        }
    };

    startCountdown();
}


