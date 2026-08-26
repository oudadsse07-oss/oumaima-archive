document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     OPENING
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
     DOCUMENTS
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
     OPEN FILES
  ========================= */

  const files = document.querySelectorAll(".file");

  files.forEach(function (file) {

    file.addEventListener("click", function () {

      const fileType = file.getAttribute("data-file");

      if (!fileType) {
        return;
      }

      /* Don't open locked files */
      if (file.classList.contains("locked")) {
        return;
      }

      const documentElement = documents[fileType];

      if (!documentElement) {
        return;
      }

      documentElement.style.visibility = "visible";
      documentElement.style.opacity = "1";

    });

  });


  /* =========================
     BACK BUTTONS
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

      documentElement.style.opacity = "0";

      setTimeout(function () {

        documentElement.style.visibility = "hidden";

      }, 500);

    });

  });

});
