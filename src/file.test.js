
// describe('')

describe('Module de operaciones aritmetica', () => {
  test('La suma de 1 + 3 debería 4', () => {
    const suma = 1 + 3
    expect(suma).toBe(4)
  })

  test('La resta de 5 - 2 debería ser 3', () => {
    const resta = 5 - 2
    expect(resta).toBe(3)
    expect(resta).not.toBeNull()
    expect(resta).not.toBeUndefined()
  })

  describe('Other group', () => {
    test('Otro test', () => {
      const num = 28
      expect(num).toBe(28)
    })
  })
})

describe('Funciones de formato de fechas', () => {
  test('Validado que el formato de fecha sea dd-mm-yyyy', () => {
    const format = '28-04-2023'
    expect(format).toEqual('28-04-2023')
  })
})
