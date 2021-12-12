let sequencia = [];
let clickedsequencia = [];
let pontuacao = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aletoria de cores do jogo
let ordemAleatoria = () => {
    let colorsequencia = Math.floor(Math.random() * 4);
    sequencia[sequencia.length] = colorsequencia;
    clickedsequencia = [];

    for(let i in sequencia) {
        let elementColor = createColorElement(sequencia[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor sequencia do jogo
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//verifica se a ordem gerada esta correta quando clicada
let checksequencia = () => {
    for(let i in clickedsequencia) {
        if(clickedsequencia[i] != sequencia[i]) {
            fimJogo();
            break;
        }
    }
    if(clickedsequencia.length == sequencia.length) {
        alert(`Pontuação: ${pontuacao}\nVocê acertou! Iniciando próximo nível!`);
        proximoNivel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedsequencia[clickedsequencia.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checksequencia();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let proximoNivel = () => {
    pontuacao++;
    ordemAleatoria();
}

//funcao para game over
let fimJogo = () => {
    alert(`Pontuação: ${pontuacao}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    sequencia = [];
    clickedsequencia = [];

    inicioJogo();
}

//funcao de inicio do jogo
let inicioJogo = () => {
    alert('Bem vindo ao Gênesis do Felipe! Iniciando novo jogo!');
    pontuacao = 0;

    proximoNivel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
inicioJogo();