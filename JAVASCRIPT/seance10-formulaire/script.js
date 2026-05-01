function validerNom(nom){
    return new Promise(function(resolve, reject){
        if(nom.trim() === ""){
            reject("Veuillez saisir le nom");
            return;
        }

        let regex = /^[a-zA-ZÀ-ÿ '-]{2,50}$/;

        if(!regex.test(nom)){
            reject("Le nom n'est pas valide");
        } else {
            resolve("Nom ajouté : " + nom);
        }
    });
}

// Validation for Nom
let vNom = document.getElementById("txtNom");
let vNomErr = document.getElementById("errNom");

document.getElementById("btnAjouterNom").addEventListener("click", function(){
    validerNom(vNom.value)
        .then(function(result){
            vNomErr.textContent = result;
            vNomErr.style.color = "green";
        })
        .catch(function(error){
            vNomErr.textContent = error;
            vNomErr.style.color = "red";
        });
});

// Validation for Prenom
let vPrenom = document.getElementById("txtPrenom");
let vPrenomErr = document.getElementById("errPrenom");

document.getElementById("btnAjouterPrenom").addEventListener("click", function(){
    validerNom(vPrenom.value)
        .then(function(result){
            vPrenomErr.textContent = result;
            vPrenomErr.style.color = "green";
        })
        .catch(function(error){
            vPrenomErr.textContent = error;
            vPrenomErr.style.color = "red";
        });
});

// Validation for Age
let vAge = document.getElementById("txtAge");
let vAgeErr = document.getElementById("errAge");

document.getElementById("btnAjouterAge").addEventListener("click", function(){
    let age = vAge.value.trim();
    if(age === ""){
        vAgeErr.textContent = "Veuillez saisir l'âge";
        vAgeErr.style.color = "red";
        return;
    }
    if(!/^\d{1,3}$/.test(age)){
        vAgeErr.textContent = "L'âge n'est pas valide";
        vAgeErr.style.color = "red";
        return;
    }
    vAgeErr.textContent = "Âge valide : " + age;
    vAgeErr.style.color = "green";
});