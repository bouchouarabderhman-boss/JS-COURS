let stagiaires = [
  {
    id: 1,
    nom: "Radi",
    prenom: "Hamza",
    age: 18,
    modules: [
      { libelle: "Algo", cc1: 12, cc2: 3, cc3: 14, EFM: 21 },
      { libelle: "HTML", cc1: 13, cc2: 13, cc3: 14, EFM: 26 }
    ]
  },   
  {
    id: 2,
    nom: "Khalidi",
    prenom: "Khadija",
    age: 18,
    modules: [
      { libelle: "Algo", cc1: 12, cc2: 16, cc3: 14, EFM: 21 },
      { libelle: "HTML", cc1: 13, cc2: 13, cc3: 14, EFM: 26 }
    ]
  }
];

const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

// calcul note module
function calcModule(m) {
  return ((m.cc1 + m.cc2 + m.cc3) / 3) * 0.4 + m.EFM * 0.6;
}


// calcul note générale
function calcGenerale(modules) {
  let somme = 0;

  for (let m of modules) {
    somme += calcModule(m);
  }

  return (somme / modules.length).toFixed(2);
}

// afficher tableau
function afficher() {
  tbody.innerHTML = "";

  for (let s of stagiaires) {

    let modulesHTML = "";

    for (let m of s.modules) {
      modulesHTML += `
        <div class="module-box">
          <strong>${m.libelle}</strong><br>
          CC1: ${m.cc1} | CC2: ${m.cc2} | CC3: ${m.cc3} | EFM: ${m.EFM}
          <br><b>NoteModule:</b> ${calcModule(m).toFixed(2)}
        </div>
      `;
    }

    tbody.innerHTML +=`
      <tr>
        <td>${s.id}</td>
        <td>${s.nom}</td>
        <td>${s.prenom}</td>
        <td>${s.age}</td>
        <td>${modulesHTML}</td>
        <td><b>${calcGenerale(s.modules)}</b></td>
      </tr>
    `;
  }
}
// ajouter stagiaire
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let stagiaire = {
    id: document.getElementById("id").value,
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    age: document.getElementById("age").value,
    modules: [
      {
        libelle: document.getElementById("module").value,
        cc1: Number(document.getElementById("cc1").value),
        cc2: Number(document.getElementById("cc2").value),
        cc3: Number(document.getElementById("cc3").value),
        EFM: Number(document.getElementById("efm").value)
      }
    ]
  };

  stagiaires.push(stagiaire);

  afficher();
});
// premier affichage
afficher();