document.addEventListener(
    "DOMContentLoaded",
    function(){
    
    
    const category =
    document.getElementById("category");
    
    
    const value =
    document.getElementById("value");
    
    
    const from =
    document.getElementById("from");
    
    
    const to =
    document.getElementById("to");
    
    
    const result =
    document.getElementById("result");
    
    
    
    const units = {
    
    
    length:{
    
    m:"미터(m)",
    
    km:"킬로미터(km)",
    
    cm:"센티미터(cm)",
    
    mm:"밀리미터(mm)"
    
    },
    
    
    weight:{
    
    kg:"킬로그램(kg)",
    
    g:"그램(g)",
    
    mg:"밀리그램(mg)",
    
    lb:"파운드(lb)"
    
    },
    
    
    temperature:{
    
    c:"섭씨(℃)",
    
    f:"화씨(℉)"
    
    }
    
    
    };
    
    
    
    
    
    function loadUnits(){
    
    
    from.innerHTML="";
    
    to.innerHTML="";
    
    
    let list =
    units[category.value];
    
    
    for(let key in list){
    
    
    let option1 =
    document.createElement("option");
    
    
    option1.value=key;
    
    option1.text=list[key];
    
    
    let option2 =
    option1.cloneNode(true);
    
    
    
    from.appendChild(option1);
    
    to.appendChild(option2);
    
    
    }
    
    
    
    }
    
    
    
    function convert(){
    
    
    let num =
    Number(value.value);
    
    
    if(isNaN(num)){
    
    result.innerText="0";
    
    return;
    
    }
    
    
    
    let type =
    category.value;
    
    
    let f =
    from.value;
    
    
    let t =
    to.value;
    
    
    
    let answer=num;
    
    
    
    // 길이
    
    if(type==="length"){
    
    
    let meter={
    
    m:1,
    
    km:1000,
    
    cm:0.01,
    
    mm:0.001
    
    };
    
    
    answer =
    num * meter[f] / meter[t];
    
    
    }
    
    
    
    
    // 무게
    
    if(type==="weight"){
    
    
    let gram={
    
    kg:1000,
    
    g:1,
    
    mg:0.001,
    
    lb:453.592
    
    };
    
    
    answer =
    num * gram[f] / gram[t];
    
    
    }
    
    
    
    
    // 온도
    
    if(type==="temperature"){
    
    
    if(f==="c" && t==="f"){
    
    answer =
    num * 9/5 +32;
    
    }
    
    
    else if(f==="f" && t==="c"){
    
    answer =
    (num-32)*5/9;
    
    }
    
    
    }
    
    
    
    result.innerText =
    Number(answer.toFixed(4));
    
    
    }
    
    
    
    
    
    category.addEventListener(
    "change",
    function(){
    
    loadUnits();
    
    convert();
    
    });
    
    
    
    value.addEventListener(
    "input",
    convert
    );
    
    
    from.addEventListener(
    "change",
    convert
    );
    
    
    to.addEventListener(
    "change",
    convert
    );
    
    
    
    loadUnits();
    
    
    
    });