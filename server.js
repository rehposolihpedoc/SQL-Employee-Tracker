// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password
    password: `EYvg"e54GJPcqa'`,
    database: "employeetracking_db",
  },
  console.log(`Connected to the books_db database.`)
);

const PORT = process.env.PORT || 3001;

// Query database

// let deletedRow = 2;

// db.query(`DELETE FROM favorite_books WHERE id = ?` (err, result) => {
// if (err) {
// console.log(err);
// }
// console.log(result);
// mainMenu()
// });

// Query database

const newRoleAdd = async () => {
  try {
    console.log("Add a new role");
    const [departmentRows, departmentFields] = await db
    .promise()
    .query(
      "SELECT id AS value, name FROM department"
    );
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is the job title you want to add?",
        name: "addTitle",
      },
      {
        type: "input",
        message: "What is the salary?",
        name: "addSalary",
      },
      {
        type: "list",
        message: "What is the department name?",
        name: "addDepartment",
        choices: departmentRows
      },
    ]);
    const [roleRows, roleFields] = await db
      .promise()
      .query(
        "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)",
        [answers.addTitle, Number(answers.addSalary), answers.addDepartment]
      );
    console.log(roleRows);

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");

    mainMenu();
  } catch (error) {
    console.log(error);
  }
};

const viewEmployee = async () => {
  try {
    console.log("View Employees");
    const [employeeRows, employeeFields] = await db
      .promise()
      .query("Select * From employee");
    console.table(employeeRows);

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
    

    mainMenu();
  } catch (error) {
    console.log(error);
  }
};

const viewRole = async () => {
  try {
    console.log("View Roles");
    const [roleRows, roleFields] = await db
      .promise()
      .query("Select * From role");
    console.table(roleRows);

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
  

    mainMenu();
  } catch (error) {
    console.log(error);
  }
};

const viewAllDepartments = async () => {
  try {
    console.log("View All Departments");
    const [departmentRows, departmentFields] = await db
      .promise()
      .query("Select * From department");
    console.table(departmentRows);

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");


    mainMenu();
  } catch (error) {
    console.log(error);
  }
};

const roleSql = "SELECT role.id, role.title FROM role";

const addEmployee = async () => {
  try {
    console.log("Add Employee");
    const departmentInput = await inquirer.prompt([
      {
        type: "input",
        name: "employeeFirstName",
        message: "What is employees first name?",
      },
      {
        type: "input",
        name: "employeeLastName",
        message: "What is the employees last name?",
      },
      {
        type: "list",
        name: "employeeRole",
        message: "What is the employees roles?",
        choices: [ 

        ]
      },
    ]);

    await db
      .promise()
      .query("INSERT INTO employee(fist_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [
        departmentInput.employeeFirstName,
      ]);
    viewAllDepartments();
  } catch (error) {
    console.log(error);
  }
};

const mainMenu = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "userAction",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a new role",
        "Add an employee",
        "Update an employee role",
        "Exit application",
      ],
    },
  ]);

  if (answers.userAction === "View all departments") {
    viewAllDepartments();
  }
  if (answers.userAction === "View all roles") {
    //     console.log("do choice B stuff here");
    viewRole();
  }
  if (answers.userAction === "View all employees") {
    //     console.log("do choice B stuff here");
    viewEmployee();
  }
  if (answers.userAction === "Add a new role") {
    //     console.log("do choice B stuff here");
    newRoleAdd();
  }
  if (answers.userAction === "Add an employee") {
    //     console.log("do choice B stuff here");
    addEmployee();
  }
  if (answers.userAction === "Update an employee role") {
    //     console.log("do choice B stuff here");
    addEmployeeRole();
  }
  if (answers.userAction === "Exit application") {
    console.log("See you later!");
    process.exit(0)
  }
};

mainMenu();