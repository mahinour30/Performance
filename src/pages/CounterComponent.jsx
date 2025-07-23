import useCounter from "../hooks/UseCounterHook";

const CounterComponent = () => {

    const { count, increment, decrement, reset } = useCounter()

    return (
        <div >
            <p>Count: {count}</p>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div >
    )
}

export default CounterComponent

