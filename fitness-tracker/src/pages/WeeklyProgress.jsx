import React,{ useState, useEffect } from "react";

const WeeklyProgress = () => {
    const [weeklySteps, SetWeeklySteps] = useState([0,0,0,0,0,0,0])
    const [dayIndex, SetDayIndex] = useState(0)

    const updatedStepsForToday = (steps) => {
        SetWeeklySteps((prev)=>{
            const updatedSteps = [...prev]
            updatedSteps[dayIndex] = steps
            return updatedSteps
        })
    }

    const moveToNextDay = () => {
        SetDayIndex((prev) => (prev+1)%7)
    }

    const totalSteps = weeklySteps.reduce((sum, steps)=> sum+steps, 0)

    return (
        <div>
            <h2> Weekly Progress </h2>
            <p> Total steps this week : {totalSteps}</p>
            <ul>
            {weeklySteps.map((steps, index) => (
                <li
                key={index}
                >
                    Day {index+1}: {steps} steps
                </li>
            ))}
            </ul>
            <button onClick={moveToNextDay}>Next Day</button>
            <label>
                Update STeps:
                <input 
                type="number"
                onChange={(e)=>updatedStepsForToday(Number(e.target.value))}
                />
            </label>
        </div>
    )
}

export default WeeklyProgress