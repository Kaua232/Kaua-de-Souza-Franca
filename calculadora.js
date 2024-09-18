const ask = require ('readline-sync')

let iniciate = ask.question('If you want to proceed press enter, if not, press anything else: ')

while (iniciate === ''){
    console.clear()
    let number1 = parseFloat(ask.question('Please digit a NUMBER: '))
    console.clear()
    let operation = ask.question(' (+) for adition \n (-) for subtraction \n (*) for multiplication \n (/) for division \n (%) for modulus \n Please select one of the symbols above: ')
    console.clear()
    let number2 = parseFloat(ask.question('Please digit a NUMBER again: '))
    console.clear()

    let result

    switch(operation){
        case '+':
            if(typeof number1 == 'number' && typeof number2 == 'number'){
                result = number1 + number2
                console.log(`${number1} + ${number2} = ${result}`)
                break
            }else{
                console.log('Please select a number')
                break
            }
        case '-':
            if(typeof number1 == 'number' && typeof number2 == 'number'){
                result = number1 - number2
                console.log(`${number1} - ${number2} = ${result}`)
                break
            }else{
                console.log('Please select a number')
                break
            }
        case '*':
            if(typeof number1 == 'number' && typeof number2 == 'number'){
                result = number1 * number2
                console.log(`${number1} * ${number2} = ${result}`)
                break
            }else{
                console.log('Please select a number')
                break
            }
        case '/':
            if(typeof number1 == 'number' && typeof number2 == 'number'){
                result = number1 / number2
                console.log(`${number1} / ${number2} = ${result}`)
                break
            }else if(number2 === 0){
                console.log(`you can't divide a number by zero`)
                break
            }else{
                console.log('Please select a number')
                break
            }
        case '%':
            if(typeof number1 == 'number' && typeof number2 == 'number'){
                result = number1 % number2
                console.log(`${number1} % ${number2} = ${result}`)
                break
            }else if(number2 === 0){
                console.log('you can not divide a number by zero')
            }else{
                console.log('Please select a number')
                break
            }
        default:
            console.log('Invalid operation')
            break
    }

    iniciate = ask.question('If you want to proceed press enter, if not, press anything else: ')
}