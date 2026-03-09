const loginForm = document.getElementById("login-form");
const fejlBesked = document.getElementById("login-fejl");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const kode = document.getElementById("kode").value.trim();

    if (email === "" || kode === "") {
        fejlBesked.textContent = "Udfyld venligst både e-mail og adgangskode.";
        return;
    }

    if (!email.includes("@")) {
        fejlBesked.textContent = "Indtast en gyldig e-mail adresse.";
        return;
    }

    fejlBesked.textContent = "";
    alert("Logger ind...");
});