let resultdiv = document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)

const button = document.querySelector('button')
button.addEventListener('click',select)
let selectedSize;
function select() {    
    var getSelectedValue = document.querySelector(   
        'input[name="season"]:checked');   
     let value=''   
    if(getSelectedValue != null) {   
           value = getSelectedValue.value   
         
    }   
    switch(value){
        case 'Illiterate':
            document.getElementById('result').innerHTML="you are not elligibe for job"
            break
        case 'Highschool':
            document.getElementById('result').innerHTML="you are elligibe for job"
            break
        case 'UG':    
            document.getElementById('result').innerHTML="you are elligibe for job"
            break
        case 'PG':    
            document.getElementById('result').innerHTML="you are not elligibe for job"
            break
        case 'Doctarate':    
            document.getElementById('result').innerHTML="you are not elligibe for job"  
            break
    }
} 


