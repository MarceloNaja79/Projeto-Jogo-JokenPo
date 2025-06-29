// Variáveis para controlar o jogo
let pontuacaoJogador = 0;
let pontuacaoMaquina = 0;
const maxPontos = 5; // Melhor de 5

// Elementos do DOM
const botaoRock = document.getElementById('rock');
const botaoPaper = document.getElementById('papper');
const botaoScissors = document.getElementById('scissors');
const spanPontuacaoJogador = document.querySelector('.sua-pontuação span');
const spanPontuacaoMaquina = document.querySelector('.pontuação-machine span');

// Opções do jogo
const opcoes = ['rock', 'paper', 'scissors'];

// Função para gerar escolha aleatória da máquina
function escolhaMaquina() {
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    return opcoes[indiceAleatorio];
}

// Função para determinar o vencedor da rodada
function determinarVencedor(jogador, maquina) {
    if (jogador === maquina) {
        return 'empate';
    }
    
    if (
        (jogador === 'rock' && maquina === 'scissors') ||
        (jogador === 'paper' && maquina === 'rock') ||
        (jogador === 'scissors' && maquina === 'paper')
    ) {
        return 'jogador';
    } 
    else {
        return 'maquina';
    }
}

// Função para atualizar a pontuação no HTML
function atualizarPontuacao() {
    spanPontuacaoJogador.textContent = pontuacaoJogador;
    spanPontuacaoMaquina.textContent = pontuacaoMaquina;
}

// Função para verificar se o jogo terminou
function verificarFimDeJogo() 
{
    if (pontuacaoJogador === maxPontos) {
        alert('Parabéns! Você venceu o jogo!');
        reiniciarJogo();
        return true;
    } 
    else if (pontuacaoMaquina === maxPontos) {
        alert('A máquina venceu o jogo! Tente novamente!');
        reiniciarJogo();
        return true;
    }
    return false;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    pontuacaoJogador = 0;
    pontuacaoMaquina = 0;
    atualizarPontuacao();
}

// Função principal do jogo
function jogar(escolhaJogador) {
    // Converte o ID do botão para o nome da escolha
    let jogador;
    if (escolhaJogador === 'rock') 
        {
        jogador = 'rock';
    }
    else if (escolhaJogador === 'papper') 
        {
        jogador = 'paper';
    } 
    else if (escolhaJogador === 'scissors') 
        {
        jogador = 'scissors';
    }
    
    // Gera escolha da máquina
    const maquina = escolhaMaquina();
    
    // Determina o vencedor da rodada
    const resultado = determinarVencedor(jogador, maquina);
    
    // Atualiza pontuação
    if (resultado === 'jogador') 
        {
        pontuacaoJogador++;
        alert(`Você escolheu ${jogador}, máquina escolheu ${maquina}. Você ganhou esta rodada!`);
    } 
    else if (resultado === 'maquina') {
        pontuacaoMaquina++;
        alert(`Você escolheu ${jogador}, máquina escolheu ${maquina}. A máquina ganhou esta rodada!`);
    } 
    else {
        alert(`Você escolheu ${jogador}, máquina escolheu ${maquina}. Empate!`);
    }
    
    // Atualiza a pontuação na tela
    atualizarPontuacao();
    
    // Verifica se o jogo terminou
    verificarFimDeJogo();
}

// Event Listeners para os botões
botaoRock.addEventListener('click', () => jogar('rock'));
botaoPaper.addEventListener('click', () => jogar('papper'));
botaoScissors.addEventListener('click', () => jogar('scissors'));
