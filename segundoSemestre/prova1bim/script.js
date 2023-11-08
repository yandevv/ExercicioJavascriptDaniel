
function main() {
    let op, albuns = [], figurinhas = [];

    do {
        console.log("Cadastro de Álbuns: (Selecione uma ação)\n1- Cadastro de Álbum.\n2- Cadastro de Figurinha.\n3- Compra de Figurinha.\n4- Troca de Figurinha.\n5- Mostrar figurinhas disponíveis para troca.\n6- Figurinha de maior quantidade.\n7- Sair");
        op = Number(prompt("Selecione uma opção no console:"));
        switch(op) {
            case 1:
                cadastrarAlbum(albuns);
                break;
            case 2:
                cadastrarFigurinha(albuns, figurinhas);
                break;
            case 3:
                comprarFigurinha(figurinhas);
                break;
            case 4:
                trocarFigurinha(figurinhas);
                break;
            case 5:
                let result = calcFigTroca(figurinhas);
                alert("Figurinhas disponíveis para troca:\n" + result.map((fig) => `${fig.numero} ${fig.nome} / Qtde: ${fig.qtd}\n`));
                break;
            case 6:
                figMaiorQtd(figurinhas, albuns);
                break;
        }
    } while(op < 7 && op > 0)
}

function cadastrarAlbum(albuns) {
    let album = {
        id: Number(prompt("Digite o ID do álbum:")),
        nome: prompt("Digite o nome do álbum:"),
        empresa: prompt("Digite a empresa do álbum:")
    }

    while(albuns.some((alb) => alb.id === album.id)) {
        album.id = Number(prompt("ID existente! Digite outro ID válido."));
    }

    albuns.push(album);
}

function cadastrarFigurinha(albuns, figurinhas) {
    let figurinha = {
        numero: Number(prompt("Digite o número da figurinha:")),
        nome: prompt("Digite o nome da figurinha:"),
        time: prompt("Digite o time da figurinha:"),
        qtd: Number(prompt("Digite a quantidade da figurinha:")),
        id: Number(prompt("Digite o ID do álbum da figurinha:"))
    }

    while(figurinhas.some((fig) => fig.numero === figurinha.numero)) {
        figurinha.numero = Number(prompt("Número de figurinha já existente! Digite outro número válido."));
    }
    while(!albuns.some((album) => album.id === figurinha.id)) {
        figurinha.id = Number(prompt("ID do álbum digitado não existe! Digite outro ID válido."));
    }

    figurinhas.push(figurinha);
}

function comprarFigurinha(figurinhas) {
    let figComprada = {
        numero: Number(prompt("Digite o número da figurinha comprada:")),
        idAlbum: Number(prompt("Digite o ID de álbum da figurinha comprada:")),
        qtdComprada: Number(prompt("Digite a quantidade de figurinhas à serem compradas:"))
    }

    while(!figurinhas.some((fig) => fig.numero === figComprada.numero)) {
        figComprada.numero = Number(prompt("Número de figurinha inexistente! Digite um número válido."));
    }

    figurinhas.map((fig) => {
        if(fig.numero === figComprada.numero) {
            fig.qtd -= figComprada.qtdComprada;
            alert(`Quantidade atual da figurinha de número ${figComprada.numero}: ${fig.qtd}`);
        }
    })
}

function trocarFigurinha(figurinhas) {
    let numeroFigTrocada1 = Number(prompt("Digite o número da 1ª figurinha trocada:"));
    let idAlbumFig1 = Number(prompt("Digite o ID do álbum da 1ª figurinha trocada:"));
    let numeroFigTrocada2 = Number(prompt("Digite o número da 2ª figurinha trocada:"));
    let idAlbumFig2 = Number(prompt("Digite o ID do álbum da 2ª figurinha trocada:"));

    if(!figurinhas.some((fig) => fig.numero === numeroFigTrocada1 && fig.id === idAlbumFig1)) {
        alert("Número da 1º figurinha inexistente ou ID de álbum não correspondente.");
    } else if(!figurinhas.some((fig) => fig.numero === numeroFigTrocada2 && fig.id === idAlbumFig2)) {
        alert("Número da 2º figurinhas inexistente ou ID de álbum não correspondente.");
    }

    figurinhas = figurinhas.map((fig) => {
        if(fig.id === numeroFigTrocada1) {
            fig.qtd--;
        } else if(fig.id === numeroFigTrocada2) {
            fig.qtd++;
        }
    })
}

function calcFigTroca(figurinhas) {
    let figParaTroca = figurinhas.filter((fig) => fig.qtd > 1);

    return figParaTroca;
}

function figMaiorQtd(figurinhas, albuns) {
    let fig = figurinhas[0];

    for(let i = 0; i < figurinhas.length - 1; i++) {
        if(fig.qtd < figurinhas[i].qtd) {
            fig = figurinhas[i];
        }
    }

    let figAlbum = albuns.find((album) => album.id === fig.id);

    alert(`Álbum da figurinha de maior quantidade\nNome: ${figAlbum.nome}\nEmpresa: ${figAlbum.empresa}\n\nFigurinha de maior quantidade:\nNome: ${fig.nome}\nTime: ${fig.time}`)
}

main();