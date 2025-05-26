export default function Display () {
  const display = document.createElement('input')
  display.disabled = true
  display.maxLength = 9
  display.style.width = '100%'
  display.style.height = '50px'
  display.style.fontSize = '24px'
  display.style.textAlign = 'right'
  display.style.marginBottom = '10px'
  display.style.backgroundColor = '#F3E9DC'
  display.style.border = '2px solid #C08552'
  display.style.color = '#5E3023'
  display.value = '0'
  return display
}
