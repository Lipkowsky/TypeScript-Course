// KIEDY TRZEBA OBSLUZYC WSZYSTKIE SCENARIUSZE
const handleCategoryChange = (category) => {
    if (category === "general") {
        console.log("Zmiana na generall");
    }
    else if (category === "gym") {
        alert("lecisz na silke");
    }
    else if (category === "hobby") {
        document.body.style.background = "red";
    }
    else if (category === "work") {
        document.body.style.background = "green";
    }
    else if (category === "social") {
        document.body.style.background = "green";
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = category;
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
