function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GetRandomNumber() {
    const min = -10;
    const max = 10;
    const randomNumber = random(min, max - 1);
    return randomNumber ? randomNumber : max;
}
function MathOperation(Operation, firstNumber, secondNumber) {
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
} do {
   
    const firstNumber = GetRandomNumber();
    const secondNumber = GetRandomNumber();
    const Operation = random(0, 3);
    const sign = ['+', '*', '-', '/'];
    const result = MathOperation(Operation,firstNumber, secondNumber);
    if (secondNumber > 0) {
        alert(`${firstNumber} ${sign[Operation]} ${secondNumber} = `);
    }
    else {
        alert(`${firstNumber} ${sign[Operation]} (${secondNumber}) = `);
    }
    const answer = prompt('Введите ответ:');
    if (answer == result) {
        alert('Наливай ещё!');
    }
    else {
        alert('Хватит пить!');
        break;
    }
} while (true);