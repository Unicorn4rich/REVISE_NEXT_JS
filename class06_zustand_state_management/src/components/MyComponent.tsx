"use client"
import { useCount } from '@/stores/count-store/countStore'

function TestComponent() {

    const count = useCount(state => state.count)
    const increment = useCount(state => state.increment)
    const decrement = useCount(state => state.decrement)

  return (
    <div className='flex flex-col gap-3 bg-amber-200'>
        <h1>myComponentCount: {count}</h1>

        <button onClick={ increment }>Increment</button>
        <button onClick={ decrement }>Decrement</button>
    </div>
  )
}

export default TestComponent