/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/


const calc = (dividendo, divisor) => {
    console.log(`O esultado da divisão é: ${dividendo / divisor}`);
    console.log(`O resto da divisão é: ${dividendo % divisor}`)
}

calc(4,4)