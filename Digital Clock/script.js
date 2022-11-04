const hours=document.getElementById('Hours')
const minutes=document.getElementById('Minutes')
const seconds=document.getElementById('Seconds')
const  AMPM=document.getElementById('AMPM')

const updateClock=()=>{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm='AM'
    if(h>12){
        h=h-12
        ampm='PM'
    }
    hours.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    AMPM.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock();