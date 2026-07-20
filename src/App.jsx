import "./App.css";
import { useState } from "react";

function Board({ children, gridWidth, gridHeight }) {
  const [squares, setSquares] = useState(
    Array(gridWidth * gridHeight).fill(null),
  );
  useState;
  return (
    <>
      {Array.apply(null, Array(gridHeight)).map((_, row, rows) => (
        <div className="board" key={`Row ${row}`}>
          {Array.apply(null, Array(gridWidth)).map((_, col, cols) => {
            const id = row * cols.length + col + 1;
            return (
              <Square value={squares[id - 1]} id={id} key={`Square ${id}`} />
            );
          })}
        </div>
      ))}
    </>
  );
}

function Square({ id, value }) {
  // const [value, setValue] = useState(null);

  function handleClick() {
    // setValue("X");
    console.log(`Square ${id}: ${value}`);
  }

  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <Board gridWidth={3} gridHeight={3} />
    </>
  );
}

export default App;
