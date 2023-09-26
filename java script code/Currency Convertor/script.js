let select = document.querySelectorAll('.currency')
let btn= document.getElementById('btn')
let input = document.getElementById('input')
let result= document.getElementById('result')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displaydropdown(res))

function displaydropdown(res){
   let curr = Object.entries(res)
//    console.log(curr)
   for(let i=0;i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML+=opt
    select[1].innerHTML+=opt    
   }
}
input.addEventListener('input',change)
function change(){
      let curr1=select[0].value
      let curr2=select[1].value
      let inputval = input.value
      if(curr1===curr2){
        alert()
      }
      else{
        covert(curr1,curr2,inputval)
      }
}

function alert(){
  let box = document.createElement('input')
  box.id='same'
  box.value = 'currency are same check it out'
  box.textContent = 'currency are same check it out'
  document.getElementById('spr').appendChild(box)
}

function covert(curr1,curr2,inputval){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
   .then(resp => resp.json())
   .then((data) => {
    if(input.value==''){
      result.value=''
    }
    result.value=Object.values(data.rates)[0]
    let same = document.getElementById('same')
    same.remove()
  });
}
