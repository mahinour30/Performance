import { useState } from 'react'
import './App.css'
import UseCallBackPage from './pages/UseCallbackPage'
import CounterComponent from './pages/CounterComponent'
import PaintFlashing from './pages/PaintFlashing'
import UseMemoPage from './pages/UseMemoPage'
import UseRefPage from './pages/UseRefPage'
import ReactMemoPage from './pages/ReactMamoPage'
import Button from './components/Button/Button'

function App() {
  return (
    <>
      {/* <ReactMemoPage /> */}
      {/* <UseMemoPage /> */}
      {/* <UseCallBackPage /> */}
      {/* <UseRefPage /> */}
      {/* <PaintFlashing /> */}
      {/* <CounterComponent /> */}
      <Button label={'Click Me'} onClick={() => { console.log('logged') }} />
    </>
  )
}

export default App
