import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './content.css';

const Content = ({data,questionNumber,setQuestionNumber,setD,setData,dataOrg}) => {
    const[questionNum,setQuestionNum]=useState(1);
    const[ansKey,setAnsKey]=useState([]);
    const [score,setScore]=useState([]);
    const [question,setQuestion]=useState(null);
    const [className1,setClassName]=useState("answer");
    const[ans,setAns]=useState(null);
    const[scr,setScr]=useState(0);
    const[btn,setBtn]=useState(false);
    const[finish,setFinish]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
        setAns(null);
    },[questionNumber,data]);

    const handleClick=()=>{
        if(questionNumber==data.length)
        {
            setD(true);
            setFinish(true);
            setBtn(true);
        }
        //console.log("ans b ->",ansKey);
        setAnsKey([...ansKey,ans==null ? "not attempted" : ans]);
        //console.log("ans a - >",ansKey);
        if(ans == question.correct)
        {
            setScr(scr+1);
            setClassName("correct answer")
        }
        setD(false);
        dataOrg.length==0 ? setData(data) : setData((prev)=>prev);
        setScore([...score,scr]);
        setQuestionNumber((prev)=>prev+1)
        //console.log("setquestion called");
        
        
    }
    
    const handleFinish=()=>{
        //console.log("score-> ",score);
        //console.log("ansKey -> ",ansKey);
        //console.log("data-> ",data);
        navigate('/summary',{state:{data:data,ansKey:ansKey,score:score,scr:scr,len:data.length}});
    }

  return (
    <div className="Content">
        <div className="qNumber"><h1>Question Number: {questionNumber}</h1></div>
        <div className="question">{question?.question}</div>
        <div className="answers">
            <input type="text" value={ans} className="inputAns" onChange={(e)=>{setAns(e.target.value)}}/>
            <button disabled={btn} className="subButton" onClick={handleClick}>Next</button>
        </div>
        <div className="score">
            <h1>Score: {scr}</h1>
        </div>
        <div className="finish">
            {finish && <button onClick={handleFinish} className="fButton">Finish</button>}
        </div>
    </div>
  )
}

export default Content;