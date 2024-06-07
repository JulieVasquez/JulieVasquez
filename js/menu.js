const SobreNosotros = document.querySelector("#Empresa");

SobreNosotros.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionP = document.querySelector(".empresa");
    sectionP.scrollIntoView({ behavior: "smooth" });
});
