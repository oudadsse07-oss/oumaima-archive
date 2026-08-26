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
enterBtn.onclick = function () {
  opening.classList.remove("active");

  setTimeout(function () {
    archive.classList.add("active");
  }, 700);
};


// OPEN 1998
birthFile.onclick = function () {
  birthDocument.style.visibility = "visible";
  birthDocument.style.opacity = "1";
};


// CLOSE 1998 + UNLOCK 2016
closeBirth.onclick = function () {

  birthDocument.style.opacity = "0";

  setTimeout(function () {
    birthDocument.style.visibility = "hidden";
  }, 800);

  // UNLOCK 2016
lawFile.dataset.locked = "false";
lawFile.querySelector("span").textContent = "SEALED";
lawFile.style.opacity = "1";

  // Change the text
  lawFile.querySelector("span").textContent = "SEALED";

  // Make absolutely sure it can be clicked
  lawFile.style.pointerEvents = "auto";
  lawFile.style.opacity = "1";
};


// OPEN 2016
lawFile.onclick = function () {

  if (lawFile.dataset.locked === "true") {
    return;
  }

  lawDocument.style.visibility = "visible";
  lawDocument.style.opacity = "1";

};


// CLOSE 2016
closeLaw.onclick = function () {

  lawDocument.style.opacity = "0";

  setTimeout(function () {
    lawDocument.style.visibility = "hidden";
  }, 800);

};
