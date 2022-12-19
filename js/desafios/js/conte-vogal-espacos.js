let frase = 'Essa frase e um teste' //8 vogais e 4 espaços
let totalVogais = 0;
let totalEspacos = 0;

frase = frase.toLowerCase();
for (let i = 0; i < frase.length; i++) {
    let temp = frase[i];
    if(temp === 'a' || temp ===  'e' || temp === 'i' || temp === 'o' || temp === 'u'){
        totalVogais += 1;
    }else if(temp === ' '){
        totalEspacos += 1;
    }
}

console.log(`Espacos em branco: ${totalEspacos} Vogais: ${totalVogais}`);