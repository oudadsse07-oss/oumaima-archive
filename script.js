const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const enterBtn = document.getElementById("enterBtn");


// ==========================
// ENTER ARCHIVE
// ==========================

enterBtn.addEventListener("click", function () {

    opening.classList.remove("active");

    setTimeout(function () {
        archive.classList.add("active");
    }, 700);

});


// ==========================
// OPEN DOCUMENT
// ==========================

function openPage(id) {

    const page = document.getElementById(id);

    if (!page) return;

    page.style.visibility = "visible";
    page.style.opacity = "1";
}


// ==========================
// CLOSE DOCUMENT
// ==========================

function closePage(id) {

    const page = document.getElementById(id);

    if (!page) return;

    page.style.opacity = "0";
    page.style.visibility = "hidden";

}


// ==========================
// OPEN FILES
// ==========================

document.querySelector('[data-file="birth"]').onclick = function () {
    openPage("birthDocument");
};

document.querySelector('[data-file="law"]').onclick = function () {
    openPage("lawDocument");
};

document.querySelector('[data-file="marriage"]').onclick = function () {
    openPage("marriageDocument");
};

document.querySelector('[data-file="mansour"]').onclick = function () {
    openPage("mansourDocument");
};

document.querySelector('[data-file="family"]').onclick = function () {
    openPage("familyDocument");
};

document.querySelector('[data-file="graduation"]').onclick = function () {

    const file = this;

    if (file.classList.contains("locked")) {
        return;
    }

    openPage("graduationDocument");
};


// ==========================
// BACK BUTTONS
// ==========================

document.getElementById("closeBirth").onclick = function () {
    closePage("birthDocument");
};

document.getElementById("closeLaw").onclick = function () {
    closePage("lawDocument");
};

document.getElementById("closeMarriage").onclick = function () {
    closePage("marriageDocument");
};

document.getElementById("closeMansour").onclick = function () {
    closePage("mansourDocument");
};

document.getElementById("closeFamily").onclick = function () {
    closePage("familyDocument");
};

document.getElementById("closeGraduation").onclick = function () {
    closePage("graduationDocument");
};
