interface Logger {
  logCreationDate: (addition: string) => void;
}

export enum Category {
  GENERAL = "general",
  WORK = "work",
  GYM = "gym",
  HOBBY = "hobby",
  SOCIAL = "social",
}

export class Task implements Logger {
  public name: string;
  public done: boolean;
  public category?: Category;

  private createdAt: Date;

  constructor(name: string, done: boolean, category: Category) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createdAt = new Date();
  }

  logCreationDate(extras: string) {
    console.log(`${this.createdAt} utworzono ${extras}`);
  }
}
