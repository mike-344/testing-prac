const reverseString = require('./reverseString')

test('Reverses string', () => {
    expect(reverseString('the')).toBe("eht")
})

test('Reverses any word', () => {
    expect(reverseString('forest')).toBe('tserof')
})
test('Reverses multi word string', () => {
    expect(reverseString("over the hills")).toBe("sllih eht revo")
})