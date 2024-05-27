// script.js

// Fonction pour afficher un message de bienvenue
function afficherMessage() {
    alert("Bienvenue sur le site NSI de William G!");  // Afficher un pop-up de bienvenue
}

// Fonction pour gérer la soumission du formulaire
function gererSoumissionFormulaire(event) {
    event.preventDefault();  // Empêcher la soumission par défaut du formulaire
    alert("Merci de nous avoir contactés, nous vous répondrons bientôt!");  // Afficher un message de confirmation
    document.getElementById("contact-form").reset();  // Réinitialiser le formulaire
}

// Appel de la fonction au chargement de la page
window.onload = function() {
    if (window.location.pathname.includes("index.html")) {  // Vérifier si la page est index.html
        afficherMessage();  // Appeler la fonction afficherMessage
    }

    // Ajouter un gestionnaire d'événement pour la soumission du formulaire
    document.getElementById("contact-form").addEventListener("submit", gererSoumissionFormulaire);
};
