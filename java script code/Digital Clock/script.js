const Month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const Day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function digital(){
        let datetime = new Date()
        let hr = datetime.getHours()
        let min = datetime.getMinutes()
        let sec = datetime.getSeconds()
        let mon = Month[datetime.getMonth()]
        let day = Day[datetime.getDay()] 
        let msec = datetime.getMilliseconds()
        if(hr>12){
            hr=hr-12
            let ampm = document.getElementById('ampm')
            document.innerHTML='PM'
        }
        msec = Math.floor(msec/10)
        document.getElementById('hours').innerHTML=padzero(hr)
        document.getElementById('minutes').innerHTML=padzero(min)
        document.getElementById('seconds').innerHTML=padzero(sec)
        document.getElementById('month').innerHTML=mon
        document.getElementById('day').innerHTML=day
        document.getElementById('mseconds').innerHTML=padzero(msec)

}
function padzero(num){
    return num<10?"0"+num:num
}
  

setInterval(digital,1)