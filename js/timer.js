let dt=new Date(new Date().setTime(0));
let time=dt.getTime();
let seconds=Math.floor((time%(100*60))/1000);
let minutes=Math.floor((time%(100*60*60))/(1000*60));


let quiz_time=setInterval(function(){
if(seconds<59){
    seconds++;
}
else{
    minutes++;
    seconds=0;
}
let formated_sec=seconds<10 ? `0${seconds}`: `${seconds}`;
let formated_min=minutes<10 ? `0${minutes}`: `${minutes}`;
document.querySelector(".time").innerHTML=`${formated_min}:${formated_sec}`;

},1000)