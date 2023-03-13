import Employee from "./Employee";

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (typeof name !== "string" || typeof id !== "number" || typeof email !== "string" || typeof github !== "string") {
      throw new Error("Invalid input type.");
    }
    super(name, id, email);
    this.github = github;
  }

  static getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }

  toString() {
    return `${super.toString()}\nGitHub: ${this.github}`;
  }
}

export default Engineer;
