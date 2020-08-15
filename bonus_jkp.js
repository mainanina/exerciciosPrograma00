const getUserChoice = (resposta) => {
    resposta=resposta.toLowerCase();
    if ((resposta=="pedra")|| (resposta=="papel") || (resposta=="tesoura")||(resposta=="bomba")){
        return resposta;
    } else {
        return "error"
    }
}
const getComputerChoice = () => {
    var computerInput=Math.floor(Math.random()*3);
    var computerChoice="";
    switch (computerInput){
        case 0:
            computerChoice = "papel";
            break;
        case 1:
            computerChoice = "pedra";
            break;
        default:
            computerChoice = "tesoura";         
    }
    return computerChoice;
}
const determineWinner = (usuario, comp) => {
    if (usuario==comp){
        return("Foi empate!")
    } else if (usuario=="papel"){
        if (comp=="pedra"){
            return("Você venceu!")
        } else {
            return("Você perdeu!")
        }
    } else if (usuario=="pedra"){
        if (comp=="tesoura"){
            return("Você venceu!")
        } else {
            return("Você perdeu!")
        }    
    } else if (usuario=="bomba"){
        return("Parabéns! Vc descobriu o código secreto e venceeeeu!!!")
    } else {
        if (comp=="papel"){
            return("Você venceu!")
        } else {
            return("Você perdeu!")
        };
    }
}
function playgame(){
    var voce = getUserChoice("nada a ver")
    var comp = getComputerChoice()
    if (voce!="error"){
    console.log("Você escolheu " + voce)
    console.log("O seu adversário escolheu " + comp);
    console.log (determineWinner(voce, comp))
    } else {
        console.log("O que você escolheu não vai funcionar. Você deve escolher pedra, papel ou tesoura.")
    }
}
playgame()
