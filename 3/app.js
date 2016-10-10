var information = [prompt("What Is Your Name?", "Enter Your First Name"), prompt("What is Your Father`s name?", "Enter Your Last Name"), prompt("Your Roll No?") ];
var testmarks = [+prompt("Enter Your HTML Marks"), +prompt("Enter Your CSS-1 Marks"), +prompt("Enter Your CSS-2 Marks") ];
var avg = (testmarks[0] + testmarks[1] + testmarks[2]) / 3;
avg = Math.floor(avg);
for (i = 0; i < 3; i++) {
    document.getElementById("data"+i).innerHTML = information[i];
    document.getElementById("score"+i).innerHTML = testmarks[i];
}
document.getElementById("score3").innerHTML = avg;
var grade = [];
for (i = 0; i < 3; i++) {
    if (testmarks[i] < 60 ) {
    grade.push("F");
    }
    else if (testmarks[i] >= 60 && testmarks[i] < 70) {
        grade.push("C");
    }
    else if (testmarks[i] >= 70 && testmarks[i] < 80) {
        grade.push("B");
    }
    else if (testmarks[i] >= 80 && testmarks[i] < 100) {
        grade.push("A");
    }
    else {
        grade.push("You Haven`t Write Percentage Within 100");
    }
    document.getElementById("grade"+i).innerHTML = grade[i];
}
var gradeavg;
if (avg < 60 ) {
    gradeavg = "F";
    }
    else if (avg >= 60 && avg < 70) {
        gradeavg = "C";
    }
    else if (avg >= 70 && avg < 80) {
        gradeavg = "B";
    }
    else if (avg >= 80 && avg < 100) {
        gradeavg = "A";
    }
    else {
        gradeavg = "You Haven`t Write Percentage Within 100";
    }
    document.getElementById("grade3").innerHTML = gradeavg;
