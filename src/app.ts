import renderTasks from "./helpers/render-tasks-helpers.js";
import { Category, Task } from "./types/types";
import { render as renderCategories } from "./helpers/render-categories-helper.js";
// let age: number = 29;
// age = 30;

// let ageAsString: string = "dwadziescia dziewiec";
// console.log(ageAsString);

// const add = (v1: number, v2: number) => v1 + v2;

// console.log(add(10,5));

// const input1Element: HTMLInputElement = document.querySelector("#input1")

// const input2Element: HTMLInputElement = document.querySelector("#input2")

// const addButtonElement = document.querySelector("#button")

// const add = (v1:number, v2:number) => v1 + v2;

// addButtonElement.addEventListener("click", () => {
//     const sum = add(Number(input1Element.value), Number(input2Element.value));
//     console.log(sum);
// })

// UNION TYPE --->
// const logAge = (age: number | string) => {
//     console.log(`Hej mam ${age} lat!`)
// }

// logAge("28");

// const buttonElement = document.querySelector("button");
// const calculatePrice = (orginalPrice: number, hasDiscount: boolean) => {
//   return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
// };

// buttonElement.addEventListener("click", () => {
//   const orginalPrice:number = 50;
//   const hasDiscount:boolean = new URLSearchParams(window.location.search).get(
//     "discount"
//   ) === "true";
//   console.log(calculatePrice(orginalPrice, hasDiscount));
// });

// <li>
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci">
// </li>

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const task = {
  title: "Wyrzuć śmieci",
  done: false,
};
const tasks: Task[] = [
  {
    name: "Wyrzucić śmieci",
    done: false,
    category: "hobby",
  },
  {
    name: "Pójść na siłkę",
    done: true,
    category: "gym",
  },
  {
    name: "Nakarmić koty",
    done: false,
    category: "work",
  },
];

const categories: Category[] = ["general", "work", "gym", "hobby"];

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    category: selectedCategory,
    done: false,
  });
  renderTasks(tasks, taskContainerElement);
});
addTask({ name: "specjalne zadanie od szefa", category: "gym", done: false });
renderCategories(categories, categoriesContainerElement, selectedCategory);
renderTasks(tasks, taskContainerElement);
