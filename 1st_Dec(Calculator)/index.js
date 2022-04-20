

let calculator = {
    'number1': parseInt(prompt("Let me know the first number")),
    'number2': parseInt(prompt("Let me know the second number")),
    'res': 0,
    'sum': function() {
        this.res = this.nummber1 + this.number2;
        return this.res;
    },
    'sub': function() {
        this.res = this.number1 - this.number2;
        return this.res;
    },
    'div': function() {
        this.res = this.number1 / this.number2;
        return this.res;
    },
    'mul': function() {
    this.res = this.number1 * this.number2;
    return this.res;
    },
    
   
}
var sumation = calculator.sum();
console.log(sumation)
var subtraction = calculator.sub();
console.log(subtraction)
var division = calculator.div();
console.log(division)
var multiplication= calculator.mul();
console.log(multiplication)
