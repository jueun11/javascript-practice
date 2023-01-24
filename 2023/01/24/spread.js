const friedRice = {
  base: "Rice",
  Seasoning: "ketchup"
};
const friedRiceEgg = {
  base: "Rice",
  Seasoning: "ketchup",
  Topping: "egg"
};
const friedRiceHam = {
  base: "Rice",
  Seasoning: "ketchup",
  Topping: "spam"
};

const friedRiceKimchi = {
  ...friedRice,
  Topping: "Kimchi"
}
console.log(friedRice);
console.log(friedRiceKimchi);
const num1 = [1,2,3]
const num2 = [4,5,6]

console.log([...num1,...num2]);