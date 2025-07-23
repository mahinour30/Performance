import { useCallback, useEffect, useState } from "react";

const UseCallBackPage = () => {

    const [temp, setTemp] = useState('A')

    const handleOnClick = () => {
        console.log(temp);
    }

    // const handleOnClick = useCallback(() => {
    //     console.log(temp);
    // }, [])



    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 300, justifyContent: 'space-between' }} >
            <button onClick={handleOnClick} >ONLY LOG A</button>
            <button onClick={() => setTemp('B')}>update B</button>
            <button onClick={() => setTemp('C')}>update C</button>
        </div >
    )
}


export default UseCallBackPage





