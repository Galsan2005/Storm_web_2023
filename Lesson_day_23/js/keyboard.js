
function calculateInterestGrowth(){
    const r = 0.05;
    const n = 12;
    const t = 5;
    var p = prompt("number: ");
    var A = p *((1 + r/n)**(n*t));
    console.log("After starting with $" + p + ", you`ll have $" + Math.round(A));
    // var x = r/n;
    // console.log(x);
}

calculateInterestGrowth();