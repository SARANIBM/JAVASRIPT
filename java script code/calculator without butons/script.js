let resultdiv = document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)

const button = document.querySelector('button')
button.addEventListener('click',calc)
function calc(){
    const str = document.getElementById('input').value
    let operator=''
    let a =0 
    for(let i=0;i<str.length;i++){
        if(str[i]=='+'){
           operator='+'
           a=i
        }
        else if(str[i]=='-'){
           operator='-'
           a=i
       }
        else if(str[i]=='*'){
           operator='*'
           a=i
        }
        else if(str[i]=='/'){
           operator='/'
           a=i
        }
        else if(str[i]=='%'){
           operator='%'
           a=i
    }
    } 
   let op1 = Number(str.slice(0,a))
   let op2 = Number(str.slice(a+1,str.length))
   let ans=0
   switch(operator){
        case '+':
         ans=op1+op2
         break
        case '-':
         ans=op1-op2
         break
        case '*':
         ans=op1*op2
         break
        case '/':
         ans=op1/op2
         break             
        case '%':
         ans=op1%op2
         break
   }
   document.getElementById('result').innerHTML=ans
}