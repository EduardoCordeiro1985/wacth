var second=00
var minute=0
var Interval
function start(){
   Interval= setInterval(watch,10)
}
function pause(){
    clearInterval(Interval)
}function stop(){
    clearInterval(Interval)
    second=0
    minute=0
    document.getElementById('watch').innerText='00:00'
}
function watch(){
    second++
    if(second==60){
        minute++
        second=0
    }
    document.getElementById('watch').innerText=minute+':'+second
    
}