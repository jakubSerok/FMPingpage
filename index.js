const inputEl = document.querySelector('#emailInput');
const error = document.querySelector("#errorMessage");
const btnNotifyME = document.querySelector('#notify-me');
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

btnNotifyME.addEventListener('click', e=>{
    if(inputEl.value ==''|| inputEl.value === undefined || !inputEl.value.match(RegEmail)){
        inputEl.classList.add("invalid");
        error.classList.add("visible");
        
    }
    
    
})

