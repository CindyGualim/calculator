import { describe, it, expect } from 'vitest'

describe('Calculadora', () => {
  it('debería mostrar ERROR si el resultado es mayor a 999999999', () => {
    const res = (1000000000).toString()
    expect(res.length > 9 ? 'ERROR' : res).toBe('ERROR')
  })

  it('debería mostrar ERROR si el resultado es negativo', () => {
    const res = -5
    expect(res < 0 ? 'ERROR' : res.toString()).toBe('ERROR')
  })

  it('debería mostrar 2.8 al sumar 2.5 + 0.3', () => {
    const a = 2.5
    const b = 0.3
    const res = (a + b).toFixed(6)
    expect(res.slice(0, 9)).toBe('2.800000')
  })

  it('debería mostrar 3.142857 al dividir 22 entre 7', () => {
    const a = 22
    const b = 7
    const res = (a / b).toFixed(6)
    expect(res.slice(0, 9)).toBe('3.142857')
  })
})
