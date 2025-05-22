import React, { useState } from 'react'

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'C'
]

export default function Calculator() {
  const [input, setInput] = useState('')

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('')
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString())
      } catch {
        setInput('錯誤')
      }
    } else {
      setInput(input + value)
    }
  }

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        {input || '0'}
      </div>
      <div className="calculator-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className="calculator-button"
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}