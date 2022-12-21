// Деструктуризация массивов
const array = ["a", "b", "c", 2, 4, 6];
console.log(array);
const shorArra = array.slice(0, 3);
console.log(shorArra);
let [a, b, c, ...d] = array;
console.log(a, b, c, d);
// деструктуризация объектов
const user = {
  name: "Max",
  age: 23,
  profession: "programmist",
  programLanguage: {
    webProgramming: ["JavaScript", "TypeScript", "PHP"],
    enterprise: ["Java", "C++", "Rust"],
  },
};

const {
  name,
  age,
  profession,
  programLanguage: {
    webProgramming: [lang1, lang2, lang3],
    enterprise: [entLang1, entLang2, entLang3],
  },
} = user;
console.log(user);
console.log(
  `User object name: ${name}, age: ${age}, profession: ${profession}, webprogramming language: ${lang1}, ${lang2}, ${lang3}, enterprise langueage: ${entLang1}, ${entLang2}, ${entLang3}`
);

// функции
function functionDeclorationNoArg() {
  console.log("Hello, i'm funcrion decloration no argument");
}
functionDeclorationNoArg();
function functionDeclorationWithArg(arg1, arg2) {
  console.log(
    `Hello, i'm function decloration with argument: ${arg1} and ${arg2} `
  );
}
functionDeclorationWithArg("abc", 123);

const functionExpression = function () {
  return "Hello, i'm function expression";
};
functionExpression();
function functionDeclorationWithCallBack(
  callb,
  otherArg = "Other Arg"
) {
  return [otherArg, callb()];
}
function callback() {
  return "Hi, i'm callback function!";
}
console.log(functionDeclorationWithCallBack(callback));
console.log(functionDeclorationWithCallBack(callback, "asdf"));

functionDeclorationWithArg("asdf", functionExpression());

const arrowFunction = () => {
  console.log("Hello, i'm arrow function");
};
// arrowFunction();

function ternarIf(a, b) {
  return a > b ? a : b;
}

// console.log(ternarIf(22, 3));

// циклы
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomWhile(stopNumber, maxNumberForRandom = 100) {
  let random = getRandomNumber(0, maxNumberForRandom);
  let countIteration = 0;
  while (stopNumber != random) {
    random = getRandomNumber(0, maxNumberForRandom);
    console.log(
      `Цикл не прервался, текущее случайное число: ${random}`
    );
    countIteration++;
  }
  console.log(`ЦИКЛ ПРЕРВАЛСЯ`);
  console.log(
    `Общее количество итераций до получения числа ${stopNumber}: ${countIteration}`
  );
}
randomWhile(3, 100);

const simpleObject = {
  nickname: "Agent007",
  email: "bond007@bondiana.com",
  firstname: "James",
  lastname: "Bond",
  profession: "Special agent",
};
// console.log(Object.entries(simpleObject));
Object.entries(simpleObject).forEach((value) => {
  // console.log(`${value[0]}: ${value[1]}`);
});

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salary) {
  let entries = Object.entries(salary);
  if (entries.length > 0) {
    entries.sort((a, b) => {
      console.log(a[1], b[1]);
      return a[1] - b[1];
    });
    return entries.reverse()[0][0];
  } else {
    return null;
  }
}
console.log(topSalary(salaries));

const number = [1, 2, 3, 4, 5, 6];

let sum = number.reduce((num1, num2) => num1 - num2);
console.log(sum);
