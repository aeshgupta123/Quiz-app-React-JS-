import React from 'react'
import './quiz2.css';
import { useLocation} from 'react-router-dom';
import Quiz from '../quiz/Quiz.jsx';
const Quiz2 = () => {
    const loc=useLocation();
    return(
    <Quiz name={loc.state.name} range={loc.state.range} noOfQuestion={loc.state.noOfQuestion} qNo={loc.state.quizNo}/>
    );
 }


export default Quiz2