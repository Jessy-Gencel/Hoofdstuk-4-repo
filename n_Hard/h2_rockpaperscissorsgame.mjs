import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let speler;
let choices = ['rock', 'paper', 'scissors'];
let computerChoice; 
let playerWins = 0
let aiWins = 0

while(playerWins <= 2 && aiWins <= 2){
    speler = await userInput.question("Wil je rock, paper of scissors gooien? ")
    computerChoice = choices[Math.floor(Math.random()*choices.length)]

    console.log("You played " + speler + " the computer played " + computerChoice)
    
    if (speler == computerChoice){
        console.log("It's a draw go again!")
    }else{
        switch (speler){
            case "rock":
                if (computerChoice == "scissors"){
                    console.log("You win!")
                    playerWins += 1
                }else{
                    console.log("You lose :(")
                    aiWins += 1
                }
                break
            case "paper":
                if (computerChoice == "rock"){
                    console.log("You win!")
                    playerWins += 1
                }else{
                    console.log("You lose :(")
                    aiWins += 1
                }
                break
            case "scissors":
                if (computerChoice == "paper"){
                    console.log("You win!")
                    playerWins += 1
                }else{
                    console.log("You lose :(")
                    aiWins += 1
                }
                break
            default: 
            "I don't recognise that as a viable option."
        }
    }
}
if (playerWins > aiWins){
    console.log("You won against the evil ai")
}else{
    console.log("You failed, the ai's are taking over :(")
}
process.exit()