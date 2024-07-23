const botaoPostar = document.getElementById("botao_postar")

botaoPostar.addEventListener('click', adicionarTweet)


function adicionarTweet(){

   const containerPostagens = document.querySelector("div.tweets_postados")
   const imagemAnexada = document.getElementById('btn-1').files[0];

    const inputLegenda = document.querySelector("input.input_adicionar_publicacao")
    const legendaPublicacao = inputLegenda.value

    if(legendaPublicacao.length == 0 && imagemAnexada == undefined){
        console.log("escreva ou envie alguma coisa...")
        return
    }

    const classContainerPublicacao = document.querySelector("div.container_publicacao")

    const publicacaoNova = classContainerPublicacao.cloneNode(true);

    if (imagemAnexada !== undefined) {

        const imgPublicacaoNova = publicacaoNova.querySelector("#foto_post");
        imgPublicacaoNova.src = URL.createObjectURL(imagemAnexada);

    }else{
        publicacaoNova.setAttribute("class", "container_publicação_sem_image")
        publicacaoNova.removeChild(publicacaoNova.querySelector("#foto_post"))
    }

    const textoPublicacaoNova = publicacaoNova.getElementsByTagName('p');
    textoPublicacaoNova[1].innerHTML = legendaPublicacao

    containerPostagens.insertAdjacentElement('afterbegin', publicacaoNova)

}