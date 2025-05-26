export default function createButtonGrid () {
  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '+/-', '0', '.', '/',
    '%', '=', 'C'
  ]

  const grid = document.createElement('div')
  grid.style.display = 'grid'
  grid.style.gridTemplateColumns = 'repeat(4, 1fr)'
  grid.style.gap = '5px'

  buttons.forEach(txt => {
    const btn = document.createElement('button')
    btn.textContent = txt
    btn.className = 'btn'
    grid.appendChild(btn)
  })

  return grid
}
