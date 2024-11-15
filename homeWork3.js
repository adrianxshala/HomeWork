//detyra e a pare //
const faqet = (n, m) => {
  if (n < 0 || m < 0) {
    return 0;
  }

  return n * m;
};
console.log("detyra e pare:");
console.log(faqet(5, 5));
console.log(faqet(-5, 5));

//Detyra e dyt//
const eshteNumber = (string) => {
  return !isNaN(string) && string.trim() !== "";
};
console.log("Detyra e dyte:");
console.log(eshteNumber("20"));
console.log(eshteNumber("3.14"));
console.log(eshteNumber("asd"));
console.log(eshteNumber("twenty"));
console.log(eshteNumber(""));

//Detyra e tret//
const shumaStringjeve = (string1, string2) => {
  let n1 = string1 === "" ? 0 : parseFloat(string1);
  let n2 = string2 === "" ? 0 : parseFloat(string2);
  let shuma = n1 + n2;

  return shuma.toString();
};
console.log("Detyra e tret:");
console.log(shumaStringjeve("9", "15"));
console.log(shumaStringjeve("22", "16"));
console.log(shumaStringjeve("", ""));
console.log(shumaStringjeve("2", ""));
console.log(shumaStringjeve("-5", "3"));
