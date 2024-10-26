// Alternar entre tema claro e escuro
document.getElementById("toggle-theme-btn").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

// Preencher a barra de progresso
document.getElementById("fill-progress-btn").addEventListener("click", function() {
    const progressBar = document.getElementById("progress-bar");
    let width = 0;
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }, 30);
});

// Slider de controle de cores
document.getElementById("color-slider").addEventListener("input", function() {
    const colorValue = document.getElementById("color-slider").value;
    const colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = `hsl(${colorValue}, 100%, 50%)`;
});
