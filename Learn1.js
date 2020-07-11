

let a = document.querySelector("#out");
const but = document.querySelector("button");
const arrcolor = ["black", "red", "green", "grey", "white", "blue"];
const body = document.querySelector("body"); 



but.addEventListener("click", function fin () {

    let color = Math.floor(Math.random()*arrcolor.length);
    body.style.backgroundColor = arrcolor[color];
    a.innerHTML = color;

        if (a.style.color === "white") {
            a.style.color = "grey"
        } else {
            a.style.color = "white"
        }

})










