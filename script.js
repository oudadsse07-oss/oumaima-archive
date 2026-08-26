document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     ACCUEIL → ARCHIVES
  ========================== */

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
     DOCUMENTS
  ========================== */

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
  ========================== */

  const files = document.querySelectorAll(".file");

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
  ========================== */

  const backButtons = document.querySelectorAll(".back-button");

  backButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      const documentElement = button.closest(".document");

      if (!documentElement) {
        return;
      }

      documentElement.style.opacity = "0";

      setTimeout(function () {

        documentElement.style.visibility = "hidden";

      }, 500);

    });

  });

});
