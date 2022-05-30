var comecarJogar = function() {
    var divDigiteUmaPalavra = document.getElementById("digiteUmaPalavra");
    var digiteUmaPalavra = document.createElement("input");
    digiteUmaPalavra.setAttribute("class", "digiteUmaPalavra");
    digiteUmaPalavra.setAttribute("type", "text");
    digiteUmaPalavra.setAttribute("name", "digiteUmaPalavra");
    digiteUmaPalavra.setAttribute("placeholder", "Digite uma palavra ou frase");
    divDigiteUmaPalavra.appendChild(digiteUmaPalavra);
    removerBotoesIniciais();

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