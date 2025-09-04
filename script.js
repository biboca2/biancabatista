
function marcarBotaoAtivo() {
  const botoes = document.querySelectorAll('.listaSobreMim button');

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

      for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove('ativo');
      }

      botoes[i].classList.add('ativo');
    };
  }
}

function verificarPaginaAtual() {
  const botoes = document.querySelectorAll('.listaSobreMim button');
  const pagina = window.location.pathname;

  if (pagina.includes('aboutme')) {
    botoes[1].classList.add('ativo');
  } else if (pagina.includes('education')) {
    botoes[2].classList.add('ativo');
  } else if (pagina.includes('experience')) {
    botoes[3].classList.add('ativo');
  } else if (pagina.includes('contact')) {
    botoes[4].classList.add('ativo');
  } else {
    botoes[0].classList.add('ativo');
  }
}

window.onload = function () {
  marcarBotaoAtivo();
  verificarPaginaAtual();
};



