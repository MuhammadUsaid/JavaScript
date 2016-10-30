var num = +prompt("Enter A Number");
for (var i = 0; i <= 20; i++) {
    document.getElementById("number"+ i).innerHTML = num;
}

for (var i = 0; i <= 20; i++) {
    document.getElementById("answer"+i).innerHTML = i * num;
}