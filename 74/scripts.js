//find method
const scores = [10, 5, 0, 40, 60, 10, 20, 70]

const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore); //60 and then stops. first item that meets the condition
