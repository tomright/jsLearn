const array = ["a", "b", "c", 2, 4, 6];
console.log(array);
const shorArra = array.slice(0, 3);
console.log(shorArra);
let [a, b, c, ...d] = array;
console.log(a, b, c, d);

const user = {
  name: "Max",
  age: 23,
  profession: "programmist",
  programLanguage: {
    webProgramming: ["JavaScript", "TypeScript", "PHP"],
    enterprise: ["Java", "C++", "Rust"],
  },
};

const { name, age, profession, programLanguage: { webProgramming: [lang1, lang2, lang3], enterprise: [entLang1, entLang2, entLang3] } } = user;
console.log(user);
console.log(
  `User object name: ${name}, age: ${age}, profession: ${profession}, webprogramming language: ${lang1}, ${lang2}, ${lang3}, enterprise langueage: ${entLang1}, ${entLang2}, ${entLang3}`
);
