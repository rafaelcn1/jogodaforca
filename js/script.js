// Inicio da Tela 2
//Função para começar o jogo, onde será excluido os botões iniciais e criado as divs do botões do frame3 e o input da palavra
var comecarJogar = function() {

    criarExclamacao();
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



var criarExclamacao = function() {
    criarDiv("frame1", "container");
    var frame1 = document.getElementById("frame1");
    var imgExclamcao = document.createElement("img");
    imgExclamcao.setAttribute("src", "img/exclamacao.png");
    imgExclamcao.setAttribute("class", "exclamacao");
    frame1.appendChild(imgExclamcao);

    var paragratoExclamacao = document.createElement("p");
    paragratoExclamacao.setAttribute("class", "p1");
    paragratoExclamacao.innerHTML = "Máx. de 8 letras";
    frame1.appendChild(paragratoExclamacao);
}

// Fim da Tela 2

// Inicio da Tela 3


var salvarComecar = function() {
    console.log("Palavra salva, vai começar o jogo!");
    var digiteUmaPalavra = document.querySelector(".digiteUmaPalavra");
    var palavraOuFrase = digiteUmaPalavra.value.toUpperCase();
    jogo(palavraOuFrase);
    limparSegundaTela();
}

var limparSegundaTela = function() {
    var divFrame3 = document.getElementById("frame3");
    divFrame3.remove();

    var divFrame1 = document.getElementById("frame1");
    divFrame1.remove();

    var divDigiteUmaPalavra = document.getElementById("digiteUmaPalavra");
    divDigiteUmaPalavra.remove();
}


var criarLetter = function(localDeInicio) {
    //Capturando o container
    var pai = document.getElementById("word");
    //Criando uma div para frame3
    var divCriada = document.createElement("div");
    divCriada.setAttribute("id", "letter");
    divCriada.style.left = localDeInicio;
    //Adicionando a div no container
    pai.appendChild(divCriada);

}

var jogo = function(palavraOuFrase) {
    criarDiv("keyboard", "container");
    criarDiv("word", "keyboard");
    criarDiv("otherLetters", "keyboard");

    //Inicio da letter
    let localDeInicio = 0;
    //For para criar as divs de letter
    for (let index = 0; index < palavraOuFrase.length; index++) {
        criarLetter(localDeInicio + "px");
        localDeInicio += 96;

    }
    //Salvando todas as div letter criadas
    var letters = document.querySelectorAll("#letter");
    for (let index = 0; index < letters.length; index++) {
        let letter = letters[index];
        //Criando a label que vai ser inserida a letra
        var label = document.createElement("label");
        label.setAttribute("class", "labelLetter");
        letter.appendChild(label);

        //Criando a img do retangulo
        var img = document.createElement("img");
        img.setAttribute("src", "img/retangulo.png");
        img.setAttribute("class", "retangulo");
        letter.appendChild(img);
    }

    criandoBotoesAction();
}

var criandoBotoesAction = function() {
    //Criando uma div para frame3 e as div dos butões
    criarDiv('actions', 'container');

    //Criando a div salvar, no frame3
    criarDiv("novoJogo", "actions");
    //Criando o botão salvar, no frame3
    criarInput("novoJogo", "button", "Novo Jogo", "novoJogo");

    //Criando a div cancelar, no frame3
    criarDiv("desistir", "actions");
    //Criando o botão cancelar, no frame3
    criarInput("desistir", "button", "Desistir", "desistir");
}


var novoJogo = function() {
    console.log("Vai cancelar o jogo!");
}

var desistir = function() {
    console.log("Fim de jogo!");
}
var cancelar = function() {
    console.log("Vai cancelar o jogo!");
}

// Fim da Tela 3