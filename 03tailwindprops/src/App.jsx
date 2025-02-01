import { useState } from 'react'
import './index.css'; 
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black rounded-xl p-4'>kaushik vadoliya</h1>
      <Card  userName="Kaushikvadoliya" titleTxt='brother' btntxt='click me'/>
      <Card  userName="Mahekkariya" titleTxt='sister' btntxt='click here'/> 
    </>
  )
}

export default App
