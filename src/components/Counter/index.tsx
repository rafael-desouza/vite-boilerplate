import { useState } from 'react'

import { Button } from './styles'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Count <span>{count}</span>
      </h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </>
  )
}
