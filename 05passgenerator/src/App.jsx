import { useState , useCallback ,useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [number, setNumber] = useState(false)
  const [specialchar, setSpecialchar] = useState(false)
  const [password , setPassword] = useState("")

  //useref hoook
const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str += "0123456789"
    }
    if(specialchar){
      str += "!@#$%^&*()_+=[]{}~"
    }

    for(let i = 1 ; i <=length ; i++){
      let char = Math.floor( Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  } ,[length , number , specialchar])

 const copyPasswordtoclipboard = useCallback(() =>{
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,100);
  window.navigator.clipboard.writeText(password)
 } ,[password])


  useEffect(() => {
    passwordgenerator()
  } , [length , number , specialchar , passwordgenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 py-3 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded  overflow-hidden mb-4'>
      <input 
      type='text' 
      value={password} 
      className='outline-none w-full  py-1 px-3'  
      placeholder='passwword' 
      readOnly
      ref={passwordref}
      />
      <button 
      onClick={copyPasswordtoclipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={number}
          id="number"
          onChange={() => {setNumber((prev) => !prev);
          }}
          />
          <label htmlFor='number'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={specialchar}
          id="specialchar"
          onChange={() => {setSpecialchar((prev) => !prev);
          }}
          />
          <label htmlFor='specialchar'>Special Character</label>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
