//Chiedo all'utente di scegliere un numero pari o dispari
let pariODispari = prompt("Vuoi un numero pari o dispari?");

//Devo capire se l'utente ha scelto un numero pari o dispari, quindi creo una variabile

let sceltaUtente;

if (pariODispari == "pari") {
    sceltaUtente = vero;
} else if (pariODispari == "dispari") {
    sceltaUtente = falso;
}

let numeroUtente = parseInt(prompt ("Inserisci un numero da 1 a 5"));

let num = generaNumeroRandom (2, 5);

//Sommo i due numeri

let somma = numeroUtente + num;


