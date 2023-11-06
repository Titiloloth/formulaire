let liste = document.getElementById("selection")
liste.style.display = "none"

document.getElementById("user-street").addEventListener("input", function (event){
   let saisie = event.target.value.split(" ").join("+")

   let adresses;
    let urlApi = "https://api-adresse.data.gouv.fr/search/?q=";
     getAdresses();
    async function getAdresses () {
    const res = await fetch(urlApi + saisie);
    adresses = await res.json();
    
    liste.style.display = "flex"
        
    console.log(adresses.features.slice(1, 4))
}

})





