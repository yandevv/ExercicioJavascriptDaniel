function main() {
    let matriz = [], countLine = Array(4).fill(0), sumPares = 0, countPares = 0;

    for(let i = 0; i < 4; i++) {
        matriz[i] = []
        for(let j = 0; j < 2; j++) {
            matriz[i][j] = parseInt(prompt('Digite um número inteiro: '));
            // matriz[i][j] = Math.floor(Math.random() * 25);

            if(matriz[i][j] <= 20 && matriz[i][j] >= 12) {
                countLine[i]++;
            }

            if(matriz[i][j] % 2 == 0) {
                sumPares += matriz[i][j];
                countPares++;
            }
        }
    }

    let mediaPares = sumPares / countPares;

    console.log(`Qtde de Elementos Linha 1: ${countLine[0]}\nQtde de Elementos Linha 2: ${countLine[1]}\nQtde de Elementos Linha 3: ${countLine[2]}\nQtde de Elementos Linha 4: ${countLine[3]}\n Média Pares Matriz: ${mediaPares.toFixed(2)}`);
}