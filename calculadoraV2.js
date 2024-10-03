const ask = require('readline-sync')

function addition(num1 , num2){
    let result
    num1 == 'number' && num2 == 'number' ? result = num1 + num2 : 'you did not select a number'
    return result
    
}

function subtraction(num1 , num2){
    let result
    num1 == 'number' && num2 == 'number' ? result = num1 - num2 : 'you did not select a number'
    return result
    
}

function multiplication(num1 , num2){
    let result
    num1 == 'number' && num2 == 'number' ? result = num1 * num2 : 'you did not select a number'
    return result
    
}

function division(num1 , num2){
    let result
    num1 == 'number' && num2 == 'number' ? result = num1 / num2 : 'you did not select a number'
    return result
    
}

function exponentiation(num1 , num2){
    let result
    num1 == 'number' && num2 == 'number' ? result = Math.pow(num1 , num2) : 'you did not select a number'
    return result
    
}

function root(num1 , num2){
    let result
    num1 == 'number' && num2 == 'number' ? result = Math.pow(num1 , 1/num2) : 'you did not select a number'
    return result
    
}

function modulus(num1 , num2){
    let result
    num1 == 'number' && num2 == 'number' ? result = num1 %
    num2 : 'you did not select a number'
    return result
    
}




function calculator(num1 , num2){
    num1 = ask.question('type a number: ')

    console.clear()

    num2 = ask.question('type another number: ')

    console.clear()

    let operationSelection = ask.question('addition(+)\nsubtraction(-)\nmultiplication(*)\ndivision(/)\nroot(#)\nexponentiation(^)\nmodulus(%)\n\nPlease select one of the symbols above: ')

    console.clear()

    switch(operationSelection){
        case '+':
            console.log(addition(num1 , num2))
            break
        case '-':
            console.log(subtraction(num1 , num2))
            break
        case '*':
            console.log(root(num1 , num2))
            break
        case '/':
            num2 == 0 ? console.log('you cannot divide by zero') : console.log(division(num1 , num2))
            break
        case '^':
            console.log(exponentiation(num1 , num2))
            break
        case '#':
            console.log(root(num1 , num2))
            break
        case '%':
            console.log(modulus(num1 , num2))
        default:
            console.log(`${operationSelection} is not one of the symbols`)
            break
    }  
    console.clear()
}     


let reinicialisation = ask.question('if you want to exit the calculator press 0\nif you want to reuse the calculator press 1\nif you want to reuse the same numbers press 2\nif you want to reuse the same operation press 3')

while(Number(reinicialisation) === 1){
    calculator()
}

if(reinicialisation === 2){
    num1 = ask.question('type a number: ')
    num2 = ask.question('type another number: ')
    calculator(num1 , num2)
}