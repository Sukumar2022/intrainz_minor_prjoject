
function loadFun(){
    var loader=document.getElementById('load');
    loader.style.display='none';
}


function display(num){
    document.getElementById("result").value+= num;
}
function cal(){
    try{
        var n1=document.getElementById("result").value;
        var n2=eval(n1);
        document.getElementById("result").value=n2;
    }
    catch(err){
        alert('Invalid Input');
        document.getElementById("result").value= '';
    }
    
}
function allClear(){
   var result= document.getElementById("result");
   result.value='';
}
function oneClear(){
    var result= document.getElementById("result");
    result.value=result.value.slice(0,-1);
 }
function displaysqrt(){
    var n1=document.getElementById("result").value;
    var n2=Math.pow(n1,2);
    document.getElementById("result").value=n2;
}