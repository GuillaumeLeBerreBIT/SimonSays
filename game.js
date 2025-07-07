const buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClikedPattern = [];
var gameHasStarted = false;
var level = 0;

$(document).keypress(function () {
    if (gameHasStarted === false) {

        $('#level-title').text('Level ' + level);

        setTimeout(nextSequence, 1000);

        gameHasStarted = true;
    };    
});

$('.btn').on('click', function (event) {
    
    var userChosenColour = event.target.id;
    userClikedPattern.push(userChosenColour);

    // Here need to compare the Arrays to see if correct input is given.
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer();

});

function checkAnswer () {
    
    for (let i in userClikedPattern) {
        if (gamePattern[i] === userClikedPattern[i]) {
            continue
        } else {
            console.log('wrong')
            playSoundGameOver();
            
            document.querySelector('body').classList.add('game-over');
            setTimeout(() => {document.querySelector('body').classList.remove('game-over')}, 200)
            
            resetLevel();
            return; // If not added then will check further and start new sequence.
        }
    }

    console.log('succes')
    
    // If the game pattern matches call next sequence and increase the level.
    if (gamePattern.toString() === userClikedPattern.toString()) {
        userClikedPattern = [];
        
        setTimeout(nextSequence, 1000);
    } 
}

function nextSequence() {

    level++;

    $('#level-title').text('Level ' + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    // Do fade out on the random colour
    $('#'+ gamePattern.slice(-1)).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    console.log(gamePattern);
    
};

function playSound(color) {

    var simonSound = new Audio('./sounds/' + color + '.mp3');
    simonSound.volume = 0.2;
    simonSound.play();
}

function playSoundGameOver () {
    var gameOverSound = new Audio('./sounds/wrong.mp3');
    gameOverSound.volume = 0.2;
    gameOverSound.play();
}

function animatePress(currentColour) {
    $('#'+ currentColour).addClass('pressed');

    setTimeout(function () {
        $('#'+ currentColour).removeClass('pressed');
    }, 100)
}

function resetLevel () {
    
    $('#level-title').text('Game Over, Press Any Key to Restart');

    gameHasStarted = false;
    level = 0;
    gamePattern = [];
    userClikedPattern = [];
}