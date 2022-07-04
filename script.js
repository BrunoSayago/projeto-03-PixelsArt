// Configurações do quadro de cores

const corPreta = document.getElementById('cor-preta');
const cores = document.getElementsByClassName('color');

function retiraSelected() {
  for (let index = 0; index < cores.length; index += 1) {
    if (cores[index].classList.contains('selected')) {
      cores[index].classList.remove('selected');
    }
  }
}

function selecionaCor(evento) {
  retiraSelected();
  const corSelecionada = evento.target;
  corSelecionada.classList.add('selected');
}

for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selecionaCor);
}

function selecionaCorInicial() {
  retiraSelected();
  corPreta.classList.add('selected');
}

// Pintando Pixels
function pintaPixel(evento) {
  const pixel = evento.target;
  const selecionada = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selecionada, null);
  const corSelecionada = cssObj.getPropertyValue('background-color');
  pixel.style.backgroundColor = corSelecionada;
}

const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', pintaPixel);
}

// Botão Limpar
function retornaCorInicial() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const botaoLimpar = document.getElementById('clear-board');

botaoLimpar.addEventListener('click', retornaCorInicial);

// Função Inicial
function carregamentoInicial() {
  selecionaCorInicial();
}
