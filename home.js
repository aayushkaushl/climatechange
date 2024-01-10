
const userName = localStorage.getItem('userName');

// Display a welcome message on the home page
if (userName) {
    const welcomeMessage = document.createElement("div");
    welcomeMessage.id = "welcome-message";
    welcomeMessage.innerText = `Welcome, ${userName}! Explore the Impact of Climate Change.`;
    document.getElementById("welcome-message").insertAdjacentElement('afterbegin', welcomeMessage);
}





function displayUserProfile() {
    // Redirect to user profile page
    window.location.href = 'profile.html';
}

function navigateToAirQualityPage() {
    // Redirect to air quality page
    window.location.href = 'weather.html';
}

function diversity() {
    window.location.href = 'diversity.html';
}

function goals() {
    window.location.href = 'goals.html';
}

function contact() {
    window.location.href = 'contact.html';
}

function game() {
    window.location.href = 'game.html';
}
