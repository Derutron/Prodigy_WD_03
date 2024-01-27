import { useState } from 'react';
import './App.css';

const initialBoard = Array(3).fill(Array(3).fill(''));

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (!board[row][col] && !winner) {
      const newBoard = board.map(row => [...row]);
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      if (checkWinner(newBoard, currentPlayer)) {
        setWinner(currentPlayer);
      } else if (isBoardFull(newBoard)) {
        setWinner('Tie');
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const checkWinner = (board, player) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true; // Check rows
      }
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      ) {
        return true; // Check columns
      }
    }
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true; // Check main diagonal
    }
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true; // Check anti-diagonal
    }
    return false;
  };

  const isBoardFull = board => {
    return board.every(row => row.every(cell => cell !== ''));
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
<div className="flex flex-col justify-center items-center min-h-screen w-screen" style={{ backgroundImage: "url('src/Resourses/bg.avif')", backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
       <h1 className="text-3xl font-bold text-black mb-4">Tic Tac Toe Game</h1>
      <div className="board">
        <div className="grid">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell flex justify-center items-center w-[104px] h-[80px] bg-gray-300 text-2xl cursor-pointer border-2 border-black ${cell}`}
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {winner && (
        <div className="result">
          {winner && (
  <div className="result mt-8 text-2xl">
    <p className="text-black">{winner === 'Tie' ? "It's a Tie!" : `Player ${winner} wins!`}</p>
    <button
      onClick={resetGame}
      className="mt-4 px-4 py-2 bg-blue-500 font-[500] text-white rounded"
    >
      Play Again
    </button>
  </div>
)}
       
        </div>
      )}
    </div>
  );
};

export default App;














// import { useState } from 'react';


// const initialBoard = Array(3).fill(Array(3).fill(''));

// const App = () => {
//   const [board, setBoard] = useState(initialBoard);
//   const [currentPlayer, setCurrentPlayer] = useState('X');
//   const [winner, setWinner] = useState(null);

//   const handleClick = (row, col) => {
//     if (!board[row][col] && !winner) {
//       const newBoard = board.map(row => [...row]);
//       newBoard[row][col] = currentPlayer;
//       setBoard(newBoard);

//       if (checkWinner(newBoard, currentPlayer)) {
//         setWinner(currentPlayer);
//       } else if (isBoardFull(newBoard)) {
//         setWinner('Tie');
//       } else {
//         setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
//       }
//     }
//   };

//   const checkWinner = (board, player) => {
//     for (let i = 0; i < 3; i++) {
//       if (
//         board[i][0] === player &&
//         board[i][1] === player &&
//         board[i][2] === player
//       ) {
//         return true; // Check rows
//       }
//       if (
//         board[0][i] === player &&
//         board[1][i] === player &&
//         board[2][i] === player
//       ) {
//         return true; // Check columns
//       }
//     }
//     if (
//       board[0][0] === player &&
//       board[1][1] === player &&
//       board[2][2] === player
//     ) {
//       return true; // Check main diagonal
//     }
//     if (
//       board[0][2] === player &&
//       board[1][1] === player &&
//       board[2][0] === player
//     ) {
//       return true; // Check anti-diagonal
//     }
//     return false;
//   };

//   const isBoardFull = board => {
//     return board.every(row => row.every(cell => cell !== ''));
//   };

//   const resetGame = () => {
//     setBoard(initialBoard);
//     setCurrentPlayer('X');
//     setWinner(null);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="app">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Tic Tac Toe</h1>
//         <div className="board border-2 grid grid-cols-3 gap-4">
//           {board.map((row, rowIndex) => (
//             <div key={rowIndex} className="row flex">
//               {row.map((cell, colIndex) => (
//                 <div
//                   key={colIndex}
//                   className={`cell flex justify-center items-center w-12 h-12 bg-gray-200 text-2xl cursor-pointer border-2 border-black ${cell}`}
//                   onClick={() => handleClick(rowIndex, colIndex)}
//                 >
//                   {cell}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//         {winner && (
//           <div className="result mt-8 text-2xl">
//             {winner === 'Tie' ? "It's a Tie!" : `Player ${winner} wins!`}
//             <button
//               onClick={resetGame}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Play Again
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
