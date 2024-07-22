const botaoCadastro = document.getElementById("botaoCadastro")


function mudarVisibilidadeSenha(){
    const inputSenha = document.querySelector("input#input_senha")
    const iconeSenha = document.querySelector("img#img_visor_senha")

    if(inputSenha.type == "text"){
        inputSenha.type = "password"
        iconeSenha.src = "invisible.png"
    }else{
        inputSenha.type = "text"
        iconeSenha.src = "visibility.png"
    }

}

function mudarVisibilidadeConfirmarSenha(){
    const inputSenha = document.querySelector("input#input_confirmar_senha")
    const iconeSenha = document.querySelector("img#img_visor_confirmar_senha")

    if(inputSenha.type == "text"){
        inputSenha.type = "password"
        iconeSenha.src = "invisible.png"
    }else{
        inputSenha.type = "text"
        iconeSenha.src = "visibility.png"
    }


}


function entrarPaginaFeed(e){
    window.location.href = 'feed.html'
    e.preventDefault();
}

botaoCadastro.addEventListener('click', entrarPaginaFeed)
