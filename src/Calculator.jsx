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
    <div style={{ width: 220, margin: '2rem auto', border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
      <div style={{ minHeight: 40, marginBottom: 12, background: '#eee', textAlign: 'right', padding: 8, fontSize: 24 }}>
        {input || '0'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 50px)', gap: 8 }}>
        {buttons.map((btn) => (
          <button
            key={btn}
            style={{ fontSize: 18, padding: 10 }}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}