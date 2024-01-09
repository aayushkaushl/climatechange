document.addEventListener("DOMContentLoaded", function () {
    displayUserProfile();
});

function displayUserProfile() {
    const nameElement = document.getElementById("profile-name");
    const emailElement = document.getElementById("profile-email");
    const mobileElement = document.getElementById("profile-mobile");

    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const userMobile = localStorage.getItem('userMobile');

    nameElement.innerText = userName;
    emailElement.innerText = userEmail;
    mobileElement.innerText = userMobile;
}

function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('usedOTP');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userMobile');
    clearSensitiveData();

    window.location.href = 'index.html'; // Redirect to the login page
}

function clearSensitiveData() {
    // Add any additional data clearing if needed
}
