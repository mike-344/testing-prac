const createCalculator = require('./calculator')
const calculator = createCalculator()

//Add tests
test('Adds two numbers', () => {
    expect(calculator.add(1, 5)).toBe(6)
})
test('Respects commutative property', () =>{
    expect(calculator.add(5, 1)).toBe(6)
})
test('Adds two negative numbers', () => {
    expect(calculator.add(-3, -4)).toBe(-7)
})
test('Adds negative and positive', () => {
    expect(calculator.add(-4, 1)).toBe(-3)
})

//Subtract tests
test('Subtracts two numbers', () => {
    expect(calculator.subtract(1, 5)).toBe(-4)
})
test('Subtracts two negative numbers', () => {
    expect(calculator.subtract(-3, -4)).toBe(1)
})
test('Subtracts negative and positive', () => {
    expect(calculator.subtract(-4, 1)).toBe(-5)
})

//Divide tests
test('Divides two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2)
})
test('Divides two negative numbers', () => {
    expect(calculator.divide(-6, -2)).toBe(3)
})
test('Divides negative and positive', () => {
    expect(calculator.divide(-6, 2)).toBe(-3)
})
test('Identity property of division', () => {
    expect(calculator.divide(-6, 1)).toBe(-6)
})

//Divide multiply
test('Multiplies two numbers', () => {
    expect(calculator.multiply(4, 2)).toBe(8)
})
test('Multiplies two negative numbers', () => {
    expect(calculator.multiply(-6, -2)).toBe(12)
})
test('Multiplies negative and positive', () => {
    expect(calculator.multiply(-6, 2)).toBe(-12)
})
test('Identity property of multiplication', () => {
    expect(calculator.multiply(-6, 1)).toBe(-6)
})