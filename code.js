//code.js
//COSC3020 Sum Exercise 
//Noah Mulvaney, nmulvane@uwyo.edu
//24 Jan 2024

function sum(a) {
    var sum = a[0];
    for(var i = 1; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
