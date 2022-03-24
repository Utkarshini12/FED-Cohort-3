const showSignupBtn = document.getElementById('showSignupBtn');
const showLoginBtn = document.getElementById('showLoginBtn');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const authErrMsg = document.getElementById('authErrMsg');


const BASE_URL = 'http://13.235.87.215:4000';
// hide the login form by adding d-none
function showSignup() {
    signupForm.classList.remove('d-none');
    loginForm.classList.add('d-none');
}
// hide the signup form by adding d-none
function showLogin() {
    signupForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
}

function signupFn() {
	if (signupUsername.value == "") {
		updateAuthErrorMsg("Username should not be empty");
	} else if (signupPassword.value == "") {
		updateAuthErrorMsg("Password should not be empty");
	} else {
		const data = {
            username: signupUsername.value,
            password: signupPassword.value
        };
		fetch(BASE_URL + '/api/v1/user/signup', {
			method: 'POST', 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				if(data.success) {
                    localStorage.setItem("username", data.data.username)
                    localStorage.setItem("userId", data.data.userId);
                    window.location.href = "index.html";
                } else {
					updateAuthErrorMsg(data.msg);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
}



function loginFn() {
    if (loginUsername.value == "") {
        updateAuthErrorMsg("Username should not be empty")
    } else if (loginPassword.value == "") {
        updateAuthErrorMsg("Password should not be empty");;
    } else {
        // allow the use to login 
        // api call
    }

}
function updateAuthErrorMsg(msg) {
    authErrMsg.innerText = msg;

}

// event listners 
showSignupBtn.addEventListener('click', showSignup);
showLoginBtn.addEventListener('click', showLogin);
signupBtn.addEventListener('click', signupFn);
loginBtn.addEventListener('click', loginFn);




