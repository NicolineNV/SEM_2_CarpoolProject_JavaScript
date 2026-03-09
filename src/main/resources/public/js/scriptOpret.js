const opretForm = document.getElementById("opret-form");
const opretFejl= document.getElementById("opret-fejl");

opretForm.addEventListener("submit", function (event){
    event.preventDefault();

    const fornavn = document.getElementById("fname").value.trim();
    const efternavn = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const studienr = document.getElementById("studieNr").value.trim();
    const kode = document.getElementById("kode").value.trim();

    if (!fornavn || !efternavn || !email || !studienr || !kode){
        opretFejl.textContent = "Alle felter skal udfyldes.";
        return;
    }

    if (!email.includes("@")) {
        opretFejl.textContent = "Indtast en gyldig e-mail adresse.";
        return;
    }

    if (isNaN(studienr)) {
        opretFejl.textContent = "Studienummer må kun indeholde tal.";
        return;
    }

    if (kode.length < 6){
        opretFejl.textContent = "Adgangskode skal være minimum 6 tegn."
        return;
    }

    if (kode.length > 12){
        opretFejl.textContent = "Adgangskode skal være maksimalt 12 tegn."
        return;
    }

    opretFejl.textContent = "";
    alert("Bruger oprettet, velkommen " + fornavn + ".");
    opretForm.reset();
});