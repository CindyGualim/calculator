export default function Button (display) {
  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '+/-', '0', '.', '/',
    '%', '=', 'C'
  ]

  let current = ''
  let last = ''
  let op = null

  const grid = document.createElement('div')
  grid.style.display = 'grid'
  grid.style.gridTemplateColumns = 'repeat(4, 1fr)'
  grid.style.gap = '5px'

  const calculate = () => {
    const a = Number(last)
    const b = Number(current)
    let res = 0
    if (op === '+') res = a + b
    if (op === '-') res = a - b
    if (op === '*') res = a * b
    if (op === '/') res = b !== 0 ? a / b : 'ERROR'
    if (op === '%') res = a % b
    const str = res % 1 !== 0 ? res.toFixed(6) : res.toString()
    return str.length > 9 || res < 0 ? 'ERROR' : str.slice(0, 9)
  }

  buttons.forEach(txt => {
    const btn = document.createElement('button')
    btn.textContent = txt
    btn.style.padding = '15px'
    btn.style.fontSize = '18px'
    btn.style.backgroundColor = '#C08552'
    btn.style.border = 'none'
    btn.style.color = '#fff'
    btn.style.borderRadius = '5px'

    btn.onclick = () => {
      if ('0123456789'.includes(txt)) {
        if (display.value === '0' || (op && current === '')) display.value = ''
        if (display.value.length < 9) {
          display.value += txt
          current = display.value
        }
      } else if (txt === '.') {
        if (!display.value.includes('.') && display.value.length < 9) {
          display.value += '.'
          current = display.value
        }
      } else if (txt === '+/-') {
        if (!display.value.includes('-')) {
          if (display.value.length < 9) {
            display.value = '-' + display.value
            current = display.value
          }
        } else {
          display.value = display.value.replace('-', '')
          current = display.value
        }
      } else if ('+-*/%'.includes(txt)) {
        if (current !== '') {
          if (last !== '') last = calculate()
          else last = current
          current = ''
        }
        op = txt
        display.value = last
      } else if (txt === '=') {
        if (last && current) {
          display.value = calculate()
          last = ''
          current = display.value === 'ERROR' ? '' : display.value
        }
      } else if (txt === 'C') {
        display.value = '0'
        current = ''
        last = ''
        op = null
      }
    }

    grid.appendChild(btn)
  })

  return grid
}
