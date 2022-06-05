function fact(e) {
    e.preventDefault()
    var i, num, f;
    f = 1;
    num = parseInt(document.getElementById("num").value);
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    document.getElementById("result").innerHTML = "Result: The factorial of the number " + num + " is: " + f;
}
document.getElementsByClassName("subtn")[0].addEventListener("click", fact)