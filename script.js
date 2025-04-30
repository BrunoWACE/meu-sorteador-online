function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        const resultElement = document.querySelector(".result");
        resultElement.textContent = "O valor mínimo deve ser menor que o valor máximo.";
        return; // Interrompe a função se a condição for verdadeira
    }   

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const resultElement = document.querySelector(".result");
    resultElement.textContent = `Número sorteado: ${result}`;
}
