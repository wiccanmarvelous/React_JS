import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircle } from '@fortawesome/free-solid-svg-icons'

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [boxContents, setBoxContents] = useState(Array(9).fill(""));
  const titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (num) => {
    if (lock) {
      return;
    }
    if (boxContents[num] === "") {
      // Create a copy of the entire boxContents array
      setBoxContents((prevBoxContent) => {
        const updatedBoxContents = [...prevBoxContent];
        updatedBoxContents[num] = count % 2 === 0 ? "x" : "o";
        return updatedBoxContents;
      })
      setCount(count + 1);
      checkWin();
    }
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "")
      won(data[2]);
    else if (data[3] === data[4] && data[4] === data[5] & data[5] !== "")
      won(data[5]);
    else if (data[6] === data[7] && data[7] === data[8] & data[8] !== "")
      won(data[8]);
    else if (data[0] === data[3] && data[3] === data[6] & data[6] !== "")
      won(data[6]);
    else if (data[1] === data[4] && data[4] === data[7] & data[7] !== "")
      won(data[7]);
    else if (data[2] === data[5] && data[5] === data[8] & data[8] !== "")
      won(data[8]);
    else if (data[1] === data[4] && data[4] === data[8] & data[8] !== "")
      won(data[8]);
    else if (data[0] === data[1] && data[1] === data[2] & data[2] !== "")
      won(data[2]);
    else if (data[2] === data[4] && data[4] === data[6] & data[6] !== "")
      won(data[6]);
  }

  const won = (winner) => {
    setLock(true);
    if (winner === 'x')
      titleRef.current.innerHtml = `Congratulations: <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#fff838" }} />`;
    else
    titleRef.current.innerHtml = `Congratulations: <FontAwesomeIcon icon={faCircle} size="2xl" style={{ color: "#fff838" }} />`;
  }

  const reset = () => {
    setLock(false);
    setBoxContents(Array(9).fill(""));
    titleRef.current.innerHtml = `Tic Tac Toe Game In <span>React</span>`
    boxArray.map((e) => {
      e.current.innerHtml = "";
    })
  }

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          {boxContents.slice(0, 3).map((content, index) => (
            <div key={index} ref={`box${index + 1}`} className="boxes" onClick={() => toggle(index)}>
              {content === "x" && <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#fff838" }} />}
              {content === "o" && <FontAwesomeIcon icon={faCircle} size="2xl" style={{ color: "#005eff" }} />}
            </div>
          ))}
        </div>
        <div className="row2">
          {boxContents.slice(3, 6).map((content, index) => (
            <div key={index} ref={`box${index + 1}`} className="boxes" onClick={() => toggle(index)}>
              {content === "x" && <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#fff838" }} />}
              {content === "o" && <FontAwesomeIcon icon={faCircle} size="2xl" style={{ color: "#005eff" }} />}
            </div>
          ))}
        </div>
        <div className="row3">
          {boxContents.slice(6, 9).map((content, index) => (
            <div key={index} ref={`box${index + 1}`} className="boxes" onClick={() => toggle(index)}>
              {content === "x" && <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#fff838" }} />}
              {content === "o" && <FontAwesomeIcon icon={faCircle} size="2xl" style={{ color: "#005eff" }} />}
            </div>
          ))}
        </div>
      </div>
      <button className='reset' onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default TicTacToe
