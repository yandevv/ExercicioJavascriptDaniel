function main() {
    let matriz = Array(3)
    let num = Number(prompt('Digite um número para o cálculo da multiplicação: '))

    for(let i of [0, 1, 2]) {
        row = Array(3)
        for(let j of [0, 1, 2]) {
            // row[j] = Number(prompt('Digite um número: '))
            row[j] = Math.random() * 10
            row[j] = row[j] * num
        }
        matriz[i] = row
    }

    console.log(matriz.forEach((row) => console.log(row.join(' '))))
}