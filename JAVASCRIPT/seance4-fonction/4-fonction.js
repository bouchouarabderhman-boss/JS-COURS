//fonction
function somme(x, y){
    return x + y;
}

//Arrow function
const somme=(x, y) =>{
    return x + y;
}

//console.log(somme(10, 14));

const stagiaires = [
    {id:1,nom:"ouchouid",prenom:"zakaria",age:16,note:9},
    {id:2,nom:"elkadiri",prenom:"najat",age:18,note:15},
    {id:3,nom:"ait said",prenom:"kawtar",age:17,note:17},
]
// ET:&& ; Ou:|| ; not: !
if(stagiaires[0].note>=10 && stagiaires[0].note<=12){
    mention="Passable";
}
else if(stagiaires[0].note>=12 && stagiaires[0].note<=14){
   mention="Assez bien";
}
else if(stagiaires[0].note>=14 && stagiaires[0].note<=16){
    mention="Bien";
}
else if(stagiaires[0].note>=16 && stagiaires[0].note<=20){
    mention="T.bien";
}
else if (stagiaires[0].note>=0 && stagiaires[0].note<=9){
    mention="Non admis";
}
console.log(mention)

//switch case
let jour
const vdate = new Date();
switch (vdate.getDay()){
    case 0:{
        jour="Dimanche"
        break;
    }
     case 1:{
        jour="Lundi"
         break;
    }
     case 2:{
        jour="Mardi"
         break;
    }
     case 3:{
        jour="Mercredi"
         break;
    }
     case 4:{
        jour="Jeudi"
         break;
    }
     case 5:{
        jour="Vendredi"
         break;
    }
     case 6:{
        jour="Samedi"
         break;
    }
}
console.log(jour);