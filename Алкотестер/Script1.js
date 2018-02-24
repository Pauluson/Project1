
let flag = true;
do {
    let a = 10 * Math.random();
    a = Math.round(a);
    let b = 10 * Math.random();
    b = Math.round(b);
    let c = 4 * Math.random();
    c = Math.ceil(c);
    if (c == 1) {
        let d = a + b;
        alert(`${a} + ${b} `);
        let st = prompt("введите ответ");
        if (st == d) {
            alert("Можно наливать");
        }
        else {
            alert("Хватить пить!");
            flag = false;
        }

    }
    else if (c == 2) {
        let d = a - b;
        alert(`${a} - ${b} `);
        let st = prompt("введите ответ");
        if (st == d) {
            alert("Можно наливать");
        }
        else {
            alert("Хватит пить!");
            flag = false;
        }
    }
    else if (c == 3) {
        let d = a * b;
        alert(`${a} * ${b} `);
        let st = prompt("введите ответ");
        if (st == d) {
            alert("Можно наливать");
        }
        else {
            alert("Хватит пить!");
            flag = false;
        }
    }
    else {
        while (b == 0) {
            b = 10 * Math.random();
            b = Math.round(b);
        }
        let d = a / b;
        alert(`${a} / ${b} `);
        let st = prompt("введите ответ");
        if (st == d) {
            alert("Можно наливать");
        }
        else {
            alert("НХватит пить!");
            flag = false;
        }
    }
} while (flag);