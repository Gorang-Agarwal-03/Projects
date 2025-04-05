let gameseq =[];
let userseq =[];
let btns = ["yellow","red","blue","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started =true;

        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnFlash(randbtn);
}
function checkAns(indx){
   // console.log(level);
   if(userseq[indx] == gameseq[indx]){
       if(userseq.length == gameseq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score:<b>${level}<b> <br> Press Any Key To Start Again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },100)
        Reset();
    }

}

function btnpress(){
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function Reset(){
    started = false;
    userseq =[];
    gameseq = [];
    level=0;
}