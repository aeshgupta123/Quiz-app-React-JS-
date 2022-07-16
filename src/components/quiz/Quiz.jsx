import React,{useState,useMemo} from 'react'
import './quiz.css';
import Content from '../content/Content.jsx';
import Timer from '../Timer.jsx';
import { useLocation } from 'react-router-dom';

const Quiz = ({range,noOfQuestion,qNo,name}) => {
    const[stop,setStop]=useState(false);
    const[questionNumber,setQuestionNumber]=useState(1);
    const[data,setData]=useState([]);
    const[d1,setD]=useState(true);
    console.log("qNUm=> ",questionNumber);
    var math_it_up={
      '+':function(x,y){return x+y;},
      '-':function(x,y){return x-y;},
      '*':function(x,y){return x*y;},
      '/':function(x,y){return Math.floor(x/y);}
  }
    const ops=["+","-","*","/"];
    const data1=[];
    if(d1){
    console.log("entry");
    for(let i=1;i<=noOfQuestion;i++)
    {
      const n1=Math.floor((Math.random()*range)+1);
    const n2=Math.ceil((Math.random()*range)+1);
    const op1=ops[n1%4];
    let d={
      num1:n1,
      num2:n2,
      op:op1,
      question:`Value of ${n1} ${op1} ${n2} ?`,
      correct:math_it_up[op1](n1,n2)
    };
    data1.push(d);
  }}
    const ques=[];
    for(let i=1;i<=noOfQuestion;i++)
    {
      let q={
      text:`Question ${i}`,
      id:i
      }
      ques.push(q);
    }
    ques.reverse();
    
  return (
    <div className="quiz">
        <div className="main1">
            { stop ? setQuestionNumber((prev)=>prev+1) :
        (
        <><div className="top">
            <div className="nameOfCand"><h1 className="nameHead">Hi, {name}!</h1></div>
            <div className="timer">20{/*<Timer setStop={setStop} questionNumber={questionNumber} />*/}</div>
        </div>
        <div className="bottom">
        <Content setData={setData} setD={setD} dataOrg={data} data={data.length==0?data1:data}  questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
        </div>
        </>)
}
        </div>
        <div className="main2">
        
          <ul className="questionList">
            {
              ques.map((q)=>(
                <li className={questionNumber==(q.id) ? "questionListItem active" :"questionListItem"}>{q.text}</li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

 export default Quiz;