

function palindromo(palindromo) {
    palindromo = palindromo.toLowerCase();
    alreves = palindromo.reverse().toString();

    if (palindromo == alreves) {
        console.log("Si es un palindromo");
    }
    else {
        console.log("No es un palindromo");
    }

}

