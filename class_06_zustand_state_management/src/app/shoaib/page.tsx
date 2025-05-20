"use client"
import { useCount } from '@/stores/count-store/countStore'
import React from 'react'

function Shoaib() {

    const count = useCount(state => state.count)

  return (
    <div>
        <h1>myComponentCount: {count}</h1>
    </div>
  )
}

export default Shoaib