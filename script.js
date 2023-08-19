function makeBubble(){
    let clutter="";
let rn;
for( let i=1;i<=150;i++){
    rn=Math.floor(Math.random()*10)
   clutter+=`<div class="bubble"> ${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}
let timer=60;
let hitrn=0;
let score=0;
function runTimer(){
    let timerInt=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1> Game Over </h1>`;
        }
    },1000)
}

function getNewHit(){
   hitrn=Math.floor(Math.random()*10)
   document.querySelector("#hitNumber").textContent=hitrn;
}

function increaseScore(){
    score+=1;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    let clickedNum=(Number(dets.target.textContent))
    if(clickedNum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


makeBubble();
runTimer();
getNewHit();


