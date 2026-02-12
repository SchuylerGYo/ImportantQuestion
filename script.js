const gameAudio = new Audio();
gameAudio.loop = true;

function selectOption(option) {
    if (option === 'yes') {
        rotateMaxwell();
        flashRainbowColors(function() {
            document.getElementById('question').innerText = 'Yipeeee! I love you so so so fucking much. Istg, I love you so much Annie! ♡♡♡';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'Nigguh really :"(  ?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
        displayLarry();
    } else {
        alert('This should never happen!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 3500);
}

function playSound(file) {
    if (gameAudio.src.includes(file)) {
        return; 
    }

    gameAudio.pause(); 
    gameAudio.src = file;
    gameAudio.load();
    gameAudio.play().catch(error => console.log("Playback failed."));
}

function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('options').style.display = 'none';
        playSound('ThankYou.mp3'); 
        rotateMaxwell();
        flashRainbowColors(function() {
            document.getElementById('question').innerText = 'Yipeeee! I love you so so so fucking much. Istg, I love you so much Annie! ♡♡♡';
            displayCatHeart();
        });
    } else if (option === 'no') {
        // This will now only trigger the start of the audio once
        playSound('Larry.mp3'); 

        document.getElementById('no-button').innerText = 'Nigguh really :"(  ?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
        displayLarry();
    }
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'maxwell.gif'; 
    catImage.alt = 'maxwell';
    
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
        
        gameAudio.src = 'ambient.mp3'; 
        
        gameAudio.play().catch(error => {
            console.log("Autoplay prevented.");
            document.addEventListener('click', () => {
                gameAudio.play();
            }, { once: true });
        });
    };
}

function rotateMaxwell() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'maxwell-rotate.gif';
    catImage.alt = 'maxwell';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'love-you-cat.gif';
    catHeartImage.alt = 'love-you-cat';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

function displayLarry() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var larryImage = new Image();
    larryImage.src = 'Larry.png';
    larryImage.alt = 'Larry';
    larryImage.onload = function() {
        imageContainer.appendChild(larryImage);
    };
}

// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');


    const navigateToIndex = () => {
        window.location.href = 'index.html';
    };


    if (loginBtn) {
        loginBtn.addEventListener('click', navigateToIndex);
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', navigateToIndex);
    }
});

displayCat();
