//INITIALISATION

let liste1 = document.getElementById("selection1")
let liste2 = document.getElementById("selection2")
let champSelection1 = document.getElementById("user-street1")
let champSelection2 = document.getElementById("user-street2")
liste1.style.display = "none"
liste2.style.display = "none"

//ALGORITHME

//Facturation

champSelection1.addEventListener("input", function (event){
    liste1.innerHTML = "";
    let saisie = event.target.value.split(" ").join("+")

    let listeAdresses;
    let urlApi = "https://api-adresse.data.gouv.fr/search/?q=";
     getAdresses();


    async function getAdresses () {
    const res = await fetch(urlApi + saisie + "&limit=5");
    listeAdresses = await res.json();
    
    liste1.style.display = "flex"

    let features = listeAdresses.features.slice(0,5)
    
    features.forEach(element => {
            let adresse = element.properties.label
            let option = document.createElement("div")
            option.setAttribute('id', 'selection-item1')
            liste1.appendChild(option)
            option.innerHTML = adresse
            option.addEventListener("click", function() {
                optionAutoCompletionFac(element.properties.name, element.properties.city, element.properties.postcode)
            })
        });

    };

    if (champSelection1.value == '') {
        liste1.lenght = 0
        liste1.style.display = "none"
    }    

});

//Livraison 

champSelection2.addEventListener("input", function (event){
    liste2.innerHTML = "";
    let saisie = event.target.value.split(" ").join("+")

    let listeAdresses;
    let urlApi = "https://api-adresse.data.gouv.fr/search/?q=";
     getAdresses();


    async function getAdresses () {
    const res = await fetch(urlApi + saisie + "&limit=5");
    listeAdresses = await res.json();
    
    liste2.style.display = "flex"

    let features = listeAdresses.features.slice(0,5)
    
    features.forEach(element => {
            let adresse = element.properties.label
            let option = document.createElement("div")
            option.setAttribute('id', 'selection-item2')
            liste2.appendChild(option)
            option.innerHTML = adresse
            option.addEventListener("click", function() {
                optionAutoCompletionLiv(element.properties.name, element.properties.city, element.properties.postcode)
            })
        });

    };

    if (champSelection2.value == '') {
        liste2.lenght = 0
        liste2.style.display = "none"
    }    

});


// FONCTIONS 

function optionAutoCompletionFac(rue, ville, postCode) {
    let inputRue = document.getElementById("user-street1")
    let inputVille = document.getElementById("user-city1")
    let inputPostcode = document.getElementById("user-postcode1")

    inputRue.value = rue
    inputVille.value = ville
    inputPostcode.value = postCode

    liste1.style.display = "none"
} 

function optionAutoCompletionLiv(rue, ville, postCode) {
    let inputRue = document.getElementById("user-street2")
    let inputVille = document.getElementById("user-city2")
    let inputPostcode = document.getElementById("user-postcode2")

    inputRue.value = rue
    inputVille.value = ville
    inputPostcode.value = postCode

    liste2.style.display = "none"
} 







