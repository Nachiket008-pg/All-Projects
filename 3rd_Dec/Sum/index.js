// Sum of three numbers ny nested form:-

let sum = function(num1){
    let x  = function (num2){
        let y = function(num3){
            let addition = num1 + num2 + num3 ;
            console.log(addition);
        }
        return y ;
    }
    return x ;
}

sum(10)(20)(35);