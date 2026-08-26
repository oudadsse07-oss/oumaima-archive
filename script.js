document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     ELEMENTS
  ========================== */

  const opening = document.getElementById("opening");
  const archive = document.getElementById("archive");
  const enterBtn = document.getElementById("enterBtn");

  const files = {
    birth: document.getElementById("birthFile"),
    law: document.getElementById("lawFile"),
    marriage: document.getElementById("marriageFile"),
    mansour: document.getElementById("mansourFile"),
    family: document.getElementById("familyFile"),
    coming: document.getElementById("comingFile")
  };

  const documents = {
    birth: document.getElementById("birthDocument"),
    law: document.getElementById("lawDocument"),
    marriage: document.getElementById("marriageDocument"),
    mansour: document.getElementById("mansourDocument"),
    family: document.getElementById("familyDocument"),
    coming: document.getElementById("comingDocument")
  };


  /* =========================
     ENTER ARCHIVE
  ========================== */

  enterBtn.addEventListener("click", function () {

    opening.classList.remove("active");

    setTimeout(function () {
      archive.classList.add("active");
    }, 700);

  });


  /* =========================
     OPEN FILE
  ========================== */

  function openFile(name) {

    const file = files[name];
    const documentPage = documents[name];

    if (!file || !documentPage) {
      return;
    }

    if (file.classList.contains("locked")) {
      return;
    }

    documentPage.classList.add("open");
  }


  /* =========================
     CLOSE DOCUMENT
  ========================== */

  function closeDocument(name) {

    const documentPage = documents[name];

    if (!documentPage) {
      return;
    }

    documentPage.classList.remove("open");

  }


  /* =========================
     UNLOCK FILE
  ========================== */

  function unlockFile(name) {

    const file = files[name];

    if (!file) {
      return;
    }

    file.classList.remove("locked");

    const status = file.querySelector("span");

    if (status) {
      status.textContent = "SCELLÉ";
    }

  }


  /* =========================
     FILE CLICKS
  ========================== */

  files.birth.addEventListener("click", function () {
    openFile("birth");
  });

  files.law.addEventListener("click", function () {
    openFile("law");
  });

  files.marriage.addEventListener("click", function () {
    openFile("marriage");
  });

  files.mansour.addEventListener("click", function () {
    openFile("mansour");
  });

  files.family.addEventListener("click", function () {
    openFile("family");
  });

  files.coming.addEventListener("click", function () {
    openFile("coming");
  });


  /* =========================
     BACK BUTTONS
  ========================== */

  document.getElementById("backBirth").addEventListener("click", function () {

    closeDocument("birth");

    unlockFile("law");

  });


  document.getElementById("backLaw").addEventListener("click", function () {

    closeDocument("law");

    unlockFile("marriage");

  });


  document.getElementById("backMarriage").addEventListener("click", function () {

    closeDocument("marriage");

    unlockFile("mansour");

  });


  document.getElementById("backMansour").addEventListener("click", function () {

    closeDocument("mansour");

    unlockFile("family");

  });


  document.getElementById("backFamily").addEventListener("click", function () {

    closeDocument("family");

    unlockFile("coming");

  });


  document.getElementById("backComing").addEventListener("click", function () {

    closeDocument("coming");

  });

});
