const inquirer = require('inquirer')
const fs = require('fs')

const { questions } = require('./utils/questions')



function askQuestions() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers)
    })

}

function onInit() {
    askQuestions()
}

onInit()