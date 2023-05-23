const Shape = require("./shape")

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

module.exports = Triangle