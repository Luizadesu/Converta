window.onload = () =>  {
    let valor = document.getElementById('valor').value;
    var option = document.getElementById('select')
};

function resultado()
{
    var x = select.value;
    var valor = document.getElementById('valor').value;
    if(Number(x) == 1) //miligrama selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} miligramas equivale a: ${(Number(valor) / 1000)} gramas`
        r2.innerHTML = `${Number(valor)} miligramas equivale a: ${(Number(valor) / 1000000)} quilogramas`
        r3.innerHTML = `${Number(valor)} miligramas equivale a: ${(Number(valor) / 1000000000)} toneladas`
        r4.innerHTML = `${Number(valor)} miligramas equivale a: ${(Number(valor) / 453600)} libras`
    }
    else if(Number(x) == 2)//grama selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} gramas equivale a: ${(Number(valor) * 1000)} miligramas`
        r2.innerHTML = `${Number(valor)} gramas equivale a: ${(Number(valor) / 1000000)} quilogramas`
        r3.innerHTML = `${Number(valor)} gramas equivale a: ${(Number(valor) / 1000000000)} toneladas`
        r4.innerHTML = `${Number(valor)} gramas equivale a: ${(Number(valor) / 453,6)} libras`
    }
    else if(Number(x) == 3)//quilogramas selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} quilogramas equivale a: ${(Number(valor) * 1000000)} miligramas`
        r2.innerHTML = `${Number(valor)} quilogramas equivale a: ${(Number(valor) * 1000)} gramas`
        r3.innerHTML = `${Number(valor)} quilogramas equivale a: ${(Number(valor) / 1000000000)} toneladas`
        r4.innerHTML = `${Number(valor)} quilogramas equivale a: ${(Number(valor) * 2,205)} libras`
    }
    else if(Number(x) == 4) //toneladas selecionados
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} toneladas equivale a: ${(Number(valor) * 1000000000)} gramas`
        r2.innerHTML = `${Number(valor)} toneladas equivale a: ${(Number(valor) * 1000000)} miligramas`
        r3.innerHTML = `${Number(valor)} toneladas equivale a: ${(Number(valor) * 1000)} quilogramas`
        r4.innerHTML = `${Number(valor)} toneladas equivale a: ${(Number(valor) * 2205)} libras`
    }
    else //libras selecionados
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} libras equivale a: ${(Number(valor) * 453600)} miligramas`
        r2.innerHTML = `${Number(valor)} libras equivale a: ${(Number(valor) * 453,6)} gramas`
        r3.innerHTML = `${Number(valor)} libras equivale a: ${(Number(valor) / 2,205)} quilogramas`
        r4.innerHTML = `${Number(valor)} libras equivale a: ${(Number(valor) / 2205)} toneladas`
    }
    document.getElementById('personaRodape').innerHTML = `  <!-- Imagem inicial da persona -->
    <div style="position: relative; margin-left: 25%;">
      <div class="row">
        <div class="col-9">
          <p id="textoPersona" style="bottom: -30px;">Agora que voc?? ja tem o resultado <br> Que tal aprender mais sobre?<br> Assista o v??deo abaixo <br> para adquirir mais conhecimento!<br> <a href="https://www.youtube.com/watch?v=zs9tPJGpNNo">V??deo</a></p>
          <img src="/persona.png" alt="" id="persona">
        </div>
      </div>
    </div>
  
    <!-- Rodap?? e bot??es de avalia????es -->
    <div id="footer">
      <div class="col-lg-3">
        <a href="/SAC/avalia??oes/avaliacoesusuarios.html">
          <!--botao para abrir pagina de avalia????es-->
          <button type="button" class="btn btn-primary" style="margin: 30px;">Realizar avalia????o do site</button>
        </a>
        <div class="row">
          <a href="/SAC/sugestoes/sugestoes.html">
            <!--botao para abrir pagina de novas sugest??es-->
            <button type="button" class="btn btn-secondary" style="margin-left: 30px; margin-top: -20px;">Entre
              em contato conosco ou d??
              sugest??es</button>
          </a>
        </div>
      </div>
  
      <footer style=" width: 100%; height: 2.5rem; margin-top: 10px;">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <p class="footertext">?? 2022 Copyright: Desenvolvimento de Interfaces Web -
            <b>ICEI PUC MINAS</b>
          </p>
        </div>
      </footer>
    </div>`
}
