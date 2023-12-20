import React, { useState } from 'react';

export default function TodoApp() {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const inputHandleFunc = () => {
    if (inputValue === "") {
      alert("Fill the gap");
    } else {
      alert("Got it");
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const DeleteItemFunc = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className='inputContainer'>
      <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={inputHandleFunc}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <div key={index}>
             <h3>{item}</h3>
              <button onClick={() => DeleteItemFunc(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}