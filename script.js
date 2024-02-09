function dis(val){
    document.getElementById('result').value+=val;
}
function solve(){
   let inputNum= document.getElementById('result').value;
   let inputResult=math.evaluate(inputNum);
   document.getElementById('result').value=inputResult;
}
function clr(){
    document.getElementById('result').value="";
}