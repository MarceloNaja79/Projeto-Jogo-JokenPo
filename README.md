# Projeto Jogo PokenPo

###  Este projeto consiste em um jogo simples de Jokenpô (Pedra, Papel e Tesoura) desenvolvido
 utilizando HTML, CSS e JavaScript. O objetivo foi criar uma aplicação interativa onde o 
jogador pode escolher entre as três opções, competir contra a máquina e acompanhar a 
pontuação até que um dos lados atinja 5 pontos.

<figuri>
<img src=/> 
<figuri/>

##  HTML (index.html)
 ### HTML é a estrutura base do jogo. Ele define os elementos visíveis na página:
 • Título Principal h1: Exibe o título "JOKENPÔ"
  
 • Botões de Escolha (<button>): Três botões com IDs rock , papper e scissors para o 
jogador fazer suas escolhas. Cada botão exibe um emoji correspondente (✌ para tesoura, 🖐 para papel, ✊ para pedra).

 • Exibição de Pontuação (p, e span ): Dois parágrafos para mostrar a pontuação 
do jogador ("Sua Pontuação:") e da máquina ("Pontuação da Machine:"). Cada um 
contém um 
<span> onde o valor numérico da pontuação é atualizado dinamicamente 
pelo JavaScript.

 • Vinculação de Estilos e Scripts: O HTML está vinculado ao arquivo 
estilização e ao 
style.css para 
script.js para a lógica do jogo, garantindo que o JavaScript seja 
carregado após todos os elementos HTML.</p>

 ##CSS (style.css)
###CSS é responsável pela aparência visual do jogo, tornando-o atraente e 
responsivo:

  • Estilização Global: Define margens, preenchimentos e 
box-sizing para todos os elementos.

• Fundo da Página (body ): Utiliza uma imagem de fundo 
( https://picsum.photos/1600/900) com 
background-size: cover para cobrir toda a tela.
Centraliza o conteúdo vertical e horizontalmente.

 • Contêiner Principal (.container): Um contêiner centralizado com fundo semitransparente
 (rgb(247, 234, 178) com (opacity: 88%), bordas arredondadas e layoutf
 lexível para organizar os elementos internos.
 
 • Botões de Escolha (.button e button):
 
 • O contêiner (.button organiza os botões com um espaçamento) (hover).(gap: 25px).
 
 • Os botões individuais têm padding, tamanho de fonte grande, cursor de ponteiro, 
bordas arredondadas e uma transição suave de opacidade ao passar o mouse

 • Cores de fundo específicas para cada botão (#rock, #papper, diferenciá-los visualmente.
 
 • Pontuações (#scissors ) para p e span ): Estilização para os textos de pontuação, com cores distintas 
para a pontuação do jogador (azul) e da máquina (vermelho) nos elementos <span>.</span> 

## JavaScript (script.js )

### O arquivo script.js é o coração do jogo, contendotoda a lógica funcional:

 • Variáveis de Estado:
 
 • pontuacaoJogador e pontuacaoMaquina: Variáveis pontuações atuais, inicializadas em 0.
 
 • maxPontos : Uma constante let para armazenar as const definida como 5, indicando que o jogo termina 
quando um jogador atinge essa pontuação.

 • Seleção de Elementos DOM: Obtém referências aos botões e aos <span> das pontuações usando 
document.getElementById() e document.querySelector().

• Opções do Jogo: Um array opcoes (["rock", "paper", "scissors"] ) para facilitar a escolha 
aleatória da máquina.

 • escolhaMaquina() : Uma função que retorna uma das opções aleatoriamente, usando Math.random() e Math.floor().
 
 • determinarVencedor(jogador, maquina): Uma função crucial que recebe as escolhas do 
jogador e da máquina e, com base nas regras do Jokenpô, retorna "maquina" ou "empate".

 •atualizarPontuacao(): Atualiza o textContent dos os valores atuais das variáveis "jogador", 
 <span> de pontuação no HTML com pontuacaoJogador e pontuacaoMaquina.
 •verificarFimDeJogo(): Verifica se pontuacaoJogador ou maxPontos. Se sim, exibe um 
pontuacaoMaquina atingiu alert() com o resultado final e chama reiniciarJogo().

 • reiniciarJogo() : Reseta as pontuações para 0 e chama atualizarPontuacao() para limpar a tela.
 
 • jogar(escolhaJogador) : A função principal que é executada quando o jogador clica em um botão:

 1. Converte o ID do botão clicado para o formato de texto da escolha.

2. Chama escolhaMaquina() para obter a jogada da máquina.

 3. Chama determinarVencedor() para saber quem ganhou a rodada.

 4. Incrementa a pontuação do vencedor e exibe um "rock").
 alert() com o resultado da rodada.

 5. Chama atualizarPontuacao() para refletir a nova pontuação na tela.

 6. Chama verificarFimDeJogo() para checar se o jogo terminou.

 7. Event Listeners: Os botões de escolha (rock, papper, configurados para chamar a função scissors )
têm addEventListener jogar() com a escolha correspondente quando clicados.

 ## Este projeto demonstra a integração de HTML para estrutura, CSS para estilo e JavaScript
 
### Para interatividade e lógica de jogo, resultando em uma aplicação web funcional e 
divertida
