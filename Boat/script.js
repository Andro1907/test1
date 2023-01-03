function bookRide(){  
    let count=document.getElementById("noOfPersons").value;
    let boatType;
    let cal;
    if(document.getElementById("btype").value==="2SeaterBoat" && count<=2){
        cal=count*100;
    document.getElementById("result").innerHTML="You need to pay Rs."+cal;
    return false;
    }
    else if(document.getElementById("btype").value==="4SeaterBoat" && count<=4){
        cal=count*150;
    document.getElementById("result").innerHTML="You need to pay Rs."+cal;
    return false;
    }
    else if(document.getElementById("btype").value==="8SeaterBoat" && count<=8){
        cal=count*200;
    document.getElementById("result").innerHTML="You need to pay Rs."+cal;
    return false;
    }
    else if(document.getElementById("btype").value==="15SeaterBoat" && count<=15){
        cal=count*250;
    document.getElementById("result").innerHTML="You need to pay Rs."+cal;
    return false;
    }
}

function erase(){
    document.getElementById("result").innerHTML="";
}

  
