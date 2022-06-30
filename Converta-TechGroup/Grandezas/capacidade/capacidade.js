window.onload = () =>  {
    let valor = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let valor3 = document.getElementById('valor3').value;
    var option = document.getElementById('select')
};

function verificaPoligono()
{
    var x = select.value;
    if (Number(x) == 1 || Number(x) == 2)
{
    grandeza1.innerHTML = `Comprimento:`
    grandeza2.innerHTML = `Profundidade:`
    grandeza3.innerHTML = `Altura do objeto:`
}
if (Number(x) == 3)
{
    grandeza1.innerHTML = `Comprimento da base:`
    grandeza2.innerHTML = `Largura da base:`
    grandeza3.innerHTML = `Altura da pirâmide:`
}
}
setInterval(verificaPoligono, 1000)

function resultado()
{
    var x = select.value;
    var valor = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    var valor3 = document.getElementById('valor3').value;
    if(Number(x) == 1) //cubo selecionado
    {
        r1.innerHTML = `Capacidade do cubo = ${valor * valor2 * valor3} metros cúbicos`
    }
    else if(Number(x) == 2)//paralelepipedo selecionado
    {
        r1.innerHTML = `Capacidade do paralelepípedo = ${valor * valor2 * valor3} metros cúbicos`
    }
    else if(Number(x) == 3)//piramide selecionado
    {
        r1.innerHTML = `Capacidade da pirâmide = ${valor * valor2 * valor3 / 3} metros cúbicos`
        conso
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