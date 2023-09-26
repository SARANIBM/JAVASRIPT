arr=['ECE','IT','CSE','MECH','CIVIL','EEE']

arr.forEach(val => {
    const opt = document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('name').appendChild(opt)
});