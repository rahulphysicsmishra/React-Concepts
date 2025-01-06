import React, {useState, useEffect} from "react"
import "./Timer.css"

function TimerApp() {
    const [seconds, setSeconds] = useState(0);
    const [isactive, setIsActive] = useState(false);

    useEffect(()=>{
        let timer;
        if(isactive){
            timer = setInterval(()=>{
                setSeconds((prevSeconds) => prevSeconds+1)
            }, 1000)
        }

        return ()=>clearInterval(timer);
    }, [isactive]);


      
    return (
        <div className="container">
            <h1 >Timer App</h1>
            <p className="time-display"> {seconds} seconds</p>
            <div className="button-container">
                <button className="button" onClick={()=>setIsActive(true)}>Start</button>
                <button className="button" onClick={()=>setIsActive(false)}>Stop</button>
                <button className="button" onClick={()=>{setSeconds(0); setIsActive(false);}}>Reset</button>
            </div>
        </div>
    )
}

export default TimerApp