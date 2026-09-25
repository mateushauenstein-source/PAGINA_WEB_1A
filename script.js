// ABRIR PESQUISA
function abrirPesquisa(tema) {
  // Esconde a página inicial
  document.getElementById('tela-inicial').classList.add('escondido');
  
  // Mostra a área de pesquisas
  document.getElementById('tela-pesquisa').classList.remove('escondido');
  
  // Esconde todos os artigos
  document.querySelectorAll('.artigo').forEach(art => art.classList.add('escondido'));
  
  // Mostra apenas o artigo clicado
  document.getElementById('artigo-' + tema).classList.remove('escondido');
}

// VOLTAR AO INÍCIO
function voltarInicio() {
  document.getElementById('tela-pesquisa').classList.add('escondido');
  document.getElementById('tela-inicial').classList.remove('escondido');
  pararVoz();
}

// ABRIR E FECHAR MODAIS (Janelas)
function abrirModal(id) {
  document.getElementById(id).classList.remove('escondido');
}

function fecharModal(id) {
  document.getElementById(id).classList.add('escondido');
}

// CONFIGURAÇÕES DE ACESSIBILIDADE

// 1. Leitor de Voz
function lerTexto() {
  pararVoz();
  
  // Pega todo o texto visível da página
  let texto = document.body.innerText;
  let voz = new SpeechSynthesisUtterance(texto);
  voz.lang = 'pt-BR';
  voz.volume = document.getElementById('vol-range').value;
  
  window.speechSynthesis.speak(voz);
}

function pararVoz() {
  window.speechSynthesis.cancel();
}

// 2. Mudar tamanho do texto
let tamanhoAtual = 16;
function mudarTexto(qtd) {
  tamanhoAtual += qtd;
  document.body.style.fontSize = tamanhoAtual + 'px';
}

// 3. Ajustar Brilho
function ajustarBrilho(valor) {
  document.getElementById('brilho-overlay').style.opacity = valor;
}
