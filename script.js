const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const enterBtn = document.getElementById("enterBtn");


// ENTRER DANS LES ARCHIVES

enterBtn.addEventListener("click", function () {

  opening.classList.remove("active");

  setTimeout(function () {
    archive.classList.add("active");
  }, 800);

});


// OUVRIR TOUS LES DOSSIERS

const files = document.querySelectorAll(".file");

files.forEach(function (file) {

  file.addEventListener("click", function () {

    const fileName = file.dataset.file;

    if (fileName === "birth") {
      openDocument("birthDocument");
    }

    else if (fileName === "law") {
      openDocument("lawDocument");
    }

    else if (fileName === "marriage") {
      openDocument("marriageDocument");
    }

    else if (fileName === "mansour") {
      openDocument("mansourDocument");
    }

    else if (fileName === "family") {
      openDocument("familyDocument");
    }

    else if (fileName === "graduation") {
      openDocument("graduationDocument");
    }

  });

});


// OUVRIR UNE PAGE

function openDocument(id) {

  const documentPage = document.getElementById(id);

  documentPage.style.visibility = "visible";

  setTimeout(function () {
    documentPage.style.opacity = "1";
  }, 50);

}


// FERMER LES PAGES

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const id = button.getAttribute("data-close");

    const documentPage = document.getElementById(id);

    documentPage.style.opacity = "0";

    setTimeout(function () {
      documentPage.style.visibility = "hidden";
    }, 700);

  });

});
