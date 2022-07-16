import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './summary.css';
const Summary = () => {
    const navigate=useNavigate();
    const loc=useLocation();
    const data=loc.state.data;
    const ansKey=loc.state.ansKey;
    const score=loc.state.score;

    const handleClick=()=>{
        navigate('/');
    }

  return (
    <div className="summary">
    <div className="main10">
        <h1 className="cScore">Cummulative Score : {loc.state.scr}</h1>
    </div>
    <div className="main20">
        <div className="qContent">
            <h1 className="firstColumn">Questions</h1>
            <ul className="question1">
                {
                    data.map((d)=>(
                        <li className="questionText">{d.question}</li>
                    ))
                }
            </ul>
        </div>
        <div className="correctAnswer">
            <h1 className="secondColumn">Correct Answer</h1>
        <ul className="cAnswer">
                {
                    data.map((d)=>(
                        <li className="questionText">{d.correct}</li>
                    ))
                }
            </ul>
        </div>
        <div className="candidateAnswer">
        <h1 className="thirdColumn">Your Answer</h1>
        <ul className="candAnswer">
                {
                    ansKey.map((ak)=>(
                        <li className="questionText">{ak}</li>
                    ))
                }
            </ul>
        </div>
        <div className="Score">
        <h1 className="fourthColumn">Score</h1>
        <ul className="cScore1">
                {
                    data.map((d,i)=>(
                        <li className="questionText">
                            {
                                (d.correct==ansKey[i]) ? "1/1" : "0/1"
                                }
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    <div className="Result">
        <h1 className="resHeader">Result : {loc.state.scr>=((loc.state.len)/2) ? "Pass" : "Fail"}</h1>
        <button className="tryButton" onClick={handleClick}>Try Quiz again</button>
    </div>
    </div>
  )
}

export default Summary;