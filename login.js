
function mudarVisibilidade(){
    const inputSenha = document.querySelector("input.inputEscrever_senha")
    const iconeSenha = document.querySelector("img.Icone_visibilidade")

    if(inputSenha.type == "text"){
        inputSenha.type = "password"
        iconeSenha.src = "invisible.png"
    }else{
        inputSenha.type = "text"
        iconeSenha.src = "visibility.png"
    }


}

function entrarPaginaFeed(){
    window.location.href = 'feed.html';
}