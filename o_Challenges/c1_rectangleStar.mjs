import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let piramide = "*"
let height = await userInput.question("Hoe hoog moet de piramide zijn? ")
let width = await userInput.question("Hoe breed moet de piramide zijn? ")
let whitespace = " "


for (let i = 1; i <= height; i++){
    if (i == 1 || i == height){
        console.log(piramide.repeat(width))
    }else{
        console.log(piramide + whitespace.repeat(width-2) + piramide)
    }
}
process.exit()