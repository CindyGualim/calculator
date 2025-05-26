# Calculadora – Proyecto Web

Este proyecto consiste en una calculadora funcional desarrollada con HTML, CSS y JavaScript. Fue construido como parte de una práctica de desarrollo de aplicaciones en base a componentes, testing y buenas prácticas de estilo de código.

##  Características

- Interfaz construida solo con botones HTML (sin teclado físico)
- Visualización de números en un display de máximo 9 caracteres
- Operaciones disponibles:
  - Suma `+`
  - Resta `-`
  - Multiplicación `*`
  - División `/`
  - Módulo `%`
  - Conversión de signo `+/-`
  - Punto decimal `.`
  - Limpiar `C`
- Muestra `"ERROR"` en caso de:
  - Resultados negativos
  - Más de 9 dígitos
  - Divisiones inválidas (como división por 0)
- Completamente funcional tanto en escritorio como en dispositivos móviles

## Pruebas

Se implementaron pruebas automáticas con [Vitest](https://vitest.dev/) para validar:

- Resultados mayores a 999999999 muestran `"ERROR"`
- Resultados negativos muestran `"ERROR"`
- Cálculos decimales como `2.5 + 0.3`
- Cálculo de `22 / 7` con precisión controlada

Archivo de pruebas: `tests/calculator.test.js`

## 🧹 Linting

El proyecto sigue las reglas del estándar `eslint-config-standard` y contiene una regla personalizada para prohibir el uso de punto y coma `;`.

### Configuración de `.eslintrc.json`


