// Alternar entre tema claro e escuro
document.getElementById("toggle-theme-btn").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

// Preencher a barra de progresso
document.getElementById("fill-progress-btn").addEventListener("click", function() {
    // Obtém o elemento da barra de progresso
    const progressBar = document.getElementById("progress-bar");
    let width = 0; // Inicializa a largura da barra em 0%
    // Cria um intervalo para aumentar gradualmente a largura da barra de progresso
    const interval = setInterval(function() {
        if (width >= 100) { // Quando a largura atinge 100%
            clearInterval(interval); // Interrompe o intervalo
        } else {
            width++; // Incrementa a largura em 1%
            progressBar.style.width = width + "%"; // Atualiza a largura da barra
        }
    }, 30); // Ajusta a barra a cada 30 milissegundos
});

// Slider de controle de cores
document.getElementById("color-slider").addEventListener("input", function() {
    // Obtém o valor atual do controle deslizante de cor
    const colorValue = document.getElementById("color-slider").value;
    const colorBox = document.getElementById("color-box"); // Seleciona a caixa de cor
    // Altera a cor de fundo da caixa com base no valor do controle deslizante
    colorBox.style.backgroundColor = `hsl(${colorValue}, 100%, 50%)`;
});
