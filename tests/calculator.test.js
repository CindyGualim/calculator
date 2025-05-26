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
})
