"use strict";

// const box = document.getElementById("box"),
//   btns = document.getElementsByTagName("button"),
//   circles = document.getElementsByClassName("circle"),
//   hearts = document.querySelectorAll(".heart"),
//   oneHeart = document.querySelector(".heart"),
//   wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "green";
// box.style.width = "500px";
// btns[0].style.borderRadius = "100%";
// box.style.cssText = "background-color:yellow; width: 500px;";
// circles[1].style.backgroundColor = "brown";
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "gray";
// }

// hearts.forEach((elements) => {
//   elements.style.backgroundColor = "white";
// });

// const div = document.createElement("div");
// const text = document.createTextNode("I am node text");
// div.classList.add("black");
// document.body.append(div);
// wrapper.append(div);
// wrapper.prepend(div);
// hearts[1].before(div);
// hearts[1].after(div);
// circles[1].remove();
// hearts[0].replaceWith(circles[0]);
// div.innerHTML = "<h1>Hello world!</h1>";
// div.textContent = "Hello";
// div.insertAdjacentElement("afterend", "<h2>hello</h2>");
// //-----------------old methods----------------------------
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChild(hearts[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console. log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector("#current").parentNode.parentNode);
// console. log(document.querySelector('[data-current="3"]').nextElementSibling)
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('#current').parentElement.parentElement);

// for (let node of document.body.childNodes) {
//   if (node.nodeName == "#text") {
//     continue;
//   }
//   console.log(node);
// }

// for (let node of document.body.childNodes) {
//   if (node.nodeType !== 1) {
//     continue;
//   } // Skip non-element nodes (like text or comment nodes)
//   console.log(node); // Logs each element node inside <body>
// }

// for (let node of document.body.children) {
//   console.log(node); // Logs each element node inside <body>
// }

// const test = {
//   student: ["adam", "insan", "man"],
//   age: [20, 23, 34],
// };

// console.log(Object.values(test));

// function factorial(n) {
//   if (n < 1) {
//     return 1;
//   } else if (isNaN(n) == true || Number.isInteger(n) === false) {
//     return "it is not a number!";
//   } else {
//     const count = n * factorial(n - 1);
//     return count;
//   }
// }

// console.log(factorial(5));

let student = {
  js: [
    {
      name: "Farouk",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "peter",
        progress: 20,
      },
      {
        name: "Anna",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Samir",
        progress: 10,
      },
    ],
  },
};

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }

    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }

    return total;
  }
}

const result = getTotalProgressByRecursion(student);
console.log(result[0]/result[1]);