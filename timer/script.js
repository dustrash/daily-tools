let time = 0;

let timer = null;


const display =
document.getElementById("display");


const minute =
document.getElementById("minute");


const second =
document.getElementById("second");



const start =
document.getElementById("start");


const pause =
document.getElementById("pause");


const reset =
document.getElementById("reset");




// 시간 표시

function updateDisplay(){

let m =
Math.floor(time / 60);


let s =
time % 60;


display.innerText =

String(m).padStart(2,"0")
+
":"
+
String(s).padStart(2,"0");

}



// 시작

start.onclick=function(){


if(timer) return;



if(time===0){

time =
(Number(minute.value)||0)*60
+
(Number(second.value)||0);

}



if(time<=0){

alert("시간을 설정하세요");

return;

}



timer =
setInterval(function(){


time--;


updateDisplay();



if(time<=0){


clearInterval(timer);

timer=null;


alert("⏰ 시간이 종료되었습니다!");

}


},1000);


};




// 일시정지

pause.onclick=function(){

clearInterval(timer);

timer=null;

};




// 초기화

reset.onclick=function(){

clearInterval(timer);

timer=null;

time=0;

updateDisplay();


minute.value="";

second.value="";


};



updateDisplay();