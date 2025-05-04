"use client"
import { useCount } from '@/stores/count-store/countStore' // Named import—sirf useCount hook ko laa raha hai.

function TestComponent() {

    // useCount(…): Tumhara custom hook — Zustand store se value ya function nikalne ke liye.
    const count = useCount(state => state.count)   // Selector function—current store state object leta hai aur usme se sirf count
    const increment = useCount(state => state.increment)
    const decrement = useCount(state => state.decrement)

  return (
    <div className='flex flex-col gap-3 bg-amber-200'>
        <h1>Count: {count}</h1>

        <button onClick={ increment }>Increment</button>
        <button onClick={ decrement }>Decrement</button>
    </div>
  )
}

export default TestComponent