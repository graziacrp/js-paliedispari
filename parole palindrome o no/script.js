//Chiedo all'utente di inserire una parola
let parolaIniziale = prompt("Inserisci una parola");



// Inverto la parola impiccandomi come sempre
let invertiparolaIniziale = '';

for (let i = parolaIniziale.length - 1; i >= 0; i--) {
    invertiparolaIniziale += parolaIniziale.charAt(i); 
}
console.log(`La parola al contrario è: ${invertiparolaIniziale}`);





//Verifico se la parola sia palindroma o meno
if (parolaIniziale == invertiparolaIniziale) {
    alert('La parola è palindroma');

} else {
    alert('La parola non è palindroma');
}


