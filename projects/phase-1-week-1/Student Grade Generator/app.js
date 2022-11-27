// global variables
const generateBtn = document.getElementById('btn');
const inputEl = document.getElementById('input');
const gradeEl = document.getElementById('grade');




/* Generating grade */
generateBtn.addEventListener('click', ()=>{

    if(input.value === ''){
        return alert('You need to enter a number')
    }

    if(inputEl.value > 100){
        return alert('Value should not exceed 100')
    }else if(inputEl.value > 79){
        gradeEl.style.color = 'green'
        return gradeEl.textContent = 'A';
    }else if(inputEl.value >= 60 && input.value <= 79){
        gradeEl.style.color = 'green'
        return gradeEl.textContent = 'B'
    }else if(inputEl.value >= 49 && input.value <= 59){
        gradeEl.style.color = 'orange'
        return gradeEl.textContent = 'C'
    }else if(inputEl.value >= 40 && input.value <= 49){
        gradeEl.style.color = 'red'
        return gradeEl.textContent = 'D'
    }else if(inputEl.value < 40){
        gradeEl.style.color = 'red'
        return gradeEl.textContent = 'E'
    }
    
})