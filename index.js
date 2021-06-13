const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

const promptMessages = {
  viewAllEmployees: "View All Employees",
  viewByDepartment: "View All Employees By Department",
  viewByManager: "View All Employees By Manager",
  addEmployee: "Add An Employee",
  removeEmployee: "Remove An Employee",
  updateRole: "Update Employee Role",
  updateEmployeeManager: "Update Employee Manager",
  viewAllRoles: "View All Roles",
  exit: "Exit"
};

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Oakland2020!!',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

connection.connect(err => {
  if (err) throw err;
  prompt();
});


