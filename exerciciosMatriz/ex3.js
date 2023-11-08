function main() {
    let matriz = [], maiorElemento = {num: undefined, col: undefined, line: undefined}, menorElemento = {num: undefined, col: undefined, line: undefined};

    for(let i = 0; i < 3; i++) {
        matriz[i] = [];
        for(let j = 0; j < 6; j++) {
            // matriz[i][j] = parseInt(prompt('Digite um valor inteiro: '));
            matriz[i][j] = Math.floor(Math.random() * 51);

            if(matriz[i][j] > maiorElemento.num || maiorElemento.num === undefined) {
                maiorElemento.num = matriz[i][j];
                maiorElemento.col = j + 1;
                maiorElemento.line = i + 1;
            }

            if(matriz[i][j] < menorElemento.num || menorElemento.num === undefined) {
                menorElemento.num = matriz[i][j];
                menorElemento.col = j + 1;
                menorElemento.line = i + 1;
            }
        }
    }

    console.log(`Maior Elemento:\nValor: ${maiorElemento.num} - Linha: ${maiorElemento.line} - Coluna: ${maiorElemento.col}\n\nMenor Elemento:\nValor: ${menorElemento.num} - Linha: ${menorElemento.line} - Coluna: ${menorElemento.col}`);
}