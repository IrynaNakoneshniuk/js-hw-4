// # Завдання 3 (2 бали)

// Напиши функцію `findLongestWord(string)`, яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому
// рядку.

const findLongestWord = function (string) {
const words=string.split(" ");
let maxWord=words[0];
for(let i=1;i<words.length;i++){
    if(maxWord.length<words[i].length){
        maxWord=words[i];
    }
}
return maxWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
