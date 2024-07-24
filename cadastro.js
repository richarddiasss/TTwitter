const botaoCadastro = document.getElementById("botaoCadastro")

const iconeConfirmarSenha = document.querySelector("img#img_visor_confirmar_senha")
const iconeSenha = document.querySelector("img#img_visor_senha")

iconeSenha.addEventListener('click', mudarVisibilidade);
iconeConfirmarSenha.addEventListener('click', mudarVisibilidade);


function mudarVisibilidade() {
    const iconeSenha = document.getElementById(this.id);
    const inputSenha = iconeSenha.parentNode.getElementsByTagName("input")[0];

    if (inputSenha.type === "text") {
        inputSenha.type = "password";
        iconeSenha.src = "IMG/invisible.png";
    } else {
        inputSenha.type = "text";
        iconeSenha.src = "IMG/visibility.png";
    }
}


function entrarPaginaFeed(e){
    window.location.href = 'feed.html'
    e.preventDefault();
}

function MudarParaDate(){
    const date = document.getElementById("inputDate")
    date.type = "date"
    console.log("teste")
}


botaoCadastro.addEventListener('click', entrarPaginaFeed)
