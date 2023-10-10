import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question("Kies de hoogte van de piramide? "))
let startLeft = false
let startTop = false
let piramide = "*"

if(startLeft == true && startTop == true){
    for(let i = 1; i <= hoogte; i++){
    console.log(piramide.repeat(i))
    }
}else if(startLeft == true){
        for(let i = hoogte; i >= 1; i--){
        console.log(piramide.repeat(i))
    }
}else if(startTop == true){
    for(let i = 1; i <= hoogte; i++){
        let whitspace = " "
        console.log(whitspace.repeat(hoogte-i) + piramide.repeat(i))
    }
}else{
    for(let i = hoogte; i >= 1; i--){
        let whitspace = " "
        console.log(whitspace.repeat(hoogte-i) + piramide.repeat(i))
    }
}
process.exit()