// Code your solutions in this file
const writeCards = (names,event) => {
    let cardSentence = []
    for (let i = 0; i < names.length; i++) {
       cardSentence.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cardSentence;
} 

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

const countDown = (num) => {
    while (num>=0) {
        console.log(num--)
    }
}
console.log(countDown(10))