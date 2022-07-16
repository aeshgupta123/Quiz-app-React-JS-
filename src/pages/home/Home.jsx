import React,{useState} from 'react';
import './home.css';
import { Navigate, useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();
    const[noOfQuestion,setNoOfQuestions]=useState(10);
    const [range,setRange]=useState(10);
    const [name,setName]=useState(null);
  const handleClick=(num)=>{
    if(num===1)
    {
      navigate('/quiz1',{state:{noOfQuestion:noOfQuestion,range:range,quizNo:num,name:name}});
    }
    else if(num===2)
    {
        navigate('/quiz2',{state:{noOfQuestion:noOfQuestion,range:range,quizNo:num,name:name}});
    }
  } 

  return (
    <div className="app">
      <div className="q1">
            <h1 className="q1H">Quiz 1</h1>
            <div className="q1Input">
            <label>Your Name:</label>
            <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
            <label>No. of Questions:</label>
            <input type="number" value={noOfQuestion} onChange={(e)=>{setNoOfQuestions(e.target.value)}}/>
            <label>Enter Range:(upto which number you want arithmetic calculations)</label>
            <input type="number" value={range} onChange={(e)=>{setRange(e.target.value)}}/>
            </div>
            <button onClick={()=>{handleClick(1)}} className="q1B">Start Quiz</button>
            <ul className="q1Rules">
                <li className="q1RItem">The quiz will contain 20 Mathematics questions.</li>
                <li className="q1RItem">All questions are  not compulsory.</li>
                <li className="q1RItem">Participant should enter the answer in the box.</li>
                <li className="q1RItem">For each question there will be time limit of 20seconds.</li>
                <li className="q1RItem">If there is a '/' operator round it off to lower interger value.</li>
                <li className="q1RItem">To pass in this evaluation you must score greater than or equal to 50%.</li>
            </ul>
      </div>
      <div className="q2">
      <h1 className="q2H">Quiz 2</h1>
      <div className="q2Input">
            <label>Your Name:</label>
            <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
            <label>No. of Questions:</label>
            <input type="number" value={noOfQuestion} onChange={(e)=>{setNoOfQuestions(e.target.value)}}/>
            <label>Enter Range:(upto which number you want arithmetic calculations)</label>
            <input type="number" value={range} onChange={(e)=>{setRange(e.target.value)}}/>
            </div>
            <button onClick={()=>{handleClick(2)}} className="q2B">Start Quiz</button>
            <ul className="q2Rules">
                <li className="q1RItem">The quiz will contain 20 Mathematics questions.</li>
                <li className="q1RItem">All questions are compulsory.</li>
                <li className="q1RItem">Participant should enter the answer in the box.</li>
                <li className="q1RItem">For each question there will be time limit of 20seconds.</li>
                <li className="q1RItem">If there is a '/' operator round it off to lower interger value.</li>
                <li className="q1RItem">To pass in this evaluation you must score greater than or equal to 50%.</li>
            </ul>
      </div>
    </div>
  )
}

export default Home;