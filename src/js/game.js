"use stirct";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomArray=[];
let guessCount = 0;
let result = "";
rl.on('close', function() {
    process.exit(0);
});
function startGame(){
    console.log("Guess Number Game, You have 6 chances to guess!");
    randomArray = generator();
    getInput();
}
function getInput(){
    rl.on('line',function(inputs){
        guessCount++;
        let guessArray = stringToInt(inputs.split(" "));
        if(checkGuessNumber(guessArray)){
            result = guess(guessArray,randomArray);
            console.log(result);
            if(result=="4A0B"||guessCount==6){
                rl.close();
                return ;
            }
        }else{
            getInput();
        }
    });
}
function stringToInt(array){
    return array.map(item=>parseInt(item));
}
function guess(guessArray,randomArray){
    let countA = 0;
    let countB = 0;
    for(let i=0;i<4;i++){
        if(randomArray[i]==guessArray[i]){
            countA++;
        }else{
            countB++;
        }     
    }
    return `${countA}A${countB}B`;
}

function checkGuessNumber(numberArray){
    let array = [];
    for (let i=0;i<numberArray.length;i++) {
        if(array.indexOf(numberArray[i])==-1) array.push(numberArray[i]);
    };
    if(numberArray.length==4 && array.length==4) return true;
    console.log("Wrong Input，Input again");
    return false;
}

function generator(){
    let randomArray = [];
    while(randomArray.length<4){
        let random = Math.floor(Math.random()*10);
        if(randomArray.indexOf(random)==-1){
            randomArray.push(random);
        }
    }
    return randomArray;
}
startGame();
