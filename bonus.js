var userName="";
userName? console.log("Olá, " + userName) : console.log ("Olá!");
var userQuestion= prompt("Qual a sua pergunta?");
console.log(userQuestion);
var randomNumber=Math.floor(Math.random()*8);
var eightBall="";
switch (randomNumber){
    case 0:
        eightBall="Isso é certo!";
        break;
    case 1:
        eightBall="Definitivmente é isso mesmo.";
        break;
    case 2:
        eightBall="Pergunta nebulosa, hein? Pergunte novamente.";
        break;
    case 3:
        eightBall="Não é possível prever isso agora.";
        break;
    case 4:
        eightBall="Não conte com isso.";
        break;
    case 5:
        eightBall="Minhas fontes dizem que não.";
        break;     
    case 6:
        eightBall="Não parece certo.";
        break;         
    case 7:
        eightBall="Sinais apontam que sim.";
        break;
    default:
        eightBall="Depende...";
}
console.log(eightBall);  