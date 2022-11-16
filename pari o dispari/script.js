//Chiedo all'utente di scegliere un numero pari o dispari
let pariODispari = prompt("Vuoi un numero pari o dispari?");

//Stampo il numero
console.log("La tua scelta è:", pariODispari);


//Chiedo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));


//Sommo i due numeri

let somma = numeroUtente + numerocasuale();
console.log(somma);






//Genero un numero casuale da 1 a 5 usando la funzione
function numerocasuale() {
    num = Math.round(Math.random() * 5);
    
}


Math.round(Math.random() * 4) + 1;




//Stabilisco se la somma dei due numeri è pari o dispari (usando la funzione)

function pari(numero) {

    let risultato = "dispari";
    if (numero % 2 == 0) {
        risultato = "pari";
        console.log("il numero risultato è" + numero);
    }

    return risultato = "numero casuale" + num
}

//Dichiaro chi ha vinto

if (pari(somma) == pariODispari) {

    alert("Congratulazioni, hai vinto!");
} else {

    alert("Mi dispiace, hai perso!");
}






















