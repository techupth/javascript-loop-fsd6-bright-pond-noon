// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

for (let point of scores) {
    if (point  === 3) {
        minScore = point;
        break;
    }
}

console.log(minScore);
