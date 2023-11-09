function addOne() {
    document.getElementById("counter").innerHTML = parseInt(document.getElementById("counter").innerHTML) + 1;
}

function changeColor() {
    if (document.getElementById("counter").style.color == "red")
        document.getElementById("counter").style.color = "black";
    else
        document.getElementById("counter").style.color = "red";
}