// ==== Sélections ====
const btnContainer = document.querySelector(".container-btn");
const btn          = document.querySelectorAll(".btn");

// ==== Evénements ====
btnContainer.addEventListener("click", function (event) {
    // Prévenir le rafraissement par défaut (inutile ici mais bonne pratique)
    event.preventDefault();

    // Cibler le bouton pour la délégation d'événement (renvoie true ou false)
    const selectedBtn = event.target.classList.contains("btn");

    if (selectedBtn) {

        if (event.target.classList.contains("active")) {
            // Retirer la classe active sur le bouton sélectionné s'il a déjà la classe active
            event.target.closest(".btn").classList.remove("active");

        } else {
            // Boucle pour désactiver les classes actives sur les boutons
            btn.forEach(bouton => {
                bouton.classList.remove("active");
            })
            // Ajouter la classe active sur le bouton sélectionné
            event.target.closest(".btn").classList.add("active");
        }
    }
})