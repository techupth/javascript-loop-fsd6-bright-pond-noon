let studentScores = [100, 20, 3, 100];
let minScore = studentScores[0];
for (let score of studentScores) {
  if (score < minScore) {
    minScore = score;
  }
}

console.log(minScore);
