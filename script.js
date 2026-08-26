const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const enterBtn = document.getElementById("enterBtn");


// ENTER ARCHIVE

enterBtn.addEventListener("click", function () {

  opening.classList.remove("active");

  setTimeout(function () {
    archive.classList.add("active");
  }, 800);

});


// OPEN EVERY FILE

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


// OPEN DOCUMENT

function openDocument(id) {

  const documentPage = document.getElementById(id);

  documentPage.style.visibility = "visible";

  setTimeout(function () {
    documentPage.style.opacity = "1";
  }, 50);

}


// CLOSE DOCUMENTS

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const documentPage = document.getElementById(
      button.getAttribute("data-close")
    );

    documentPage.style.opacity = "0";

    setTimeout(function () {
      documentPage.style.visibility = "hidden";
    }, 700);

  });

});
