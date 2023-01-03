function calculateEMI(){
    let P = document.getElementById("principalAmount").value;
    let r = document.getElementById("interestRate").value;
    let R = (r/100)/12;
    let N = document.getElementById("tenure").value;
    let EMI = (P * R * Math.pow((1+R),N)/(Math.pow((1+R),N)-1)).toFixed(2);
    document.getElementById("result").innerHTML = "EMI is Rs."+EMI;
    return false;
}

function erase(){
    document.getElementById("result").innerHTML="";
}