  const form = document.querySelector('#validationForm');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const results = document.querySelector('#result');

const validateForm = (username, email, password) => {
    const errors = {};
    // handle username error
    if (!username.trim()) { 
        errors.username = 'Please enter a username.';
    } else if (username.trim().length < 6) {
        errors.username = 'Username must be at least 6 characters long.';
    }

    // handle email error
    if (!email.trim()) {
        errors.email = 'Please enter an email.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid. It must contain "@" and ".com".';
    }

    // handle password error
    if (!password.trim()) {
        errors.password = 'Please enter a password.';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
        errors.password = 'Password is invalid. It must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.';
    }

    return errors;

}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const errors = validateForm(username.value, email.value, password.value);

    console.log(errors);
    // display errors
    document.getElementById('usernameError').textContent = errors.username || '';
    document.getElementById('emailError').textContent = errors.email || '';
    document.getElementById('passwordError').textContent = errors.password || ''; 

    if (Object.keys(errors).length === 0) {
        // document.getElementById('validationForm').textContent = 'Form submitted successfully!';
        // display data
        console.log(results);
        results.innerHTML = `<h2>Submitted Data:</h2>
                             <p><strong>Username:</strong> ${username.value}</p>
                             <p><strong>Email:</strong> ${email.value}</p>
                             <p><strong>Password:</strong> ${password.value}</p>`;
                             
    }
    // clear form fields
    if(!errors.username && !errors.email && !errors.password){
    username.value = '';
    email.value = '';
    password.value = '';
  }
});