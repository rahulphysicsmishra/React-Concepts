import React, {useState} from "react";

const GoalSetter = ({steps}) => {
    const [goal, setGoal] = useState(10000);

    const handleGoal = (e) => setGoal(e.target.value);
    const progress = Math.min((steps/goal)*100, 100).toFixed(2)

    return (
        <div>
            <h2>Set your daily goal</h2>
            <input 
            type="number"
            value={goal}
            onChange={handleGoal}
            />
            <p>Goal : {goal}</p>
            <p>Progress: {progress}%</p>
        </div>
    )
}

export default GoalSetter