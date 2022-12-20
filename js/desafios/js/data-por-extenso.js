let data = '02/11/1997';
let dataSplit = data.split('/');

function convertMonthToFull(numberMonth) {
    
    if(numberMonth == '01') return 'Janeiro';
    if(numberMonth == '02') return 'Fevereiro';
    if(numberMonth == '03') return 'Março';
    if(numberMonth == '04') return 'Abril';
    if(numberMonth == '05') return 'Maio';
    if(numberMonth == '06') return 'Junho';
    if(numberMonth == '07') return 'Julho';
    if(numberMonth == '08') return 'Agosto';
    if(numberMonth == '09') return 'Setembro';
    if(numberMonth == '10') return 'Outubro';
    if(numberMonth == '11') return 'Novembro';
    if(numberMonth == '12') return 'Dezembro';
}

//  25 de Dezembro de 2019 
const fullMonth = convertMonthToFull(dataSplit[1]);
let fullDate = `${dataSplit[0]} de ${fullMonth} de ${dataSplit[2]}`;
console.log(fullDate);