var operator="";
var firstNumber="";
var secondNumber="";

function append(number){
    if(operator===""){
        firstNumber+=number;
        document.getElementById('result').value=firstNumber;
        document.getElementById('f1').innerHTML=firstNumber;
    }
    else{
        secondNumber+=number;
        document.getElementById('result').value=firstNumber+"" +operator+ ""+secondNumber;
        document.getElementById('f2').innerHTML=secondNumber;
    }
}
function setoperator(op){
    operator=op;
    document.getElementById('result').value=firstNumber+""+operator;
}
function showresult(){
    let res=0;
    switch(operator){
        case '+':
            res=parseInt(firstNumber)+parseInt(secondNumber);
            break;
        case '-':
            res=parseInt(firstNumber)-parseInt(secondNumber);
            break;
        case "*":
            res=parseInt(firstNumber)*parseInt(secondNumber);
            break;
        case '/':
            res=parseInt(firstNumber)/parseInt(secondNumber);
            break;

        
    }
 document.getElementById('result').value=res;
 document.getElementById('output').innerHTML=res;
}
function reset(){
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById('result').value="";
    }

    
    const body=document.querySelector('table');
    const head=document.getElementById('head');
    const color=['blue','green','violet'];
    head.style.backgroundColor='white';
    body.addEventListener('click',function(){
       const colorIndex=parseInt(Math.random()*color.length);
       head.style.backgroundColor=color[colorIndex];
    })
    