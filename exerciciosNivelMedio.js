const ask = require('readline-sync')


// 1. 
// Crie um array 'time' com os nomes ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]. Verifique se "Roberto Carlos" está no array. Se sim, converta todos os nomes para maiúsculas e adicione "PERNA DE FUGUETE" ao final do nome de Roberto Carlos. Depois imprima todo o Array na tela.

let time = ['pedro' , 'carlos' , 'Vinícius Júnior' , 'Guiñazu' , 'Roberto Carlos' , 'Ronaldinho Gaúcho']

if(time.includes('Roberto Carlos')){
    time[time.indexOf('Roberto Carlos')] = time[time.indexOf('Roberto Carlos')] = time[time.indexOf('Roberto Carlos')].toUpperCase() + ' PERNA DE FUGUETE'
    console.log(time)
}

// 2. Pokemon
// Crie um array 'pokemons' com os nomes ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]. Adicione "Squirtle" ao início, remova o último Pokémon, e verifique se "Pikachu" está no array. Se não estiver, adicione "Pikachu" ao final.

let pokemons = ['Bulbasaur' , 'Charmander' , 'Eevee' , 'Totodyle']

pokemons.unshift('squirtle')
pokemons.pop()

if(pokemons.includes('Pikachu')){

}else{
    pokemons.push('Pikachu')
}

console.log(pokemons)
// 3. 
// Crie um array 'agentes' com os nomes ["Sage", "Jett", "Phoenix"]. Verifique se "Jett" está no array, descubra seu índice (pesquise como fazer isso se necessário) e substitua por "Raze". Retorne o array modificado.

let agentes = ['Sage' , 'Jett' , 'Phoenix']

console.log(agentes.includes('Jett'))
console.log(agentes.indexOf('Jett'))

console.log(agentes)
agentes[agentes.indexOf('Jett')] = 'Raze'
console.log(agentes)

// 4.
// Crie um array 'grifinoria' com os nomes ["Hermione", "Ron", "Neville"]. Remova o primeiro nome, adicione "Harry" ao início, e verifique se "Ron" está no array. Se sim, retorne todos os nomes em maiúsculas.

let grifinoria = ['Hermione' , 'Ron' , 'Neville']
grifinoria.pop()
grifinoria.unshift('Harry')
if (grifinoria.includes('Ron')){
    console.log(grifinoria.map(grifinoria => grifinoria.toUpperCase()))
}

/* 5.
Você foi contratado pelo governo imperial para criar um sistema que gerencie a produção e distribuição de especiarias em Arrakis. O sistema deve permitir que o usuário insira o nome do líder da operação, o tipo de operação (CO para coleta, EX para extração, TR para transporte), e a quantidade de especiaria coletada em toneladas. Dependendo do tipo de operação e da quantidade de especiaria, o sistema deve calcular o valor total de lucro esperado, considerando os seguintes fatores:

    - Operações de coleta (CO) têm um lucro de 1000 solaris por tonelada.
    - Operações de extração (EX) têm um lucro de 2000 solaris por tonelada, mas se a quantidade for superior a 50 toneladas, o lucro por tonelada aumenta para 2500 solaris.
    - Operações de transporte (TR) têm um lucro de 1500 solaris por tonelada, mas se a quantidade for inferior a 20 toneladas, há uma taxa adicional de 500 solaris por tonelada.

O sistema deve imprimir o nome do líder, o tipo de operação, a quantidade de especiaria e o lucro total esperado.
*/

/*let nomeDoLider = ask.question('nome do lider: ')
let tipoDeOperacao = ask.question('tipo de operação: ')
let quantidadeDeEspeciarias = Number(ask.question('quantidade de especiarias coletadas: '))
let precoDaEspeciaria






switch(tipoDeOperacao.toLowerCase()){
    case 'co':
        precoDaEspeciaria = 1000
        break
    case 'ex':
        if(quantidadeDeEspeciarias > 50){
            precoDaEspeciaria = 2500
            break
        }else{
            precoDaEspeciaria = 2000
            break
        }
    case 'tr':
        if(quantidadeDeEspeciarias < 20){
            precoDaEspeciaria = 1000
            break
        }else{
            precoDaEspeciaria = 1500
            break
        }
    default:
        console.log('Falha no Sistema, Reinsira seus dados corretamente')         
}

let lucro = quantidadeDeEspeciarias * precoDaEspeciaria






console.log(`O nome do seu lider é ${nomeDoLider}, seu tipo de operação é ${tipoDeOperacao}, voce coletou ${quantidadeDeEspeciarias} toneladas de especiarias`)
console.log(`seu lucro foi de ${lucro}`)*/
// 6.
// Crie uma string 'nome' com o valor "  Alvo Dumbledore  ". Remova os espaços, transforme o nome para maiúsculas e retorne a quantidade de caracteres do nome.

let nome = '  Alvo Dumbledore  '
nome.trim()
nome = nome.toUpperCase()
nome.length

console.log(`A string é ${nome} e tem ${nome.length} caracteres`)

//7.
// Crie um array 'naves' com os nomes ["X-Wing", "TIE Fighter", "Millennium Falcon"]. Remova a última nave, adicione "Star Destroyer" ao início do array, e verifique se "TIE Fighter" está no array.

let naves = ['X-Wing' , 'TIE Fighter' , 'Millennium Falcon']
naves.pop()
naves.push('Star Destroyer')
console.log(naves.includes('TIE Fighter'))


/*8.
Você foi contratado pela WOOHP para criar um sistema de planejamento de missões. Para cada missão, os detalhes incluem o nome da espiã, o tipo de missão (RE para resgate, IN para infiltração, DE para desativação) e o nível de risco da missão (AL para alto, ME para médio, BA para baixo). Dependendo da combinação do tipo de missão e do nível de risco, o sistema deve determinar o tempo estimado de conclusão e a quantidade de gadgets necessários:
    - Missões de resgate (RE) com alto risco (AL) levam 5 horas e requerem 4 gadgets, missões de risco médio (ME) levam 3 horas e requerem 3 gadgets, e de baixo risco (BA) levam 2 horas com 2 gadgets.
    - Missões de infiltração (IN) sempre levam 4 horas, mas o número de gadgets depende do risco: 5 gadgets para AL, 3 para ME e 2 para BA.
    - Missões de desativação (DE) têm um tempo fixo de 6 horas, independentemente do risco, mas o número de gadgets é 3 para AL, 2 para ME e 1 para BA.
O sistema deve imprimir o nome da espiã, o tipo de missão, o nível de risco, o tempo estimado de conclusão e a quantidade de gadgets necessários.
*/

let nomeEspia = ask.question('Qual seu nome: ')
let tipoDeMissao = ask.question('Tipo da missao: ')
let nivelDeRisco = ask.question('Nivel de risco: ')
let numeroDeGadgets
let tempoEstimadoEmHoras 

switch(tipoDeMissao.toLowerCase()){
    case 're':
        if(nivelDeRisco.toLowerCase() === 'al'){
            tempoEstimadoEmHoras = 5
            numeroDeGadgets = 4
            break
        }else if (nivelDeRisco.toLowerCase() === 'me'){
            tempoEstimadoEmHoras = 3
            numeroDeGadgets = 3
            break
        }else if (nivelDeRisco.toLowerCase() === 'ba'){
            tempoEstimadoEmHoras = 2
            numeroDeGadgets = 2
            break     
        }else{
            console.log('Nivel de risco não encontrado')
            break
        }
    case 'in':
        tempoEstimadoEmHoras = 4
        if(nivelDeRisco.toLowerCase() === 'al'){
            numeroDeGadgets = 5
            break
        }else if (nivelDeRisco.toLowerCase() === 'me'){
            numeroDeGadgets = 3
            break
        }else if(nivelDeRisco.toLowerCase() === 'ba'){
            numeroDeGadgets = 2
            break
        }else{
            console.log('Nivel de risco não encontrado')
            break
        }
    case 'de':
        tempoEstimadoEmHoras = 6
        if(nivelDeRisco.toLowerCase() === 'al'){
            numeroDeGadgets = 3
            break
        }else if(nivelDeRisco.toLowerCase() === 'me'){
            numeroDeGadgets = 2
            break
        }else if(nivelDeRisco.toLowerCase() === 'ba'){
            numeroDeGadgets = 1
            break
        }else{
            console.log('Nivel de risco não encontrado')
            break
        }
    default:
        console.log('erro')
}

console.log(`Nome: ${nomeEspia}`)
console.log(`Tipo de missão: ${tipoDeMissao}`)
console.log(`Nivel de risco: ${nivelDeRisco}`)
console.log(`Tempo estimado em horas: ${tempoEstimadoEmHoras}`)
console.log(`Numero de gadgets necessários: ${numeroDeGadgets}`)
/*9.
Descrição do problema: Você foi contratado para desenvolver um sistema que organize e distribua missões ninjas em Konoha. Cada missão tem um líder ninja, um tipo de missão (A para missões de rank A, B para missões de rank B, C para missões de rank C), e uma região de destino (NV para nas vilas, FL para florestas, MO para montanhas). Dependendo da combinação de tipo de missão e região, o sistema deve determinar a dificuldade da missão e o pagamento total:
    - Missões de rank A nas vilas (NV) têm uma dificuldade "Alta" e um pagamento de 5000 ryous, nas florestas (FL) a dificuldade é "Muito Alta" e o pagamento é de 7000 ryous, e nas montanhas (MO) a dificuldade é "Extrema" com um pagamento de 10000 ryous.
    - Missões de rank B nas vilas têm uma dificuldade "Média" e um pagamento de 3000 ryous, nas florestas a dificuldade é "Alta" e o pagamento é de 5000 ryous, e nas montanhas a dificuldade é "Muito Alta" com um pagamento de 7000 ryous.
    - Missões de rank C nas vilas têm uma dificuldade "Baixa" e um pagamento de 1000 ryous, nas florestas a dificuldade é "Média" e o pagamento é de 3000 ryous, e nas montanhas a dificuldade é "Alta" com um pagamento de 5000 ryous.
O sistema deve imprimir o nome do líder ninja, o tipo de missão, a região, a dificuldade e o pagamento total.
*/





