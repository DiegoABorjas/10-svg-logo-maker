// Import variables
const inquirer = require('inquirer')
const fs = require('fs')

const { questions } = require('./utils/questions')
const Triangle = require('./lib/triangle')
const Circle = require('./lib/circle')
const Square = require('./lib/square')

//Function to write the new file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf-8', function(err) {
        console.error(err)
    })
}

//Function to fill in contents of the new SVG file
function generateShape(text, textColor, shapeChoice) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${shapeChoice}
    
    <text x="110" y="125" font-size="60" text-anchors="middle" fill="${textColor}">${text}</text>

    </svg>
    `
}

//Helper function to handle the Shape choice
function newShapeChoice(shapeInput) {
    if (shapeInput === 'Triangle') {
        return new Triangle        
    } else if (shapeInput === 'Square') {
        return new Square
    } else if (shapeInput === 'Circle') {
        return new Circle
    }
}

// Main function to ask questions to user, then generate the new SVG file.
function askQuestions() {
    inquirer.prompt(questions).then(function(answers) {

        const newShape = newShapeChoice(answers.shape)
        newShape.setText(answers.text)
        newShape.setTextColor(answers.textColor)
        newShape.setShapeColor(answers.shapeColor)
        const renderedShape = generateShape(answers.text, answers.textColor, newShape.render())
        writeToFile('./examples/logo.svg', renderedShape)

        console.log(`Generated logo.svg`)
    })
}

// Function to initialize the app
function onInit() {
    askQuestions()
}

onInit()