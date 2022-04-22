//Crie uma função que irá receber um número e retornar o fatorial dele.
//por exemplo: 3! = 3 * 2 * 1 // 6 |

function fatorial(num) {
    let resultado = num
    for (let i = 1; i < num; i++) {
        resultado *= i
    }
    return resultado
}

console.log(fatorial(5))