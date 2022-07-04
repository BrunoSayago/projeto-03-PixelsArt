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

function ativaPintura() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', pintaPixel);
  }
}

// Botão Limpar
function retornaCorInicial() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const botaoLimpar = document.getElementById('clear-board');

botaoLimpar.addEventListener('click', retornaCorInicial);

// Gerador de Board
const quadroPixels = document.getElementById('pixel-board');

function apagaPixels() {
  while (quadroPixels.children.length !== 0) {
    quadroPixels.removeChild(quadroPixels.lastChild);
  }
}

function criaLinhas(numA) {
  for (let index = 1; index <= numA; index += 1) {
    const novaLinha = document.createElement('div');
    novaLinha.className = 'linha';
    quadroPixels.appendChild(novaLinha);
  }
}

function criaPixels(numA) {
  const linhas = quadroPixels.children;
  for (let index = 0; index < linhas.length; index += 1) {
    for (let index2 = 1; index2 <= numA; index2 += 1) {
      const pixelCriado = document.createElement('div');
      pixelCriado.className = 'pixel';
      linhas[index].appendChild(pixelCriado);
    }
  }
}

function validaNumero(numA) {
  if (numA < 5) {
    return 5;
  } if (numA > 50) {
    return 50;
  }
  return numA;
}

function mudaTamanhoPixels() {
  const input = document.getElementById('board-size').value;
  const inputNum = parseInt(input, 10);
  if (input === '') {
    alert('Board Inválido!');
  } else {
    apagaPixels();
    criaLinhas(validaNumero(inputNum));
    criaPixels(validaNumero(inputNum));
  }
  ativaPintura();
}

const botaoTamanho = document.getElementById('generate-board');
botaoTamanho.addEventListener('click', mudaTamanhoPixels);

function rndRGB() {
  return Math.floor(Math.random() * 256);
}

function geraStringRGB() {
  const stringRGB = `rgb(${rndRGB()}, ${rndRGB()}, ${rndRGB()})`;
  return stringRGB;
}

function rndColors() {
  const coresAleatorias = document.getElementsByClassName('random');
  for (let index = 0; index < coresAleatorias.length; index += 1) {
    coresAleatorias[index].style.backgroundColor = geraStringRGB();
  }
}

// Função Inicial
function carregamentoInicial() {
  selecionaCorInicial();
  ativaPintura();
  rndColors();
}

window.onload = () => {
  carregamentoInicial();
};
