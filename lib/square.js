const Shape = require("./shape");

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)        
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"/>`  
    }
}

module.exports = Square