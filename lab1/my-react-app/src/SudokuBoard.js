import React, { useState } from 'react';
import './Sudoku.css';

const SudokuCell = ({ value, onClick, onChange, isSelected }) => {
  return (
    <td>
      <input
        type="text"
        className={`sudoku-cell ${isSelected ? 'selected' : ''}`}
        value={value}
        onClick={onClick}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[1-9]?$/.test(val)) {
            onChange(val);
          }
        }}
        maxLength="1"
      />
    </td>
  );
};

const SudokuBoard = () => {
  const initialBoard = Array(9)
    .fill(null)
    .map(() => Array(9).fill(''));

  const [board, setBoard] = useState(initialBoard);
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

  const handleCellChange = (row, col, value) => {
    const newBoard = [...board];
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  return (
    <table className="sudoku-board">
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((value, colIndex) => (
              <SudokuCell
                key={colIndex}
                value={value}
                isSelected={
                  selectedCell.row === rowIndex && selectedCell.col === colIndex
                }
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onChange={(val) => handleCellChange(rowIndex, colIndex, val)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SudokuBoard;
