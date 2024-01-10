let otpPasskey;

function generateOTP() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name.length >= 4 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        const mobileInput = document.getElementById("mobile");
        const mobileNumber = mobileInput.value;

        if (/^[6789]\d{9}$/.test(mobileNumber)) {
            otpPasskey = Math.floor(100000 + Math.random() * 900000);

            const otpPopup = document.getElementById("otp-popup");
            otpPopup.innerText = "OTP Passkey: " + otpPasskey;
            otpPopup.classList.add("active");
            setTimeout(() => {
                otpPopup.classList.remove("active");
                clearSensitiveData();
            }, 30000);
        } else {
            alert("Please enter a valid mobile number.");
        }
    } else {
        alert("Please enter a valid name and a valid email.");
    }
}

function validateOTP() {
    const enteredOTP = document.getElementById("otp").value;

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert("Please complete the reCAPTCHA verification.");
        return;
    }

    if (localStorage.getItem('usedOTP') === enteredOTP) {
        alert("This OTP has already been used. Please generate a new OTP.");
        return;
    }

    if (parseInt(enteredOTP) === otpPasskey) {
        localStorage.setItem('usedOTP', enteredOTP);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userName', document.getElementById("name").value);
        localStorage.setItem('userEmail', document.getElementById("email").value);
        localStorage.setItem('userMobile', document.getElementById("mobile").value);

        // Show Loading Message after validating OTP
        showLoadingMessage();

        // Set a delay of 5 seconds before entering the homepage
        setTimeout(() => {
            // Hide Loading Message
            hideLoadingMessage();

            // Redirect to home page
            window.location.href = 'home.html';
        }, 5000);
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

function showLoadingMessage() {
    const loadingMessage = document.createElement("div");
    loadingMessage.id = "loading-message";
    loadingMessage.innerText = "Reading data and logging you in...";
    document.body.appendChild(loadingMessage);
}

function hideLoadingMessage() {
    const loadingMessage = document.getElementById("loading-message");
    if (loadingMessage) {
        loadingMessage.parentNode.removeChild(loadingMessage);
    }
}

function clearSensitiveData() {
    document.getElementById("otp").value = "";
    otpPasskey = undefined;
}

// Remove the onload event to prevent the loading message on page load
// document.body.onload = simulateLogin;
