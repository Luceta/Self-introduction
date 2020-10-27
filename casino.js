const rangeNumber = document.querySelector("h2"),
      rangeInput = document.getElementById("rangenum"),
       userValue = rangeInput.value;

const userNum = document.getElementById("userchoice");
const guessBox = document.querySelector(".numberbox");
const userNumber = document.querySelector(".usernumber");
const result = document.querySelector(".result");


function rangeNum() {
  const value = rangeInput.value;
  rangeNumber.innerHTML = `Generate a number between 0 and ${value}`;
  return value;
}

function genRandom(){
  const userValue = rangeNum();
  const number = Math.floor(Math.random() * userValue);
  return number;
}
//유저 숫자 체크와 머신 숫자 체크
function checkNum(){
    const number = userNum.value;
    
  
    guessBox.innerText = `You Chose :${number} machine chose:${genRandom()}`;
    if(number === userValue){
    
    result.innerTex = "You win!"
    }
    else{
    result.innerText = "You lost!"
    }
  }

function init() {
  userNumber.addEventListener("click",checkNum);
  rangeInput.addEventListener("input", rangeNum);
}
init();