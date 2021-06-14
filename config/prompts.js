module.exports = {
  firstPrompt: {
		type: "list",
		name: "task",
		message: "Make a selection:",
		choices: [
			"View Employees", 
			"View Employees by Manager", 
			"View Employees by Department", 
			"View Departments",
			"View Roles",
			"View Department Budget",
			"Add Employee",
			"Add Department",
			"Add Role",
			"Update Employee Role",
			"Update Employee Manager",
			"Remove Employee",
			"Remove Department",
			"Remove Role",
			"Exit",
		],
	},

	viewManagerPrompt: (managerChoices) => [
		// Select Manager
		{
			type: "list",
			name: "managerId",
			message: "Choose a manager",
			choices: managerChoices,
		},
	],

	departmentPrompt: (departmentChoices) => [
		// Select Department
		{
			type: "list",
			name: "departmentId",
			message: "Which department will you choose?",
			choices: departmentChoices,
		},
	],

	insertEmployee: (departmentArray, roleArray, managerArray) => [
		//Employee's First Name
		{
			name: "firstName",
			type: "input",
			message: "Please enter the employee's first name:",
		},
		//Employee"s Last Name
		{
			name: "lastName",
			type: "input",
			message: "Now enter the employee's last name:",
		},
		//Employee"s Department
		{
			name: "department",
			type: "list",
			message: "Select the employee's department:",
			choices: departmentArray,
		},
		//Employee"s Role
		{
			name: "role",
			type: "list",
			message: "What is the employee's job position?",
			choices: roleArray,
		},
		// Select Employee"s Manager
		{
			name: "manager",
			type: "list",
			message: "Select the employee's manager.",
			choices: managerArray,
		},
	],


	insertDepartment: {
		// Create Department Name
		name: "department",
		type: "input",
		message: "What is the name of the new department?",
	},

	insertRole: (departmentChoices) => [
		// Create New Role"s Name
		{
			type: "input",
			name: "roleTitle",
			message: "What is the role's title?",
		},
		// Create New Role's Salary 
		{
			type: "input",
			name: "roleSalary",
			message: "Role Salary",
		},
		// Select New Role;s Department
		{
			type: "list",
			name: "departmentId",
			message: "Department?",
			choices: departmentChoices,
		},
	],


	updateRole: (employees, job) => [
		// Select Employee to Update
		{
			name: "update",
			type: "list",
			message: "Choose the employee to be updated:",
			choices: employees,
		},
		// Select Employee;s New Role
		{
			name: "role",
			type: "list",
			message: "Choose employee's job position",
			choices: job,
		},
	],


	updateManager: (employees) => [
		// Select Employee to Update
		{
			name: "update",
			type: "list",
			message: "Choose the employee whose manager is to be updated:",
			choices: employees,
		},
		// Select Employee"s New Manager
		{
			name: "manager",
			type: "list",
			message: "Choose employee's new manager",
			choices: employees,
		},
	],


	deleteEmployeePrompt: (deleteEmployeeChoices) => [
		// Select Employee to Remove
		{
			type: "list",
			name: "employeeId",
			message: "Which employee do you want to remove?",
			choices: deleteEmployeeChoices,
		},
	],

	deleteDepartmentPrompt: (deleteDepartmentChoices) => [
		// Select Department to Remove
		{
			type: "list",
			name: "departmentId",
			message: "Which department do you want to remove?",
			choices: deleteDepartmentChoices,
		},
	],

	deleteRolePrompt: (deleteRoleChoices) => [
		// Select Role to Remove
		{
			type: "list",
			name: "roleId",
			message: "Which role do you want to remove?",
			choices: deleteRoleChoices,
		},
	],
};
