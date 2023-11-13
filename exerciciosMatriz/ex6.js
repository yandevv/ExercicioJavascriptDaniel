function main() {
    let matriz = []
    let vetorSumCol = []
    let mensagem = ''

    for(let i = 0; i < 20; i++) {
        let sumCol = 0
        let row = []

        for(let j = 0; j < 10; j++) {
            row.push(Number(prompt('Digite um valor: ')))
            // row.push(Math.floor(Math.random() * 5))
            sumCol += row[j]
        }
        matriz.push(row)

        vetorSumCol.push(sumCol)
    }

    for(let i = 0; i < 20; i++) {
        for(let j = 0; j < 10; j++) {
            matriz[i][j] = matriz[i][j] * vetorSumCol[i]
            mensagem += matriz[i][j] + ' '
        }
        mensagem += '\n'
    }

    console.log('Nova Array: \n' + mensagem)
}