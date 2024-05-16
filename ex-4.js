let restaurantNames = ["KFC", "MOMO PARADISE", "Nabezo"];

let newRestaurantNames = [];

for (let restaurantName of restaurantNames) {
  let newRestaurantName = "Restaurant Name: " + restaurantName;

  newRestaurantNames.push(newRestaurantName);
}
console.log(newRestaurantNames);
