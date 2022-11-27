// Declairing variables
const points = document.getElementById('points')
const inputEl = document.getElementById('input')
const btnEl = document.getElementById('btn')

// Assigning event listener to the button
btnEl.addEventListener('click', ()=>{
    //checks to see if the value is empty and returns false
    if(inputEl.value == ''){
        return
    }
    /* If the value equals and is less than 70km/hr
    It changes the color of points output to green && 
    the textContent becomes"Ok"
    */
    else if(inputEl.value <=70){
        points.style.color = 'green'
    return points.textContent = 'Ok'
    }


    /* If the value is higher than 70km/hr, it changes
    the color of points output to red, alerts the
    use with the message "Licence Suspended", sets
    the attribute of the input to readonly and assigns
    demerit points to the driver.
    */
    else if(inputEl.value > 70){
        const speedBal = (inputEl.value - 70)/5

        if(speedBal >= 12){
            alert('License suspended')
            inputEl.setAttribute('readonly', 'readonly')
        }
        points.style.color = 'red'
        return points.textContent = speedBal
    }
})