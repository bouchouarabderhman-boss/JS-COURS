// EVENTS
document.querySelector(".creer-titre")
    .addEventListener("click", ajouterTitre);

document.querySelector(".btn-supprimer")
    .addEventListener("click", supprimerElem);

document.querySelector(".btn-remplacer")
    .addEventListener("click", remplacerElem);

document.querySelector(".btn-creer-conteneur")
    .addEventListener("click", creerConteneur);

// FUNCTIONS
function ajouterTitre() {
    const parent = document.querySelector(".section-1");
    const titre = document.createElement("h1");
    titre.innerText = "DD101 are fasting";
    titre.style.color = "lightblue";
    parent.append(titre);
}

function supprimerElem() {
    const elem = document.querySelector(".a-supprimer");
    if (elem) {
        elem.remove();
    }
}

function remplacerElem() {
    const parent = document.querySelector(".section-1");
    const ancienElem = document.querySelector(".paragraphe-1");

    if (ancienElem) {
        const nouveauElem = document.createElement("h2");
        nouveauElem.innerText = "hello";
        parent.replaceChild(nouveauElem, ancienElem);
    }
}

function creerConteneur() {
    const vConteneur = document.createElement("div");
    vConteneur.classList.add("container");

    vConteneur.setAttribute("id", "conteneur");
    vConteneur.setAttribute("name", "conteneurName");

    vConteneur.innerText = "Je suis un nouveau conteneur";

    document.body.append(vConteneur)}
