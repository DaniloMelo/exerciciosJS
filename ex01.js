/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */


//arrow function.
let calc1 = (x, y) => {
    console.log(`A Soma entre ${x} e ${y} é:`, x + y)
    console.log(`A Subtração entre ${x} e ${y} é:`, x - y)
    console.log(`A Multiplicação entre ${x} e ${y} é:`, x * y)
    console.log(`A Divisão entre ${x} e ${y} é:`, x / y)
}
calc1(3, 6)

console.log('---------------------------------------------')

//função classica.
function calc2 (x, y) {
    console.log(`A Soma entre ${x} e ${y} é:`, x + y)
    console.log(`A Subtração entre ${x} e ${y} é:`, x - y)
    console.log(`A Multiplicação entre ${x} e ${y} é:`, x * y)
    console.log(`A Divisão entre ${x} e ${y} é:`, x / y)
}
calc2(3, 3)

