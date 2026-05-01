let UserList = [];
document.querySelector("#btn-ajouter").addEventListener("click", function(e){
    e.preventDefault();
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let age = document.querySelector("#age").value;
    if(nom === "" || prenom === "" || age === ""){
        alert("Remplir tous les champs");
        return;
    }
    const UserInfo = {};
    UserInfo.nom = nom;
    UserInfo.prenom = prenom;
    UserInfo.age = age;
    UserList.push(UserInfo);
    document.querySelector("#nom").value = "";
    document.querySelector("#prenom").value = "";
    document.querySelector("#age").value = "";
}); 
document.querySelector("#btn-afficher").addEventListener("click", function(e){
    e.preventDefault
    console.log(UserList);
});