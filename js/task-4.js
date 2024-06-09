const mainForm = document.querySelector('.login-form');

mainForm.addEventListener("submit", event => {
    event.preventDefault();
    let error = false;
    let resultData = {};
    for (const element of mainForm.elements) { 
        if (element.tagName == 'INPUT') {
            let inputValue = element.value.trim();
            if (inputValue == '') {
                error = true;            
            } else {
                resultData[element.name] = inputValue;
            }
        }       
    }

    if (error) {
         alert('All form fields must be filled in');
    } else {
        console.log(resultData);
        mainForm.reset();
    }
   
 });
