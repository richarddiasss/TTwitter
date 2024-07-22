const botaoPostar = document.getElementById("botao_postar")

botaoPostar.addEventListener('click', adicionarTweet)


function adicionarTweet(){

   const containerPostagens = document.querySelector("div.tweets_postados")


    const inputLegenda = document.querySelector("input.input_adicionar_publicacao")
    const legendaPublicacao = inputLegenda.value

    if(legendaPublicacao.length == 0){
        console.log("escreva alguma coisa...")
        return
    }
    //console.log(legendaPublicacao)
    
    const classContainerPublicacao = document.querySelector("div.container_publicacao")

    const publicacaoNova = classContainerPublicacao.cloneNode(true);

    const textoPublicacaoNova = publicacaoNova.getElementsByTagName('p');
    textoPublicacaoNova[1].innerHTML = legendaPublicacao

    containerPostagens.insertAdjacentElement('afterbegin', publicacaoNova)

}