class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor       
    }

    setText(textInput) {
        this.text = textInput
    }

    setTextColor(textColorInput) {
        this.textColor = textColorInput
    }

    setShapeColor(colorInput) {
        this.shapeColor = colorInput
    }

    render() {}
    
}

module.exports = Shape