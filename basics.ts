function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log(typeof number1)

    const result = n1+n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result;
    }
}

//Data types in TypeScript
// type number
const number1 = 5;
const number2 = 2.8;
// type boolean
const printResult = true;
// type string
const phrase = 'Result is ';

add(number1, number2, printResult, phrase);
