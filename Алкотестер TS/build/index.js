"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = require("@jace1995/prompt");
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
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const firstNumber = GetRandomNumber();
            const secondNumber = GetRandomNumber();
            const Operation = random(0, 3);
            const sign = ['+', '*', '-', '/'];
            const result = MathOperation(Operation, firstNumber, secondNumber);
            if (secondNumber > 0) {
                console.log(`${firstNumber} ${sign[Operation]} ${secondNumber} = `);
            }
            else {
                console.log(`${firstNumber} ${sign[Operation]} (${secondNumber}) = `);
            }
            const answer = yield prompt_1.default('Введите ответ:');
            if (answer != null && +answer == result) {
                console.log('Наливай ещё!');
            }
            else {
                console.log('Хватит пить!');
                break;
            }
        }
    });
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUGF1bC9Eb2N1bWVudHMvVnNjb2RlL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBc0M7QUFFdEMsZ0JBQWdCLEdBQVUsRUFBRSxHQUFVO0lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDN0QsQ0FBQztBQUVEO0lBQ0ksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDaEIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDN0MsQ0FBQztBQUNELHVCQUF1QixTQUFnQixFQUFFLFdBQWtCLEVBQUMsWUFBbUI7SUFDM0UsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoQixLQUFLLENBQUM7WUFDRixNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUN0QyxLQUFLLENBQUM7WUFDRixNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUN0QyxLQUFLLENBQUM7WUFDRixNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUN0QyxLQUFLLENBQUM7WUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUQsQ0FBQztBQUNULENBQUM7QUFDRDs7UUFDSSxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ2QsTUFBTSxXQUFXLEdBQUcsZUFBZSxFQUFFLENBQUM7WUFDdEMsTUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFFLENBQUM7WUFDdkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ25FLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxZQUFZLE1BQU0sQ0FBQyxDQUFDO1lBQzFFLENBQUM7WUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLGdCQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDTCxDQUFDO0lBQ0QsQ0FBQztDQUFBO0FBQ0QsSUFBSSxFQUFFLENBQUMifQ==