const btn = document.getElementById('btn')
const color = document.getElementById('color')
const wrap = document.getElementById('wrap')
const heading = document.getElementById('heading')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',function(){
    let str = '#'
    let str1 = '#'
    for(let i=1;i<=6;i++){
        str+=hexvalue()
        str1+=colorvalue()
    }
    heading.style.color= str1
    wrap.style.backgroundColor = str
    color.innerHTML = str
})

function hexvalue(){
    let index = Math.floor(Math.random()*16)
    return hex[index]
}

function colorvalue(){
    let value = Math.floor(Math.random()*16)
    return hex[value]
}