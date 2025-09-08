import {PALAVRAS_RUINS} from " ./palavrasruins";

const botaomostrapalavras = document.querySelector ('#botaopalavrachave');

botaomostrapalavras.addEventListener ('click' , mostrapalavraschave);

function mostraPalavraschave () {
    const texto = document.querySelector('entrada-de-texto').value;
    const camporesultado = document.querySelector('#resultado-palavrachave')
    const palavrachave = processaTexto(texto);

    camporesultado.textContent = mostraPalavraschave.join(",");
}