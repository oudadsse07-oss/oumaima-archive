document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     ACCUEIL → ARCHIVES
  ========================= */

  const opening = document.getElementById("opening");
  const archive = document.getElementById("archive");
  const enterBtn = document.getElementById("enterBtn");

  if (enterBtn) {
    enterBtn.addEventListener("click", function () {

      opening.classList.remove("active");

      setTimeout(function () {
        archive.classList.add("active");
      }, 700);

    });
  }


  /* =========================
     TOUS LES DOCUMENTS
  ========================= */

  const documents = {
    birth: document.getElementById("birthDocument"),
    law: document.getElementById("lawDocument"),
    marriage: document.getElementById("marriageDocument"),
    mansour: document.getElementById("mansourDocument"),
    family: document.getElementById("familyDocument"),
    graduation: document.getElementById("graduationDocument")
  };


  /* =========================
     TOUS LES DOSSIERS
  ========================= */

  const files = document.querySelectorAll(".file");


  /* =========================
     OUVRIR UN DOSSIER
  ========================= */

  files.forEach(function (file) {

    file.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      /*
       * Si le dossier est verrouillé,
       * on ne fait absolument rien.
       */
      if (file.classList.contains("locked")) {
        return;
      }

      const fileName = file.getAttribute("data-file");

      const documentElement = documents[fileName];

      if (!documentElement) {
        return;
      }

      /*
       * OUVERTURE
       */

      documentElement.style.visibility = "visible";
      documentElement.style.opacity = "1";

    });

  });


  /* =========================
     TOUS LES BOUTONS RETOUR
  ========================= */

  const backButtons = document.querySelectorAll(".back-button");

  backButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      const documentElement = button.closest(".document");

      if (!documentElement) {
        return;
      }

      const documentId = documentElement.id;


      /*
       * FERMER LE DOCUMENT
       */

      documentElement.style.opacity = "0";

      setTimeout(function () {
        documentElement.style.visibility = "hidden";
      }, 500);


      /*
       * =========================
       * DÉVERROUILLAGE PROGRESSIF
       * =========================
       */

      if (documentId === "birthDocument") {

        unlockFile("law");

      }


      else if (documentId === "lawDocument") {

        unlockFile("marriage");

      }


      else if (documentId === "marriageDocument") {

        unlockFile("mansour");

      }


      else if (documentId === "mansourDocument") {

        unlockFile("family");

      }


      /*
       * =========================
       * FAMILLE → COMING SOON
       * =========================
       */

      else if (documentId === "familyDocument") {

        unlockFile("graduation");

      }

    });

  });


  /* =========================
     FONCTION POUR DÉVERROUILLER
  ========================= */

  function unlockFile(fileName) {

    const file = document.querySelector(
      '.file[data-file="' + fileName + '"]'
    );

    if (!file) {
      console.error("Dossier introuvable :", fileName);
      return;
    }


    /*
     * ENLEVER LE VERROU
     */

    file.classList.remove("locked");


    /*
     * CHANGER LE TEXTE
     */

    const status = file.querySelector("span");

    if (status) {
      status.textContent = "SCELLÉ";
    }


    /*
     * GARANTIR QUE LE BOUTON EST CLIQUABLE
     */

    file.disabled = false;
    file.style.pointerEvents = "auto";
    file.style.cursor = "pointer";


    /*
     * Petit effet visuel
     */

    file.style.opacity = "1";

  }

});
