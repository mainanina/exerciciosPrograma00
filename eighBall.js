var userName="";
userName? console.log("Olá, " + userName) : console.log ("Olá!");
var userQuestion= prompt("Qual a sua pergunta?");
console.log(userQuestion);
var randomNumber=Math.floor(Math.random()*8);
var eightBall="";
if (randomNumber==0){
    eightBall="Isso é certo!"
    } else if (randomNumber==1){
        eightBall="Definitivmente é isso mesmo."
    } else if (randomNumber==2){
        eightBall="Pergunta nebulosa, hein? Pergunte novamente."
    } else if (randomNumber==3){
        eightBall="Não é possível prever isso agora."
    } else if (randomNumber==4){
        eightBall="Não conte com isso."
    } else if (randomNumber==5){
        eightBall="Minhas fontes dizem que não."
    } else if (randomNumber==6){
        eightBall="Não parece bom."
    } else if (randomNumber==7){  
        eightBall="Sinais apontam que sim."   
    } else {
    eightBall="Depende"
    };
console.log(eightBall);                                
