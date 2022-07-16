import React,{useState,useEffect} from 'react'


export default function Timer() {
    const[timer,setTimer]=useState(10);
    useEffect(()=>{
       const interval=setInterval(()=>{ setTimer((prev)=>prev-1)},1000);
    },[timer]);

  return timer;
}
