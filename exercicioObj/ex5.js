function calc() {
    const brand = ['CALOI', 'SCOTT', 'CANONDALE'];
    let bikes = [];

    //Cadastro das 10 bikes
    for (let i = 0; i < 3; i++) {
        let bike = {};

        bike.brand = prompt(`Digite a marca da ${i + 1}º bike: (CALOI | SCOTT | CANONDALE)`);
        while (!brand.includes(bike.brand.toUpperCase())) {
            alert('Marca inválida! Digite novamente.')
            bike.brand = prompt(`Digite a marca da ${i + 1}º bike: (CALOI | SCOTT | CANONDALE)`);
        }
        bike.modelo = prompt(`Digite o modelo da ${i + 1}º bike: `);
        bike.quadro = Number(prompt(`Digite o quadro da ${i + 1}º bike: `));
        bike.aro = Number(prompt(`Digite o aro da ${i + 1}º bike: (20)`));
        bike.ano = Number(prompt(`Digite o ano da ${i + 1}º bike: (Ex: 2017)`));
        bike.preco = Number(prompt(`Digite o preço da ${i + 1}º bike: (ex: 12.9)`));

        bikes.push(bike);
    }

    //Cálculo das média do valor das bikes
    let totalPrecoBikes = 0;
    for (let i in bikes) {
        totalPrecoBikes += bikes[i].preco;
    }
    const mediaPrecoBikes = totalPrecoBikes / bikes.length;

    //Bikes mais antiga(s)
    const anoBikeMaisAntiga = bikes.sort((bikeA, bikeB) => bikeA.ano - bikeB.ano)[bikes.length - 1].ano;
    const bikesMaisAntiga = bikes.filter((bike) => bike.ano == anoBikeMaisAntiga);

    //Bikes marca Caloi
    const bikesMarcaCaloi = bikes.filter((bike) => bike.brand == 'CALOI');

    //Bikes que possui aro 29
    const bikesAro29 = bikes.filter((bike) => bike.aro == 29);

    //Bike que possui maior quadro
    const bikeMaiorQuadro = bikes.sort((bikeA, bikeB) => bikeA - bikeB)[bikes.length - 1];

    document.getElementById('resultadoOp').innerHTML = `Média de preço das bikes: ${mediaPrecoBikes}<br/>Qual(is) as bikes mais antiga(s): ${bikesMaisAntiga}<br/>Bikes da marca 'Caloi': ${bikesMarcaCaloi}<br/>Bikes com o aro 29: ${bikesAro29}<br/>Bike com o maior quadro: ${bikeMaiorQuadro}`;
}