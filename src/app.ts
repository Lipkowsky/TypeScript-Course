import renderTasks from "./helpers/render-tasks-helpers.js";
import { Category, Task } from "./types/types.js";
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

const tasks: Task[] = [
  new Task("Wyrzucić śmieci", false, Category.HOBBY),
  new Task("Wyrzucić śmieci", true, Category.HOBBY),
  new Task("Wyrzucić śmieci", false, Category.HOBBY),
  new Task("Wyrzucić śmieci", true, Category.HOBBY),
];

const categories: Category[] = [
  Category.GENERAL,
  Category.GYM,
  Category.HOBBY,
  Category.WORK,
  Category.SOCIAL,
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const newTask: Task = new Task(
    taskNameInputElement.value,
    false,
    selectedCategory
  );

  addTask(newTask);
  newTask.logCreationDate("!!!")
  renderTasks(tasks, taskContainerElement);
});

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["zrobic klate", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);
renderTasks(tasks, taskContainerElement);

const taskClassInstance = new Task("TEST", true, Category.GENERAL);
taskClassInstance.logCreationDate("!");
