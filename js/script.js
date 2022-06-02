var teclaDigitada;
var totalDeAcertos = 0;
var totalDeErros = 6;
var arrayDeLetrasErradas = [];
var arrayDeLetrasCertas = [];
var palavrasCadastradas = [];
var palavraOuFrase;

var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

console.log(alfabeto.toString());
var escolherPalavra = function() {
    var index = 0;
    if (palavrasCadastradas.length != 0) {
        index = Math.floor(Math.random() * palavrasCadastradas.length);
    }
    return palavrasCadastradas[index];
}

//Função para criar as divs e inputs da Tela Inicial
var telaInicial = function() {
    criarDiv("botaoComecarJogar", "container");
    criarInput("botaoComecarJogar", "button", "Começar a Jogar", "botaoComecarJogar");
    criarDiv("botaoAdicionarNovaPalavra", "container");
    criarInput("botaoAdicionarNovaPalavra", "button", "Adicionar Nova Palavra", "botaoAdicionarNovaPalavra");
}

//Função que vai criar a tela incial
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

//Função de ação para começar o jogo, onde será excluido os botões iniciais e criado as divs do botões do frame3 e o input da palavra
var botaoComecarJogar = function() {

    //Condição para checar se o array de palavras cadastradas está vazio
    if (palavrasCadastradas.length <= 0) {
        alert("Favor adicionar pelo menos 1 palavra!")
    } else {
        //Capturando as teclas digitadas
        capturarLetraDoTeclado();

        //Salvando a palavra escolhida aleatória
        palavraOuFrase = escolherPalavra();
        console.log("Palavra Escolhida: " + palavraOuFrase);

        //Removendo os botões da página inicial
        removerBotoesIniciais();

        //Criando o tabuleiro
        criarTabuleiro();

        //Jogar
        jogo(palavraOuFrase);
    }
}

// Função para chamar a tela para cadastrar palavras
var botaoAdicionarNovaPalavra = function() {
    //Criando a exclamção de aviso
    criarExclamacao();

    //Criando as div e input necessárias da página
    criarDiv("digiteUmaPalavra", "container");
    criarInput("digiteUmaPalavra", "text", "digiteUmaPalavra", "digiteUmaPalavra");
    //Removendo os botões da página incial
    removerBotoesIniciais();

    //Adicionar novos botões de salvar e cancelar
    criandoNovosBotoesFrame3();
}

//Função criada para remover os botões da página inicial
var removerBotoesIniciais = function() {
    var botaoComecarJogar = document.getElementById("botaoComecarJogar");
    var botaoAdicionarNovaPalavra = document.getElementById("botaoAdicionarNovaPalavra");

    //Condições para checar se existe os elementos
    if (botaoComecarJogar != null) {
        botaoComecarJogar.remove();
    }
    if (botaoAdicionarNovaPalavra != null) {
        botaoAdicionarNovaPalavra.remove();
    }
}

//Função criada para criar os botões e input da página de cadastro de palavras
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

//Função para criar Divs
var criarDiv = function(nomeDaDiv, nomeDoPai) {
    //Capturando o container
    var pai = document.getElementById(nomeDoPai);
    //Criando uma div para frame3
    var divCriada = document.createElement("div");
    divCriada.setAttribute("id", nomeDaDiv);
    //Adicionando a div no container
    pai.appendChild(divCriada);

}

//Função para criar inputs
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
    //Adicionando os input ao elemento pai
    pai.appendChild(inputCriado);
}


//Função para criar o tabuleiro do jogo!
var criarTabuleiro = function() {
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
    grupo5.appendChild(retangulo17);


}

//Função para criar a exclamção de aviso
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

//Função para cancelar o jogo, para iniciar um novo jogo
var cancelar = function() {
    novoJogo();
}


//Função para o botão de salvar a palavra cadastrada e começar o jogo
var salvarComecar = function() {
    var digiteUmaPalavra = document.querySelector(".digiteUmaPalavra");

    //Convertendo a palavra para maiúscula
    var palavraOuFrase = digiteUmaPalavra.value.toUpperCase();
    //Caso seja vazio, gerar um alerta de aviso para cadastrar ou cancelar!
    if (palavraOuFrase == "") {
        alert("Favor inserir uma palavra ou clique no botão Cancelar!")
    } else {
        //Checando se a palavra cadastrada já existe no array de palavras cadastradas
        if (palavrasCadastradas.indexOf(palavraOuFrase) === -1) {
            //Se não tiver, será adicionada a palavra e criado o tabuleiro do jogo!
            palavrasCadastradas.push(palavraOuFrase);
            criarTelaInicial();
        } else {
            alert("Palavra já cadastrada! Favor cadastrar outra ou Cancelar!");
        }
    }
}

//Função para criar as letter, onde será salvo as letras digitadas na hora do jogo
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

//Criando as letters quando for começar o jogo, para adicionar os traços ao tabuleiro
var criandoAsLabelsLettes = function() {
    var letters = document.querySelectorAll("#letter");
    for (let index = 0; index < letters.length; index++) {
        let letter = letters[index];
        //Criando a label que vai ser inserida a letra
        var label = document.createElement("label");
        label.setAttribute("id", "labelLetter");
        letter.appendChild(label);

        //Criando a img do retangulo
        var img = document.createElement("img");
        img.setAttribute("src", "img/retangulo.png");
        img.setAttribute("class", "retangulo");
        letter.appendChild(img);
    }
}

//Função para criar o jogo em si
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
    criandoAsLabelsLettes();

    criandoBotoesAction();
}

//Função com a regra do jogo
var regraDoJogo = function() {
    var letra = teclaDigitada.toUpperCase();
    if (letra.length > 0) {
        letra = letra[0];
    }
    if (palavraOuFrase.indexOf(letra) > -1) {
        regraDeAcerto(letra);
    } else {
        regraDeErro(letra);
    }


}

//Função com a regra de acertos do jogo, onde irá preencher as letras certas no lugar certo
var regraDeAcerto = function(letra) {

    if (arrayDeLetrasCertas.indexOf(letra) > -1) {
        alert("Letra já foi digitada! Favor Digite novamente!")
    } else {
        arrayDeLetrasCertas.push(letra);
        var labelLetter = document.querySelectorAll("#labelLetter");
        for (var i = 0; i < palavraOuFrase.length; i++) {
            if (palavraOuFrase[i] == letra) {
                labelLetter[i].innerHTML = letra;
                totalDeAcertos++;
            }
        }
    }


    //Checando o placar se venceu o jogo!
    if (totalDeAcertos === palavraOuFrase.length) {
        youWin();
    }
}

//Função com a regra de erros do jogo, onde irá preencher as letras certas no lugar das letras erradas
var regraDeErro = function(letra) {
    if (arrayDeLetrasErradas.indexOf(letra) > -1) {
        alert("Letra já foi digitada! Favor Digite novamente!")
    } else {
        arrayDeLetrasErradas.push(letra);

        var otherLetters = document.getElementById("otherLetters");
        var textLabelOtherLetters = document.createElement("label");
        textLabelOtherLetters.setAttribute("class", "otherLetters");
        textLabelOtherLetters.setAttribute("type", "text");
        textLabelOtherLetters.innerHTML = letra;
        otherLetters.appendChild(textLabelOtherLetters);
        totalDeErros--;

        //Criando o desenho do boneco
        desenhandoBoneco();
    }

    //Checando o placar
    if (totalDeErros === 0) {
        youLose();
    }
}

//Função que desenha o boneco
var desenhandoBoneco = function() {
    //Local onde será criado o boneco
    var grupo5 = document.getElementById("grupo5");

    //Inicio dos elementos do boneco
    var cabeca = document.querySelector(".ellipse");
    if (cabeca === null) {
        cabeca = document.createElement("img");
        cabeca.setAttribute("class", "ellipse");
        cabeca.setAttribute("src", "./img/Ellipse.png");
    }

    var corpo = document.querySelector(".retangulo18");
    if (corpo === null) {
        corpo = document.createElement("img");
        corpo.setAttribute("class", "retangulo18");
        corpo.setAttribute("src", "./img/Rectangle 18.png");
    }

    var bracoDireito = document.querySelector(".retangulo21");
    if (bracoDireito === null) {
        bracoDireito = document.createElement("img");
        bracoDireito.setAttribute("class", "retangulo21");
        bracoDireito.setAttribute("src", "./img/Rectangle 21.png");
    }

    var bracoEsquerdo = document.querySelector(".retangulo22");
    if (bracoEsquerdo === null) {
        bracoEsquerdo = document.createElement("img");
        bracoEsquerdo.setAttribute("class", "retangulo22");
        bracoEsquerdo.setAttribute("src", "./img/Rectangle 22.png");
    }

    var pernaDireita = document.querySelector(".retangulo20");
    if (pernaDireita === null) {
        pernaDireita = document.createElement("img");
        pernaDireita.setAttribute("class", "retangulo20");
        pernaDireita.setAttribute("src", "./img/Rectangle 20.png");
    }

    var pernaEsquerda = document.querySelector(".retangulo19");
    if (pernaEsquerda === null) {
        pernaEsquerda = document.createElement("img");
        pernaEsquerda.setAttribute("class", "retangulo19");
        pernaEsquerda.setAttribute("src", "./img/Rectangle 19.png");
    }
    //Fim dos elementos do boneco

    //Switch para desenha o boneco, conforme a pontuação
    switch (totalDeErros) {
        case 5:
            grupo5.appendChild(cabeca);
            break;
        case 4:
            grupo5.appendChild(corpo);
            break;
        case 3:
            grupo5.appendChild(bracoEsquerdo);
            break;
        case 2:
            grupo5.appendChild(bracoDireito);
            break;
        case 1:
            grupo5.appendChild(pernaEsquerda);
            break;
        case 0:
            grupo5.appendChild(pernaDireita);
            break;
        default:
            break;
    }

}

//Função de alerta de vencedor!
var youWin = function() {
    criarDiv("voceVenceu", "container");
    var divVoceVenceu = document.getElementById("voceVenceu");
    var voceVenceu = document.createElement('label');
    voceVenceu.setAttribute("class", "voceVenceu");
    voceVenceu.innerHTML = "Você Venceu. Parabéns!";
    divVoceVenceu.appendChild(voceVenceu);
    pararCapturarLetraDoTeclado();
}

//Função de alerta de perdedor!
var youLose = function() {
    criarDiv("vocePerdeu", "container");
    var divVocePerdeu = document.getElementById("vocePerdeu");
    var vocePerdeu = document.createElement('label');
    vocePerdeu.setAttribute("class", "vocePerdeu");
    vocePerdeu.innerHTML = "Você Perdeu!";
    divVocePerdeu.appendChild(vocePerdeu);
    pararCapturarLetraDoTeclado();
}

//Função para criar os botões de ação do jogo
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

//Função para começar um novo jogo
var novoJogo = function() {
    totalDeAcertos = 0;
    totalDeErros = 6;
    arrayDeLetrasErradas = [];
    arrayDeLetrasCertas = [];

    //Para o evento de ouvir as teclas digitas!
    pararCapturarLetraDoTeclado();

    //Condições para remover os elementos em caso existente
    var grupo5 = document.getElementById("grupo5");
    if (grupo5 !== null) {
        grupo5.remove();
    }


    var keyboard = document.getElementById("keyboard");
    if (keyboard !== null) {
        keyboard.remove();
    }


    var actions = document.getElementById("actions");
    if (actions != null) {
        actions.remove();
    }

    var divVoceVenceu = document.getElementById("voceVenceu");
    if (divVoceVenceu != null) {
        divVoceVenceu.remove();
    }

    var divVocePerdeu = document.getElementById("vocePerdeu");
    if (divVocePerdeu != null) {
        divVocePerdeu.remove();
    }


    criarTelaInicial();

}

//Função para desistir do jogo e começar tudo do zero
var desistir = function() {
    let confirma = confirm("Deseja Desistir?");
    if (confirma) {
        window.location.assign("./index.html");
    }
}


//Função para ouvir as teclas digitadas, salvar a tecla digitada na variavél e chamar a função com a regra do jogo
function ouvirKeypress(event) {
    var letra = event.key;
    //Checando se a tecla digitada é uma letra
    if (alfabeto.indexOf(letra.toUpperCase()) !== -1) {
        teclaDigitada = event.key;
        regraDoJogo();
    } else {
        alert("Favor Digitar uma Letra!")
    }

}

//Função para capturar a teclas digitadas
function capturarLetraDoTeclado() {
    document.addEventListener('keypress', ouvirKeypress);

}

//Função para parar o evento que captura as teclas digitadas
function pararCapturarLetraDoTeclado() {
    document.removeEventListener('keypress', ouvirKeypress)
}