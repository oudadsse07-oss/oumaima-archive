document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     ACCUEIL
  ========================= */

  const opening = document.getElementById("opening");
  const archive = document.getElementById("archive");
  const enterBtn = document.getElementById("enterBtn");

  enterBtn.addEventListener("click", function () {

    opening.classList.remove("active");

    setTimeout(function () {
      archive.classList.add("active");
    }, 700);

  });


  /* =========================
     DOSSIERS
  ========================= */

  const files = document.querySelectorAll(".file");

  const documents = {
    birth: document.getElementById("birthDocument"),
    law: document.getElementById("lawDocument"),
    marriage: document.getElementById("marriageDocument"),
    mansour: document.getElementById("mansourDocument"),
    family: document.getElementById("familyDocument"),
    graduation: document.getElementById("graduationDocument")
  };


  /* =========================
     OUVRIR UN DOSSIER
  ========================= */

  files.forEach(function (file) {

    file.addEventListener("click", function () {

      if (file.classList.contains("locked")) {
        return;
      }

      const fileName = file.getAttribute("data-file");

      const documentElement = documents[fileName];

      if (!documentElement) {
        return;
      }

      documentElement.style.visibility = "visible";
      documentElement.style.opacity = "1";

    });

  });


  /* =========================
     BOUTONS RETOUR
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

      /*
       * On identifie le document qui vient d'être fermé
       */

      const documentId = documentElement.id;


      /*
       * Fermer le document
       */

      documentElement.style.opacity = "0";

      setTimeout(function () {
        documentElement.style.visibility = "hidden";
      }, 500);


      /*
       * DÉVERROUILLAGE PROGRESSIF
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

      else if (documentId === "familyDocument") {

        unlockFile("graduation");

      }

    });

  });


  /* =========================
     FONCTION DÉVERROUILLAGE
  ========================= */

  function unlockFile(fileName) {

    const file = document.querySelector(
      '.file[data-file="' + fileName + '"]'
    );

    if (!file) {
      return;
    }

    file.classList.remove("locked");

    const status = file.querySelector("span");

    if (status) {
      status.textContent = "SCELLÉ";
    }

  }

});
