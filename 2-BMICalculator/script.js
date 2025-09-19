const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    result.style.display = 'block'

    if(height <= 0 || height === '' || isNaN(height)){
        result.innerHTML = `not a valid height`;
    } else if(weight <= 0 || weight === '' || isNaN(weight)){
        result.innerHTML = `not a valid weight`;
    } else {
        const bmi = (weight / (height/100)**2).toFixed(2);
        if(bmi < 18.6) result.innerHTML = `your BMI is ${bmi}<br>you are under weight`;
        else if(bmi >= 18.6 && bmi <= 24.9) result.innerHTML = `your BMI is ${bmi}<br>you are in normal range`;
        else result.innerHTML = `your BMI is ${bmi}<br>you are over weight`;
    }
})