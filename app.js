let gameSeq=[];
let userSeq=[];
let btns = ["red","yellow","green","purple"];
let started = false;
let level =0;
let hlevel =0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    if(hlevel <  level){
        hlevel = level;
    }
    h3.innerText = `Highest Level ${hlevel}`;

    //random button choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randbtn);
    // console.log(randColor);
    // console.log(randIdx+1);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function cheackAns(idx){
   // console.log("current level : ",level);
   //let idx = level-1;
   if(userSeq[idx] == gameSeq[idx]){
    //console.log("same value");
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
   }
   else{
    h2.innerHTML = `Game Over! <br>Your Score was <b>${level}</b><br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },100);
    reset();
   }
}

function btnPress(){
    //console.log("btn was pressed");
    //console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    cheackAns(userSeq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}