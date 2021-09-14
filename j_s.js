
var a=0;
console.log(a)
function minusCount(){
  if(a<=0){
    a=0
    document.getElementById("var1").innerHTML=a
    document.getElementById("beforezero").innerHTML="Can not go below zero"

  
  }
  else{
    a--
    document.getElementById("var1").innerHTML=a
    document.getElementById("beforezero").innerHTML=""

  }
}
function plusCount(){
    a++
    document.getElementById("var1").innerHTML=a
    document.getElementById("beforezero").innerHTML=""

    
}

function reset(){
  a=0
  document.getElementById("var1").innerHTML=a
  document.getElementById("beforezero").innerHTML=""

}