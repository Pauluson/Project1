import prompt from '@jace1995/prompt';

function random(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GetRandomNumber() {
    const min = -10;
    const max = 10;
    const randomNumber = random(min, max - 1);
    return randomNumber ? randomNumber : max;
}
function MathOperation(Operation:number, firstNumber:number,secondNumber:number) {
    switch (Operation) {
        case 0:
            return firstNumber + secondNumber;
        case 1:
            return firstNumber * secondNumber;
        case 2:
            return firstNumber - secondNumber;
        case 3:
            return Math.round((firstNumber / secondNumber) * 10) / 10; 
        } 
}
async function main(): Promise<void> { 
    while (true) {
    const firstNumber = GetRandomNumber();
    const secondNumber = GetRandomNumber();
    const Operation = random(0, 3);
    const sign = ['+', '*', '-', '/'];
    const result = MathOperation(Operation, firstNumber, secondNumber);
    if (secondNumber>0) {
        console.log(`${firstNumber} ${sign[Operation]} ${secondNumber} = `);
    }
    else {
        console.log(`${firstNumber} ${sign[Operation]} (${secondNumber}) = `);
    }
    const answer = await prompt('Введите ответ:');
    if (answer != null && +answer == result) {
        console.log('Наливай ещё!');
    }
    else {
        console.log('Хватит пить!');
        break;
    }
} 
}
main();