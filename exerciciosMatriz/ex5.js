function main() {
    let mensagemMes = '', mensagemSemana = '';
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let matriz = Array(12), totalVendidoMes = Array(12).fill(Object()), totalVendidoSemana = Array(48).fill(Object()), totalAno = 0;

    for(let i = 0; i < 12; i++) {
        let totalMes = {
            mes: meses[i],
            valor: 0
        }

        matriz[i] = Array(4);
        for(let j = 0; j < 4; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o total vendido na ${j+1}ª semana de ${meses[i]}: `));
            // matriz[i][j] = (Math.random() * (150000 - 32000) + 32000) / 100;

            totalMes.valor += matriz[i][j];

            totalVendidoSemana.push({
                mes: meses[i],
                semana: j+1,
                valor: matriz[i][j]
            });
            mensagemSemana += `Mês: ${meses[i]} / Semana: ${j+1}ª / Valor: R$${matriz[i][j].toFixed(2)}\n`;

            totalAno += matriz[i][j];
        }

        totalVendidoMes[i] = totalMes;

        mensagemMes += `${totalVendidoMes[i].mes} / Valor: R$${totalVendidoMes[i].valor.toFixed(2)}\n`
    }

    console.log(`================= Total Vendido em cada mês =================\n${mensagemMes}\n================= Total Vendido em cada semana =================\n${mensagemSemana}\n================= Total Vendido no ano =================\nR$${totalAno.toFixed(2)}`);
}