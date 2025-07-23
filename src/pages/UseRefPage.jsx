import { useEffect, useState, useRef } from 'react'

const UseRefPage = () => {

    const isFirst = useRef(true)
    const inputRef = useRef(null)

    const [count, setCount] = useState(0)

    useEffect(() => {
        // if (isFirst.current) {
        //     isFirst.current = false
        //     return
        // }
        console.log('logged');
    }, [count])

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>

            <button style={{ marginTop: 40 }} onClick={() => inputRef.current.focus()}>focus</button>
            <input
                placeholder='focus on me'
                id='input'
                ref={inputRef}
            />
        </div>
    )
}

export default UseRefPage

