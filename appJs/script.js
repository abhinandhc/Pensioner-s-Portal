const fprevBtns = document.querySelectorAll(".btn-prev");
const fnextBtns = document.querySelectorAll(".btn-next");
const fsubdivs = document.querySelectorAll(".firstsubdiv");
let fsubdivNums = 0;
// variable declaration for first sub div
const sprevBtns = document.querySelectorAll("sbtn-prev");
const snextBtns = document.querySelectorAll("sbtn-next");
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
snextBtns.forEach((btns) => {
    btns.addEventListener("click", () => {
        sSubdivNums++;
        updateSsubdiv();
    })
})
sprevBtns.forEach((btns) => {
    btns.addEventListener("click", () => {
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
