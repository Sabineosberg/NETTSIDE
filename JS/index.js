/* -------------------------------- NAVIGASJON MED TASTATUR ---------------------------------- */


// Henter tastekoden fra eventet
document.addEventListener ("keydown", function(event) {
    let key = event.key;


// Sjekker om brukeren trykker på pil tastene eller Tab
if (key === "ArrowDown" || key === "ArrowUp" || key === "Tab") {
    // Finner alle lenkene på siden
    let links = document.querySelectorAll("a");


// Navigasjon til lenker
if (links.length > 0) {
    // Finner indeksen til den aktive lenken
    let activeIndex = Array.from(links).indexOf(document.activeElement);


// Sjekker hvilken tast brukeren trykker på 
if (key === "ArrowDown" || key === "Tab") {
    // Neste lenke
    let nextIndex = activeIndex + 1;

            
// Hvis vi er på siste lenke, gå til første lenke
    if (nextIndex >= links.length) {
    nextIndex = 0;
}


// Fokuser på neste lenke
    links[nextIndex].focus();
}   else if (key === "ArrowUp") {
            
// Forrige lenke
    let prevIndex = activeIndex - 1;


// Hvis vi er på første lenke, gå til siste lenke
    if (prevIndex < 0) {
        prevIndex = links.length - 1;
}

// Fokuser på forrige lenke
    links[prevIndex].focus();
    }

// Forhindre standard handling av tastatureventet
    event.preventDefault();
    }
}
});