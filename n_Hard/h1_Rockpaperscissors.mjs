import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let speler = await userInput.question("Wil je rock, paper of scissors gooien? ")
let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)]

console.log("You played " + speler + " the computer played " + computerChoice)

switch (speler){
    case computerChoice == speler:
        console.log("Gelijke stand")
        break
    case "rock":
        if (computerChoice == "scissors"){
            console.log("You win!")
        }else{
            console.log("You lose :(")
        }
        break
    case "paper":
        if (computerChoice == "rock"){
            console.log("You win!")
        }else{
            console.log("You lose :(")
        }
        break
    case "scissors":
        if (computerChoice == "paper"){
            console.log("You win!")
        }else{
            console.log("You lose :(")
        }
        break
    default: 
    "I don't recognise that as a viable option."
}
process.exit()