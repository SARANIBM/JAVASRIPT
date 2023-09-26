let srt = document.getElementById('start')
let sto = document.getElementById('stop')
let res = document.getElementById('reset')
let wrap = document.getElementById('wrapper')

let min = 0
let sec = 0
let count=0

srt.addEventListener('click', function(){
    timer=true
    stopwatch()
    color()
})

sto.addEventListener('click',function(){
    timer=false
    color()
})

res.addEventListener('click',function(){
   timer=false
   color()
   min=0
   sec=0
   count =0
   document.getElementById('minutes').innerHTML=0
   document.getElementById('seconds').innerHTML=0
})

function stopwatch(){
    if(timer){
          count++
          if(count==100){
            sec++
            count=0
          }
          let secstr=count
          let minstr=sec
          document.getElementById('seconds').innerHTML=secstr
          document.getElementById('minutes').innerHTML=minstr
          setTimeout(stopwatch,10)
    }
}
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
function color(){
    let str = '#'
    for(let i=1;i<=6;i++){
        str+=hexvalue()
    }
    wrap.style.backgroundColor = str 
}
function hexvalue(){
    let index = Math.floor(Math.random()*16)
    return hex[index]
}