let array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]
for (let i = 0; i < array.length; i++)
{
    console.log(array[i] + "\n");
}
console.log("\n");

let array2 = array.reverse();
for (let i = 0; i < array2.length; i++)
{
    console.log(array2[i] + "\n");
}
console.log("\n");

let array3 = array.sort();
for (let i = 0; i < array3.length; i++)
{
    console.log(array3[i] + "\n");
}
console.log("\n");

let car = {
Brand: "Škoda",
Model: "Fabia",
Year: "2016"
};
let {Brand, Model, Year} = car;
console.log(Brand, Model, Year);
console.log('\n')

let rn = Math.random() * 555
console.log("Náhodné číslo je: " + rn)