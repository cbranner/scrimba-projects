
let scoreHome = 0
let scoreGuest = 0;
let homeNumber = document.getElementById("homeNumber");
let guestNumber = document.getElementById("guestNumber");


function homeAdd1() {
    homeNumber.textContent = scoreHome += 1;
}

function guestAdd1() {
    guestNumber.textContent = scoreGuest += 1;
}

function homeAdd2() {
     homeNumber.textContent = scoreHome += 2;
}

function guestAdd2() {
     guestNumber.textContent = scoreGuest += 2;
}

function homeAdd3() {
     homeNumber.textContent = scoreHome += 3;
}

function guestAdd3() {
     guestNumber.textContent = scoreGuest += 3;
}

function reset() {
    homeNumber.textContent = 0;
    guestNumber.textContent = 0;
}