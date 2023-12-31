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

type Category = "general" | "work" | "hobby" | "gym";

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

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

const render = () => {
  taskContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");

    if (task.category) {
      taskElement.classList.add(task.category);
    }

    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });
    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    taskContainerElement.appendChild(taskElement);
  });
};

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement = document.createElement("li");
    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = category;
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;
    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);
    categoriesContainerElement.appendChild(categoryElement);
  });
};

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
  render();
});
addTask({ name: "specjalne zadanie od szefa", category: "gym", done: false });
renderCategories();
render();
