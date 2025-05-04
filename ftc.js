let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
};

function Coin(guess) {
    let result = ''; let wl = '';
    let num = Math.random();
    if (num > 0 && num < 0.5) { result = 'heads'; }
    else { result = 'tails'; }
    if (guess === result) { wl = 'You win.'; score.wins += 1; }
    else { wl = 'You lose.'; score.losses += 1; }
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.result').innerHTML = wl;
    document.querySelector('.move').innerHTML = `You ${guess} - ${result} Computer`;
}

function updateScore() {
    document.querySelector('.wl').innerHTML = `Wins: ${score.wins} Losses: ${score.losses}`;
}
