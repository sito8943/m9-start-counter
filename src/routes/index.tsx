import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <main className="">
      <section className="flex flex-col gap-10 items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">M9 tanstack counter</h1>
        <p>Press in the button to increase the counter</p>
        <div className="flex gap-4">
          <button
            className="bg-blue-400 font-bold rounded-3xl px-6 py-2"
            onClick={() => setCounter((prev) => prev + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-400 font-bold rounded-3xl px-6 py-2"
            onClick={() => setCounter((prev) => prev - 1)}
          >
            Decrement
          </button>
          <button
            className="bg-gray-400 font-bold rounded-3xl px-6 py-2"
            onClick={() => setCounter(0)}
          >
            Clear
          </button>
        </div>
        <p>Counter: {counter}</p>
      </section>
    </main>
  )
}
