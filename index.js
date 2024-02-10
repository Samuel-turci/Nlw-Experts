const perguntas = [
    {
      pergunta: "Qual é a capital do Japão?",
      respostas: [
        "Tóquio",
        "Pequim",
        "Seul",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o maior oceano do mundo?",
      respostas: [
        "Oceano Atlântico",
        "Oceano Índico",
        "Oceano Pacífico",
      ],
      correta: 2
    },
    {
      pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
      respostas: [
        "George Washington",
        "Thomas Jefferson",
        "Abraham Lincoln",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a moeda oficial do Brasil?",
      respostas: [
        "Dólar",
        "Euro",
        "Real",
      ],
      correta: 2
    },
    {
      pergunta: "Quantos planetas fazem parte do sistema solar?",
      respostas: [
        "7",
        "8",
        "9",
      ],
      correta: 1
    },
    {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      respostas: [
        "William Shakespeare",
        "Miguel de Cervantes",
        "Friedrich Nietzsche",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o maior mamífero terrestre?",
      respostas: [
        "Elefante Africano",
        "Girafa", 
        "Baleia Azul",
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano a Primeira Guerra Mundial começou?",
      respostas: [
        "1914",
        "1939",
        "1945",
      ],
      correta: 0
    },
    {
      pergunta: "Quem pintou a 'Mona Lisa'?",
      respostas: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o metal líquido à temperatura ambiente?",
      respostas: [
        "Ouro",
        "Prata",
        "Mercúrio",
      ],
      correta: 2
    },
  ];
      //importando os dados HTML (clonando) e convertendo para Javascript
        const quiz = document.querySelector('#quiz')
        const template = document.querySelector('template')
  
        const corretas = new Set()
        const totalDePerguntas = perguntas.length
        const mostrarTotal = document.querySelector('#acertos span')
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
        //loop para mostrar na tela cada uma das 10 perguntas
          for(const item of perguntas) {
            const quizItem = template.content.cloneNode(true)
            quizItem.querySelector('h3').textContent = item.pergunta
            
            //loop para mostrar na tela cada uma das 3 respostas
            for(let resposta of item.respostas) {
              const dt = quizItem.querySelector('dl dt').cloneNode(true)
              dt.querySelector('span').textContent = resposta
              dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
              dt.querySelector('input').value = item.respostas.indexOf(resposta)
              dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta
  
                corretas.delete(item)
                if(estaCorreta) {
                  corretas.add(item)
                }
  
                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
              }
  
              quizItem.querySelector('dl').appendChild(dt)
            }
            //apagar a resposta ''Resposta A''
            quizItem.querySelector('dl dt').remove()
            
            //colocar a pergunta na tela
            quiz.appendChild(quizItem)
          }
    