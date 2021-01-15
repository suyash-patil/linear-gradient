var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector("#grad");
var flag = true;

function getGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background + ";"
}
if (flag) {
    css.textContent = "linear-gradient(to right, rgb(212, 28, 200), rgb(0, 170, 255));"
}

color1.addEventListener("input", getGradient);
color2.addEventListener("input", getGradient);
