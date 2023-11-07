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
            let adresses = element.properties.label
            let tableauAdresses = []
            tableauAdresses.push(adresses)

            tableauAdresses.forEach(adresse => {
                let option = document.createElement("div")
                option.setAttribute('id', 'selection-item')
                liste.appendChild(option)
                option.innerHTML = adresse
            });

        });

};

if (champSelection.value == '') {
    liste.lenght = 0
    liste.style.display = "none"
}    

});










