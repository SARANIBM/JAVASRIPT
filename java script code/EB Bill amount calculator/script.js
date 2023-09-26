const resultdiv = document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)

function calc(){
    let amount = Number(document.getElementById("input").value)
    let sum=0
    if(amount<=50)
       sum=amount*0.75
    else if(amount>50 && amount<=150)
       sum=(50*0.75)+((amount-50)*1)
    else if(amount>150 && amount<=250)
       sum=(50*0.75)+(100*1)+((amount-100-50)*1.30)
    else
       sum=(50*0.75)+(100*1)+(100*1.30)+((amount-100-100-50)*1.50)
    document.getElementById("result").innerHTML=sum
}