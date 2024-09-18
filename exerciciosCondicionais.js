/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/




//1. Leia o código abaixo:

let numero = 5

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
    a) Explique o que o código faz. Qual o teste que ele realiza?

    ele testa se o resto da divisão entre 5 e 2 é igual a zero, tanto em valor quanto em tipo

    b) Para que tipos de números ele imprime no console "Passou no teste"?
    
    numeros pares

    c) Para que tipos de números a mensagem é "Não passou no teste"?
    
    para numeros ímpares

*/


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = "Uva"
let preco
switch (fruta.toUpperCase()) {
  case "LARANJA":
    preco = 3.5
    break;
  case "MAÇÃ":
    preco = 2.25
    break;
  case "UVA":
    preco = 0.30
    break;
  case "PÊRA":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log(`O preço da fruta ${fruta} é R$ ${preco}`)

/*
    a) Para que serve o código acima?

    para definir o preço que deverá ser cobrado dependendo da fruta

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    O preço da da fruta MAÇÃ é R$ 2.25

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
    do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

   O preço da fruta PERA é 5

*/


//3. Leia o código abaixo:

/*const num1 = 5 // era 5
if(num1 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) */

/*
    a) O que a primeira linha está fazendo?

    declarando uma constante

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    nenhuma pois a variavel não sera criada , a mesma coisa    

    c) Haverá algum erro no console? Justifique.

   sim, pois não podemos criar variaveis dentro de if else em javascript

*/



/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. Faça um programa que declare uma variável com a sua idade e imprima no console um teste dizendo se você pode ou não dirigir (apenas maiores de idade).
*/

let idade = 17

if(idade >= 18){
  console.log(`você possui ${idade} anos e por isso pode dirigir`)
}else{
  console.log(`Você possui ${idade} anos e por isso não pode dirigir`)
}


/*
2. Agora pesquise no Google o horário atual no Vietnã. Declare uma variável do tipo string que contenha os valores "manhã", "tarde", "noite" ou "madrugada"
com base no fuso horário do Vietnã. Utilize o bloco if/else para escrever uma mensagem, sendo ela "Bom dia, Vietnã!", "Boa tarde, Vietnã", "Boa noite, Vietã" ou "Boa madrugada, Vietnã", dependendo de qual for o seu fuso horário atual.
*/

let horarioDoVietna = 'madrugada'

if(horarioDoVietna.toLowerCase == 'manhã'){
  console.log('Bom Dia, Vietnã!')
}else if(horarioDoVietna.toLowerCase == 'tarde'){
  console.log('Boa Tarde, Vietnã')
}else if(horarioDoVietna.toLowerCase == 'noite'){
  console.log('Boa Noite, Vietnã')
}else{
  console.log('Boa Madrugada, Vietnã')
}

/*
3. Agora repita o exercício anterior, porém utilizando o bloco Switch/Case e utilizando o fuso horário do Havaí.
*/

let horarioDoHavai = 'manhã'

switch(horarioDoHavai.toLowerCase()){
  case 'madrugada':
    console.log('é madrugada no havaí')
    break
  case 'manhã':
    console.log('é manhã no havaí')
    break
  case 'tarde':
    console.log('é tarde no havaí')
    break
  case 'noite':
    console.log('é noite no havaí')
    break      
}