// Exercise #2: Sum the Numbers
let numbers = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here
for (let totalNumber of numbers) {
  total += totalNumber;
}
console.log(total);

let priceOfToY = [5, 10, 15, 20, 35, 80];
let totalPriceToy = 0;

for (let totalprice of priceOfToY) {
  totalPriceToy += totalprice;
}
console.log(totalPriceToy);

priceOfToY.push(30);
console.log(priceOfToY);

totalPriceToy = 0;
for (let newTotalPrice of priceOfToY) {
  totalPriceToy += newTotalPrice;
}
console.log(totalPriceToy);
