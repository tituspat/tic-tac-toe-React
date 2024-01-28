import { useState } from 'react';

function Square({ Value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {Value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSquares = squares.slice();

    if (squares[i] || calculateWinner(squares)) return;
    nextSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = '';
  status = winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O');

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square Value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square Value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square Value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square Value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square Value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square Value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square Value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square Value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square Value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[c] && squares[b]) {
      return squares[a];
    }
    return false;
  }
}
