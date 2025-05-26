export function createButtonGrid () {
  const grid = document.createElement('div')
  grid.style.display = 'grid'
  grid.style.gridTemplateColumns = 'repeat(4, 1fr)'
  grid.style.gap = '5px'
  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '+/-', '0', '.', '/',
    '%', '=', 'C'
  ]
  buttons.forEach(txt => {
    const btn = document.createElement('button')
    btn.textContent = txt
    btn.className = 'btn'
    grid.appendChild(btn)
  })
  return grid
}

export function attachLogic (display, grid) {
  let current = '', last = '', op = null

  const calculate = (a, b, o) => {
    a = Number(a); b = Number(b)
    let r = 0
    if (o === '+') r = a + b
    if (o === '-') r = a - b
    if (o === '*') r = a * b
    if (o === '/') r = b !== 0 ? a / b : 'ERROR'
    if (o === '%') r = a % b
    if (r < 0) return 'ERROR'
    const s = r % 1 !== 0 ? r.toFixed(6) : r.toString()
    return s.length > 9 ? 'ERROR' : s.slice(0, 9)
  }

  const write = txt => {
    if (display.value === '0' || (op && current === '')) display.value = ''
    if (display.value.length < 9) {
      display.value += txt
      current = display.value
    }
  }

  const handle = txt => {
    if ('0123456789'.includes(txt)) return write(txt)
    if (txt === '.') addDot()
    else if (txt === '+/-') toggleSign()
    else if ('+-*/%'.includes(txt)) setOperator(txt)
    else if (txt === '=') compute()
    else if (txt === 'C') clear()
  }

  const addDot = () => {
    if (!display.value.includes('.') && display.value.length < 9) {
      display.value += '.'
      current = display.value
    }
  }

  const toggleSign = () => {
    if (!display.value.includes('-') && display.value.length < 9) {
      display.value = '-' + display.value
    } else {
      display.value = display.value.replace('-', '')
    }
    current = display.value
  }

  const setOperator = txt => {
    if (current !== '') {
      last = last !== '' ? calculate(last, current, op) : current
      current = ''
    }
    op = txt
    display.value = last
  }

  const compute = () => {
    if (last && current) {
      display.value = calculate(last, current, op)
      last = ''
      current = display.value === 'ERROR' ? '' : display.value
    }
  }

  const clear = () => {
    display.value = '0'
    current = ''
    last = ''
    op = null
  }

  grid.querySelectorAll('.btn').forEach(btn => {
    btn.onclick = () => handle(btn.textContent)
  })
}
