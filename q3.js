function process(sentence) {
    return sentence.split(' ').map(editWord).join(' ');

}

function editWord(word) {
    let punctuation = '';
    if (word.endsWith(',') || word.endsWith('!')) {
        punctuation = word.charAt(word.length - 1);
        word = word.substring(0, word.length - 1);
    }
    return word.substring(1).concat(word.charAt(0)).concat('Snow').concat(punctuation);
}

const sentence = 'Make your life easier, create a dashboard!';

console.log(process(sentence));