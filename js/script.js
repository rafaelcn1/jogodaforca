var palavrasCadastradas = [];

var escolherPalavra = function() {
    var index = 0;
    if (palavrasCadastradas.length != 0) {
        index = Math.floor(Math.random() * palavrasCadastradas.length);
    }
    console.log(palavrasCadastradas[index]);
}

//Inicio Tela Inicial
var telaInicial = function() {
    criarDiv("botaoComecarJogar", "container");
    criarInput("botaoComecarJogar", "button", "Comceçar a Jogar", "botaoComecarJogar");

    criarDiv("botaoAdicionarNovaPalavra", "container");
    criarInput("botaoAdicionarNovaPalavra", "button", "Adicionar Nova Palavra", "botaoAdicionarNovaPalavra");
}


var criarTelaInicial = function() {
    var frame1 = document.getElementById("frame1");
    if (frame1 != null) {
        frame1.remove();
    }

    var digiteUmaPalavra = document.getElementById("digiteUmaPalavra");
    if (digiteUmaPalavra != null) {
        digiteUmaPalavra.remove();
    }


    var frame3 = document.getElementById("frame3");
    if (frame3 != null) {
        frame3.remove();
    }

    telaInicial();

}

// Fim tela inicial
// Inicio da Tela 2
//Função para começar o jogo, onde será excluido os botões iniciais e criado as divs do botões do frame3 e o input da palavra
var botaoComecarJogar = function() {

    //var digiteUmaPalavra = document.querySelector(".digiteUmaPalavra");
    //var palavraOuFrase = digiteUmaPalavra.value.toUpperCase();

    //limparSegundaTela();

    if (palavrasCadastradas.length <= 0) {
        alert("Favor adicionar pelo menos 1 palavra!")
    } else {
        removerBotoesIniciais();
        criarTabuleiro();
        var palavraOuFrase = palavrasCadastradas[0];
        jogo(palavraOuFrase);
    }

}

var botaoAdicionarNovaPalavra = function() {
    criarExclamacao();
    criarDiv("digiteUmaPalavra", "container");
    criarInput("digiteUmaPalavra", "text", "digiteUmaPalavra", "digiteUmaPalavra");
    removerBotoesIniciais();

    //Adicionar novos botões
    criandoNovosBotoesFrame3();
}

var removerBotoesIniciais = function() {
    var botaoComecarJogar = document.getElementById("botaoComecarJogar");
    var botaoAdicionarNovaPalavra = document.getElementById("botaoAdicionarNovaPalavra");

    if (botaoComecarJogar != null) {
        botaoComecarJogar.remove();
    }
    if (botaoAdicionarNovaPalavra != null) {
        botaoAdicionarNovaPalavra.remove();
    }
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

var criarTabuleiro = function() {
    console.log("tabuleiro criado!");
    //Criando a DIV de id grupo5
    criarDiv("grupo5", "container");
    var grupo5 = document.getElementById("grupo5");
    //Criando o desenho da Forca
    var retangulo14 = document.createElement("img");
    retangulo14.setAttribute("class", "retangulo14");
    retangulo14.setAttribute("src", "./img/Rectangle 14.png");

    var retangulo15 = document.createElement("img");
    retangulo15.setAttribute("class", "retangulo15");
    retangulo15.setAttribute("src", "./img/Rectangle 15.png");

    var retangulo16 = document.createElement("img");
    retangulo16.setAttribute("class", "retangulo16");
    retangulo16.setAttribute("src", "./img/Rectangle 16.png");


    var retangulo17 = document.createElement("img");
    retangulo17.setAttribute("class", "retangulo17");
    retangulo17.setAttribute("src", "./img/Rectangle 17.png");


    grupo5.appendChild(retangulo14);
    grupo5.appendChild(retangulo15);
    grupo5.appendChild(retangulo16);
    grupo5.appendChild(retangulo16);


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

    var digiteUmaPalavra = document.querySelector(".digiteUmaPalavra");
    var palavraOuFrase = digiteUmaPalavra.value.toUpperCase();
    if (palavraOuFrase == "") {
        alert("Favor inserir uma palavra ou clique no botão Cancelar!")
    } else {
        //limparSegundaTela();
        //criarTabuleiro();
        palavrasCadastradas.push(palavraOuFrase);
        console.log(palavrasCadastradas);
        criarTelaInicial();
    }
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
    var grupo5 = document.getElementById("grupo5");
    grupo5.remove();

    var keyboard = document.getElementById("keyboard");
    keyboard.remove();

    var actions = document.getElementById("actions");
    actions.remove();

    criarTelaInicial();

}

var desistir = function() {
    let confirma = confirm("Deseja Desistir?");
    if (confirma) {
        window.location.assign("./index.html");
    }
}

var cancelar = function() {
    criarTelaInicial();
}

// Fim da Tela 3