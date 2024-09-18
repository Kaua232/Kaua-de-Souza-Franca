const ask = require('readline-sync')

let nome = ask.question('seu nome: ')
let tipoDeJogo = ask.question('tipo de jogo: ')
let etapaDoJogo = ask.question('etapa do jogo: ')
let categoria = ask.question('categoria: ')
let quantidadeDeIngressos = ask.question('quantidade de ingressos: ')
let precoingresso
let precofinal

if(categoria == 1 && etapaDoJogo == 'sf'){
    precoingresso = 1320.00
}else if(categoria == 1 && etapaDoJogo == 'dt'){
    precoingresso = 660.00
}else if(categoria == 1 && etapaDoJogo == 'fi'){
    precoingresso = 1980.00
}

if(categoria == 2 && etapaDoJogo == 'sf'){
    precoingresso = 880.00
}else if(categoria == 2 && etapaDoJogo == 'dt'){
    precoingresso = 440.00
}else if(categoria == 2 && etapaDoJogo == 'fi'){
    precoingresso = 1320.00
}

if(categoria == 3 && etapaDoJogo == 'sf'){
    precoingresso = 550.00
}else if(categoria == 3 && etapaDoJogo == 'dt'){
    precoingresso = 330.00
}else if(categoria == 3 && etapaDoJogo == 'fi'){
    precoingresso = 880.00
}

if(categoria == 4 && etapaDoJogo == 'sf'){
    precoingresso = 220.00
}else if(categoria == 4 && etapaDoJogo == 'dt'){
    precoingresso = 170.00
}else if(categoria == 4 && etapaDoJogo == 'fi'){
    precoingresso = 330.00
}

let precoTotalDoIngresso = precoingresso * quantidadeDeIngressos

switch(tipoDeJogo){
    case 'in':
        precofinal = precoTotalDoIngresso * 4.10
        break
    case 'do':
        precofinal = precoTotalDoIngresso 
        break   
}

console.log(`nome: ${nome}`)
console.log(`tipo de jogo: ${tipoDeJogo}`)
console.log(`etapa do jogo: ${etapaDoJogo}`)
console.log(`categoria: ${categoria}`)
console.log(`quantidade de ingressos: ${quantidadeDeIngressos}`)
console.log(`preço final: ${precofinal.toFixed(2)}`)





