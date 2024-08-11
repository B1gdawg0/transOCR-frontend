import { useEffect } from 'react';
import data from '../assets/output.json';

function App() {
  useEffect(
    ()=>{
      console.log(data.length)
    },[]
  )
  return (
    <div className='text-red-500'>
      <h1>Hello world?</h1>
    </div>
  )
}

export default App
