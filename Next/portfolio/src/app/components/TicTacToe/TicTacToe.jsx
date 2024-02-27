"use client"
import "./tictactoe.css";

import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const getBestMove = (currentBoard, isMaximizing) => {
        // Implementation of AI move logic
        // You can use minimax algorithm or any other AI strategy here
        // For simplicity, let's choose the first available empty square
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === null) {
                return i;
            }
        }
        return -1; // No available move
    };

    useEffect(() => {
        if (!xIsNext && winner!=='X') {
            // AI's move
            const aiMove = getBestMove(board, !xIsNext);
            if (aiMove !== -1) {
                const newBoard = [...board];
                newBoard[aiMove] = 'O';
                setBoard(newBoard);
                setXIsNext(true);
                calculateWinner(newBoard);
            }
        }
    }, [board, xIsNext]);

    const handleClick = (index) => {
        if (winner || board[index]) return;
        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);
        setXIsNext(false);
        calculateWinner(newBoard);
    };

    const calculateWinner = (currentBoard) => {
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
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                setWinner(currentBoard[a]);
                return;
            }
        }
        if (currentBoard.every(square => square !== null)) {
            setWinner('Draw');
        }
    };

    const renderSquare = (index) => {
        return (
            <button className="square" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setXIsNext(true);
    };

    return (
        <div className="tic-tac-toe">
            <div className="board">
                {board.map((square, index) => (
                    <div key={index} className="square-container">
                        {renderSquare(index)}
                    </div>
                ))}
            </div>
            {winner && (
                <div className="winner">
                    {winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}
                    <div>
                        <button className="reset-button" onClick={resetGame}>Reset Game</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TicTacToe;
