const ask = require('readline-sync')

let moradores = []
let objetosRoubados = []

function cadastrarMoradores(){
    console.clear()
    let nomeMorador = ask.question('Digite o nome do morador: ')
    let novoMorador = {
    nome: nomeMorador,
    ladrao: false
    }

    moradores.push(novoMorador.nome)

}

function cadastrarObjetos(novoObjeto){
    console.clear()
    let nomeObjeto = ask.question('Insira o nome do objeto: ')
    objetosRoubados.push(nomeObjeto)
}

function escolhaDoLadrao(){
    console.clear()
    let CriarIndiceDoLadrao = Math.floor(Math.random() * moradores.length)
    moradores[CriarIndiceDoLadrao].ladrao = true
}

function verTodosOsMoradores(){
    console.clear()
    console.log(moradores)
}

function verTodosOsObjetosRoubados(){
    console.clear()
    console.log(objetosRoubados)
}

function principal(){
    cadastrarMoradores()
    let continuarOuNao = ask.question('se voce quiser adicionar outro morador, pressione 1, se nao, pressione qualquer outra coisa: ')
    while(continuarOuNao === '1'){
        
        continuarOuNao
        cadastrarMoradores()
    }

    cadastrarObjetos()
    let continuarOuNao2 = ask.question('se voce quiser adicionar outro objeto a ser roubado, pressione 1, se nao, pressione qualquer outra coisa: ')
    while(continuarOuNao2 === '1'){
        cadastrarObjetos()
        continuarOuNao2
    }

    function mostrarLadrao(){
        for (const a of moradores){
            if(a.ladrao === true){
                console.log(`${a} e o ladrao e seus itens roubados foram ${verTodosOsObjetosRoubados()}`)
            }
        }
        
    }
    
    escolhaDoLadrao()

    let sonicGravido = ask.question('Um dos habitantes roubou items da vila, descubra quem foi\n\n[1] Analise os moradores da vila\n[2] Analise os objetos que foram roubados\n[3] Descubra o ladrão(Desistir)\nSelecione um numero: ')

    if(sonicGravido === '1'){
        verTodosOsMoradores()
    }else if(sonicGravido === '2'){
        verTodosOsObjetosRoubados()
    }else if(sonicGravido === '3'){
        console.log(mostrarLadrao())
    }
}

principal()