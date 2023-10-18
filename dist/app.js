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
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskContainerElement = document.querySelector(".tasks");
const task = {
    name: "Wyrzuć śmieci",
    done: false,
};
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
    },
    {
        name: "Pójść na siłkę",
        done: true,
    },
    {
        name: "Nakarmić koty",
        done: false,
    },
];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        // taskElement.innerHTML = task.name;
        // taskContainerElement.appendChild(taskElement);
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
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
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
