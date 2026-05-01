document.getElementById("btn").addEventListener("click",run)
function run(){
    console.log("house")
}


let groupe = 102;

const titre = document.getElementById("titre");
const vparagraphes = document.getElementsByClassName("paragraphes");
const vcontainer = document.getElementById("container");

let vdiv = document.createElement("div");
let vli = document.createElement("li");
document.body.appendChild(vdiv);
vdiv.appendChild(vli);
vli.innerText = "hhhhhhhh";
titre.innerText = "DD101 students are learning JS";

console.log(titre);

for (let i = 0; i < vparagraphes.length; i++) {
    console.log(vparagraphes[i].textContent);
}

console.log(vcontainer.childNodes);
console.log(vcontainer.children);

document.getElementById("button").addEventListener("click", () => {

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 + number2;

    document.getElementById("result").value = result;

    titre.style.color = "lightblue";

});
