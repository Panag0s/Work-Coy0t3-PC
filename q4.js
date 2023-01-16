const sentence = 'ServiceNow gives you the power to make work, work better - no matter the circumstances. So employees can be productive, wherever they are. And customers can get what they need, when they need it.';

function score(word) {
    let score = word.split('').map(scoreLetter).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0);
    return score;
}

function scoreLetter(letter) {
    let score = 0;
    if (letter >= 'a' && letter <= 'z') {
        score = letter.charCodeAt(0) - 96;
    }
    if (letter >= 'A' && letter <= 'Z') {
        score = letter.charCodeAt(0) - 64 + 26;
    }
    return score;
}

function calculateScores(sentence) {
    let scores = sentence.split(' ').map((word) => [word, score(word)]).sort((a, b) => b[1] - a[1]);
    console.log(`Top word is ${scores[0]}`);
}

calculateScores(sentence);