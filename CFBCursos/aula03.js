"use strict"

//var pode ser usado globalmente fora de funcoes claro.
//Priorizar let para um maior controle

function teste(){
    if(true){
        let nome = "Enzo"
        console.log("Dentro do if do teste: " + nome)
    }
    console.log("Dentro do teste: " + nome)
}

teste()

console.log("fora de teste " + nome)


// nao e possivel mudar o valor de uma const!

const curso= "Javascript"
curso = "Python"
console.log(curso)