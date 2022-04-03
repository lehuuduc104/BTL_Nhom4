//Required Account

var AccountRex = /^[a-zA-Z0-9]{5,12}$/
const Account = document.getElementById('Account');
const statusOfAccount = document.querySelector('.statusOfAccount');
const checkAccount = false;

Account.addEventListener('focus', function () {
    this.style.border = "1px solid red";
})

Account.addEventListener('blur', function () {
    this.style.border = "1px solid #ccc";
    if (AccountRex.test(Account.value)) {
        statusOfAccount.textContent = "Valid Account";
        statusOfAccount.style.color = "green";
        checkAccount = true;
    } else {
        statusOfAccount.textContent = "Account must contain alphanumeric characters only.";
        statusOfAccount.style.color = "red";
        checkAccount = false;
    }
})

// Required Email
const checkEmail = false;
var emailRex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const email = document.getElementById("email");
const statusOfEmail = document.querySelector(".statusOfEmail");

email.addEventListener("focus", function () {
    this.style.border = "1px solid red";
}
);

email.addEventListener("blur", function () {
    this.style.border = "1px solid #ccc";
    if (emailRex.test(email.value)) {
        statusOfEmail.textContent = "Valid Email";
        statusOfEmail.style.color = "green";
        checkEmail = true;
    } else {
        statusOfEmail.textContent = "Invalid Email";
        statusOfEmail.style.color = "red";
        checkEmail = false;
    }
});

//Required Password
const checkPassword = false;
var passWordRex = /^[a-zA-Z0-9]{7,12}$/
const password = document.getElementById('password');
const statusOfPassWord = document.querySelector('.statusOfPassWord');

password.addEventListener('focus', function () {
    this.style.border = "1px solid red";
})

password.addEventListener('blur', function () {
    this.style.border = "1px solid #ccc";
    if (passWordRex.test(password.value)) {
        statusOfPassWord.textContent = "Valid Password";
        statusOfPassWord.style.color = "green";
        checkPassword = true;
    } else {
        statusOfPassWord.textContent = "Password should not be empty / length be between 7 to 12.";
        statusOfPassWord.style.color = "red";
        checkPassword = false;
    }
})

// Check to see if passwords match
function matchpass() {
    var password = document.form.password.value;
    var repassword = document.form.repassword.value;
    if (password == repassword) {
        alert("Congratulation! Account created successfully.");
        return true;
    }
    else {
        alert("Password must be same!");
        return false;
    }
}  