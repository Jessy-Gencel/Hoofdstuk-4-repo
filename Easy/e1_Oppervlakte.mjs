import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let zijde1 = parseFloat(await userInput.question("Geef de lengte van de rechthoek "))
let zijde2 = parseFloat(await userInput.question("Geef de breedte van de rechthoek "))
let oppervlakte = zijde1*zijde2
console.log(oppervlakte)
process.exit()