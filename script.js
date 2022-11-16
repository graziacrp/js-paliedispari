//Chiedo all'utente di inserire una parola
let parolaIniziale = prompt("Inserisci una parola");

//Chiedo all'utente di inserire la parola al contrario
let parolaFinale = prompt("Inserisci la parola al contrario");


//Verifico se la parola sia palindroma o meno
if (parolaIniziale == parolaFinale) {
    alert('La parola è palindroma');

} else {
    alert('La parola non è palindroma');
}


