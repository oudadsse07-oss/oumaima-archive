const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const enterBtn = document.getElementById("enterBtn");

// ENTER ARCHIVE

enterBtn.addEventListener("click", function () {

  opening.classList.remove("active");

  setTimeout(function () {
    archive.classList.add("active");
  }, 700);

});


// FUNCTION TO OPEN A DOCUMENT

function openDocument(id) {

  const documentPage = document.getElementById(id);

  if (!documentPage) return;

  documentPage.style.visibility = "visible";
  documentPage.style.opacity = "1";

}


// FUNCTION TO CLOSE A DOCUMENT

function closeDocument(id) {

  const documentPage = document.getElementById(id);

  if (!documentPage) return;

  documentPage.style.opacity = "0";

  setTimeout(function () {
    documentPage.style.visibility = "hidden";
  }, 700);

}


// OPEN FILES

const birthFile = document.querySelector('[data-file="birth"]');
const lawFile = document.querySelector('[data-file="law"]');
const marriageFile = document.querySelector('[data-file="marriage"]');
const mansourFile = document.querySelector('[data-file="mansour"]');
const familyFile = document.querySelector('[data-file="family"]');
const graduationFile = document.querySelector('[data-file="graduation"]');


// FILE 01

birthFile.addEventListener("click", function () {
  openDocument("birthDocument");
});


// FILE 02

lawFile.addEventListener("click", function () {
  openDocument("lawDocument");
});


// FILE 03

marriageFile.addEventListener("click", function () {
  openDocument("marriageDocument");
});


// FILE 04

mansourFile.addEventListener("click", function () {
  openDocument("mansourDocument");
});


// FILE 05

familyFile.addEventListener("click", function () {
  openDocument("familyDocument");
});


// FINAL FILE

graduationFile.addEventListener("click", function () {

  if (graduationFile.classList.contains("locked")) {
    return;
  }

  openDocument("graduationDocument");

});


// CLOSE BUTTONS

document
  .getElementById("closeBirth")
  .addEventListener("click", function () {
    closeDocument("birthDocument");
  });


document
  .getElementById("closeLaw")
  .addEventListener("click", function () {
    closeDocument("lawDocument");
  });


document
  .getElementById("closeMarriage")
  .addEventListener("click", function () {
    closeDocument("marriageDocument");
  });


document
  .getElementById("closeMansour")
  .addEventListener("click", function () {
    closeDocument("mansourDocument");
  });


document
  .getElementById("closeFamily")
  .addEventListener("click", function () {
    closeDocument("familyDocument");
  });


document
  .getElementById("closeGraduation")
  .addEventListener("click", function () {
    closeDocument("graduationDocument");
  });
