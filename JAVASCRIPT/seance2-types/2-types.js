let annee;
let nAnnee;
annee ="2026"
nAnnee = Number(annee)//conversion de string en number
//nAnnee =+annee //2ème méthode

console.log(typeof(nAnnee));

let groupe=102;
let sGroupe;

//sGroupe = String(groupe)
sGroupe = groupe.toString()

console.log(sGroupe)
console.log(typeof(sGroupe))

//boolean :
let estconnecte;
estconnecte=0;
console.log(Boolean(estconnecte))
console.log(typeof(estconnecte))

console.log(Boolean(1))

//Date:
let vDate = new Date();
console.log(vDate)
console.log(String(vDate.getDate()))
console.log(vDate.getDate().toString())

//Types structurels
//les listes
let fruits = ["orange","watermellon","apple"]
//ajouter un item
/*
Modification 
*/
fruits[2] = "Kiwi" 
//Ajout
fruits.push("Avocado")

//console.log(fruits)
let vegetables;
vegetables = fruits;
fruits[2] = "Banana"
console.log(fruits);
console.log(vegetables);

const notesgr1 = [12,14,9]
const notesgr2 = [10,13].concat(notesgr1)
notesgr1[1]=18
console.log(notesgr1)
console.log(notesgr2)

//les objects
const stagiaire ={
    id:1,
    nom:"boss",
    prenom:"kaoutar",
}
stagiaire.nom="Mohamed";
stagiaire.groupe=101
//console.log(stagiaire);
delete stagiaire.id
console.log(stagiaire)