const perguntas = [
    {
      pergunta: "Quem foi o artilheiro da Copa do Mundo de 2002, vencida pelo Brasil?",
      respostas:[
        "Ronaldo Nazário",
        "Ronaldinho Gaúcho",
        "Rivaldo",
      ],
      correta: 0 // "Ronaldo Nazário" é a resposta correta
    },
    {
      pergunta: "Qual clube brasileiro conquistou a Copa Libertadores da América em 2005?",
      respostas:[
        "São Paulo FC",
        "Santos FC",
        "Grêmio FBPA",
      ],
      correta: 0 // "São Paulo FC" é a resposta correta
    },
    {
      pergunta: "Quem foi o técnico da Seleção Brasileira na conquista da Copa do Mundo de 2002?",
      respostas:[
        "Felipão",
        "Tite",
        "Dunga",
      ],
      correta: 0 // "Felipão" é a resposta correta
    },
    {
      pergunta: "Qual jogador brasileiro ganhou o prêmio de Melhor Jogador do Mundo da FIFA em 2004?",
      respostas:[
        "Ronaldinho Gaúcho",
        "Kaká",
        "Ronaldo Nazário",
      ],
      correta: 0 // "Ronaldinho Gaúcho" é a resposta correta
    },
    {
      pergunta: "Em que ano o Brasil conquistou a medalha de ouro no futebol masculino nas Olimpíadas?",
      respostas:[
        "2004",
        "2008",
        "2012",
      ],
      correta: 1 // "2008" é a resposta correta
    },
    {
      pergunta: "Qual jogador brasileiro ficou conhecido como 'Rei dos Clássicos' nos anos 2000?",
      respostas:[
        "Romário",
        "Ronaldo Nazário",
        "Robinho",
      ],
      correta: 0 // "Romário" é a resposta correta
    },
    {
      pergunta: "Qual foi o jogador brasileiro que marcou o gol decisivo na final da Copa do Mundo de 2002?",
      respostas:[
        "Rivaldo",
        "Ronaldinho Gaúcho",
        "Kaká",
      ],
      correta: 1 // "Ronaldinho Gaúcho" é a resposta correta
    },
    {
      pergunta: "Qual clube brasileiro venceu a Copa do Brasil em 2009?",
      respostas:[
        "Sport Club Internacional",
        "Corinthians",
        "Fluminense FC",
      ],
      correta: 1 // "Corinthians" é a resposta correta
    },
    {
      pergunta: "Quem foi o capitão da Seleção Brasileira na conquista do pentacampeonato em 2002?",
      respostas:[
        "Ronaldo Nazário",
        "Cafu",
        "Rivaldo",
      ],
      correta: 1 // "Cafu" é a resposta correta
    },
    {
      pergunta: "Em que país foi disputada a final da Copa do Mundo de 2006, na qual o Brasil não esteve presente?",
      respostas:[
        "Alemanha",
        "Itália",
        "França",
      ],
      correta: 1 // "Itália" é a resposta correta
    }
  ];
    
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')

    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  //loop ou laço de repetição
  for(const item of perguntas){
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta

      for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
        //seleciona que existe respostas
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta

         corretas.delete(item)
         if(estaCorreta){
           corretas.add(item)
         }

         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }


        //adicionar todas as respostas
      quizItem.querySelector('dl').appendChild(dt)       
    }
    // remover a primeira linha da respostas
      quizItem.querySelector('dl dt').remove()


        // coloca a pergunta na tela
        quiz.appendChild(quizItem)
  }