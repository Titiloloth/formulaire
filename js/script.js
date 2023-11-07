//Initialisation

let liste = document.getElementById("selection")
let champSelection = document.getElementById("user-street")
liste.style.display = "none"

//Début de l'algorithme 

champSelection.addEventListener("input", function (event){
    liste.innerHTML = "";
    let saisie = event.target.value.split(" ").join("+")

    let listeAdresses;
    let urlApi = "https://api-adresse.data.gouv.fr/search/?q=";
     getAdresses();


    async function getAdresses () {
    const res = await fetch(urlApi + saisie + "&limit=5");
    listeAdresses = await res.json();
    
    liste.style.display = "flex"

    let features = listeAdresses.features.slice(0,5)
    

    features.forEach(element => {
            let adresse = element.properties.label
            let option = document.createElement("div")
            option.setAttribute('id', 'selection-item')
            liste.appendChild(option)
            option.innerHTML = adresse
            option.addEventListener("click", function() {
                optionAutoCompletion(element.properties.name, element.properties.city, element.properties.postcode)
            })
        });

    };

    if (champSelection.value == '') {
        liste.lenght = 0
        liste.style.display = "none"
    }    

});


function optionAutoCompletion(rue, ville, postCode) {
    let inputRue = document.getElementById("user-street")
    let inputVille = document.getElementById("user-city")
    let inputPostcode = document.getElementById("user-postcode")

    inputRue.value = rue
    inputVille.value = ville
    inputPostcode.value = postCode

    liste.style.display = "none"
} 







