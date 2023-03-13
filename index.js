const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const newStaffMemberData = [];

const promptQuestions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  let staffMember;

  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
      },
    ]);

    staffMember = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github",
      },
    ]);

    staffMember = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAns.github
    );
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What university did you attend?",
        name: "school",
      },
    ]);

    staffMember = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school
    );
  }

  newStaffMemberData.push(staffMember);

  const addMemberAns = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  if (addMemberAns.addMember === "Add a new member") {
    await promptQuestions();
  } else {
    await createTeam();
  }
};

const createTeam = async () => {
  try {
    await fs.promises.writeFile(
      "./output/index.html",
      generateTeam(newStaffMemberData),
      "utf-8"
    );
    console.log("Team created successfully!");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
};

promptQuestions();
