var b, a, c;
var number = 12;
function diamond(){
    a = 0;
    b = 24;
    c = " ";
    for(var i = 0; i < 3; i++){
        while(a !== b){
            document.write("*");
            ++a;
        }
        b += 2;
        a = 0;
        document.write("<pre>");
        
    }
    a = 0;
    b = 26;
    c = " ";
    for(var i = 0; i < number; i++){
        while(a !== b){
            document.write("*");
            ++a;
            
        }
        
        b -= 2;
        a = 0;
        document.write("<pre>");
        document.write(c);
        c = c + " ";
    }
}
diamond();
