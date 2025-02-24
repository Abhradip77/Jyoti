// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayFinalImage(); // Display the final image
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2x
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD'; // Reset to baby pink
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the initial image
function displayInitialImage() {
    var imageContainer = document.getElementById('image-container');
    var img = new Image();
    img.src = 'images/our-pic.jpg'; // Ensure the file is in the 'images' folder
    img.alt = 'Us Together';
    img.style.width = '250px';
    img.style.height = '250px';
    img.style.borderRadius = '50%'; // Make it circular
    img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    img.onload = function() {
        imageContainer.appendChild(img);
    };
}

// Function to display the final image after selecting "Yes"
function displayFinalImage() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var img = new Image();
    img.src = 'images/our-pic.jpg'; // Keep the same image for a cute effect
    img.alt = 'Happy Us';
    img.style.width = '300px';
    img.style.height = '300px';
    img.style.borderRadius = '50%';
    img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    img.onload = function() {
        imageContainer.appendChild(img);
        document.getElementById('options').style.display = 'none'; // Hide buttons
        displayFinalMessage(); // Show hearts and countdown
    };
}

// Function to display final message with hearts and countdown
function displayFinalMessage() {
    var container = document.getElementById('container');
    container.innerHTML += `<h1 id="final-message">Can't wait! 💖</h1>`;
    createHeartAnimation();
    startCountdown();
}

// Function to create a floating hearts animation
function createHeartAnimation() {
    let heartContainer = document.createElement('div');
    heartContainer.id = "heart-container";
    document.body.appendChild(heartContainer);
    
    setInterval(() => {
        let heart = document.createElement('div');
        heart.innerText = "💖";
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200);
}

// Function to start the countdown to February 28, 2025
function startCountdown() {
    const eventDate = new Date("February 28, 2025 00:00:00").getTime();
    const countdownElement = document.createElement('div');
    countdownElement.id = "countdown";
    document.getElementById('container').appendChild(countdownElement);

    setInterval(function() {
        let now = new Date().getTime();
        let distance = eventDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdownElement.innerHTML = `Countdown to Feb 28: ${days} days left! 🎉`;
    }, 1000);
}

// Display the initial image on page load
displayInitialImage();
