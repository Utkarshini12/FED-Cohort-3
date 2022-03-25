const userIntro = document.getElementById("userIntro");
const logoutBtn = document.getElementById("logoutBtn");

const BASE_URL = 'http://13.235.87.215:4000';

logoutBtn.addEventListener('click', logoutFn);
function logoutFn() {
    localStorage.removeItem('username');
    window.location.href = "login.html"
}

if(!localStorage.getItem('username')) {   // if the user is not in localstorage
    window.location.href = "login.html"
}else {
    userIntro.innerText = "Hi " + localStorage.getItem('username')
}


