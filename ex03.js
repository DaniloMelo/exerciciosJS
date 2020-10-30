/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/


// forma antiga
let exponenciacao = (b, e) => {
    result = Math.pow(b, e)
    console.log(result)
}
exponenciacao(2,4)


//forma nova ES6 (2015)
let exponenciacao2 = (b, e) => {
    result2 = b ** e
    console.log(result2)
}
exponenciacao2(2,3)

