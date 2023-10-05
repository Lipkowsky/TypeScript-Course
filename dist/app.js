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
const buttonElement = document.querySelector("button");
const calculatePrice = (orginalPrice, hasDiscount) => {
    return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
};
buttonElement.addEventListener("click", () => {
    const orginalPrice = 50;
    const hasDiscount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(orginalPrice, hasDiscount));
});
