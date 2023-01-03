let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
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
            document.getElementById("reset").innerHTML="Split";
            document.getElementById("reset").hidden = false;
            console.log("Running...");
            document.getElementById("start").innerHTML = "Pause";
            stopWatch();
           
        } else if(run){
            run=false;
            document.getElementById("start").innerHTML = "Resume";
            document.getElementById("reset").innerHTML= "Reset";
            run = false;
        }
       
       
    });

    resetBtn.addEventListener("click", myFunction1);
}


function myFunction1() {
    if(run){
    let first = document.getElementById("hr").innerHTML;
    let secondE = document.getElementById("min").innerHTML;
    let ThirdE = document.getElementById("sec").innerHTML;
    let FourthE = document.getElementById("milli").innerHTML;
    let answer = first + " Hr " + secondE + " Min " + ThirdE + " Sec " + FourthE;
    var completeList=document.getElementById("results");
    completeList.innerHTML+="<li>"+answer+"</li>";
    }
    else{
        run = false;
        document.getElementById("start").innerHTML = "Start";
        document.getElementById("reset").hidden = true;
        clear();
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
    if (!run) {
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