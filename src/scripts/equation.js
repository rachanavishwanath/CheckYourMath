const MATHOP = [
    '+', 
    '-',
    '*'
]

const NUMBERS = '0123456789';

export default class Equation {
    constructor(numbers) {
        this.numbers = numbers;
        this.createEquation = this.createEquation.bind(this);
        this.rightAnswer = this.rightAnswer.bind(this);
        this.newEquation = this.createEquation();
    }

    shuffled (unshuffled) {
        return unshuffled
        .split("")
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .join("");
    };

    createEquation() {
        const length = Math.round((Math.random() * 10) % 3) + 1;
        const startNum1 = Math.round((Math.random() * 10) % 4) + 1;
        const startNum2 = Math.round((Math.random() * 10) % 4) + 1;
        const mathOp = MATHOP[Math.round((Math.random() * 10) % 2)];
        let num1 = this.shuffled(NUMBERS).slice(
            startNum1,
            startNum1 + length
        );
        let num2 = this.shuffled(NUMBERS).slice(
            startNum2,
            startNum2 + length
        );
        console.log(length, startNum1, startNum2, mathOp, num1, num2);
        if (parseInt(num1) < parseInt(num2) && mathOp === '-') {
            const temp = num1;
            num1 = num2;
            num2 = temp;
        }
        const equation = `What is ${num1} ${mathOp} ${num2}?`;
        return equation;
    }

    rightAnswer(equation){
        let arr = equation.split(' ');
        let num1 = parseInt(arr[2]);
        let num2 = parseInt(arr[4]);
        switch(arr[3]) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
        }
    }
}