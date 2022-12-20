let M, S; 

M = parseInt(40); 

S = parseInt(30); 

//TODO: Retorne o percentual de desconto que foi aplicado no produto

const percentDiscount = S * 100 / M;
const realDiscount = 100 - percentDiscount;

//O desconto foi de 25%
console.log(`O desconto foi de ${realDiscount}%`);
