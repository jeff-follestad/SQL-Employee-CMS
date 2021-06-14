const inquirer = require("inquirer");
const table = require("console.table");
// MySQL Connection
const connection = require("./config/connection");
// Prompts
const prompt = require("./config/prompts");
require("console.table");

function firstPrompt() {
    // Main Menu
    inquirer.prompt(prompt.firstPrompt).then(function ({ task }) {
        switch (task) {
            case "View Employees":
                viewEmployee();
                break;
            case "View Employees by Manager":
                viewEmployeeByManager();
                break;
            case "View Employees by Department":
                viewEmployeeByDepartment();
                break;
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Department Budget":
                viewDepartmentBudget();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Update Employee Manager":
                updateEmployeeManager();
                break;
            case "Remove Employee":
                deleteEmployee();
                break;
            case "Remove Department":
                deleteDepartment();
                break;
            case "Remove Role":
                deleteRole();
                break;
            case "Exit":
                console.log(
                    "goodbye!",
                );
                connection.end();
                break;
        }
    });
}
