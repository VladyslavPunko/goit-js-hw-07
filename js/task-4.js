const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, function (event) {
	event.preventDefault();
    
    const emailValue = this.elements.email.value.trim();
    const passwordValue = this.elements.password.value.trim();

    let formData ={} ;

    if (!emailValue || !passwordValue){
        alert('All form fields must be filled in')
    } else { formData = {
            email: emailValue,
            password: passwordValue,
        };
    }
    console.log(formData);

    this.reset();
    
});
