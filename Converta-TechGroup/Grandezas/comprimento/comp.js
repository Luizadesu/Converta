window.onload = () =>  {
    let valor = document.getElementById('valor').value;
    var option = document.getElementById('select')
};

function resultado()
{
    var x = select.value;
    var valor = document.getElementById('valor').value;
    if(Number(x) == 1) //milimetros selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} de Milímetro para Metros: ${Number(valor) * 1000} m`
        r2.innerHTML = `${Number(valor)} de Milímetro para Centímetros: ${Number(valor) * 10} cm`
        r3.innerHTML = `${Number(valor)} de Milímetro para Decímetro: ${Number(valor) * 100} dm`
        r4.innerHTML = `${Number(valor)} de Milímetro para Decâmetro: ${Number(valor) * 10000} dcm`
        r5.innerHTML = `${Number(valor)} de Milímetro para Hectômetro: ${Number(valor) * 100000} hm`
        r6.innerHTML = `${Number(valor)} de Milímetro para Quilômetro: ${Number(valor) * 1000000} KM`
    }
    else if(Number(x) == 2)//centimetro selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} de Centímetro para Milímetros: ${Number(valor) * 10} mm`
        r2.innerHTML = `${Number(valor)} de Centímetro para Metros: ${Number(valor) / 100} m`
        r3.innerHTML = `${Number(valor)} de Centímetro para Decímetro: ${Number(valor) / 1000} dm`
        r4.innerHTML = `${Number(valor)} de Centímetro para Decâmetro: ${Number(valor) / 10000} dcm`
        r5.innerHTML = `${Number(valor)} de Centímetro para Hectômetro: ${Number(valor) / 100000} hm`
        r6.innerHTML = `${Number(valor)} de Centímetro para Quilômetro: ${Number(valor) / 1000000} KM`
    }
    else if(Number(x) == 3)//decimetro selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} de Decímetro para Milímetros: ${Number(valor) * 100} mm`
        r2.innerHTML = `${Number(valor)} de Decímetro para Centímetros: ${Number(valor) * 10} cm`
        r3.innerHTML = `${Number(valor)} de Decímetro para Metro: ${Number(valor) / 10} m`
        r4.innerHTML = `${Number(valor)} de Decímetro para Decâmetro: ${Number(valor) / 100} dcm`
        r5.innerHTML = `${Number(valor)} de Decímetro para Hectômetro: ${Number(valor) / 1000} hm`
        r6.innerHTML = `${Number(valor)} de Decímetro para Quilômetro: ${Number(valor) / 10000} KM`
    }
    else if(Number(x) == 4)//metro selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} de Metro para Milímetros: ${Number(valor) * 1000} mm`
        r2.innerHTML = `${Number(valor)} de Metro para Centímetros: ${Number(valor) * 100} cm`
        r3.innerHTML = `${Number(valor)} de Metro para Decímetro: ${Number(valor) * 10} dm`
        r4.innerHTML = `${Number(valor)} de Metro para Decâmetro: ${Number(valor) / 10} dcm`
        r5.innerHTML = `${Number(valor)} de Metro para Hectômetro: ${Number(valor) / 100} hm`
        r6.innerHTML = `${Number(valor)} de Metro para Quilômetro: ${Number(valor) / 1000} KM`
    }
    else if(Number(x) == 5)//decametro selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} de Decâmetro para Milímetros: ${Number(valor) * 10000} mm`
        r2.innerHTML = `${Number(valor)} de Decâmetro para Centímetros: ${Number(valor) * 1000} cm`
        r3.innerHTML = `${Number(valor)} de Decâmetro para Decímetro: ${Number(valor) * 100} dm`
        r4.innerHTML = `${Number(valor)} de Decâmetro para Metro: ${Number(valor) * 10} m`
        r5.innerHTML = `${Number(valor)} de Decâmetro para Hectômetro: ${Number(valor) / 10} hm`
        r6.innerHTML = `${Number(valor)} de Decâmetro para Quilômetro: ${Number(valor) / 100} KM`
    }
    else if(Number(x) == 6)//hectometro selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} de Hectômetro para Milímetros: ${Number(valor) * 100000} mm`
        r2.innerHTML = `${Number(valor)} de Hectômetro para Centímetros: ${Number(valor) * 10000} cm`
        r3.innerHTML = `${Number(valor)} de Hectômetro para Decímetro: ${Number(valor) * 1000} dm`
        r4.innerHTML = `${Number(valor)} de Hectômetro para Decâmetro: ${Number(valor) * 100} dcm`
        r5.innerHTML = `${Number(valor)} de Hectômetro para Metro: ${Number(valor) * 10} m`
        r6.innerHTML = `${Number(valor)} de Hectômetro para Quilômetro: ${Number(valor) / 10} KM`
    }
    else //quilometro selecionadoh
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} de KM para Milímetros: ${Number(valor) * 1000000} mm`
        r2.innerHTML = `${Number(valor)} de KM para Centímetros: ${Number(valor) * 100000} cm`
        r3.innerHTML = `${Number(valor)} de KM para Decímetro: ${Number(valor) * 10000} dm`
        r4.innerHTML = `${Number(valor)} de KM para Decâmetro: ${Number(valor) * 100} dcm`
        r5.innerHTML = `${Number(valor)} de KM para Hectômetro: ${Number(valor) * 10} hm`
        r6.innerHTML = `${Number(valor)} de KM para Metro: ${Number(valor) * 1000} m`
    }
    document.getElementById('personaRodape').innerHTML = `  <!-- Imagem inicial da persona -->
    <div style="position: relative; margin-left: 25%;">
      <div class="row">
        <div class="col-9">
          <p id="textoPersona" style="bottom: -30px;">Agora que você ja tem o resultado <br> Que tal aprender mais sobre?<br> Assista o vídeo abaixo <br> para adquirir mais conhecimento!<br> <a href="https://www.youtube.com/watch?v=zs9tPJGpNNo">Vídeo</a></p>
          <img src="/persona.png" alt="" id="persona">
        </div>
      </div>
    </div>
  
    <!-- Rodapé e botões de avaliações -->
    <div id="footer">
      <div class="col-lg-3">
        <a href="/SAC/avaliaçoes/avaliacoesusuarios.html">
          <!--botao para abrir pagina de avaliações-->
          <button type="button" class="btn btn-primary" style="margin: 30px;">Realizar avaliação do site</button>
        </a>
        <div class="row">
          <a href="/SAC/sugestoes/sugestoes.html">
            <!--botao para abrir pagina de novas sugestões-->
            <button type="button" class="btn btn-secondary" style="margin-left: 30px; margin-top: -20px;">Entre
              em contato conosco ou dê
              sugestões</button>
          </a>
        </div>
      </div>
  
      <footer style=" width: 100%; height: 2.5rem; margin-top: 10px;">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <p class="footertext">© 2022 Copyright: Desenvolvimento de Interfaces Web -
            <b>ICEI PUC MINAS</b>
          </p>
        </div>
      </footer>
    </div>`
}
