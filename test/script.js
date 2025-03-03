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

// let arr = [1, 2, 3];
// console.dir(arr);

// let obj = {
//   a: 1,
//   b: 2,
// };

// console.dir(obj);

// let str = "1, 2, 5";
// console.dir(str);

// let a,
//   b = 123;
// console.dir(a);
// console.dir(b.toString());

// const st = new String("hello");
// console.log(st);

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.
// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   let area = 0;
//   let volume;
//   let utilityBills;
//   data.shops.forEach((items) => {
//     let sum = items.width * items.length;
//     area += sum;
//   });
//   volume = data.height * area;
//   utilityBills = volume * data.moneyPer1m3;
//   if (utilityBills > data.budget) {
//     return "Бюджета недостаточно";
//   } else return "Бюджета достаточно";
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   let groupedNames = [];
//   let str =
//     arr.length % 3 === 0 ? "Оставшиеся студенты: -" : "Оставшиеся студенты: ";

//   for (let i = 0; i < arr.length; i += 3) {
//     if (arr.length - i >= 3) {
//       groupedNames.push(arr.slice(i, i + 3));
//     } else {
//       let remaining = arr.slice(i);
//       str += remaining.join(", ");
//     }
//   }

//   groupedNames.push(str);
//   return groupedNames;
// }

// console.log(sortStudentsByGroups(students));

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   const a = [],
//     b = [],
//     c = [],
//     rest = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       a.push(arr[i]);
//     } else if (i < 6) {
//       b.push(arr[i]);
//     } else if (i < 9) {
//       c.push(arr[i]);
//     } else {
//       rest.push(arr[i]);
//     }
//   }
//   return [
//     a,
//     b,
//     c,
//     `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
//   ];
// }

// console.log(sortStudentsByGroups(students));

// function groupStudentsByGrade(studentsWithGrades) {
//   // Sort the students alphabetically by name
//   studentsWithGrades.sort((a, b) => a.name.localeCompare(b.name));

//   // Initialize an object to hold the groups by grade
//   const groupedStudents = {};

//   // Loop through each student
//   for (const student of studentsWithGrades) {
//     // If the grade doesn't exist in the object, create a new array for it
//     if (!groupedStudents[student.grade]) {
//       groupedStudents[student.grade] = [];
//     }
//     // Add the student's name to the corresponding grade group
//     groupedStudents[student.grade].push(student.name);
//   }

//   // Convert the grouped object to an array of groups sorted by grade
//   const result = [];
//   for (const grade in groupedStudents) {
//     result.push(groupedStudents[grade]);
//   }

//   return result;
// }

// const studentsWithGrades = [
//   { name: "Peter", grade: 5 },
//   { name: "Anna", grade: 4 },
//   { name: "Sam", grade: 5 },
//   { name: "Mark", grade: 4 },
//   { name: "Sandra", grade: 5 },
//   { name: "John", grade: 3 },
// ];

//   const groupedStudents = {};
//   studentsWithGrades.forEach((student) => {
//     if (!groupedStudents[student.grade]) {
//       groupedStudents[student.grade] = [];
//     }
//     groupedStudents[student.grade].push(student.name);
//   });

// console.log(groupedStudents);

// const students = [
//   { name: "Peter", subjects: ["Math", "Physics"] },
//   { name: "Anna", subjects: ["Math", "Biology"] },
//   { name: "Sam", subjects: ["Physics", "Biology"] },
//   { name: "Mark", subjects: ["Math", "Physics"] },
//   { name: "Sandra", subjects: ["Biology", "Chemistry"] },
// ];
// function sortedStudentsBySubject(data) {
//   const groupedStudents = {};
//   data.forEach((element) => {
//     element.subjects.forEach((subject) => {
//       if (!groupedStudents[subject]) {
//         groupedStudents[subject] = [];
//       }
//       groupedStudents[subject].push(element.name);
//     });
//   });
//   return groupedStudents;
// };

// console.log(sortedStudentsBySubject(students));

// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const modyfyArr = arrays.join();
// const newArr = [];
// for (let value of modyfyArr) {
//   value = +value;
//   if (!isNaN(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);

// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// // Flatten the array
// const flattenedArr = arrays.flat();
// console.log(flattenedArr);

// function outer() {
//   let outerVar = "I am from the outer function"; debugger;

//   function inner() {
//     console.log(outerVar); debugger;
//   }

//   return inner;
// }

// const closureFunction = outer(); debugger;
// closureFunction();

// let a = 3;
// function addTwo(x) {
//   let ret = x + 2;
//   return ret;
// }
// let b = addTwo(a);
// console.log(b);

// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log("example increment", c1, c2, c3);

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); //0
// alert( counter() ); //1

// alert( counter2() ); //0
// alert( counter2() ); //1

// function foo(a, b) {
//   const [first] = a;
//   const { eng } = b;

//   return `${first} ${eng}`;
// }

// const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });
// console.log(result);

// let x = 5;
// alert(x++);
// alert( null || 2 && 3 || 4 );
// alert( +"Infinity" );
// console.log("Ёжик" > "яблоко");
// console.log(0 || "" || 2 || undefined || true || falsе);
// a = [1, 2, 3]; b = [1, 2, 3];  
// console.log(a==b);

// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "John", age: 24 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };


// function isOpen(prop) {
//   let answer = "";
//   prop ? (answer = "Открыто") : (answer = "Закрыто");

//   return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (+fDish.price.slice(0, -1) + parseInt(sDish.price) < parseInt(average)) {
//     return "Цена ниже средней";
//   } else {
//     return "Цена выше средней";
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[2],
//     restorantData.menu[3],
//     restorantData.averageLunchPrice
//   )
// );

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);
//   copy.waitors = [{ name: "Mike", age: 32 }];
//   return copy;
// }

// console.log(transferWaitors(restorantData)); 

const pArr = document.getElementsByTagName('div');
console.log(pArr);

const pArr1 = document.getElementsByClassName('container');
console.log(pArr1);
let nodes = document.querySelectorAll("div");
for (let [index, node] of nodes.entries()) {
  console.log(index, node); // Индекс и сам элемент
}

const arr = [1,2,3,5,6]
console.log(arr);