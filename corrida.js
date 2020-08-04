let raceNumber = Math.floor(Math.random() * 1000);
let early=true;
let idade=18;
if (idade > 18 && early){
    raceNumber=raceNumber+1000
}
if (idade > 18){
    if (early){
        console.log("Seu número é " + raceNumber + " e você correrá às 9:30h")
    } else {
        console.log("Seu número é " + raceNumber + " e você correrá às 11:00h")
    }
} else if (idade<18){
    console.log("Seu número é " + raceNumber + " e você correrá às 12:30h")
    } else {
        console.log("Procure o balcão de inscrições")
    }
