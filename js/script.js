//Função para começar o jogo, onde será excluido os botões iniciais e criado as divs do botões do frame3 e o input da palavra
var comecarJogar = function() {

    criarDiv("digiteUmaPalavra", "container");
    criarInput("digiteUmaPalavra", "text", "digiteUmaPalavra", "digiteUmaPalavra");

    removerBotoesIniciais();

    //Adicionar novos botões
    criandoNovosBotoesFrame3();

}

var adicionarNovaPalavra = function() {
    console.log("adicionarNovaPalavra");
}

var removerBotoesIniciais = function() {
    var botaoComecarJogar = document.getElementById("botaoComecarJogar");
    var botaoAdicionarNovaPalavra = document.getElementById("botaoAdicionarNovaPalavra");
    botaoComecarJogar.remove();
    botaoAdicionarNovaPalavra.remove();
}

var criandoNovosBotoesFrame3 = function() {
    //Criando uma div para frame3 e as div dos butões
    criarDiv('frame3', 'container');

    //Criando a div salvar, no frame3
    criarDiv("salvarComecar", "frame3");
    //Criando o botão salvar, no frame3
    criarInput("salvarComecar", "button", "Salvar e Começar", "salvarComecar");

    //Criando a div cancelar, no frame3
    criarDiv("cancelar", "frame3");
    //Criando o botão cancelar, no frame3
    criarInput("cancelar", "button", "Cancelar", "cancelar");
}

var criarDiv = function(nomeDaDiv, nomeDoPai) {
    //Capturando o container
    var pai = document.getElementById(nomeDoPai);
    //Criando uma div para frame3
    var divCriada = document.createElement("div");
    divCriada.setAttribute("id", nomeDaDiv);
    //Adicionando a div no container
    pai.appendChild(divCriada);

}

var criarInput = function(nomeInput, tipoInput, nomeValue, nomeDoPai) {
    var inputCriado = document.createElement("input");
    //Adicionando os atributos no input button
    inputCriado.setAttribute("class", nomeInput);
    inputCriado.setAttribute("type", tipoInput);
    inputCriado.setAttribute("name", nomeInput);
    if (tipoInput == "button") {
        inputCriado.setAttribute("onclick", nomeInput + "()");
        inputCriado.setAttribute("value", nomeValue);
    }

    if (tipoInput == "text") {
        if (nomeInput == "digiteUmaPalavra") {
            inputCriado.setAttribute("placeholder", "Digite uma palavra!");
        }

    }
    var pai = document.getElementById(nomeDoPai);
    pai.appendChild(inputCriado);
}

var cancelar = function() {
    console.log("Vai cancelar o jogo!");
}

var salvarComecar = function() {
    console.log("Palavra salva, vai começar o jogo!");
}