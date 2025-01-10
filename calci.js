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

    
    const body = document.querySelector('body'); 
const color = ['orange', 'green', 'violet']; 

const button = document.querySelector('table'); // Select the button

button.addEventListener('click', function () {
  const colorIndex = Math.floor(Math.random() * color.length); // Get a random color index
  body.style.backgroundColor = color[colorIndex]; // Change the background color
});
