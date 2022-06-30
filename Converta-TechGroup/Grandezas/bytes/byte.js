window.onload = () =>  {
    let valor = document.getElementById('valor').value;
    var option = document.getElementById('select')
};

function resultado()
{
    var x = select.value;
    var valor = document.getElementById('valor').value;
    if(Number(x) == 1) //byte selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} bytes equivale a aproximadamente: ${Number(valor) / 1000000} MB`
        r2.innerHTML = `${valor} bytes equivale a aproximadamente: ${Number(valor) / 1000000000} GB`
        r3.innerHTML = `${valor} bytes equivale a aproximadamente: ${Number(valor) / 1000000000000} TB`
    }
    else if(Number(x) == 2)//megabyte selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} megabytes equivale a aproximadamente: ${Number(valor) * 1000000} B`
        r2.innerHTML = `${valor} megabytes equivale a aproximadamente: ${Number(valor) / 1000} GB`
        r3.innerHTML = `${valor} megabytes equivale a aproximadamente: ${Number(valor) / 1000000} TB`
    }
    else if(Number(x) == 3)//gigabyte selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} gigabytes equivale a aproximadamente: ${Number(valor) * 1000000} B`
        r2.innerHTML = `${valor} gigabytes equivale a aproximadamente: ${Number(valor) * 1000} MB`
        r3.innerHTML = `${valor} gigabytes equivale a aproximadamente: ${Number(valor) / 1000} TB`
    }
    else //terabyte selecionados
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${valor} terabytes equivale a aproximadamente: ${Number(valor) / 1000000000000} B`
        r2.innerHTML = `${valor} terabytes equivale a aproximadamente: ${Number(valor) / 1000000} MB`
        r3.innerHTML = `${valor} terabytes equivale a aproximadamente: ${Number(valor) / 1000} GB`
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
