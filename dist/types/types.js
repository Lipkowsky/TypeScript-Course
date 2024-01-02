export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
    Category["SOCIAL"] = "social";
})(Category || (Category = {}));
export class Task {
    constructor(name, done, category) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extras) {
        console.log(`${this.createdAt} utworzono ${extras}`);
    }
}
