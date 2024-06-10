// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here

for (let nameRestaurant of restaurants) {
  newRestaurants += "Restaurant Name: " + nameRestaurant + ", ";
}
console.log(newRestaurants);
