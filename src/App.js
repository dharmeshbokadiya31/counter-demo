import React, { useState, useEffect } from "react"

function App() {

  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter(counter => counter + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartPauseClick = () => {
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold mb-8">{counter}</div>
      <div className="flex space-x-4">
      <button 
        className={`${isRunning ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"} text-white font-bold py-2 px-4 rounded`}
        onClick={handleStartPauseClick}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleResetClick}
      >Reset</button>
      </div>
    </div>
  );
}

export default App;
