//Chiedo all'utente di scegliere un numero pari o dispari
let pariODispari = prompt("Vuoi un numero pari o dispari?");

//Devo capire se l'utente ha scelto un numero pari o dispari, quindi creo una variabile

let sceltaUtente;

if (pariODispari == "numeropari") {
    sceltaUtente = vero;
} else if (pariODispari == "numerodispari") {
    sceltaUtente = falso;
}

let numeroUtente = prompt ("Inserisci un numero da 1 a 5");

//Generare un numero casuale da 1 a 5 usando la funzione
function casuale() {
    num = Math.round(Math.random() * 5);
    document.getElementById("casuale").innerHTML ="Numero casuale " + num;
}


Math.round(Math.random()*4)+1;


//Stabiliamo se il numero è pari o dispari 

function numeropari(numeroFinale){
    if(numeroFinale % 2 == 0){
        risultato = vero;
    } else {
        risultato= falso;
    }
}

if (numeropari(somma) === pariOdispari){

    alert("hai vinto");
} else {
    
    alert("hai perso");
}










//Sommo i due numeri

let somma = sceltaUtente + numeroCasuale ();
console.log (somma);

//Se l'utente sceglie un numero uguale alla funzione numeroPpri, ha vinto. altrimenti ha perso   (?)

if (sceltaUtente == numeroFinale (somma)) {
    console.log ("Congratulazioni, hai vinto!");
} else {
    console.log ("Mi dispiace, hai perso..");
}








