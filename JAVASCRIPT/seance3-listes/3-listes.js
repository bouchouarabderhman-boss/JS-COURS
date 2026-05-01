const stagiaires = [
    {id:1,nom:"ouchouid",prenom:"zakaria",age:16,note:12,qf:1},
    {id:2,nom:"elkadiri",prenom:"najat",age:18,note:15,qf:4},
    {id:3,nom:"ait said",prenom:"kawtar",age:17,note:17,qf:7},
]
 
const nomsStagiaires = stagiaires.map(function(item){
    return{nom_complet:item.nom+" "+item.prenom, age:item.age}
})


console.log(nomsStagiaires)