/* 1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: */

const pessoa = {
    nome: 'Juan Carlos',
    apelidos: ['Juan' , 'Carlos' , 'Pablo']
}

function Bonoro(objeto){
    console.log(`Meum nomen est ${objeto.nome}, sed homines etiam me vocant ${objeto.apelidos[0]} , ${objeto.apelido[1]} et ${objeto.apelido[2]} .`)
}

       /* // Exemplo de entrada
        const pessoa = {
        nome: "Vitor Hugo", 
        apelidos: ["Vitinho", "Vitão", "Vit"]
        }

        // Exemplo de saída
        "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"*/


        
        //b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

/*
2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de nome
    2. O numero de caracteres do valor nome
    3. O valor de idade
    4. O valor de profissão
    5. O numero de caracteres do valor profissão
*/

const pessoaComProfissao = {
    nome: 'Carlitos Guanabara',
    idade: 98,
    profissao: 'encanador' 
}

const pessoaComProfissao1 = {
    nome: 'Carlinhos',
    idade: 60,
    profissao: 'divertir cavalos'
}

function funktion(objeto){
    arrayComCoisas = [objeto.nome , objeto.nome.length , objeto.idade , objeto.profissao , objeto.profissao.length]
    return arrayComCoisas
}

console.log(funktion(pessoaComProfissao))
/*
3.  Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
    
    c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.

    d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
*/
        
let carrinho = []

const fruta1 = {
    nome: 'Sabugueiro americano Bob Gordon',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Banana',
    disponibilidade: false
}

const fruta3 = {
    nome: 'Pera',
    disponibilidade: false
}

function objetoFruta(fruta){
    carrinho.push(fruta)
}

objetoFruta(fruta1)
objetoFruta(fruta2)
objetoFruta(fruta3)

console.log(carrinho)