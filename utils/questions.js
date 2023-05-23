const questions = [
    {
        type: 'input',
        message: 'What is your logo text?',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What is the text color for your logo?',
        name: 'textColor'
    },
    {
        type: 'input',
        message: 'What is the shape color for your logo?',
        name: 'shapeColor'
    },
    {
        type: 'list',
        message: 'What kind of shape do you want for your logo?',
        choices:['Circle', 'Triangle', 'Square'],
        name: 'shape'
    }

];

module.exports = {
    questions
}