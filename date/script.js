document.addEventListener(
    "DOMContentLoaded",
    function(){
    
    
    const date1 =
    document.getElementById("date1");
    
    const date2 =
    document.getElementById("date2");
    
    
    const calculate =
    document.getElementById("calculate");
    
    
    const result =
    document.getElementById("result");
    
    
    
    calculate.onclick=function(){
    
    
    if(!date1.value || !date2.value){
    
    alert("날짜를 선택하세요");
    
    return;
    
    }
    
    
    
    let start =
    new Date(date1.value);
    
    
    let end =
    new Date(date2.value);
    
    
    
    let diff =
    Math.abs(end-start);
    
    
    
    let days =
    Math.floor(
    diff/(1000*60*60*24)
    );
    
    
    
    result.innerText =
    `${days}일 차이입니다.`;
    
    
    
    };
    
    
    
    
    
    const baseDate =
    document.getElementById("baseDate");
    
    
    const days =
    document.getElementById("days");
    
    
    const futureResult =
    document.getElementById("futureResult");
    
    
    const add =
    document.getElementById("add");
    
    
    const subtract =
    document.getElementById("subtract");
    
    
    
    
    
    function calculateDate(amount){
    
    
    if(!baseDate.value){
    
    alert("기준 날짜를 선택하세요");
    
    return;
    
    }
    
    
    
    let date =
    new Date(baseDate.value);
    
    
    date.setDate(
    date.getDate()+amount
    );
    
    
    
    futureResult.innerText =
    
    date.getFullYear()
    +
    "년 "
    +
    (date.getMonth()+1)
    +
    "월 "
    +
    date.getDate()
    +
    "일";
    
    
    
    }
    
    
    
    
    
    add.onclick=function(){
    
    
    calculateDate(
    Number(days.value)
    );
    
    
    };
    
    
    
    subtract.onclick=function(){
    
    
    calculateDate(
    -Number(days.value)
    );
    
    
    };
    
    
    
    });