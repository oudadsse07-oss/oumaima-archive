const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const enterBtn = document.getElementById("enterBtn");


// =========================
// ENTRER DANS LES ARCHIVES
// =========================

enterBtn.addEventListener("click", function () {

  opening.classList.remove("active");

  setTimeout(function () {
    archive.classList.add("active");
  }, 700);

});


// =========================
// OUVRIR UN DOSSIER
// =========================

function openDocument(id) {

  const page = document.getElementById(id);

  if (!page) return;

  page.style.visibility = "visible";
  page.style.opacity = "1";
}


// =========================
// FERMER UN DOSSIER
// =========================

function closeDocument(id) {

  const page = document.getElementById(id);

  if (!page) return;

  page.style.opacity = "0";

  setTimeout(function () {
    page.style.visibility = "hidden";
  }, 700);
}


// =========================
// DOSSIERS
// =========================

document.querySelector('[data-file="birth"]')
  .addEventListener("click", function () {
    openDocument("birthDocument");
  });


document.querySelector('[data-file="law"]')
  .addEventListener("click", function () {
    openDocument("lawDocument");
  });


document.querySelector('[data-file="marriage"]')
  .addEventListener("click", function () {
    openDocument("marriageDocument");
  });


document.querySelector('[data-file="mansour"]')
  .addEventListener("click", function () {
    openDocument("mansourDocument");
  });


document.querySelector('[data-file="family"]')
  .addEventListener("click", function () {
    openDocument("familyDocument");
  });


// =========================
// DERNIER DOSSIER
// =========================

document.querySelector('[data-file="graduation"]')
  .addEventListener("click", function () {

    const file = this;

    if (file.classList.contains("locked")) {
      return;
    }

    openDocument("graduationDocument");

  });


// =========================
// BOUTONS RETOUR
// =========================

document.getElementById("closeBirth")
  .addEventListener("click", function () {
    closeDocument("birthDocument");
  });


document.getElementById("closeLaw")
  .addEventListener("click", function () {
    closeDocument("lawDocument");
  });


document.getElementById("closeMarriage")
  .addEventListener("click", function () {
    closeDocument("marriageDocument");
  });


document.getElementById("closeMansour")
  .addEventListener("click", function () {
    closeDocument("mansourDocument");
  });


document.getElementById("closeFamily")
  .addEventListener("click", function () {
    closeDocument("familyDocument");
  });


document.getElementById("closeGraduation")
  .addEventListener("click", function () {
    closeDocument("graduationDocument");
  });
