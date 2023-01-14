import { caesarChiper } from './caesarCipher'

test('CaesarChiper test: only alphabet', () => {
  expect(caesarChiper('abcdefghijklmnopqrstuvwxyz', 3))
    .toBe('defghijklmnopqrstuvwxyzabc')
  expect(caesarChiper('AbcDefghijKlmnOpqRstuvwxyZ', 3))
    .toBe('DefGhijklmNopqRstUvwxyzabC')
})

test('CaesarChiper test: alphanumeric', () => {
  expect(caesarChiper('404meansNotFound', 9))
    .toBe('404vnjwbWxcOxdwm')
})

test('CaesarChiper test: alphanumeric with punctuation', () => {
  expect(caesarChiper('Hello, world!', 5))
    .toBe('Mjqqt, btwqi!')
  expect(caesarChiper('He said, "The score is 98!"', 5))
    .toBe('Mj xfni, "Ymj xhtwj nx 98!"')
})
