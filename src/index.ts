import inquirer from 'inquirer';

inquirer.prompt([{name: 'name', message: "Wie ben jij?"}]).then(answers => console.log(answers));