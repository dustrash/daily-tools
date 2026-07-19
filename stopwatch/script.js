document.addEventListener(
    "DOMContentLoaded",
    function(){
    
    
    let startTime = 0;
    
    let elapsedTime = 0;
    
    let timer = null;
    
    
    
    const display =
    document.getElementById("display");
    
    
    const start =
    document.getElementById("start");
    
    
    const pause =
    document.getElementById("pause");
    
    
    const reset =
    document.getElementById("reset");
    
    
    
    
    
    function updateDisplay(){
    
    
    let time =
    elapsedTime;
    
    
    let hours =
    Math.floor(
    time / 3600000
    );
    
    
    let minutes =
    Math.floor(
    (time % 3600000) / 60000
    );
    
    
    let seconds =
    Math.floor(
    (time % 60000) / 1000
    );
    
    
    let milliseconds =
    Math.floor(
    (time % 1000) / 10
    );
    
    
    
    display.innerText =
    
    String(hours).padStart(2,"0")
    +
    ":"
    +
    String(minutes).padStart(2,"0")
    +
    ":"
    +
    String(seconds).padStart(2,"0")
    +
    "."
    +
    String(milliseconds).padStart(2,"0");
    
    }
    
    
    
    
    
    function startTimer(){
    
    
    if(timer !== null){
    
    return;
    
    }
    
    
    startTime =
    Date.now() - elapsedTime;
    
    
    
    timer =
    setInterval(function(){
    
    
    elapsedTime =
    Date.now() - startTime;
    
    
    updateDisplay();
    
    
    },10);
    
    
    
    }
    
    
    
    
    
    function pauseTimer(){
    
    
    clearInterval(timer);
    
    timer=null;
    
    
    }
    
    
    
    
    
    function resetTimer(){
    
    
    clearInterval(timer);
    
    timer=null;
    
    
    elapsedTime=0;
    
    updateDisplay();
    
    
    }
    
    
    
    
    
    start.addEventListener(
    "click",
    startTimer
    );
    
    
    pause.addEventListener(
    "click",
    pauseTimer
    );
    
    
    reset.addEventListener(
    "click",
    resetTimer
    );
    
    
    
    updateDisplay();
    
    
    
    });