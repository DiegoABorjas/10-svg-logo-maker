const Triangle = require('./triangle')
const Circle = require('./circle')
const Square = require('./square')

const triangle = new Triangle()
triangle.setShapeColor("blue")
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')

describe('setShapeColor', () => {
    it('set the color of the shape', () => {
        const shape = new Triangle();
        shape.setShapeColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
})

const circle = new Circle()
circle.setShapeColor("blue")
expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')

describe('setShapeColor', () => {
    it('set the color of the shape', () => {
        const shape = new Circle();
        shape.setShapeColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
    })
})


  const square = new Square()
  square.setShapeColor("red")
expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />')

describe('setShapeColor', () => {
    it('set the color of the shape', () => {
        const shape = new Square();
        shape.setShapeColor("red");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />')
    })
})