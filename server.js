const inquirer = require("inquirer");
const table = require("console.table");
// MySQL Connection
const connection = require("./config/connection");
// Prompts
const prompt = require("./config/prompts");
require("console.table");

function viewAllDepartments() {
  const query = `SELECT * FROM department
  ORDER BY id;`;
  connection.query(query, (err, res) => {
      if (err) throw err;
      console.log('\n');
      console.log('VIEW ALL DEPARTMENTS');
      console.log('\n');
      console.table(res);
      prompt();
  });
}

function viewAllRoles() {
    const query = `SELECT * FROM role
    ORDER BY id;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('\n');
        console.log('VIEW ALL ROLES');
        console.log('\n');
        console.table(res);
        prompt();
    });
  }

function viewAllEmployees() {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('\n');
        console.log('VIEW ALL EMPLOYEES');
        console.log('\n');
        console.table(res);
        prompt();
    });
}



