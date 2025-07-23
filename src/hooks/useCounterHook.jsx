import { useCallback, useState } from 'react'

const useCounter = (initialValue = 0) => {
    
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    const decrement = useCallback(() => {
        setCount(prev => prev - 1)
    }, [])

    const reset = useCallback(() => {
        setCount(initialValue)
    }, [initialValue])

    return {
        count,
        increment,
        decrement,
        reset
    }
}

export default useCounter
