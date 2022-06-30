window.onload = () => {
    let bt = document.getElementById('bt');
    let resultado = document.getElementById('resultado');
    var valor = document.getElementById('valor');
    var option1 = document.getElementById('text1');
    var option2 = document.getElementById('text2');
};

window.oninput = () => {

    var valor = document.getElementById('valor');

    var moedas = new Array()
    moedas[0] = 1;
    moedas[1] = 0.19;
    moedas[2] = 0.18;
    moedas[3] = 0.16;
    moedas[4] = 9.71;
    moedas[5] = 25.78;
    moedas[6] = 0.18;
    moedas[7] = 1.28;
    moedas[8] = 0.25;
    moedas[9] = 0.27;
    moedas[10] = 3.79;
    moedas[11] = 23.69;
    moedas[12] = 0.0000090;

    var nomeMoedas = new Array()
    nomeMoedas[0] = "Real Brasileiro";
    nomeMoedas[1] = "Dólar Americano";
    nomeMoedas[2] = "Euro";
    nomeMoedas[3] = "Libra Esterlina";
    nomeMoedas[4] = "Rublo";
    nomeMoedas[5] = "Iene Japonês";
    nomeMoedas[6] = "Franco Suíço";
    nomeMoedas[7] = "Yuan Chinês";
    nomeMoedas[8] = "Dólar Canadense";
    nomeMoedas[9] = "Dólar Australiano";
    nomeMoedas[10] = "Peso Mexicano";
    nomeMoedas[11] = "Peso Argentino";
    nomeMoedas[12] = "Bitcoin";


    
    var simMoedas = new Array()
    simMoedas[0] = "R$";
    simMoedas[1] = "$";
    simMoedas[2] = "€";
    simMoedas[3] = "£";
    simMoedas[4] = "₽";
    simMoedas[5] = "¥";
    simMoedas[6] = "Fr.";
    simMoedas[7] = "¥";
    simMoedas[8] = "C$";
    simMoedas[9] = "AU$";
    simMoedas[10] = "Mex$";
    simMoedas[11] = "$";
    simMoedas[12] = "₿";

    bt.onmouseenter = function () {
        var x = valor.value;
        var a = text1.value;
        var b = text2.value;

        for (var i = 0; i < moedas.length; i++) {
            if (i == a) {
                for (var j = 0; j < moedas.length; j++) {
                    if (j == b) {
                        convertido = ((Number(x) / moedas[i]) * moedas[j]).toFixed(5);
                        bt.onclick = () => resultado.innerHTML = '<b>Resultado:</b> <p>A conversão de <img class="flag" src="/flags/flag'+a+'.png" alt="">' +simMoedas[a]+ valor.value + ' em <img class="flag" src="/flags/flag'+b+'.png" alt="">' + nomeMoedas[b] + 
                        ' equivale a: </p><h2>' + simMoedas[b] + convertido + '</h2><p> </p><p> </p>'+
                        '<i>Última atualização dos valores 25 de jun. de 2022 18:55 UTC</i>';
                        
                    }
                }
            }
        }



        console.log(x);
        console.log(convertido);


        var esconde = document.getElementById('esconde');
        esconde.onclick = () => resultado.innerHTML = ' ';
    };


}

