import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import cross_icon from '../Assets/cross.png';
import circle_icon from '../Assets/circle.png';

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [boxContents, setBoxContents] = useState(Array(9).fill(""));
  const titleRef = useRef(null);
  const boxRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const toggle = (num) => {
    if (lock) {
      return;
    }
    if (boxContents[num] === "") {
      setBoxContents((prevBoxContent) => {
        const updatedBoxContents = [...prevBoxContent];
        updatedBoxContents[num] = count % 2 === 0 ? "x" : "o";
        return updatedBoxContents;
      });
      setCount(count + 1);
      checkWin();
    }
  }

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (boxContents[a] && boxContents[a] === boxContents[b] && boxContents[a] === boxContents[c]) {
        won(boxContents[a]);
        return;
      }
    }

    // Check for a draw
    if (!boxContents.includes("") && !lock) {
      titleRef.current.innerHTML = 'It\'s a Draw!';
      setLock(true);
    }
  }

  const won = (winner) => {
    setLock(true);
    if (winner === 'x') {
      titleRef.current.innerHTML = 'Congratulations: X Wins!';
    } else {
      titleRef.current.innerHTML = 'Congratulations: O Wins!';
    }
  }

  const reset = () => {
    setLock(false);
    setBoxContents(Array(9).fill(""));
    titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>';
    boxRefs.forEach((boxRef) => {
      if (boxRef.current) {
        boxRef.current.innerHTML = "";
      }
    });
  }

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          {boxContents.slice(0, 3).map((content, index) => (
            <div key={index} ref={boxRefs[index]} className="boxes" onClick={() => toggle(index)}>
              {content === "x" && <img src={cross_icon} alt="X" />}
              {content === "o" && <img src={circle_icon} alt="O" />}
            </div>
          ))}
        </div>
        <div className="row2">
          {boxContents.slice(3, 6).map((content, index) => (
            <div key={index + 3} ref={boxRefs[index + 3]} className="boxes" onClick={() => toggle(index + 3)}>
              {content === "x" && <img src={cross_icon} alt="X" />}
              {content === "o" && <img src={circle_icon} alt="O" />}
            </div>
          ))}
        </div>
        <div className="row3">
          {boxContents.slice(6, 9).map((content, index) => (
            <div key={index + 6} ref={boxRefs[index + 6]} className="boxes" onClick={() => toggle(index + 6)}>
              {content === "x" && <img src={cross_icon} alt="X" />}
              {content === "o" && <img src={circle_icon} alt="O" />}
            </div>
          ))}
        </div>
      </div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

export default TicTacToe
