const cp = require('child_process')
var inquirer = require('inquirer');
inquirer
.prompt([
    {
        type: 'list',
        name: 'Selection',
        choices: ['About Me and My Skills', 'My Projects', 'My Academics'],
    }
])
.then((choices) => {
    if (choices.Selection === 'About Me and My Skills') {
        cp.execSync('start chrome https://www.linkedin.com/in/guneet-malhotra-952a0b190/')
        displayNext()
    } else if (choices.Selection === 'My Projects') {
        cp.execSync('start chrome https://github.com/Guneet-05')
        displayNext()
    } else if (choices.Selection === 'My Academics') {
        cp.execSync('start chrome https://ipuranklist.com/student/01496303119')
        displayNext()
    }
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
    }
});