import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question("Bij welk getal beginnen we? "))
let end = parseFloat(await userInput.question("Bij welk getal eindingen we? "))
let deler1 = parseFloat(await userInput.question("Op welk getal testen we eerst? "))
let deler2 = parseFloat(await userInput.question("Op welk getal testen we hierna? "))

for (start; start <= end;start +=1){
    if (start % deler1 == 0 && start % deler2 == 0){
        console.log(start)
    }
}
process.exit()