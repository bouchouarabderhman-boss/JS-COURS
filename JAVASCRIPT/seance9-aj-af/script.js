const stagiaire =[]

//Event 

document.getElementById("add").addEventListener("click",ajouter);
document.getElementById("print").addEventListener("click",afficher);

//fonction 
function ajouter(e){
    e.preventDefault()
    let vnom = document.getElementById("nom").value
    let vprenom = document.getElementById("prenom").value  
    let vage = document.getElementById("age").value

    const stagiaires ={id:stagiaire.length + 1 , nom:vnom,prenom:vprenom,age:vage}

    stagiaire.push(stagiaires)
    vider();
    
}
// if (vulCreated == false){
//        const vul = document.createElement("tr");
//        vul.setAttribute("id","listeStagiares");
//        document.body.append(vul);
//        vulCreated=true;
//     }
//     afficher()
function afficher(e){
    e.preventDefault()
    console.log(stagiaire)
    parent = document.getElementById("listeStagiaires");
    for(i=0;i<=stagiaire.length - 1;i++){
    //    let vli =document.createElement("li");
    //    vli.innerText=stagiaire[i].nom +" " +stagiaire[i].prenom
    //     parent.append(vli)
       parent.innerHTML ="<td>" + stagiaire[i].nom +" "+ stagiaire[i].prenom+" "+stagiaire[i].age + "<td>"
    }
}

function vider(){
    document.getElementById("nom").value=""
    document.getElementById("prenom").value=""

}
// const parent  = document.getElementById("result")
//     const titre=document.createElement("li");
//     titre.innerText=stagiaire;
//     parent.append(titre);