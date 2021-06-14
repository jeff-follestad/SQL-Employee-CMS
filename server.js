const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    port: 3306,
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Oakland2020!!',
    database: 'employees'
  },
  console.log('Connected to the employees database.')
);

connection.connect(function (err) {
	if (err) throw err;
});

const promptMessages = {
    viewAllDepartments: "View All Departments",
    viewAllRoles: "View All Roles",
    viewAllEmployees: "View All Employees",
    addDepartment: "Add a Department",
    addRole: "Add a Role",
    addEmployee: "Add an Employee",
    updateEmployeeManager: "Update Employee Record",
    exit: "Exit"
  };

function prompt() {
  inquirer
      .prompt({
          name: 'action',
          type: 'list',
          message: 'Please select and action: ',
          choices: [
              promptMessages.viewAllDepartments,
              promptMessages.viewAllRoles,
              promptMessages.viewAllEmployees,
              promptMessages.addDepartment,
              promptMessages.addRole,
              promptMessages.addEmployee,
              promptMessages.updateEmployee,
              promptMessages.exit
          ]
      })

      .then(answer => {
        console.log('answer', answer);
        switch (answer.action) {
            case promptMessages.viewAllDepartments:
                viewAllEmployees();
                break;

            case promptMessages.viewAllRoles:
                viewByDepartment();
                break;

            case promptMessages.viewAllEmployees:
                viewByManager();
                break;

            case promptMessages.addDepartment:
                addEmployee();
                break;

            case promptMessages.addRole:
                remove('delete');
                break;

            case promptMessages.addEmployee:
                remove('role');
                break;

            case promptMessages.updateEmployee:
                viewAllRoles();
                break;

            case promptMessages.exit:
                connection.end();
                break;
        }
    });
}


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



