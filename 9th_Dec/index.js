


function mult (a) {
       a = document.getElementById("num1").value;
    return function (b) {
        b = document.getElementById("num2").value;
        return function (c) {
            c = document.getElementById("num3").value;
            document.getElementById('result').innerHTML = (a*b*c);
         }
        }
     }
mult (a) (b) (c);