import { useRef, useState } from 'react';
import "./App.css";

function App() {
  const [toDoes, setToDoes] = useState([]);
  const inputRef = useRef();

  const handleAdd = () => {
    const text = inputRef.current.value;
    if (text.trim()) {
      setToDoes([...toDoes, text]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (index) => {
    const newToDoes = toDoes.filter((i) => i !== index);
    setToDoes(newToDoes);
  };

  return (
    <div className='container'>
      <div>
        <h1 className='h1'>To Do List</h1>
        <input ref={inputRef} className='input' placeholder='type something' />
        <button onClick={handleAdd} className='button'>Add</button>
        <ul>
          {toDoes.map((item, index) => (
            <li key={index} onClick={() => handleDelete(index)}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
