const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const enterBtn = document.getElementById("enterBtn");

const birthFile = document.querySelector('[data-file="birth"]');
const birthDocument = document.getElementById("birthDocument");
const closeBirth = document.getElementById("closeBirth");

const lawFile = document.getElementById("lawFile");
const lawDocument = document.getElementById("lawDocument");
const closeLaw = document.getElementById("closeLaw");


// ENTER ARCHIVE

enterBtn.addEventListener("click", function() {

  opening.classList.remove("active");

  setTimeout(function() {
    archive.classList.add("active");
  }, 700);

});


// OPEN 1998

birthFile.addEventListener("click", function() {

  birthDocument.style.visibility = "visible";
  birthDocument.style.opacity = "1";

});


// CLOSE 1998 → UNLOCK 2016

closeBirth.addEventListener("click", function() {

  birthDocument.style.opacity = "0";

  setTimeout(function() {
    birthDocument.style.visibility = "hidden";
  }, 800);

  lawFile.classList.remove("locked");

});


// OPEN 2016

lawFile.addEventListener("click", function() {

  

  lawDocument.style.visibility = "visible";
  lawDocument.style.opacity = "1";

});


// CLOSE 2016

closeLaw.addEventListener("click", function() {

  lawDocument.style.opacity = "0";

  setTimeout(function() {
    lawDocument.style.visibility = "hidden";
  }, 800);

});
