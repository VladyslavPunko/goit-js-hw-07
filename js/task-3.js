const texInput = document.getElementById(`name-input`);
const texOutput = document.getElementById(`name-output`);

texInput.addEventListener(`input`, (event)=>{

    const inputValue = event.currentTarget.value.trim();

    if(inputValue === '') {
        texOutput.textContent = 'Anonymous';
    } else {texOutput.textContent = event.currentTarget.value;}
    
    });