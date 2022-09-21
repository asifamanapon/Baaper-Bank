// step number 1
document.getElementById('btn-submit').addEventListener('click', function (){
//    get the email address inside 
    // step 2 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    // step 3
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);
    // step 4 varify email password 
    if (email === 'bankertkrakhchokoi@gmai.com' && password === 'secret') {
        console.log('valid');
       
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }

}
)