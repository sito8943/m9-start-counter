import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { useState } from 'react'

// Extract the counter logic into a testable component
function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Clear</button>
      <p>Counter: {counter}</p>
    </div>
  )
}

describe('Counter', () => {
  afterEach(() => {
    cleanup()
  })

  it('starts at 0', () => {
    render(<Counter />)
    expect(screen.getByText('Counter: ')).toBeDefined()
  })

  it('increments the counter', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Counter: 1')).toBeDefined()
  })

  it('decrements the counter', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Decrement'))
    expect(screen.getByText('Counter: -1')).toBeDefined()
  })

  it('clears the counter', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Counter: 3')).toBeDefined()
    fireEvent.click(screen.getByText('Clear'))
    expect(screen.getByText('Counter: 0')).toBeDefined()
  })

  it('handles multiple operations', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Decrement'))
    expect(screen.getByText('Counter: 1')).toBeDefined()
  })
})
