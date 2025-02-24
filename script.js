// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; 
            displayFinalImage(); 
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; 
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and execute a callback
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD'; 
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the initial image
function displayInitialImage() {
    var imageContainer = document.getElementById('image-container');
    var img = new Image();
    img.src = 'our-pic.jpg';  // ✅ Image is in the root folder
    img.alt = 'Us Together';
    img.style.width = '250px';
    img.style.height = '250px';
    img.style.borderRadius = '50%'; 
    img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    img.onload = function() {
        imageContainer.appendChild(img);
    };
}

// Function to display the final image after clicking "Yes"
function displayFinalImage() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var img = new Image();
    img.src = 'our-pic.jpg';  // ✅ Image is in the root folder
    img.alt = 'Happy Us';
    img.style.width = '300px';
    img.style.height = '300px';
    img.style.borderRadius = '50%';
    img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    img.onload = function() {
        imageContainer.appendChild(img);
        document.getElementById('options').style.display = 'none';
        displayFinalMessage(); 
    };
}

// Function to display final message with hearts and countdown
function displayFinalMessage() {
    var container = document.getElementById('container');
    container.innerHTML += `<h1 id="final-message">Can't wait! 💖</h1>`;
    createHeartAnimation();
    startCountdown();
}

// Function to create floating hearts animation
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

// Function to start countdown to Feb 28, 2025
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

// Load the initial image when the page loads
displayInitialImage();
