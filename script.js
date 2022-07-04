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

function carregamentoInicial() {
  selecionaCorInicial();
}