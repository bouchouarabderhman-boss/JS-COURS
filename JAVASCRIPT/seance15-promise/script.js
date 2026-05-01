/*class achat{
    constructor(id,article,prix,quantite){
        this.id = id;
        this.article = article;
        this.prix = prix;
        this.quantite = quantite;
    }
    //methode pour calculer
    calculerTVA(){
        const TVA=0.2;
        let total =this.prix*this.quantite;
        let totalTTC=total+(total*TVA);
        return totalTTC;
    }
}*/
//promise:
document.getElementById("btn-load").addEventListener("click",load)
document.getElementById("btn-load-WA").addEventListener("click",load)
//1er methode
function load(){
    getStagiaires().then(response=>{
        let stagiaires=response;
        console.log(stagiaires);
        return getNotes();
    }).then(response=>{
        let notes=response;
        console.log(notes);
        return getNotes();
    }).catch(err=>console.log(err))
}

//P1:promise producer:building the promise
function getStagiaires(){
    let completed=true
    return new Promise (function(resolve ,reject){
        if(completed=true){
            setTimeout(function(){
                 resolve([{id:1,nom:"ouchouid",prenom:"zakaria"},
                          {id:2,nom:"elkadiri",prenom:"najat"},
                          {id:3,nom:"ait said",prenom:"kawtar"}
                ])
            },200)
        }else{
            rejected("Not Found!!");
        }
    })
}



function getNotes(){
    return new Promise (function(resolve ,reject){
            setTimeout(function(){
                 resolve([{idStagiaires:1,notes:"17"},
                          {idStagiaires:2,notes:"16"}
                ])
            })
        })
}




function getModules(){
    return new Promise (function(resolve ,reject){
            setTimeout(function(){
                 resolve([{idStagiaires:1,module:"php"},
                          {idStagiaires:2,module:"php"}
                ])
            })
        })
}

//2eme methode
async function loadWithAwait(){
    try{
        let stagiaires = await getStagiaires();
        let modules =await getModules();
        let notes = await getNotes();
        console.log(stagiaires)
        console.log(modules)
        console.log(notes)
    } catch (error){
        console.log(error)
    }
}
//utilisation de fetch pour consommer une API
function loadFetch(){
    fetch("https://jsonplaceholder.typicode.com/todos/")
}