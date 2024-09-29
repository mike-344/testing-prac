const caesarCipher = require('./caesarCipher')
test('Shifts one-word string by shift factor', () => {
    expect(caesarCipher("hat", 3)).toBe("kdw")
})
test('Shifts any one-word string by shift factor', () => {
    expect(caesarCipher("test", 3)).toBe("whvw")
})
test("Keeps case the same", () =>{
    expect(caesarCipher("Atlantic Ocean", 3)).toBe("Dwodqwlf Rfhdq")
})
test("Works with other characters", () =>{
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})