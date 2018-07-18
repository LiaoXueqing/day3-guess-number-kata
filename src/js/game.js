"use stirct";

function game(){
    console.log("Guess Number Game, You have 6 chances to guess!");
    let count = 6;
    let randomArray = generator();
    while(count!=0){
        let guessNumber = "1 2 3 4";
        let guessArray = guessNumber.split(" ");
        //输入检测通过
        if(checkGuessNumber(guessArray)){
            let result = guess(guessArray,randomArray);
            if(result=="4A0B"){
                console.log("Success!");
                return ;
            }
        }
        count--;
    }
    console.log("Failure!");
    return ;
}

function guess(guessArray,randomArray){
    let countA = 0;
    let countB = 0;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(i==j&&randomArray[i]==guessArray[i]){
                countA++;
            }else if(randomArray[i]==guessArray[j]){
                countB++;
            }
        }
    }
    console.log(countA+"A"+countB+"B");
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
game();