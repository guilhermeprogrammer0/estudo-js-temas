let temaCard = localStorage.getItem("tema");
let botoes = document.querySelectorAll(".btnCores");
let cardBody = document.querySelector(".card-body");
botoes.forEach((botao)=>{
    botao.addEventListener('click', mudaCor);
})
function mudaCor(event){
    cardBody.className = 'card-body'
    switch(event.target.className.substring(9,30)){
        case "preto":
            cardBody.classList.add("preto");
            localStorage.setItem("tema","preto");
            break;
            case "azul":
                cardBody.classList.add("azul");
                localStorage.setItem("tema","azul");
                break;
                case "vermelho":
                    cardBody.classList.add("vermelho");
                    localStorage.setItem("tema","vermelho");
                    break;
                    case "verde":
                        cardBody.classList.add("verde");
                        localStorage.setItem("tema","verde");
                        break;
                        case "branco":
                            cardBody.classList.add("branco");
                            localStorage.setItem("tema","branco");
                            break;
                            default:
                                cardBody.classList.add("branco");
                                localStorage.setItem("tema","branco");
                                break;
    }
}
switch(temaCard){
    case "preto":
            cardBody.classList.add("preto");
            break;
            case "azul":
                cardBody.classList.add("azul");
                break;
                case "vermelho":
                    cardBody.classList.add("vermelho");
                    break;
                    case "verde":
                        cardBody.classList.add("verde");
                        break;
                        case "branco":
                            cardBody.classList.add("branco");
                            break;
                            default:
                                cardBody.classList.add("branco");
                                break;
    }
