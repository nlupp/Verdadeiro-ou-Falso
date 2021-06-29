//variaveis globlais
var texto1 = $('#texto1');
var texto2 = $('#texto2');
let seletor = $('#seletor');
//indica o inicio do js após o dom estiver carregado 
$(document).ready(function () {
    $("#VerdadeiroOuFalso").submit(validar); // submete as informações passadas no dom
});

function validar() {
    let texto1TipoDeDado = verificarTipoDeDado(texto1.val());//verificações para o campo 1
    let texto2TipoDeDado = verificarTipoDeDado(texto2.val());//verificações para o campo 2
    let resulTab = calcularIgualdade(texto1TipoDeDado, texto2TipoDeDado, seletor.val()); // resultado
    tabdeValidacao(resulTab, texto1TipoDeDado, texto2TipoDeDado, seletor.val());
    //console.log(typeof texto1TipoDeDado);
    // console.log(typeof texto2TipoDeDado);
    //console.log(seletor.val());
    return false;
};

//calcula o tipo do dado que entrea em campo 1 e campo 2
function verificarTipoDeDado(valorCampo) {
    // quero que essa função reconheça o tipo do dado digitado em texto 1 e texto2

    //console.log(isNaN(texto1.val()));
    //console.log(isNaN(texto2.val()));
    if (isNaN(valorCampo) === false) {
        console.log("È um numero!");
        return Number(valorCampo);
    } else if (valorCampo.toLowerCase() === "true" || valorCampo.toLowerCase() === "false") {
        console.log("é um boleano");
        return valorCampo.toLowerCase() === "true";
    } else {
        console.log("é uma string")
        return valorCampo;
    }

};


function calcularIgualdade(texto1TipoDeDado, texto2TipoDeDado, seletor) {
    // calcula se os campos são iguais ou diferentes
    let resultado;
    console.log(texto1TipoDeDado);
    console.log(texto2TipoDeDado);

    switch (seletor) {
        case "==":
            resultado = texto1TipoDeDado == texto2TipoDeDado;
            break;
        case "!=":
            resultado = texto1TipoDeDado != texto2TipoDeDado;
            break;
        case "===":
            resultado = texto1TipoDeDado === texto2TipoDeDado;
            break;
        case "!==":
            resultado = texto1TipoDeDado !== texto2TipoDeDado;
            break;
        default:
            console.log('errou!');
            break;
    }
    console.log(resultado);

    return resultado;
}

//tabela dinamica
function tabdeValidacao(resulTab, texto1TipoDeDado, texto2TipoDeDado, seletor) {
    var tb = $("#tbResult tbody"); // chama tabela e corpo
    var linha = $('<tr>'); // 
    $(linha).append($('<td>').text(texto1TipoDeDado + seletor + texto2TipoDeDado));
    $(linha).append($('<td>').text(typeof texto1TipoDeDado + seletor + typeof texto2TipoDeDado));
    $(linha).append($('<td>').text(resulTab));
    $(tb).append(linha);


    console.log(resulTab);


    /*//celulas
    var coluValores = linha.insertCell(0);
    var coluTipos = linha.insertCell(1);
    var coluResult = linha.insertCell(2);

    coluValores.innerHTML = texto1TipoDeDado + seletor.val() + texto2TipoDeDado;
    console.log(coluValores);
    coluTipos.innerHTML = typeof texto1TipoDeDado + seletor.val() + typeof texto2TipoDeDado;
    console.log(typeof texto1TipoDeDado);
    //coluResult.innerHTML = */


}







