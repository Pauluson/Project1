function randomNumber(min, max) {
    const randnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randnumber;
}
function MathOperation(oper,a,b) {
    switch (oper) {
        case 0:
            return a + b;
        case 1:
            return a * b;
        case 2:
            return a - b;
        case 3:
            return Math.round(a / b);
    }
} do {
    const min = -10;
    const max = 10;
    const randomsignmin = 0;
    const randomsignmax = 3;
    const a = randomNumber(min, max);
    const b = randomNumber(min, max);
    const oper = randomNumber(randomsignmin, randomsignmax);
    const znak = ['+', '*', '-', '/'];
    const result = MathOperation(oper, a, b);
    if (b>0) {
        alert(`${a} ${znak[oper]} ${b} = `)
    }
    else {
        alert(`${a} ${znak[oper]} (${b}) = `)
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