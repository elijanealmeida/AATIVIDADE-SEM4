//Faça um programa que dado o número, imprime no 
//(console.log) a tabuada do mesmo de 1 a 10.

function tabuada(num){
    for(let i = 1; i <= 10; i++) {
        let multiplicacao = num * i ;
        let result = console.log(`${num} x ${i} = ${multiplicacao} `)
    }
    return 'Funcionou'
}
console.log(tabuada(6))