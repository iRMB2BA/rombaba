
function getRandom (min, max){
    return Math.round(Math.random() * (max - min) + min);
}


let a = document.querySelector("#out");
let b = getRandom(100, 199);
a.innerHTML = b;
