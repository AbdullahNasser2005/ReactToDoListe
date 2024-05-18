import { useRef, useState } from 'react';
import "./App.css";

function App() {
  const [toDoes, setToDoes] = useState([])
  const inputRef = useRef()

  const handlare = ()=>{
    const text = inputRef.current.value;
    setToDoes([...toDoes,text])
    inputRef.current.value = ""
  }

  return (
    <div className='container'>
<div>

      <h1 className='h1'>To Do Liste</h1>
      <input ref={inputRef} className='input' placeholder='type some thing'/>
      <button onClick={handlare} className='button'>Add</button>
    <ul>
    {toDoes.map((items)=>{
      return (<li>{items}</li>)
    })}
    </ul>

    </div>
    </div>
  );
}

export default App;
