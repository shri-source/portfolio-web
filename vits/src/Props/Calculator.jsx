import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const insertNum = (e) => {
    const value = e.target.innerText;
    setInput(input + value);
  }

  const clearInput = () => {
    setInput('');
  }

  const evaluateExpression = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-3xl text-orange-500 mb-4">Calculator</div>
      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
        <input
          type="text"
          className="w-full mb-4 p-2 text-right bg-gray-200 rounded text-gray-900"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          {['7', '8', '9', '/'].map((item) => (
            <button key={item} onClick={insertNum} className="bg-gray-600 hover:bg-orange-500 p-4 rounded">
              {item}
            </button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button key={item} onClick={insertNum} className="bg-gray-600 hover:bg-orange-500 p-4 rounded">
              {item}
            </button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button key={item} onClick={insertNum} className="bg-gray-600 hover:bg-orange-500 p-4 rounded">
              {item}
            </button>
          ))}
          {['0', '.', '=', '+'].map((item) => (
            <button
              key={item}
              onClick={item === '=' ? evaluateExpression : insertNum}
              className={`bg-gray-600 hover:bg-orange-500 p-4 rounded ${item === '=' && 'col-span-2'}`}
            >
              {item}
            </button>
          ))}
          <button onClick={clearInput} className="bg-orange-600 hover:bg-red-500 p-4 rounded col-span-2">
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
