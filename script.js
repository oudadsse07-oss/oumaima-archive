const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const enterBtn = document.getElementById("enterBtn");

const birthFile = document.querySelector('[data-file="birth"]');
const birthDocument = document.getElementById("birthDocument");
const closeBirth = document.getElementById("closeBirth");


// ENTER THE ARCHIVE

enterBtn.addEventListener("click", () => {

  opening.classList.remove("active");

  setTimeout(() => {
    archive.classList.add("active");
  }, 700);

});


// OPEN THE 1998 FILE

birthFile.addEventListener("click", () => {

  birthDocument.style.visibility = "visible";
  birthDocument.style.opacity = "1";

});


// CLOSE THE 1998 FILE

closeBirth.addEventListener("click", () => {

  birthDocument.style.opacity = "0";

  setTimeout(() => {
    birthDocument.style.visibility = "hidden";
  }, 800);

});
