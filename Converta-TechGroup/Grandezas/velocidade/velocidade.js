window.onload = () =>  {
    let valor = document.getElementById('valor').value;
    var option = document.getElementById('select')
};

function resultado()
{
    var x = select.value;
    var valor = document.getElementById('valor').value;
    if(Number(x) == 1) //metro por segundo selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} metros por segundo equivale a aproximadamente: ${Number(valor) * 2,237} M/hr`
        r2.innerHTML = `${valor} metros por segundo equivale a aproximadamente: ${Number(valor) * 3,6} KM/hr`
        r3.innerHTML = `${valor} metros por segundo equivale a aproximadamente: ${Number(valor) * 1,944} nós`
    }
    else if(Number(x) == 2)//milha por hora selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} milhas por hora equivale a aproximadamente: ${Number(valor) / 2,237} m/s`
        r2.innerHTML = `${valor} milhas por hora equivale a aproximadamente: ${Number(valor) * 1,609} KM/hr`
        r3.innerHTML = `${valor} milhas por hora equivale a aproximadamente: ${Number(valor) / 1,151} nós`
    }
    else if(Number(x) == 3)//km por hora selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} quilômetros por hora equivale a aproximadamente: ${Number(valor) / 3,6} m/s`
        r2.innerHTML = `${valor} quilômetros por hora equivale a aproximadamente: ${Number(valor) / 1,609} M/hr`
        r3.innerHTML = `${valor} quilômetros por hora equivale a aproximadamente: ${Number(valor) / 1,852} nós`
    }
    else //nó selecionados
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} nós equivale a aproximadamente: ${Number(valor) / 1,944} m/s`
        r2.innerHTML = `${valor} nós equivale a aproximadamente: ${Number(valor) * 1,151} M/hr`
        r3.innerHTML = `${valor} nós equivale a aproximadamente: ${Number(valor) * 1,852} KM/hr`
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