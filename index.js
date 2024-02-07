const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas:[
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2 // "const myVar;" é a resposta correta
    },
    {
      pergunta: "Como você pode adicionar um comentário de uma linha em JavaScript?",
      respostas:[
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário"
      ],
      correta: 0 // "// Este é um comentário" é a resposta correta
    },
    {
      pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
      respostas:[
        "console.print()",
        "print()",
        "console.log()"
      ],
      correta: 2 // "console.log()" é a resposta correta
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas:[
        "para (i = 0; i < 5; i++)",
        "for (i = 0; i < 5)",
        "for (var i = 0; i < 5; i++)"
      ],
      correta: 2 // "for (var i = 0; i < 5; i++)" é a resposta correta
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas:[
        "22",
        "4",
        "TypeError"
      ],
      correta: 0 // "22" é a resposta correta
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas:[
        "Selecionar um elemento pelo seu ID",
        "Selecionar um elemento pelo seu nome de classe",
        "Selecionar um elemento pelo seu seletor CSS"
      ],
      correta: 2 // "Selecionar um elemento pelo seu seletor CSS" é a resposta correta
    },
    {
      pergunta: "Qual é a saída de 'typeof null' em JavaScript?",
      respostas:[
        "'object'",
        "'null'",
        "'undefined'"
      ],
      correta: 0 // "'object'" é a resposta correta
    },
    {
      pergunta: "Qual é a maneira correta de comparar se duas variáveis têm o mesmo valor e o mesmo tipo em JavaScript?",
      respostas:[
        "==",
        "===",
        "="
      ],
      correta: 1 // "===" é a resposta correta
    },
    {
      pergunta: "Qual é a saída de '5 > 4 > 3' em JavaScript?",
      respostas:[
        "true",
        "false",
        "TypeError"
      ],
      correta: 1 // "false" é a resposta correta
    },
    {
      pergunta: "Qual é o resultado de '5 + '5' em JavaScript?",
      respostas:[
        "55",
        "10",
        "TypeError"
      ],
      correta: 0 // "55" é a resposta correta
    },
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