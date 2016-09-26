var num1 = prompt("Enter Your First Number");
var operator = prompt("select an operator ($ for square root)");
if (operator !== "$") {
    var num2 = prompt("Select Another Number");
}
var num1int = parseInt(num1);
var num2int = parseInt(num2);
var operations = [num1int + num2int, num1int - num2int, num1int * num2int, num1int / num2int, Math.sqrt(num1int)];
if (operator === "+") {
    alert("Your Output Is " + operations[0]);
}
else if (operator === "-") {
    alert("Your Output Is " + operations[1]);
}
else if (operator === "*") {
    alert("Your Output Is " + operations[2]);
}
else if (operator === "/") {
    alert("Your Output Is " + operations[3]);
}
else if (operator === "$") {
    alert("Your Output Is " + operations[4]);
}
else {
    alert("You Have entered something wrong, Please Try Again");
}