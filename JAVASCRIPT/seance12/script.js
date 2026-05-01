let stagiaires = {
  id: 1,
  nom: "boss",
  prenom: "bosss",
  age: 18,
  modules: [
    { id: 1, libelle: "poo", c1: 12, c2: 18, c3: 17, EFM: 40 },
    { id: 2, libelle: "ALGO", c1: 19, c2: 14, c3: 13, EFM: 22 },
    { id: 3, libelle: "FR", c1: 10, c2: 10, c3: 10, EFM: 20 },
    { id: 4, libelle: "ENG", c1: 8.5, c2: 9, c3: 17, EFM: 30 }
  ]
};

// Access examples
console.log(stagiaires.modules[0].c1);
console.log(stagiaires.modules[0]);

for (let i in stagiaires.modules) {
  console.log(stagiaires.modules[i].c3);
}

// Function to calculate note for one module
function noteModule(module) {
  let cc = (module.c1 + module.c2 + module.c3) / 3;
  let note = (cc * 0.4) + (module.EFM * 0.6);
  return note;
}

// Function to calculate global note
function noteGlobale(stagiaire) {
  let somme = 0;

  for (let module of stagiaire.modules) {
    somme += noteModule(module);
  }

  return somme / stagiaire.modules.length;
}

// Test
console.log("Note globale:", noteGlobale(stagiaires));

// Add to list
let liste = [];
liste.push(stagiaires);
console.log(liste);





