import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question("Bij welk getal beginnen we? "))
let end = parseFloat(await userInput.question("Bij welk getal eindingen we? "))
let deler1 = parseFloat(await userInput.question("Op welk getal testen we eerst? "))
let deelbaar1 = (await userInput.question("Moet het getal deelbaar zijn door dit eerste getal? "))
let deler2 = parseFloat(await userInput.question("Op welk getal testen we hierna? "))
let deelbaar2 = (await userInput.question("Moet het getal deelbaar zijn door dit tweede getal? "))

if (deelbaar1 == "nee"){
    deelbaar1 = false
}else{
    deelbaar1 = true
}
if (deelbaar2 == "nee"){
    deelbaar2 = false
}else{
    deelbaar2 = true
}

if(deelbaar1 == true && deelbaar2 == true){
    for (start; start <= end;start +=1){
        if (start % deler1 == 0 && start % deler2 == 0){
            console.log(start)
        }
    }
}else if (deelbaar1 == true){
    for (start; start <= end;start +=1){
        if (start % deler1 == 0){
            console.log(start)
        }
    }
}else if(deelbaar2 == true){
    for (start; start <= end;start +=1){
        if (start % deler2 == 0){
            console.log(start)
        }
    }
}else{
    for (start; start <= end;start +=1){
        console.log(start)
    }
}
process.exit()