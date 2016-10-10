var num = +prompt("Enter A Number");
for (var i = 0; i <= 10; i++) {
    document.getElementById("number"+ i).innerHTML = num;
}

for (var i = 0; i <= 10; i++) {
    document.getElementById("answer"+i).innerHTML = i * num;
}