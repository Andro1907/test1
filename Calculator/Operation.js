let outputScreen=document.getElementById("output-screen");
function display(num){
    outputScreen.value+=num;
}

  function Calculate(){

    if((outputScreen.value).includes("+")){
    let myArr=(outputScreen.value).split("+");

    let one=myArr[0];
    let two=myArr[1];

    let one1=parseFloat(one);
    let two2=parseFloat(two);

    let result=one1+two2;

    outputScreen.value=result;
    }

    else if((outputScreen.value).includes("-")){

    let myArr=(outputScreen.value).split("-");

    let one=myArr[0];
    let two=myArr[1];

    let one1=parseFloat(one);
    let two2=parseFloat(two);

    let result=one1-two2;

    outputScreen.value=result;
    }

    else if((outputScreen.value).includes("*")){
    let myArr=(outputScreen.value).split("*");

    let one=myArr[0];
    let two=myArr[1];

    let one1=parseFloat(one);
    let two2=parseFloat(two);

    let result=one1*two2;

    outputScreen.value=result;
    }

    else if((outputScreen.value).includes("/")){

    let myArr=(outputScreen.value).split("/");

    let one=myArr[0];
    let two=myArr[1];

    let one1=parseFloat(one);
    let two2=parseFloat(two);

    let result=one1/two2;

    outputScreen.value=result;
    }

    else if((outputScreen.value).includes("%")){

        let myArr=(outputScreen.value).split("%");
    
        let one=myArr[0];
        let two=myArr[1];
    
        let one1=parseFloat(one);
        let two2=parseFloat(two);
    
        let result=one1%two2;
    
        outputScreen.value=result;
        }
}

function Clear(){
    outputScreen.value="";
}

function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}