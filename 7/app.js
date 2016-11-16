var img = document.getElementById("caty");
function opena() {
    var comp = Math.random();
    if (comp > 0.55) {
        img.src="images/cat-alive.jpg";
        console.log(comp);
    }
    else {
        img.src="images/cat-dead.png";
        console.log(comp);
    }
}
function closea(){
    img.src="images/cat.jpg";
}