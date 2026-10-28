const inpPeque = document.querySelector("#inpPeque");
const inpGrande = document.querySelector("#inpGrande");

const agujaMin = document.querySelector(".min");
const agujaSeg = document.querySelector(".seg");

inpGrande.addEventListener("input", function() {
    const a = inpGrande.value;
    agujaMin.style.setProperty("--mov-seg", `calc(${a}s * var(--proporcion))`);
});

inpPeque.addEventListener("input", function() {
    const a = inpPeque.value;
    agujaSeg.style.setProperty("--mov-mili", `calc(${a}ms * var(--proporcion))`);
});