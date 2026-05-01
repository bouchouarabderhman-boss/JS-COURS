let a;
let b;
let somme;

a=29;
b=13;
somme=a+b;

function calculerSomme(x,y){
    return x + y 
}

function greet(vnom){
    console.log("hello" + vnom);
}

console.log(calculerSomme(10,15));

function inscrire(){
    let nom = "boss";
    let prenom = "bouch";
    let age = 18;
    let statut;

    if (age == 18){
        statut = "etudiant";
    }

    console.log(statut);
}
inscrire();