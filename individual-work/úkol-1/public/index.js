"use strict";

var array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];

for (var i = 0; i < array.length; i++) {
  console.log(array[i] + "\n");
}

console.log("\n");
var array2 = array.reverse();

for (var _i = 0; _i < array2.length; _i++) {
  console.log(array2[_i] + "\n");
}

console.log("\n");
var array3 = array.sort();

for (var _i2 = 0; _i2 < array3.length; _i2++) {
  console.log(array3[_i2] + "\n");
}

console.log("\n");
var car = {
  Brand: "Škoda",
  Model: "Fabia",
  Year: "2016"
};
var Brand = car.Brand,
    Model = car.Model,
    Year = car.Year;
console.log(Brand, Model, Year);
console.log('\n');
var rn = Math.random() * 555;
console.log("Náhodné číslo je: " + rn);