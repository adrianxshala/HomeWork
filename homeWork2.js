const pikat = 101;

if (pikat < 0 || pikat > 100) {
  console.log("provimi duhet te kontrollohet edhe nje here");
} else if (pikat < 50) {
  console.log("Nota  5");
} else if (pikat < 60) {
  console.log("Nota 6");
} else if (pikat < 70) {
  console.log("Nota 7");
} else if (pikat < 80) {
  console.log("Nota 8");
} else if (pikat < 90) {
  console.log("Nota 9");
} else {
  console.log("Nota 10");
}
