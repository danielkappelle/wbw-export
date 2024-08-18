import inquirer from 'inquirer';

console.log('Welcome to WBW Export');
console.log("Let's log in first");



inquirer.prompt([{name: 'email', message: "Email"}, {name: 'password', message: 'Password?'}]).then(answers => console.log(answers));