var limit = +prompt("How many numbers do you want?");
var a = 0, b = 1, c;
function fibonacci(){
    for(var i = 0; i < limit; i++){
        document.write(b + "  ");
        c = a;
        a = b;
        b = c + b;
    }
}
fibonacci();