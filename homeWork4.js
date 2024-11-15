//Detyra e pare
const mledhsi = (x) => {
  if (typeof x === "string") {
    return "error";
  }
  return x * 50 + 6;
};

console.log(mledhsi(3));
console.log(mledhsi("20"));
//Detyra e Dyte
function calcAverage(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
const numbers = [4, 6, 8, 10, 12, 14];
const average = calcAverage(numbers);
console.log("Mesatarja është: " + average);
//Detyra e tret
function revers(text) {
  return text.split("").reverse().join("");
}

console.log(revers("Javascript"));
console.log(revers("Node"));
//Detyra e katert
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j).toString().padStart(4, ' ');
    }
    console.log(row);
}
