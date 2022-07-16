import React,{useState} from 'react'
import './quiz1.css';
import Content from '../content/Content';
import Quiz from '../quiz/Quiz.jsx';
import { useLocation,useNavigate } from 'react-router-dom';

const Quiz1 = () => {
  const loc=useLocation();
    return(
    <Quiz name={loc.state.name} range={loc.state.range} noOfQuestion={loc.state.noOfQuestion} qNo={loc.state.quizNo}/>
  );
 }


export default Quiz1;