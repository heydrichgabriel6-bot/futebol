const perguntas = [
    {
        pergunta: "⚽ Qual país venceu a Copa do Mundo de 2022?",
        imagem: "2022.webp",
        alternativas: [
            "argentina",
            "croácia",
            "frança",
            "alemanha"
        ],
        correta: 0
    },

    {
        pergunta: "👑 Qual jogador é conhecido como “Rei do Futebol”?",
        imagem: "coroa.jpg",
        alternativas: [
            "Maradona",
            "Pelé",
            "Messi",
            "Cristiano Ronaldo"
        ],
        correta: 1
    },

    {
        pergunta: "🏆 Qual clube brasileiro conquistou mais títulos da Copa Libertadores até 2026?",
        imagem: "liberta.avif",
        alternativas: [
            "Vasco",
            "Flamengo",
            "Paysandu",
            "Corinthians"
        ],
        correta: 1
    },

    {
        pergunta: "🥇 Quem foi o artilheiro da Copa do Mundo de 2002?",
        imagem: "copa.webp",
        alternativas: [
            "Ronaldinho Gaúcho",
            "Rivaldo",
            "Ronaldo",
            "Miroslav Klose"
        ],
        correta: 2
    },

    {
        pergunta: "🚀 Qual foi o único clube a conquistar a UEFA Champions League invicto em duas ocasiões diferentes?",
        imagem: "daldale.jpg",
        alternativas: [
            "Barcelona",
            "Manchester United",
            "Bayern",
            "Real Madrid"
        ],
        correta: 3
    },

     {
        pergunta: "Na conquista do Mundial Interclubes de 1962, o Santos aplicou uma goleada histórica por 5 a 2 jogando no Estádio da Luz. Qual foi o adversário europeu derrotado nessa ocasião?",
        imagem: "inter.jpg",
        alternativas: [
            "internazionale",
            "Benfica",
            "Milan",
            "Real Madrid"
        ],
        correta: 1
    },

    {
        pergunta: "Quem foi o capitão da seleção brasileira que ergueu a taça Jules Rimet após a vitória por 4 a 1 sobre a Itália na final da Copa do Mundo de 1970?",
        imagem: "pele.jpg",
        alternativas: [
            "Pelé",
            "Gérson",
            "tostão",
            "Carlos Alberto Torres"
        ],
        correta: 3
    },
    

    {
        pergunta: "Quem é o maior artilheiro da história do Campeonato Brasileiro considerando todas as edições unificadas da era nacional?",
        imagem: "brasileiro.jpg",
        alternativas: [
            "Zico",
            "Roberto Dinamite",
            "Fred",
            "Romário"
        ],
        correta: 1
    },

    {
        pergunta: "Na final da Copa do Mundo de 1994, o Brasil conquistou o tetracampeonato contra a Itália nos pênaltis. Qual jogador italiano isolou a cobrança decisiva que garantiu o título ao Brasil?",
        imagem: "tetra.jpg",
        alternativas: [
            "Frango Baresi",
            "Daniele Massaro",
            "Roberto Baggio",
            "Paolo Maldini"
        ],
        correta: 3
    },

    
    


];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    document.getElementById("imagem-pergunta").src =
        pergunta.imagem;

    const alternativas = document.getElementById("alternativas");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        
        botao.onclick = function () {
            verificarResposta(indice, botao);
        };

        alternativas.appendChild(botao);
    });
}

function verificarResposta(indice, botaoClicado) {

    const respostaCorreta = perguntas[perguntaAtual].correta;

    
    const botoes = document.querySelectorAll("#alternativas button");

    botoes.forEach(botao => {
        botao.onclick = null;
    });

   
    if (indice === respostaCorreta) {

       
        botaoClicado.classList.add("correta");

        pontos++;

    } else {

     
        botaoClicado.classList.add("errada");

       
        botoes[respostaCorreta].classList.add("correta");
    }

    
    setTimeout(() => {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }

    }, 500);
}

function mostrarResultado() {

    document.getElementById("pergunta").textContent =
        "Quiz finalizado!";

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resultado").textContent =
        "Você acertou " + pontos +
        " de " + perguntas.length + " perguntas.";

    document.getElementById("imagem-pergunta").style.display = "none";
}

mostrarPergunta();