// QR 코드 생성기

const textInput = document.getElementById("qrText");
const createBtn = document.getElementById("createBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrcode");


// QR 생성 함수
function createQR() {

    const text = textInput.value.trim();


    // 입력 확인
    if (text === "") {

        alert("텍스트 또는 URL을 입력해주세요.");

        return;

    }


    // 기존 QR 삭제
    qrBox.innerHTML = "";


    // QR 생성
    new QRCode(qrBox, {

        text: text,

        width: 250,

        height: 250,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });

}



// QR 생성 버튼
createBtn.addEventListener(
    "click",
    createQR
);



// Enter 키로 생성
textInput.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Enter"){

            createQR();

        }

    }
);




// PNG 다운로드
downloadBtn.addEventListener(
    "click",
    function(){

        const img = qrBox.querySelector("img");


        if(!img){

            alert("먼저 QR 코드를 생성해주세요.");

            return;

        }


        const link = document.createElement("a");

        link.href = img.src;

        link.download = "qrcode.png";

        link.click();

    }
);