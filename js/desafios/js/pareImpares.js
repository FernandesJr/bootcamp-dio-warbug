let vetor = [];
let impares = [];
let pares = [];

for(let i = 0; i < 5; i++){
    vetor.push(Math.random())
}

vetor.forEach(number => {
    if(number % 2 == 0){
        pares.push(number);
    }else {
        impares.push(number);
    }
})

console.log(`Vetor: ${vetor}`); 
console.log(`Par(es): ${pares}`); 
console.log(`Impar(es): ${impares}`); 

/*Simulando a função default da plataforma DIO */
function gets() {
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}