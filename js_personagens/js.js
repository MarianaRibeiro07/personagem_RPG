

function iniciar() {
    let nome = document.getElementById("nome").value;
    let classe = document.getElementById("classe").value;
    let habilidade = document.getElementById("habilidade").value;

    if (nome === "") {
        alert("Digite o nome do personagem!");
        return;
    }

    let frase = `O lendário ${classe} chamado
     ${nome} ganhou de todos seus inimigos usando sua ${habilidade}!`;

    document.getElementById("resultado").innerHTML = frase;
}

