let escolha = confirm("Deseja mudar a cor para uma de sua preferência");

if (escolha){
    let mudarBG = prompt("Digite uma cor ou valor hexadecimal para mudar a cor do fundo");
    document.body.style.backgroundColor = mudarBG;
    alert("Cor do fundo alterada com sucesso!");
    console.log("O usuário escolheu mudar a cor do fundo");
    console.log("Cor do fundo alterada para: " + mudarBG);

    if (document.body.style.backgroundColor) {
        let titulo = document.querySelector("h1");
        let texto = document.querySelector("p");

        if (mudarBG === "black" || mudarBG === "#000000") {
            titulo.style.color = "white";
        } else if (mudarBG === "white" || mudarBG === "#FFFFFF") {
            titulo.style.color = "black";
        }
        if (mudarBG === "black" || mudarBG === "#000000") {
            texto.style.color = "white";
        } else if (mudarBG === "white" || mudarBG === "#FFFFFF") {
            texto.style.color = "black";
        }
    }
} else {
    alert("Ação cancelada");
}