const capitalize = require('./capitalize')

test('Capitalizes first letter', () => {
    expect(capitalize("the")).toBe("The")
})

test('Capitalize first letter of any word', () => {
    expect(capitalize("beach")).toBe("Beach")
})

test('Capitalize first letter of multi-word string', () => {
    expect(capitalize("the forest")).toBe("The forest")
})
