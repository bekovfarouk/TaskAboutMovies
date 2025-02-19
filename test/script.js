// function calculateVolumeAndArea(a) {
//   if (typeof a === "number" && a > 0 && Number.isInteger(a)) {
//     let v = a * a * a;
//     let s = a * a * 6;
//     return `Объем куба:${v}, площадь всей поверхности:${s}`;
//   } else {
//     return "При вычислении произошла ошибка";
//   }
// }

// console.log(calculateVolumeAndArea(10));

// function getCoupeNumber(number) {
//   if (Number.isInteger(number) && number > 0 && number < 36) {
//     if (number % 4 === 0) {
//       return (number / 4);
//     } else if (number <= 4) {
//       return (1);
//     } else {
//       return (Math.ceil(number / 4));
//     }
//   } else if (number === 0 || number > 36) {
//     return ("Таких мест в вагоне не существует");
//   } else {
//     return ("Ошибка. Проверьте правильность введенного номера места");
//   }
// }

// function getTimeFromMinutes(minuts) {
//   if (isNaN(minuts) || !Number.isInteger(minuts) || minuts < 0) {
//     return "Ошибка, проверьте данные";
//   } else {
//     if (Math.floor(minuts / 60) === 1) {
//       return `это ${Math.floor(minuts / 60)} час и ${minuts % 60} минут`;
//     } else if (Math.floor(minuts / 60) > 1 && Math.floor(minuts / 60) < 5) {
//       return `это ${Math.floor(minuts / 60)} часа и ${minuts % 60} минут`;
//     } else {
//       return `это ${Math.floor(minuts / 60)} часов и ${minuts % 60} минут`;
//     }
//   }
// }

// function findMaxNumber() {
//   let arr = [];
//   for (let i = 0; i < 4; i++) {
//     arr[i] = Number(prompt("введите число", ""));
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i]) || !Number.isInteger(arr[i])) {
//       return 0;
//     } else {
//       return Math.max(...arr);
//     }
//   }
// }

// console.log(findMaxNumber());
// function fib(number) {
//   let str = "";

//   // Проверка на целое число и положительность
//   if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
//     return "";
//   }

//   // Генерация чисел Фибоначчи
//   let a = 0,
//     b = 1;

//   for (let i = 0; i < number; i++) {
//     str += i === 0 ? a : " " + a;
//     let next = a + b;
//     a = b;
//     b = next;
//   }

//   return str;
// }

// // console.log(fib(8));
// debugger;
// function fetchData(callback) {
//   console.log("1.Fetching data...");

//   setTimeout(() => {
//     console.log("2.Data fetched.");
//     callback(); // Callback after data is fetched
//   }, 2000); // 2-second delay
// }

// function processData() {
//   console.log("3.Processing the data...");
// }

// fetchData(processData); // fetchData is called, then processData is called after 2 seconds

// const elements = document.querySelectorAll('div');
// console.log(elements);  // NodeList (pseudo-array)
// console.log(elements[0]);  // First div element
// console.log(elements.length);  // Number of div elements

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs: function (plan) {
//     const { age } = plan;
//     const { languages } = plan.skills;
//     console.log(plan.skills);
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function (lang) {
//       str += `${lang.toUpperCase()} `;
//     });

//     return str;
//   },
// };

let arr = [1, 2, 3];
console.dir(arr);

let obj = {
  a: 1,
  b: 2,
};

console.dir(obj);

let str = "1, 2, 5";
console.dir(str);

let a,
  b = 123;
console.dir(a);
console.dir(b.toString());

const st = new String("hello");
console.log(st);
