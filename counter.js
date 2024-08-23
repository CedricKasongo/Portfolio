const dateCount = new Date("Dec 25, 2024 00:00:00").getTime();
const inputs = document.querySelectorAll("input");
setCountdown(dateCount);
setInterval(function(){
    setCountdown (dateCount);
    

},1000)
function setCountdown (counting){
    let now = new Date();
    let theEnd = counting - now;
    console.log(theEnd);
    let seconds=  Math.floor(theEnd / 1000);
    let minutes=  Math.floor(theEnd / (1000 *60));
    let hours=  Math.floor(theEnd / (1000*60*60));
    let days =  Math.floor(theEnd / (1000*60*60*24));
    console.log(days,hours,minutes,seconds);

    let realDay = days;
    let realHours = hours - (days *24);
    let realMinutes= minutes - (hours * 60);
    let realSeconds= seconds -(minutes*60);
    console.log(realDay,realHours,realMinutes,realSeconds);

    const finaldays = document.getElementById ('days');
    const finalhours = document.getElementById('hours');
    const finalminutes = document.getElementById('minutes');
    const finalseconds= document.getElementById('seconds');

   finaldays.value = realDay;
    finalhours.value = realHours;
    finalminutes.value = realMinutes;
    finalseconds.value = realSeconds;

}