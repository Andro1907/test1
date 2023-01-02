let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let splitBtn = document.getElementById("split");
let run = false;
let hour = 0;
let minute = 0;
let second = 0;
let millisec = 0;

function initMethod() {
    console.log("Init Method");
    startBtn.addEventListener("click", function () {

        if (!run) {
            run = true;
            document.getElementById("split").hidden = false;
            console.log("Running...");
            document.getElementById("start").innerHTML = "Pause";
        } else {
            // console.log("Already Running...");
            document.getElementById("start").innerHTML = "Resume";
            run = false;
        }
        stopWatch();
    });

    splitBtn.addEventListener("click", myFunction);

    resetBtn.addEventListener("click", myFunction1);
}

function myFunction1() {
    if(run) return;
    run = false;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("split").hidden = true;
    clear();
}

function removeHandler() {
    document.getElementById("result").innerHTML = "";
}



function myFunction() {
    if(run){
    let first = document.getElementById("hr").innerHTML;
    let secondE = document.getElementById("min").innerHTML;
    let ThirdE = document.getElementById("sec").innerHTML;
    let FourthE = document.getElementById("milli").innerHTML;
    let answer = first + " Hr " + secondE + " Min " + ThirdE + " Sec " + FourthE;
    var completeList=document.getElementById("results");
    completeList.innerHTML+="<li>"+answer+"</li>";
    }
}


function stopWatch() {
    if (run) {
        millisec++;

        if (millisec == 100) {
            second++;
            millisec = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrCalc = hour;
        let minCalc = minute;
        let secCalc = second;
        let milliCalc = millisec;

        if (hour < 10) {
            hrCalc = "0" + hrCalc;
        }
        if (minute < 10) {
            minCalc = "0" + minCalc;
        }
        if (second < 10) {
            secCalc = "0" + secCalc;
        }
        if (millisec < 10) {
            milliCalc = "0" + milliCalc;
        }

        document.getElementById("hr").innerHTML = hrCalc;
        document.getElementById("min").innerHTML = minCalc;
        document.getElementById("sec").innerHTML = secCalc;
        document.getElementById("milli").innerHTML = milliCalc;

        setTimeout(stopWatch, 10);
    }
}



function clear() {
    if (run == false) {
        hour = 0;
        minute = 0;
        second = 0;
        millisec = 0;

        document.getElementById("hr").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("milli").innerHTML = "00";
        document.getElementById("results").innerHTML="";
    }
}

window.onload = function(e){ 
    initMethod();
}