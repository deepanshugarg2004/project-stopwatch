var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = true;

function start(){
timer = true;
stopwatch();
}


function stop(){
timer = false;
}


function reset(){
timer = false;
count=0;
hr=0;
min=0;
sec=0;
document.getElementById("min").innerHTML ="00" ;
document.getElementById("hrs").innerHTML = "00";
document.getElementById("count").innerHTML = "00";
document.getElementById("sec").innerHTML = "00";
}


function stopwatch(){
if(timer==true){
   count += 1;
   if(count==100){
    sec += 1;
    count = 0;
   }
   if(sec==60){
    min+=1;
    sec= 0;
   }
   if(min==60){
  hr +=1;
  min=0;
  sec=0;
   }
   var strmin = min;
   var strhr = hr;
   var strsec = sec;
   var strcount = count;
   if(hr<10){
    strhr = "0"+ strhr;
   }
   if(min<10){
    strmin = "0"+ strmin;
   }
   if(sec<10){
    strsec = "0"+ strsec;
   }
   if(count<10){
    strcount = "0"+ strcount;
   }


   document.getElementById("hrs").innerHTML =  strhr;
   document.getElementById("min").innerHTML = strmin;
   document.getElementById("sec").innerHTML = strsec;
   document.getElementById("count").innerHTML = strcount;

setTimeout("stopwatch()",10);
}
}