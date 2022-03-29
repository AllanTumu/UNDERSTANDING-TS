function add(n1, n2, showResult, phrase) {
    console.log(typeof number1);
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
//Data types in TypeScript
// type number
var number1 = 5;
var number2 = 2.8;
// type boolean
var printResult = true;
// type string
var phrase = 'Result is ';
add(number1, number2, printResult, phrase);
