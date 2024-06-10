// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

for (let score of scores) {
  if (score === 3) {
    minScore = score;
  }
}
console.log(minScore);

let maxScore;

for (let highScore of scores) {
  if (highScore === 1000) {
    maxScore = highScore;
  }
}
console.log(maxScore);
