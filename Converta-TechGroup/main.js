window.onload = () => {
    resolucao = screen.width
    if (resolucao < 900) {
            let logotipo = document.querySelector('#logotipo')
            logotipo.setAttribute('src', '/logo.png')
            logotipo.style.width = '100%'
    }
}

let nome = localStorage.getItem(usuarioCorrente)
console.log(nome)