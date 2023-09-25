var cel=document.getElementById("ce");
var fah=document.getElementById("fa");
ce.addEventListener('input',function(){
let c=this.value;
let f=(c * 9/5) + 32 ;
fa.value=f;
});
fa.addEventListener('input',function(){
    let f=this.value;
    let c=(f - 32) * 5/9 ;
    ce.value=c;
});