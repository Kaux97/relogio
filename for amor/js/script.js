function mostrarImagens() {
    var imagens = document.querySelectorAll('.imagem'); // Seleciona todas as imagens

    imagens.forEach(function(img) {
        
        img.style.display = 'inline-block'; // Exibe todas as imagens

    });

    var h2 = document.querySelector('h2'); // Seleciona o elemento h2
    h2.textContent = 'Você é uma das pessoas mais especiais da minha vida!! 😍'; // Altera o texto do h2
}

function fuja(){
    var botaoNao = document.getElementById("nao")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";


}