document.addEventListener("DOMContentLoaded", function () {


    let time = 0;
    let timer = null;


    const display = document.getElementById("display");

    const minute = document.getElementById("minute");

    const second = document.getElementById("second");


    const start = document.getElementById("start");

    const pause = document.getElementById("pause");

    const reset = document.getElementById("reset");



    // 요소 확인
    if (
        !display ||
        !minute ||
        !second ||
        !start ||
        !pause ||
        !reset
    ) {

        console.error("HTML 요소를 찾을 수 없습니다.");

        return;

    }



    // 화면 표시

    function updateDisplay() {


        let m = Math.floor(time / 60);

        let s = time % 60;


        display.innerText =
            String(m).padStart(2, "0")
            +
            ":"
            +
            String(s).padStart(2, "0");

    }




    // 시작 버튼

    start.addEventListener("click", function () {


        if (timer !== null) {

            return;

        }



        // 처음 시작할 때 시간 입력

        if (time === 0) {


            time =
                (Number(minute.value) || 0) * 60
                +
                (Number(second.value) || 0);


        }



        if (time <= 0) {


            alert("시간을 설정해주세요.");

            return;

        }




        timer = setInterval(function () {


            time--;

            updateDisplay();



            if (time <= 0) {


                clearInterval(timer);

                timer = null;


                alert("⏰ 시간이 끝났습니다!");


            }


        }, 1000);



    });





    // 일시정지

    pause.addEventListener("click", function () {


        clearInterval(timer);

        timer = null;


    });





    // 초기화

    reset.addEventListener("click", function () {


        clearInterval(timer);

        timer = null;


        time = 0;


        minute.value = "";

        second.value = "";


        updateDisplay();


    });





    // 처음 표시

    updateDisplay();



});