const hr=document.querySelector(".hour");
const min=document.querySelector(".minute");
const sec=document.querySelector(".second");

function updateClock(){
    const currentDate=new Date();
    setTimeout(updateClock,1000);
    const h=currentDate.getHours();
    const m=currentDate.getMinutes();
    const s=currentDate.getSeconds();

    const hourDeg=(h/12)*360;
    hr.style.transform=`rotate(${hourDeg}deg)`;

    const minDeg=(m/60)*360;
    min.style.transform=`rotate(${minDeg}deg)`;

    const secDeg=(s/60)*360;
    sec.style.transform=`rotate(${secDeg}deg)`;
}

setInterval(updateClock,1000);