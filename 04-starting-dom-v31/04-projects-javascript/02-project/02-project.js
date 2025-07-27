const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault() // use to donot send the data to the server basaxially it stops the data

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    


    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML =`please enter a valid height ${height}`

    }else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `please enter a valid weight ${weight}`;

    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi <= 18.6) {
            results.innerHTML = `Under weight ${bmi}`
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Normal weight ${bmi}`
        }else{
            results.innerHTML = `Over weight ${bmi}`
            
        }
        // results.innerHTML =`<span>${bmi}</span>`
        
    }

})