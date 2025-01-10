import React, { useState } from "react";

const WalkingTracker = ({steps, setSteps}) => {
    
    const handleStepsChange = (e) => setSteps(e.target.value);
    const distance = (steps/1400).toFixed(2)
    return (
        <div>
            <h2>Walking Tracker</h2>
            <label>
                Steps:
                <input
                    type="number"
                    value={steps}
                    onChange={handleStepsChange}
                />
            </label>
            <p>You've walked {steps} steps, covering {distance} km.</p>
        </div>
    );
};

export default WalkingTracker;


