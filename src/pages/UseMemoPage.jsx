import { useMemo, useState } from 'react'

const UseMemoPage = () => {
    const [count, setCount] = useState(0)
    const [tempCount, setTempCount] = useState(0)

    const sleep = (milliseconds) => {
        var start = new Date().getTime()
        for (var i = 0; i < 1e7; i++) {
            if (new Date().getTime() - start > milliseconds) {
                break
            }
        }
    }

    // const count100 = useMemo(() => {
    //     console.log('start');
    //     sleep(2000)
    //     console.log('end');
    //     return 100 + count
    // }, [count])


    const count100 = () => {
        console.log('start');
        sleep(2000)
        console.log('end');
        return 100 + count
    }

    const count100Value = count100()
    return (
        <div>
            <h1>{tempCount}</h1>
            <button onClick={() => setTempCount(prev => prev + 1)}>temp count up</button>

            {/* <h1>{count100}</h1> */}
            <h1>{count100Value}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>count up</button>
        </div>
    )

}

export default UseMemoPage