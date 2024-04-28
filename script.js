function randomNumber(max) {

    return Math.floor(Math.random() * max)

}
const correctAns = randomNumber(100);
let maxGuesses =5;
console.log(maxGuesses);
let continueGame = true;

 for (i = 0; i < maxGuesses; i++)

{
    let userAnser = prompt("Guess a number 0-100");// prompt always returns string even if its string so need ro parseint
    if (userAnser !== correctAns) {
        if (userAnser < correctAns) {
            alert("To low, go Heigher")
           
        }
        else if (userAnser > correctAns) {
           // alert("Too High,Go lower")
           setTimeout(()=>{alert("Too High,Go lower");},2000);
           
        }

    }
    if (parseInt(userAnser) === correctAns) {
        alert("congratulations, your answer is correct!");
        continueGame = true;
    }
    
       
    

}

 






