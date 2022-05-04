// for min-width 500px
const fprevBtns = document.querySelectorAll(".btn-prev");
const fnextBtns = document.querySelectorAll(".btn-next");
const fsubdivs = document.querySelectorAll(".firstsubdiv");
let fsubdivNums = 0;
// variable declaration for first sub div
const sprevBtns = document.querySelectorAll(".sbtn-prev");
const snextBtns = document.querySelectorAll(".sbtn-next");
const sSubdivs = document.querySelectorAll(".secondsubdiv");
let sSubdivNums = 0;
// varibale declaration for second sub div
fnextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        fsubdivNums++;
        updateFsubdiv();
    });
});

fprevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        fsubdivNums--;
        updateFsubdiv();
    });
});
function updateFsubdiv() {
    fsubdivs.forEach((fsubdiv) => {
        fsubdiv.classList.contains("firstsubdiv-active") &&
            fsubdiv.classList.remove("firstsubdiv-active");
    });
    fsubdivs[fsubdivNums].classList.add("firstsubdiv-active");
}
// updating first subdivs

// updating second subdivs
snextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sSubdivNums++;
        updateSsubdiv();
    });
});
sprevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sSubdivNums--;
        updateSsubdiv();
    });
});
function updateSsubdiv() {
    sSubdivs.forEach((sSubdiv) => {
        sSubdiv.classList.contains("secondsubdiv-active") &&
            sSubdiv.classList.remove("secondsubdiv-active");
    });
    sSubdivs[sSubdivNums].classList.add("secondsubdiv-active");
}
// for max-width 500px
const mfprevBtns = document.querySelectorAll(".mbtn-prev");
const mfnextBtns = document.querySelectorAll(".mbtn-next");
const mfsubdivs = document.querySelectorAll(".mfirstsubdiv");
let mfsubdivNums = 0;
// variable declaration for first sub div
const msprevBtns = document.querySelectorAll(".msbtn-prev");
const msnextBtns = document.querySelectorAll(".msbtn-next");
const msSubdivs = document.querySelectorAll(".msecondsubdiv");
let msSubdivNums = 0;
// varibale declaration for second sub div
mfnextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mfsubdivNums++;
        mupdateFsubdiv();
    });
});

mfprevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mfsubdivNums--;
        mupdateFsubdiv();
    });
});
function mupdateFsubdiv() {
    mfsubdivs.forEach((fsubdiv) => {
        fsubdiv.classList.contains("mfirstsubdiv-active") &&
            fsubdiv.classList.remove("mfirstsubdiv-active");
    });
    mfsubdivs[mfsubdivNums].classList.add("mfirstsubdiv-active");
}
// updating first subdivs

// updating second subdivs
msnextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        msSubdivNums++;
        mupdateSsubdiv();
    });
});
msprevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        msSubdivNums--;
        mupdateSsubdiv();
    });
});
function mupdateSsubdiv() {
    msSubdivs.forEach((sSubdiv) => {
        sSubdiv.classList.contains("msecondsubdiv-active") &&
            sSubdiv.classList.remove("msecondsubdiv-active");
    });
    msSubdivs[msSubdivNums].classList.add("msecondsubdiv-active");
}